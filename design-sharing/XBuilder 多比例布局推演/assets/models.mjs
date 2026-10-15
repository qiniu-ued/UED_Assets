export const ratios = ['4:3', '16:9', '9:16'];
export const viewports = {'4:3':[480,360], '16:9':[545,307], '9:16':[307,545]};
const rect = (x,y,w,h) => ({x,y,w,h});
function model(preview,stage,sprites,editor,{old=false,ratio='4:3',id='',header=48,padding=12}={}) {
  const api = old ? rect(editor.x,104,344,editor.h-48) : rect(1140,104,284,editor.h-48);
  return {width:1440,height:900,preview,stage,sprites,editor,api,ratio,id,old,header,padding};
}
export const finals = {
  '4:3':model(rect(16,56,496,426),rect(16,498,80,386),rect(112,498,400,386),rect(528,56,896,828),{id:'1052:10577'}),
  '16:9':model(rect(16,56,504,343),rect(16,415,80,463),rect(112,415,409,463),rect(536,56,888,828),{ratio:'16:9',id:'1052:13383'}),
  '9:16':model(rect(16,56,358,668),rect(16,740,358,144),rect(390,56,104,828),rect(510,56,914,828),{ratio:'9:16',id:'1052:13641',padding:8})
};
export const baseline = model(rect(928,56,496,426),rect(1344,498,80,388),rect(928,498,400,388),rect(16,56,896,830),{old:true,id:'1052:13803'});
export const candidates = [
  {key:'baseline',name:'4:3 · 原有布局',layout:baseline},
  {"key":"early","name":"9:16 ・早期淘汰稿","title":"沿用上下结构时，竖版预览挤压列表高度。","comparison":"相对原有 4:3 布局，观察同一屏幕空间中改为 9:16 后的区域占用。","summary":"加高右侧预览面板，舞台与精灵列表继续放在预览下方。","benefit":"沿用代码在左、预览及对象在右的分区，各区域的位置变化较少。","cost":"预览占用更多纵向空间，下方列表变矮，同屏可见精灵数量减少。","remaining":"列表高度仍受预览挤压；对象入口与编辑区分置右、左两侧。","decision":"此稿在早期淘汰。后续将列表移到预览旁，考察通高排列。","confirmed":true,layout:model(rect(1032,56,392,575),rect(1344,647,80,237),rect(1032,647,296,237),rect(16,56,1000,828),{old:true,ratio:'9:16',id:'1062:7568',padding:8})},
  {"key":"wide","name":"16:9 · 稿一","title":"沿用原有分区，比较横版比例带来的高度变化。","comparison":"相对原有 4:3 布局，比较同一屏幕空间中的 16:9 初稿。","summary":"保留代码在左、预览及对象在右的分区，调整预览面板尺寸。","benefit":"预览变矮，为下方精灵列表留出更多高度。","cost":"预览的可用高度减少；是否影响辨认与调试，需要结合具体游戏内容和任务验证。","remaining":"对象入口仍在编辑区右侧；运行与发布仍并列于预览旁，未通过位置区分作用范围。","decision":"保留横版预览下方的列表空间，后续继续调整对象与内容的位置关系。",layout:model(rect(920,56,504,343),rect(1345,415,80,463),rect(920,415,409,463),rect(16,56,888,828),{old:true,ratio:'16:9',id:'1061:5130'})},
  {"key":"one","name":"9:16 · 稿一","title":"将下方列表改为通高单列。","comparison":"相对「9:16 ・早期淘汰稿」，比较同一竖版场景下列表移到预览旁的变化。","summary":"精灵列表独立通高排列，预览与舞台共用右侧另一列。","benefit":"列表利用工作区的可用高度，当前示意尺寸下可见精灵增加，卡片尺寸保持不变。","cost":"列表由多列改为单列，横向容量受限；预览面板比淘汰稿更窄。","remaining":"舞台容器仍占用较多高度；对象入口仍位于编辑区右侧。","decision":"下一稿扩大预览并增加列表列数，继续比较它们与代码区的宽度取舍。",layout:model(rect(1135,56,289,544),rect(1135,616,289,268),rect(1015,56,104,828),rect(16,56,983,828),{old:true,ratio:'9:16',id:'1061:5277',padding:8})},
  {"key":"two","name":"9:16 · 稿二","title":"扩大预览并增加三列精灵，同时压缩代码区。","comparison":"相对「9:16 · 稿一」，比较同一屏幕空间中的预览、列表与代码区尺寸。","summary":"预览放在中间，右侧排列三列精灵，舞台位于列表下方。","benefit":"预览面板扩大，列表由一列增为三列，同屏可见精灵增加。","cost":"预览与列表共同占用更多横向空间，代码编辑区明显变窄。","remaining":"居中的预览把对象入口与对应编辑区隔在两侧；「编辑内容—预览—对象」的排列未体现提案希望表达的层级与选择顺序。","decision":"下一稿减少列表列数，并将预览移到最右侧，考察代码区宽度与区域联系。",layout:model(rect(662,56,449,828),rect(1127,740,297,144),rect(1127,56,297,668),rect(16,56,630,828),{old:true,ratio:'9:16',id:'1061:5429',padding:8})},
  {"key":"three","name":"9:16 · 稿三","title":"减少一列精灵，为代码区恢复宽度。","comparison":"相对三列稿「9:16 · 稿二」，比较相同预览面板尺寸下的空间取舍。","summary":"精灵列表保留两列，舞台位于列表下方，预览移到最右侧。","benefit":"代码区增宽，预览面板尺寸保持不变；对象入口与编辑区之间不再隔着预览。","cost":"列表由三列减为两列，当前示意尺寸下同屏可见精灵减少。","remaining":"对象入口仍在编辑区右侧，尚未体现「先选对象，再编辑内容」的空间顺序。","decision":"下一稿恢复单列，并将舞台放回预览下方，继续考察代码区宽度与舞台高度。",layout:model(rect(975,56,449,828),rect(759,764,200,120),rect(759,56,200,692),rect(16,56,727,828),{old:true,ratio:'9:16',id:'1061:5908',padding:8})},
  {"key":"four","name":"9:16 · 稿四","title":"恢复单列，并限制舞台容器高度。","comparison":"以两列稿「9:16 · 稿三」为相邻对照；舞台限高的高度收益另与单列初稿「9:16 · 稿一」比较。","summary":"精灵列表恢复单列通高，舞台移回预览下方，容器高度上限设为 144px。","benefit":"相较两列稿，代码区增宽；相较单列初稿，舞台容器缩短，预览高度增加。","cost":"相较两列稿，同屏可见精灵减少，预览面板也缩小。","remaining":"对象入口仍在编辑区右侧，局部尺寸调整尚未体现选择对象与编辑内容的顺序。","decision":"保留紧凑舞台与通高列表，下一步重新组织预览、对象和编辑内容的位置。","confirmed":true,layout:model(rect(1069,56,355,668),rect(1069,740,355,144),rect(949,56,104,828),rect(16,56,917,828),{old:true,ratio:'9:16',id:'1061:6467',padding:8})},
  {"key":"five","name":"9:16 · 稿五 / 终稿","title":"调整整体位置，以空间顺序提示对象与内容的关系。","comparison":"相对「9:16 · 稿四」，比较相同屏幕尺寸下的整体位置关系。","summary":"预览、舞台与精灵移到左侧，代码与素材编辑放在右侧，API Reference 位于代码右侧。","benefit":"对象入口位于编辑区之前，为「先选对象，再编辑内容」提供位置线索；运行与发布按预览、项目的作用范围分别归组。","cost":"延续上一稿的单列精灵列表与紧凑舞台，为预览和代码保留宽度；单列仍限制同屏列表容量。","remaining":"对象与内容的对应是否更易识别、操作范围是否易理解，以及各区空间是否够用，仍需实际任务验证。","decision":"作为竖版最终方案，整体左右关系用于三种比例；大屏竖版可增加为两列，见「屏幕适配」。","confirmed":true,layout:finals['9:16']}
];

