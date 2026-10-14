import {ratios,viewports,finals,baseline,candidates,prLayout,spriteGrid} from './models.mjs';
const $=id=>document.getElementById(id);
const state={mode:'design',ratio:'4:3',after:false,candidate:'early',screen:[1440,900],owner:1,focus:null,playing:false};
const canvas=$('canvas'),wrap=$('canvas-wrap');
const blocks=Object.fromEntries(['preview','stage','sprites','editor','api'].map(id=>[id,$(id)]));
let currentLayout=finals[state.ratio], timer=null;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const cards=Array.from({length:30},(_,i)=>{
  const b=document.createElement('button');b.type='button';b.className='sprite-card';b.innerHTML=`<span aria-hidden="true"></span><span>${String(i+1).padStart(2,'0')}</span>`;b.setAttribute('aria-label',`View Sprite ${String(i+1).padStart(2,'0')} content`);b.onclick=()=>{stopPlayback();selectOwner(i+1);};$('sprite-list').append(b);return b;
});
function place(el,r){Object.assign(el.style,{left:`${r.x}px`,top:`${r.y}px`,width:`${r.w}px`,height:`${r.h}px`});}
function scaleCanvas(){const briefing=$('design-notes').parentElement;briefing.style.setProperty('--briefing-height',`${Math.max(320,innerHeight-briefing.getBoundingClientRect().top-scrollY-20)}px`);const column=wrap.parentElement.parentElement,columnStyle=getComputedStyle(column);const availableWidth=column.clientWidth-parseFloat(columnStyle.paddingLeft)-parseFloat(columnStyle.paddingRight)-2;const availableHeight=Math.max(320,innerHeight-wrap.getBoundingClientRect().top-55);const scale=Math.min(availableWidth/currentLayout.width,availableHeight/currentLayout.height);canvas.style.width=`${currentLayout.width}px`;canvas.style.height=`${currentLayout.height}px`;canvas.style.left='0px';canvas.style.transform=`scale(${scale})`;wrap.parentElement.style.width=`${currentLayout.width*scale+2}px`;wrap.parentElement.style.setProperty('--browser-bar-height',`${Math.min(20,32*scale)}px`);wrap.style.height=`${currentLayout.height*scale}px`;const labelSize=state.mode==='explore'||state.mode==='adapt'||currentLayout.stage.w<100?18:Math.min(28,Math.max(18,12/scale));canvas.style.setProperty('--label-size',`${labelSize+1/scale}px`);canvas.style.setProperty('--sub-size',`${Math.min(22,Math.max(13,9/scale))}px`);}
function selectOwner(owner){state.owner=owner;const name=owner===0?'Stage':`Sprite ${String(owner).padStart(2,'0')}`;$('owner').textContent=`${name} · Content`;$('editor').querySelector('.code-caption').textContent=`${name} · Code`;cards.forEach((c,i)=>{c.classList.toggle('selected',owner===i+1);c.setAttribute('aria-pressed',String(owner===i+1));});$('stage-root').classList.toggle('selected',owner===0);$('stage-root').setAttribute('aria-pressed',String(owner===0));}
function layoutForState(){if(state.mode==='compare')return state.after?finals['4:3']:baseline;if(state.mode==='explore')return candidates.find(c=>c.key===state.candidate).layout;if(state.mode==='adapt')return prLayout(...state.screen,state.ratio);return finals[state.ratio];}
function renderGeometry(){currentLayout=layoutForState();for(const [id,el] of Object.entries(blocks))place(el,currentLayout[id]);const e=currentLayout.editor,a=currentLayout.api;const paper=$('editor').querySelector('.code-paper');paper.style.left=`${currentLayout.old?a.w:0}px`;paper.style.width=`${e.w-a.w-(currentLayout.pr?56:0)}px`;const vertical=currentLayout.stage.w<100;$('stage').classList.toggle('vertical',vertical);$('sprites').classList.toggle('narrow',currentLayout.sprites.w<130);const stageHeader=currentLayout.pr?44:48;$('stage').querySelector('.panel-header').style.height=`${stageHeader}px`;$('stage').querySelector('.stage-body').style.top=`${stageHeader}px`;const {columns,visible}=spriteGrid(currentLayout);$('sprite-list').style.top=`${currentLayout.header}px`;$('sprites').querySelector('.panel-header').style.height=`${currentLayout.header}px`;cards.forEach((c,i)=>{c.style.left=`${currentLayout.padding+(i%columns)*96}px`;c.style.top=`${12+Math.floor(i/columns)*96}px`;c.tabIndex=i<visible?0:-1;c.setAttribute('aria-hidden',String(i>=visible));});const plane=$('game-plane');const [vw,vh]=viewports[currentLayout.ratio],r=vw/vh;const exact=state.mode!=='explore'||state.candidate==='five';const bodyW=currentLayout.preview.w-26,bodyH=currentLayout.preview.h-74;plane.style.width=exact?`${Math.min(bodyW,bodyH*r)}px`:'100%';plane.style.height=exact?`${Math.min(bodyH,bodyW/r)}px`:'100%';plane.querySelector('small').textContent=exact?'Game viewport':'Preview area';$('preview-ratio').textContent=currentLayout.ratio;state.ratio=currentLayout.ratio;canvas.classList.toggle('focus-ownership',state.focus==='ownership');canvas.classList.toggle('focus-actions',state.focus==='actions');scaleCanvas();selectOwner(state.owner);}
function setCopy(title,summary,points){$('case-title').textContent=title;$('case-summary').textContent=summary;$('talking-points').replaceChildren(...points.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));}
function renderCopy(){
  const l=currentLayout,r=l.ratio;
  if(state.mode==='design'||state.mode==='adapt'){
    const grid=spriteGrid(l),portrait=r==='9:16';
    const reference={'4:3':'原有 4:3 布局','16:9':'16:9 初稿','9:16':'9:16 · 稿四'};
    setCopy(portrait?'竖版布局':'横版布局','左侧选择舞台、精灵并查看预览，右侧编辑当前对象的代码与素材。',[
      state.mode==='adapt'?'比较基准：固定当前游戏比例，切换屏幕尺寸，观察区域尺寸与列表列数。':`比较基准：相对「${reference[r]}」，观察整体区域位置的调整。`,
      `预览规则：视口设计基准为 ${viewports[r].join(' × ')}，实际画面按可用空间等比缩放。`,
      `列表容量：当前为 ${grid.columns} 列、${grid.visible} 张完整可见卡片（模拟），沿用原卡片设计尺寸。`,
      portrait?(state.mode==='adapt'?'保留的取舍：列表通高并随屏幕调整列数，竖版舞台高度为 120–144px；增加列数需要兼顾预览与代码区宽度。':'保留的取舍：列表采用通高单列，舞台保持紧凑，为预览与代码保留宽度；单列仍限制同屏容量。'):'保留的取舍：列表位于预览下方，其可用高度随预览占用变化；需要兼顾看清画面与浏览精灵。',
      '待验证：原型可检查布局与选中状态，操作是否易理解、空间是否够用，仍需实际编辑任务验证。'
    ]);
  }
  if(state.mode==='compare'){
    setCopy(state.after?'调整后':'线上布局',state.after?'左侧选择对象与查看预览，右侧编辑对应内容。':'代码及辅助查询在左，预览在右，舞台与精灵入口在右下方。',state.after?[
      '比较基准：相对原有 4:3 布局，固定比例与所选对象，比较区域位置。',
      '收益：对象入口移到编辑区左侧，为选择与编辑提供位置线索；辅助查询移到代码右侧。',
      '操作归组：运行保留在预览旁，发布移到项目导航，按作用范围区分。',
      '保留的取舍：列表仍位于预览下方，各区共享有限空间；左右重组本身不增加可用面积。',
      '待验证：位置与选中状态能否帮助理解对象和内容的对应关系，需要实际任务验证。'
    ]:[
      '比较基准：这是本轮调整的 4:3 起点，用于与同尺寸的调整后布局对照。',
      '现有组织：对象入口与对应内容主要通过选中状态和内容标识关联。',
      '未解决的问题：对象入口位于编辑区右侧，尚未体现本提案希望表达的「先选对象，再编辑内容」。',
      '作用范围：运行与发布并列于预览旁，位置上未区分预览反馈与项目级操作。',
      '信息主次：API Reference 位于代码左侧，在横向阅读顺序上先呈现辅助查询。'
    ]);
  }
  if(state.mode==='explore'){
    const c=candidates.find(c=>c.key===state.candidate),final=c.key==='five';
    setCopy(c.name,`调整：${c.summary}`, [
      `比较基准：${c.comparison}`,
      `收益：${c.benefit}`,
      `${final?'保留的取舍':'代价'}：${c.cost}`,
      `${final?'待验证':'仍未解决'}：${c.remaining}`,
      `${final?'方案结论':'后续判断'}：${c.decision}`
    ]);
  }
}
function secondaryButton(label,active,fn){const b=document.createElement('button');b.type='button';b.textContent=label;b.className=active?'active':'';b.setAttribute('aria-pressed',String(active));b.onclick=()=>{stopPlayback();fn();render();};$('secondary-controls').append(b);}
function renderControls(){document.querySelectorAll('[data-mode]').forEach(b=>{const active=b.dataset.mode===state.mode;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});document.querySelectorAll('[data-ratio]').forEach(b=>{const active=b.dataset.ratio===state.ratio;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));b.disabled=state.mode==='compare'&&b.dataset.ratio!=='4:3';});$('secondary-controls').replaceChildren();if(state.mode==='compare'){secondaryButton('线上布局',!state.after,()=>state.after=false);secondaryButton('调整后',state.after,()=>state.after=true);}if(state.mode==='explore'){candidates.forEach(c=>secondaryButton(c.name,c.key===state.candidate,()=>state.candidate=c.key));}if(state.mode==='adapt'){[[1280,800],[1440,900],[1920,1080]].forEach(s=>secondaryButton(s.join(' × '),s[0]===state.screen[0],()=>state.screen=s));}}
function render(){state.ratio=layoutForState().ratio;renderControls();renderGeometry();const publish=canvas.querySelector('.publish-label');canvas.querySelector(currentLayout.old?'.preview-actions':'.mock-navigation').append(publish);renderCopy();}
function stopPlayback(){clearInterval(timer);timer=null;state.playing=false;$('play').setAttribute('aria-pressed','false');$('play').innerHTML='<span aria-hidden="true">▷</span> 自动演示';}
function next(){if(state.mode==='compare')state.after=!state.after;else if(state.mode==='explore')state.candidate=candidates[(candidates.findIndex(c=>c.key===state.candidate)+1)%candidates.length].key;else state.ratio=ratios[(ratios.indexOf(state.ratio)+1)%ratios.length];render();}
$('play').onclick=()=>{if(state.playing){stopPlayback();return;}state.playing=true;$('play').setAttribute('aria-pressed','true');$('play').innerHTML='<span aria-hidden="true">Ⅱ</span> 暂停演示';next();timer=setInterval(next,5000);};
document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{stopPlayback();state.mode=b.dataset.mode;state.ratio=state.mode==='compare'?'4:3':state.ratio;render();});
document.querySelectorAll('[data-ratio]').forEach(b=>b.onclick=()=>{stopPlayback();state.ratio=b.dataset.ratio;if(state.mode==='explore'){if(state.ratio==='4:3'){state.mode='design';}else state.candidate=state.ratio==='16:9'?'wide':'five';}render();});
document.querySelectorAll('[data-focus]').forEach(b=>b.onclick=()=>{stopPlayback();state.focus=state.focus===b.dataset.focus?null:b.dataset.focus;document.querySelectorAll('[data-focus]').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.focus===state.focus)));renderGeometry();});
const briefingTabs=[...document.querySelectorAll('[data-briefing]')];
function selectBriefing(tab){briefingTabs.forEach(b=>{const selected=b===tab;b.setAttribute('aria-selected',String(selected));b.tabIndex=selected?0:-1;$(b.getAttribute('aria-controls')).hidden=!selected;});}
briefingTabs.forEach((b,i)=>{b.onclick=()=>selectBriefing(b);b.onkeydown=e=>{let next;if(e.key==='ArrowRight')next=(i+1)%briefingTabs.length;else if(e.key==='ArrowLeft')next=(i+briefingTabs.length-1)%briefingTabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=briefingTabs.length-1;else return;e.preventDefault();selectBriefing(briefingTabs[next]);briefingTabs[next].focus();};});
$('stage-root').onclick=()=>{stopPlayback();selectOwner(0);};
const highFidelity=$('high-fidelity-dialog');
$('high-fidelity').onclick=()=>{stopPlayback();highFidelity.querySelector('img').src=state.ratio==='9:16'?'./assets/high-fidelity-9-16.png?v=01b43dfe1d6a':state.ratio==='16:9'?'./assets/high-fidelity-16-9.png?v=32283a9de592':'./assets/high-fidelity.png?v=86436dc50c75';highFidelity.showModal();};
highFidelity.onclick=e=>{const r=highFidelity.getBoundingClientRect();if(e.target===highFidelity&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))highFidelity.close();};
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopPlayback();});reduced.addEventListener('change',()=>{if(reduced.matches)stopPlayback();});new ResizeObserver(scaleCanvas).observe(wrap.parentElement.parentElement);window.addEventListener('resize',scaleCanvas);render();requestAnimationFrame(()=>requestAnimationFrame(()=>canvas.classList.add('ready')));
