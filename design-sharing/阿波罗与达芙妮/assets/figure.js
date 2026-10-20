const stages = [
  { key:'clay', steps:['clay'], label:'Clay modelling', note:'Build the clay figure around an armature and refine the face, arms and drapery.' },
  { key:'mold', steps:['mold'], label:'Plaster casting', note:'Enclose the clay in a plaster mold, cast a copy and remove the outer shell.' },
  { key:'point', steps:['point'], label:'Point transfer', note:'Transfer measurements from the plaster model to a separate marble block.' },
  { key:'carve', steps:['block','rough','form','detail','finished'], label:'Chiselling', note:'Use the plaster reference while laying out, roughing, shaping, undercutting and finishing the marble.' }
];
const phaseCaptions = {
  clay: {
    armature:'Build a supporting armature to hold the pose of both figures.',
    adding:'Add clay around the armature to build the figures’ main forms.',
    refining:'Refine the faces, arms and folds in the clay model.'
  },
  mold: {
    coating:'Cover the clay with plaster sections to capture its surface.',
    opening:'Open the plaster sections so the clay inside can be removed.',
    removing:'Remove the clay, leaving a hollow plaster mould.',
    closing:'Reassemble the empty mould on its support, keeping the casting opening clear.',
    casting:'Keep the mould upright and pour plaster slurry through the reserved opening.',
    setting:'Let the plaster set inside the supported mould.',
    breaking:'Break away the outer waste mould to reveal the plaster copy.',
    complete:'Only the plaster copy remains, ready for measurement.'
  },
  point: {
    align:'Align the frames around ① the plaster model and ② the marble block.',
    measure:'Measure a reference point on ① the plaster model with the depth gauge.',
    transfer:'Keep the gauge opening fixed and carry that depth across to ② the marble.',
    mark:'Mark the matching point and depth on ② the marble block.',
    complete:'Repeat for all six points to transfer the form from plaster to marble.'
  },
  carve: {
    block:'Keep ① the plaster model as a reference and lay out the figures in ② the marble block.',
    rough:'Remove the outer waste, leaving the two connected figures.',
    form:'Measure and refine the bodies, drapery and tree trunk.',
    detail:'Open the narrow spaces around leaves and hair; protect the thin parts.',
    finished:'Refine the surface to distinguish smooth skin from rough bark.'
  }
};
const $ = id => document.getElementById(id);
const host = $('model-host');
const stageButtons = [...document.querySelectorAll('[data-stage]')];
const focusButtons = [...document.querySelectorAll('[data-focus]')];
const playButton = $('play-button');
const timeline = $('process-timeline');
const video = $('original-video'), dialog = $('original-dialog');
const written = new WeakMap();
function closeVideo() { video.pause(); if (dialog.open) dialog.close(); }
function write(node, value, attribute = 'text') {
  let previous = written.get(node);
  if (!previous) { previous = {}; written.set(node, previous); }
  if (previous[attribute] === value) return;
  previous[attribute] = value;
  if (attribute === 'text') node.textContent = value; else node.setAttribute(attribute, value);
}
let viewer = null, generation = 0, selected = 0, playing = false, paused = false;
let transition = null, loadingFinished = false, error = '';
let state = { carvingStage:'clay', targetStage:'clay', transitionProgress:0, busy:false, paused:false, autoRotate:false };

function render() {
  const active = playing || !!transition || state.busy;
  write($('play-label'), active ? paused ? 'Resume' : 'Pause' : 'Play process');
  write($('play-icon'), active && !paused ? 'pause' : 'play', 'data-symbol');
  write(playButton, active ? paused ? 'Resume process' : 'Pause process' : 'Play process', 'aria-label');
  playButton.disabled = !viewer;
  $('reset-view').disabled = !viewer;
  $('auto-rotate').disabled = !viewer;
  $('auto-rotate').setAttribute('aria-pressed', String(!!state.autoRotate));
  for (const [index,button] of stageButtons.entries()) {
    button.disabled = !viewer;
    button.setAttribute('aria-pressed', String(index === selected));
    button.setAttribute('aria-current', index === selected ? 'step' : 'false');
    button.dataset.complete = String(index < selected);
  }
  for (const button of focusButtons) button.disabled = !viewer;
  const stage = stages[selected], step = stage.steps.indexOf(state.targetStage);
  const stepProgress = state.busy ? Math.max(0,Math.min(1,state.transitionProgress || 0)) : state.carvingStage === state.targetStage ? 1 : 0;
  const progress = step < 0 ? 0 : (step + stepProgress) / stage.steps.length;
  $('stage-progress').value = progress;
  const timelineProgress = Math.min(100, Math.max(0,(selected + (progress)) / stages.length * 100));
  timeline.style.setProperty('--timeline-progress', `${timelineProgress}%`);
  const phase = step < 0 ? null : stage.key === 'carve' ? state.targetStage : state.processPhase;
  const caption = phaseCaptions[stage.key]?.[phase] || stage.note;
  write($('process-caption'), error || (loadingFinished ? 'Loading the finished sculpture. The previous stage stays visible…' : caption));
  write($('process-note'), stage.note);
  $('transfer-note').hidden = stages[selected].key !== 'point';
  host.setAttribute('aria-busy', String(!viewer || state.busy || loadingFinished));
  host.dataset.stage = state.carvingStage;
  host.dataset.target = stages[selected].key;
  host.dataset.playing = String(playing);
  host.dataset.paused = String(paused);
  host.dataset.busy = String(!!transition || !!state.busy);
}