// PR #3480 pane sizing, with a two-column portrait list at 1920 × 1080.
export function prLayout(width,height,ratio) {
  const [vw,vh]=viewports[ratio], r=vw/vh, portrait=ratio==='9:16';
  const cw=width-32,ch=height-72,extra=portrait?(width===1920&&height===1080?216:120):0;
  const minWidth=Math.floor(Math.sqrt(130000*r)+24)+extra;
  const layoutWidth=portrait?Math.max(cw,384+minWidth+16):cw;
  const available=layoutWidth-16;
  const heightWidth=Math.floor(Math.max(0,ch-48-24-16-144)*r+24);
  const maxWidth=portrait?Math.min(available-384,heightWidth+extra):Math.min(available-384,Math.floor(Math.sqrt(170000*r)+24));
  const min=Math.min(minWidth,maxWidth);
  const preferred=portrait?maxWidth:Math.min(472+24,maxWidth);
  const p=Math.max(min,Math.min(maxWidth,preferred));
  const pw=p-extra,ph=(pw-24)/r+72,sh=Math.min(144,Math.max(120,height*.18));
  const preview=rect(16,56,pw,ph);
  const stage=portrait?rect(16,56+ph+16,pw,sh):rect(16,56+ph+16,80,ch-ph-16);
  const sprites=portrait?rect(p-extra+32,56,extra-16,ch):rect(112,56+ph+16,p-96,ch-ph-16);
  return {width,height,preview,stage,sprites,editor:rect(p+32,56,available-p,ch),api:rect(width-296,104,280,ch-48),ratio,old:false,header:portrait?48:44,padding:portrait?8:12,id:'',pr:true};
}
export function spriteGrid(layout) {
  const {sprites,header,padding}=layout;
  const columns=Math.max(1,Math.floor((sprites.w-padding+8)/96));
  const fullRows=Math.max(0,Math.floor((sprites.h-header-12+8)/96));
  return {columns,fullRows,visible:columns*fullRows};
}