function sync(next) {
  state = { ...state, ...next };
  paused = !!state.paused;
  render();
}

function failed(token) {
  if (token !== generation) return;
  playing = false;
  transition = null;
  paused = false;
  loadingFinished = false;
  if (viewer) {
    state = { ...state, ...viewer.getState() };
    selected = Math.max(0, stages.findIndex(stage => stage.steps.includes(state.carvingStage)));
    viewer.setPaused(false);
  }
  error = 'The model could not load. Select the stage to try again.';
  render();
}

async function moveTo(index, token, focus) {
  selected = index;
  error = '';
  try {
    for (const step of focus ? ['finished'] : stages[index].steps) {
      if (token !== generation) return false;
      transition = viewer.transitionTo(step);
      render();
      const result = await transition;
      if (token !== generation) return false;
      if (result?.failed) { failed(token); return false; }
      if (result?.cancelled) { playing = false; transition = null; sync(viewer.getState()); return false; }
      transition = null;
      sync(result || viewer.getState());
    }
    return true;
  } catch (cause) {
    console.error(cause);
    failed(token);
    return false;
  }
}

async function selectStage(index, focus) {
  if (!viewer) return;
  const token = ++generation;
  playing = false;
  paused = false;
  viewer.setPaused(false);
  if (!await moveTo(index, token, focus) || token !== generation) return;
  if (focus) {
    viewer.setAutoRotate(false);
    viewer.focus(focus);
    for (const button of focusButtons) button.setAttribute('aria-pressed', String(button.dataset.focus === focus));
  } else {
    for (const button of focusButtons) button.removeAttribute('aria-pressed');
  }
  render();
}

async function play() {
  if (!viewer) return;
  if (transition || playing || state.busy) {
    paused = !paused;
    viewer.setPaused(paused);
    render();
    return;
  }
  const token = ++generation;
  playing = true;
  paused = false;
  error = '';
  viewer.setPaused(false);
  for (const button of focusButtons) button.removeAttribute('aria-pressed');
  closeVideo();
  for (let index = 0; index < stages.length; index++) {
    if (token !== generation || !await moveTo(index, token)) return;
  }
  if (token !== generation) return;
  playing = false;
  paused = false;
  render();
}

$('watch-original').addEventListener('click', () => {
  viewer?.setAutoRotate(false);
  if (viewer && (playing || transition || state.busy) && !paused) viewer.setPaused(true);
  if (!video.getAttribute('src')) video.src = './assets/original-reference.mp4';
  $('video-message').textContent = '';
  dialog.showModal();
  video.play().catch(() => { $('video-message').textContent = 'Press Play in the video controls to begin.'; });
});
$('close-original').addEventListener('click', closeVideo);
dialog.addEventListener('close', () => video.pause());
video.addEventListener('error', () => { $('video-message').textContent = 'The video could not load. Close it and try again.'; });
document.addEventListener('visibilitychange', () => { if (document.hidden) video.pause(); });
playButton.addEventListener('click', play);
for (const button of stageButtons) button.addEventListener('click', () => selectStage(stages.findIndex(stage => stage.key === button.dataset.stage)));
for (const button of focusButtons) button.addEventListener('click', () => selectStage(stages.length - 1, button.dataset.focus));
$('reset-view').addEventListener('click', () => {
  if (!viewer) return;
  viewer.setAutoRotate(false);
  viewer.focus('whole');
  for (const button of focusButtons) button.removeAttribute('aria-pressed');
});
$('auto-rotate').addEventListener('click', () => { if (viewer) viewer.setAutoRotate(!viewer.getState().autoRotate); });
document.addEventListener('keydown', event => {
  if (event.defaultPrevented || event.repeat || event.ctrlKey || event.metaKey || event.altKey || !(event.code === 'Space' || event.key === ' ')) return;
  if (dialog.open || event.target.closest('button,a,input,textarea,select,summary,video,[contenteditable=true]')) return;
  event.preventDefault();
  play();
});
window.addEventListener('pagehide', event => {
  closeVideo();
  if (event.persisted) return;
  generation++;
  viewer?.dispose();
});

render();
try {
  const { mountViewer } = await import('./viewer.js');
  viewer = await mountViewer(host, './assets/apollo-original.glb', {
    onChange: sync,
    onReady: () => { $('initial-loading').hidden = true; },
    onModelLoading: loading => { loadingFinished = !!loading; render(); },
    onFinishedReady: () => { loadingFinished = false; render(); },
    onError: () => { failed(generation); }
  });
  $('initial-loading').hidden = true;
  host.dataset.ready = 'true';
  sync(viewer.getState());
} catch (cause) {
  console.error(cause);
  $('initial-loading-text').textContent = 'The 3D view could not load. Please reload this page.';
  host.dataset.ready = 'error';
  error = 'The 3D view could not load. Please reload this page.';
  render();
}
