(() => {
  'use strict';

  // UI text only. Figure identifiers, source code, brands and model numbers stay unchanged.
  const dictionary = Object.freeze({
    "Film chapters":"视频章节",
    "Loading the film…":"正在载入示范视频…",
    "Fred X. Brownstein · National Gallery of Art, 2023":"Fred X. Brownstein · 美国国家美术馆，2023 年",
    "Small clay sketch":"小泥稿",
    "Full-size clay":"等大泥塑",
    "Plaster moulding":"石膏翻模",
    "Measuring and transfer":"测量定位",
    "Detail carving":"局部细修",
    "Surface contrast":"表面差别",
    "Find the pose in clay":"先在泥中试出姿态",
    "Wet clay · hands and modelling tools":"湿泥 · 手与塑形工具",
    "Add and remove wet clay to establish the pose and the overall relationships.":"用湿泥反复增减，确定人物姿态与整体关系。",
    "Enlarge the figure and refine its forms":"放大形体，逐处修整",
    "Clay · armature · modelling tools":"泥 · 内部骨架 · 塑形工具",
    "The armature supports the wet clay while the body, folds and expression are enlarged and refined.":"骨架托住湿泥，放大并修整身体、衣褶与表情。",
    "Preserve the established form in a mould":"用模具保存已经确定的形体",
    "Clay model · plaster mould · plaster cast":"泥塑 · 石膏模具 · 石膏复制件",
    "Make the mould in sections and cast plaster inside to obtain a copy that can be measured repeatedly.":"分块制模、灌入石膏，得到可反复测量的复制件。",
    "Match the model’s positions to the stone":"把模型的位置对应到石头上",
    "Plaster model · marble · measuring tools":"石膏模型 · 大理石 · 测量工具",
    "Use a frame and plumb lines to transfer key positions and depths from the model to the stone.":"对照模型，用框架和铅垂线定位关键点与深度。",
    "Remove large pieces before approaching the outline":"先去大块余料，再靠近轮廓",
    "Marble · mallet · chisels":"大理石 · 雕刻锤 · 凿具",
    "Strike the chisels to remove outer waste while retaining the main volume and an allowance for refinement.":"槌击凿具去掉外围余料，保留大体量与加工余量。",
    "Define the details with smaller cuts":"用更小的切削雕清细部",
    "Marble · finer chisels":"大理石 · 较细凿具",
    "Reduce the size of each cut to refine the contours of the face, hair and drapery.":"减小切削，修清面部、头发和衣褶的轮廓。",
    "Reveal different surfaces in the same stone":"同一块石头，显出不同表面",
    "Marble · refined surfaces and chisel marks":"大理石 · 细修后的表面与凿痕",
    "Compare the smooth face with the roughly chiselled torso to see how refinement changes light and shadow.":"比较平滑脸部与粗凿躯干，观察修整造成的光影差别。",
    "Process timeline":"制作时间轴",
    "Reassembling the empty mould":"合拢空模",
    "Turning the empty mould upside down":"翻转空模，朝上露出底口",
    "Pouring plaster through the bottom":"从模具底口灌入石膏",
    "Turning the set cast upright":"石膏凝固后，将模具翻正",
    "Apollo and Daphne: four main stages from clay modelling and plaster casting to point transfer and marble carving.":"《阿波罗与达芙妮》教学重建：泥塑、翻模、定位和雕凿，共四个主要步骤。",
    "Apollo and Daphne in four main stages. Drag to rotate, scroll to zoom, arrow keys to turn, Home to reset.":"《阿波罗与达芙妮》四个主要制作步骤。拖动旋转，滚轮缩放，方向键转动，Home 复位。",
    "Watch original video":"欣赏原作",
    "Original work · walkaround recording":"原作影像 · 绕行录屏",
    "Original work walkaround recording":"原作绕行录屏",
    "Back to the model":"返回模型",
    "Press Play in the video controls to begin.":"请点击视频中的播放按钮开始观看。",
    "The video could not load. Close it and try again.":"视频未能加载，请关闭后重试。",
    "① Plaster model → ② Marble block · measure the numbered point, carry the same opening across, then mark its depth.":"① 石膏模型 → ② 大理石坯：在编号测点取深度，保持量规开口移到石坯，再标记对应深度。",

    '① Plaster model':'① 石膏原型','② Marble block':'② 大理石坯','② Marble sculpture':'② 大理石成品',
    'Point':'测点','Point transfer operations':'测点转移步骤','Measure':'取点','Transfer':'转移','Mark depth':'标记深度',
    'Carving operations':'雕凿工序','Rough out':'粗凿','Shape':'修形','Refine':'精修','Current area:':'当前部位：',
    'Head':'头部','Face':'面部','Arms':'手臂','Drapery':'衣褶','Surface':'表面',
    'Remove stone locally from rough cuts to fine refinement; smooth the skin while preserving the source scan’s drapery details.':'由粗凿到精修，逐区去除石料；细修肌肤表面，保留原扫描中的衣褶细节。',
    'The polished surface is a digital teaching reconstruction: scan damage is softened while key features are retained.':'抛光表面为数字教学重建：减轻扫描损伤，保留关键造型特征。',
    'Canova’s method · a modern demonstration':'卡诺瓦方法的现代示范',
    'Animated Venus Italica process':'《意大利维纳斯》制作过程动画','Process controls':'制作过程控制','Play process':'播放全过程','Pause process':'暂停制作过程','Resume process':'继续制作过程','Resume':'继续','Interactive Venus Italica sculpture':'可交互《意大利维纳斯》雕塑',
    'Clay modelling':'泥塑','Plaster casting':'翻模','Point transfer':'定位','Chiselling':'雕凿','Preparing Venus Italica…':'正在准备《意大利维纳斯》…','Sculpture process stages':'雕塑制作阶段',
    'Build the clay figure around an armature and refine the face, arms and drapery.':'围绕骨架逐步加泥，修整脸部、双臂和衣褶。',
    'About this stage':'本步工序说明',
    'Build a supporting armature for the clay bust.':'先搭建骨架，为泥塑半身像提供支撑。',
    'Add clay around the armature to build the bust’s main forms.':'围绕骨架逐步加泥，塑出半身像的主要形体。',
    'Refine the face, arms and folds in the clay model.':'修整泥塑的脸部、手臂和衣褶。',
    'Reassemble the empty mould to prepare for casting.':'重新合拢空模，为灌制石膏复制件做准备。',
    'Turn the closed mould upside down, exposing the opening underneath.':'将合拢的模具倒置，露出底部的灌浆口。',
    'Pour plaster through the bottom opening to make a copy.':'从底部开口灌入石膏浆，翻制复制件。',
    'Once the plaster has set, turn the cast upright.':'等待石膏凝固，再将模具转回正立。',
    'Chisel away excess stone, keeping a small allowance around the figure.':'先凿去多余石料，在人物轮廓外保留修整余量。',
    'Work across the face, arms and drapery, checking the form against the plaster model.':'对照左侧石膏原型，逐区修整头脸、手臂和衣褶。',
    'Refine and smooth the skin while preserving the folds in the drapery.':'细修并磨平肌肤表面，保留衣褶的细节。',
    'Surface finishing is complete; compare the marble with the plaster reference.':'表面精修完成，可以对照石膏原型观察大理石成品。',
    'Build a supporting armature to hold the pose of both figures.':'先搭起支撑骨架，确定两个人物的姿态。',
    'Add clay around the armature to build the figures’ main forms.':'围绕骨架逐步加泥，塑出两个人物的主要形体。',
    'Refine the faces, arms and folds in the clay model.':'修整泥塑的脸部、双臂和衣褶，让形体更清晰。',
    'Cover the clay with plaster sections to capture its surface.':'分片用石膏包覆泥塑，记录表面的形状。',
    'Open the plaster sections so the clay inside can be removed.':'拆开石膏模片，准备取出里面的泥料。',
    'Remove the clay, leaving a hollow plaster mould.':'取出内部泥料，留下中空的石膏模具。',
    'Reassemble the empty mould on its support, keeping the casting opening clear.':'在支撑台上重新合拢空模，留好浇注口。',
    'Keep the mould upright and pour plaster slurry through the reserved opening.':'保持模具正立，从预留的浇注口灌入石膏浆。',
    'Let the plaster set inside the supported mould.':'让石膏在支撑稳固的模具内凝固。',
    'Break away the outer waste mould to reveal the plaster copy.':'逐片敲除外层废模，露出里面的石膏复制件。',
    'Only the plaster copy remains, ready for measurement.':'外层废模已拆除，留下石膏复制件供后续测量。',
    'Align the frames around ① the plaster model and ② the marble block.':'对齐①石膏模型与②大理石坯周围的测量框。',
    'Measure a reference point on ① the plaster model with the depth gauge.':'用量规测量①石膏模型上一个基准点的深度。',
    'Keep the gauge opening fixed and carry that depth across to ② the marble.':'保持量规开口不变，把测得的深度移到②大理石坯。',
    'Mark the matching point and depth on ② the marble block.':'在②大理石坯上，标记对应点的位置和深度。',
    'Repeat for all six points to transfer the form from plaster to marble.':'逐一转移六个测点，将石膏模型的形体定位到石坯上。',
    'Enclose the clay in a plaster mold, cast a copy and remove the outer shell.':'用石膏包覆泥塑制模，翻制石膏复制件，再拆除外层废模。',
    'Transfer measurements from the plaster model to a separate marble block.':'对照石膏模型，将关键点的位置与深度转移到另一块大理石上。',
    'Chisel away the stone, check the measurements and refine the head while leaving the torso rough.':'逐区凿去石料，反复核对尺寸，细修头脸并保留躯干的粗凿痕迹。',
    'Loading the model. The workshop stays visible…':'正在加载模型，工坊会继续显示…',
    'Paused. Press Resume to continue from here.':'已暂停，点击继续可从当前位置接着制作。',
    'The stage could not finish. Select the stage to try again.':'当前阶段未能完成，请重新选择阶段重试。',
    'Building the armature':'搭建骨架','Adding clay':'逐步加泥','Refining the model':'修整泥塑','Applying plaster sections':'分片覆盖石膏','Opening the waste mould':'拆开石膏废模','Removing the clay':'取出泥料','Casting plaster':'灌制石膏复制件','Removing the waste mould':'敲除外层废模','Aligning the reference frames':'对齐木制测量框','Measuring the plaster model':'测量石膏模型','Transferring depth to the block':'转移位置与深度','Marking the transferred depth':'标记对应深度','Roughing out the marble':'粗凿大形','Carving with point and mallet':'锤凿逐区去料','Refining the surface':'精修表面','Finishing the face':'细修头脸',
    'A three-dimensional Venus Italica bust made in clay, plaster and marble. Drag to rotate, scroll to zoom, arrow keys to turn, Home to reset the view.':'以泥塑、石膏和大理石呈现的三维《意大利维纳斯》半身像。拖动旋转，滚轮缩放，方向键转动，Home 复位视角。',
    'Process reference: Fred X. Brownstein’s modern demonstration of Canova’s method, National Gallery of Art, 2023.':'工艺参考：Fred X. Brownstein 演示卡诺瓦方法，美国国家美术馆，2023 年。',
    'Watch the source film ↗':'观看参考影片 ↗',
    'Watch the source film':'观看参考影片','Source film · National Gallery of Art':'参考影片 · 美国国家美术馆','National Gallery of Art source film':'美国国家美术馆参考影片','Venus statue outline':'维纳斯雕像线条轮廓','Venus bust outline':'维纳斯半身像线条轮廓',
    'Sculpture: Venus Italica, Antonio Canova. The scan records the plaster version in the Museum of Art and History, Geneva, inventory no. 1846-0003.':'雕塑：《意大利维纳斯》，安东尼奥·卡诺瓦。扫描对象为日内瓦艺术与历史博物馆收藏的石膏版本，藏品编号 1846-0003。',
    'The film is used as a process reference. The website’s model is not a scan of the bust made in the film.':'影片作为工艺参考；本站模型并非影片中半身像成品的扫描。',
    'The animation separates clay, plaster and marble into distinct materials. Intermediate forms, tool movements and timing are reconstructed for teaching.':'动画区分泥料、石膏和大理石三种材料，中间形体、工具动作与制作时长均为教学重建。',
    'Rama / Wikimedia Commons ↗':'Rama / 维基共享资源 ↗','CC BY-SA 3.0 FR ↗':'CC BY-SA 3.0 FR ↗',
    '3D scan:':'3D 扫描：',
    '. Adaptations: cropped the full-length scan to a bust, sealed the cut, converted the mesh and generated four mould sections. Derived model, mould and reconstructed surface geometry share the same licence. Rendering: Three.js (MIT).':'。改动：将全身扫描裁切为半身、封闭切口、转换网格格式，并生成四瓣阴模。派生模型、阴模与重建表面网格均以相同许可共享。渲染：Three.js（MIT）。',
    'Venus Italica: clay modelling, plaster casting, point transfer and marble carving, inspired by a modern demonstration of Canova’s method.':'《意大利维纳斯》制作过程：参考卡诺瓦方法的现代示范，三维演示泥塑、翻模、定位和大理石雕凿。',
    'Venus Italica':'意大利维纳斯','3D process · Venus scan by Rama':'3D 制作过程 · 维纳斯扫描 Rama',
    'Little mechanisms':'日常小机关',
    'Apollo & Daphne':'阿波罗与达芙妮',
    '3D process · Scan the World model':'3D 制作过程 · 模型 Scan the World',
    'Play':'播放','Pause':'暂停','Play carving':'播放制作过程','Pause carving':'暂停制作过程','Next stage':'下一步','Start over':'重新开始',
    'Block layout':'整石布局','Rough carving':'粗凿大形','Measuring & shaping':'测量修形','Undercutting':'镂空与保护','Surface finishing':'表面完成',
    'Drag to rotate · Scroll to zoom':'拖动旋转 · 滚轮缩放','Drag to rotate · Pinch to zoom':'拖动旋转 · 双指缩放','Preparing the marble…':'正在准备大理石…',
    'One block of marble. Place the figures before removing stone.':'从一整块大理石开始，先确定人物的位置，再去除多余石料。',
    'Keep ① the plaster model as a reference and lay out the figures in ② the marble block.':'保留左侧①石膏模型作参照，在右侧②大理石坯上确定人物的位置。',
    'Use the plaster reference while laying out, roughing, shaping, undercutting and finishing the marble.':'对照石膏原型，依次完成整石布局、粗凿、修形、镂空和表面精修。',
    'Remove the outer waste, leaving the two connected figures.':'逐步去除外围石料，保留两个相连的人物大形。',
    'Measure and refine the bodies, drapery and tree trunk.':'测量并修整身体、衣褶和树干的形体。',
    'Open the narrow spaces around leaves and hair; protect the thin parts.':'凿开树叶与发丝之间的缝隙，保护纤薄的部位。',
    'Refine the surface to distinguish smooth skin from rough bark.':'细修表面，让光滑的肌肤与粗糙的树皮呈现不同质感。',
    'Loading the finished sculpture. The previous stage stays visible…':'正在加载完成模型，当前阶段会继续显示…',
    'Paused. Press Play to continue from here.':'已暂停，点击播放可从当前位置继续。',
    'The model could not load. Select the stage to try again.':'模型加载失败，请重新选择阶段重试。',
    'The 3D view could not load. Please reload this page.':'三维视图加载失败，请刷新页面重试。',
    'Reset view':'视角复位','Auto rotate':'自动旋转','Look closer':'细看局部','Whole sculpture':'完整雕塑','Leaves':'树叶','Hair':'发丝','Bark':'树皮','Roots':'树根',
    'Model & process notes':'模型与工艺说明','Animated marble carving process':'大理石雕刻过程动画','Carving controls':'制作过程控制','Interactive marble sculpture':'可交互大理石雕塑','Stage progress':'当前步骤进度','Carving stages':'雕刻阶段','Sculpture details':'雕塑局部',
    'Sculpture carving in five stages. Drag to rotate, scroll to zoom, arrow keys to turn, Home to reset.':'雕塑制作过程三维示意。五个阶段从整石到完成模型；拖动旋转，滚轮缩放，方向键旋转，Home 复位。',
    'From one block of marble to Apollo and Daphne: five animated stages of carving, using the original scan and reconstructed intermediate forms.':'从一整块大理石到《阿波罗与达芙妮》：用原始扫描模型和重建中间形体演示五个雕刻阶段。',
    'Apollo and Daphne, Gian Lorenzo Bernini, 1622–1625. Original work: Galleria Borghese, Rome.':'《阿波罗与达芙妮》，吉安·洛伦佐·贝尼尼，1622–1625 年。原作藏于罗马博尔盖塞美术馆。',
    'The finished sculpture uses the original Scan the World mesh. Clay modelling, plaster moulding, point transfer and animated stone removal are reconstructed teaching diagrams, not a record of Bernini’s workshop or its exact sequence of work.':'完成阶段使用 Scan the World 的原始网格。泥塑、石膏翻模、测点转移及去料动画均为教学重建示意，并非贝尼尼工作室的实录或精确工序记录。',
    'Video source: supplied reference footage. Photographer and original publication not yet verified.':'视频来源：项目提供的参考影像。拍摄者与原始发布出处尚未核实。',
    'The video and its cover image are separate from the 3D model’s licence.':'视频及其封面图的权利信息与三维模型许可分开。',
    'Model:':'模型：','Scan the World / Zenodo ↗':'Scan the World / Zenodo ↗','CC BY-NC-SA 4.0 ↗':'CC BY-NC-SA 4.0 ↗',
    '. Non-commercial use; adaptations share the same licence. Rendering: Three.js (MIT) and Draco (Apache 2.0).':'。限非商业使用，改编作品须以相同许可共享。渲染：Three.js（MIT）和 Draco（Apache 2.0）。',
    'Featured':'精选作品','Approach':'设计理念','AI & Tools':'AI 与工具','All Projects':'全部项目','Archi & Art':'建筑与艺术','Contact':'联系','About Me':'关于作者','Menu':'菜单','Figures':'小机关目录','Figure':'小机关','Interactive figure':'互动小机关','Language':'语言','English':'English','中文':'中文',
    'Hand-inked isometric figures you can play with.':'可以互动的手绘等距小机关。','← → to switch figures':'← → 切换小机关','Local recreation · Original by April Zhu':'本地复刻 · 原作 April Zhu','Recreation study':'复刻练习','Original by April Zhu ↗':'原作 April Zhu ↗','Made with Colorfigures ↗':'使用 Colorfigures 制作 ↗','Local recreation':'本地复刻','Original by April Zhu':'原作 April Zhu','Colorfigures recreation':'Colorfigures 复刻',
    'Washing machine':'洗衣机','Espresso machine':'意式咖啡机','Vending machine':'自动售货机','Toaster':'烤面包机','Microwave':'微波炉','Pencil sharpener':'手摇卷笔刀','Wind-up toy':'发条玩具','Traffic light':'交通信号灯','Smoke alarm':'烟雾报警器','Fridge':'冰箱','Music box':'音乐盒','Toilet flush':'马桶水箱','Capsule toy machine':'扭蛋机','Photo booth':'照相亭','Arcade cabinet':'街机','Food truck':'餐车','Toilet booth':'卫生间隔间','Gumball machine':'口香糖机','Record player':'唱片机','Kettle':'水壶','Pour-over coffee set':'手冲咖啡器具','Desk lamp':'台灯','Electric kettle':'电热水壶','Desk fan':'台式风扇',
    'Hand-drawn wobble':'手绘抖动','Body colour':'机身颜色','Colour':'颜色','Color':'颜色','Labels':'部件标签','On':'开启','Off':'关闭','on':'开启','off':'关闭','front':'正面','back':'背面','left side':'左侧','right side':'右侧','Turn around (Q)':'转到背面（Q）','Turn around (E)':'转到背面（E）','Previous figure':'上一个小机关','Next figure':'下一个小机关','← Prev':'← 上一个','Next →':'下一个 →','The big idea':'工作原理','Try it':'试一试','Machine':'机器','Booth':'亭子','Cabinet':'机台','Truck':'餐车','Brew':'冲泡','Lamp':'台灯','Fan':'风扇','Fig —':'图 —',
    'Tomato':'番茄红','Mustard':'芥末黄','Mint':'薄荷绿','Cobalt':'钴蓝','Blush':'胭脂粉','Ember':'余烬橙','Cyan':'青色','Lime':'青柠绿','Violet':'紫罗兰','Rose':'玫瑰红','Ice':'冰蓝','Sodium':'钠灯橙','Tungsten':'钨丝黄','Neon':'霓虹粉','Signal':'信号绿','Dusk':'暮色蓝','Moon':'月光白',

    'Load laundry':'放入衣物','Add soap':'添加洗衣粉','Choose program':'选择程序','Start / pause':'开始 / 暂停','Open door, unload':'开门取衣','Close door':'关门','COTTON':'棉织物','QUICK':'快洗','filling':'进水中','washing':'洗涤中','rinsing + draining':'漂洗 / 排水中','spinning':'脱水中','paused':'已暂停','DONE':'完成','PAUSE':'暂停','FILL':'进水','WASH':'洗涤','RINSE':'漂洗','START':'开始','IN':'进水','OUT':'出水','QUIET DRIVE':'静音驱动','● LOCKED':'● 已锁定','○ UNLOCKED':'○ 未锁定',
    'load the laundry, add soap, pick a program, start — then unload':'放入衣物、加洗衣粉、选择程序并启动，洗好后取出。','Spinning fast flings the water out through the little holes in the drum, while the clothes get pressed against the wall.':'高速旋转时，衣物贴在滚筒壁上，水从滚筒的小孔甩出。','paused — press start to resume':'已暂停，按开始继续','close the door first':'请先关门','the drum is empty — load laundry first':'滚筒是空的，请先放入衣物','the drawer is locked while washing':'洗涤时洗衣粉抽屉已锁定','there is already soap in the drawer':'抽屉里已经有洗衣粉','soap in — the drawer slides shut':'洗衣粉已加入，抽屉正在关闭','program locked while running':'运行时不能切换程序','door locked — wait for the cycle to end':'门已锁定，请等待程序结束','unloading the clean laundry…':'正在取出洗好的衣物…','laundry is in the basket':'衣物已放回篮子','the machine is running':'洗衣机正在运行','the drum is already loaded':'滚筒里已经有衣物','loading the laundry…':'正在放入衣物…','loaded — add soap, then start':'衣物已放好，请加洗衣粉后启动','laundry is in the basket — close the door, or load the next wash':'衣物在篮子里，可以关门或放入下一批衣物','empty — load the laundry from the basket to start':'滚筒是空的，请从篮子放入衣物','door open — click it to close, then start':'门开着，点击关门后再启动','done — open the door to unload':'洗涤完成，请开门取衣','unloading the laundry…':'正在取出衣物…','the drum is already empty':'滚筒已经是空的','Door is closed':'门已关闭','click the dial to change program, start to wash':'点击旋钮切换程序，按开始洗涤','press start':'按开始',

    'Power on':'打开电源','Already on':'电源已经打开','Pull a shot':'萃取浓缩咖啡','Milk jug under wand':'把奶缸放到蒸汽棒下','Jug is ready at the wand':'奶缸已放在蒸汽棒下','Steam the milk':'打发奶泡','Put the milk jug under the wand first':'请先把奶缸放到蒸汽棒下','Pour milk':'倒入牛奶','Froth the milk first':'请先打发奶泡','Take your cup':'取走咖啡杯','No cup to take':'没有可取走的杯子','New cup':'放入新杯子','There is already a cup':'已经有杯子了','Power off':'关闭电源','POWER':'电源','STEAM':'蒸汽','BOILER':'锅炉','PUMP':'水泵','HOT':'热','WATER':'水','MAX':'最高','MIN':'最低',
    'power on, pull a shot, froth milk under the wand, pour a latte':'开机、萃取咖啡、用蒸汽棒打奶泡，再倒一杯拿铁。','Hot water is squeezed through tightly packed coffee at about 9 times the push of the air around us.':'热水以约为大气压 9 倍的压力穿过压实的咖啡粉。','Up to temperature — pull a shot':'已达到温度，可以萃取咖啡','Shot done — 25 s, about 36 g':'萃取完成：25 秒，约 36 克','Latte ready — click the cup to take it':'拿铁做好了，点击杯子取走','Milk is silky — click the jug to pour it on your shot':'奶泡已细腻，点击奶缸倒入咖啡','Switch the machine on first (power, right)':'请先打开右侧电源开关','Still heating — wait for the green zone':'正在加热，请等待指针进入绿色区域','No cup — click the drip tray to place one':'没有杯子，点击滴水盘放入一个','That cup is full — click it to take it':'杯子已满，点击取走','Switch the machine on first':'请先打开电源','Not enough steam pressure yet':'蒸汽压力还不够','Fresh cold milk in the jug':'奶缸已加入新鲜冷牛奶','This one already has milk — take the cup first':'这杯已经加过牛奶，请先取走','Milk is ready — pull a shot to pour it on':'奶泡已准备好，请先萃取咖啡','Jug under the wand — open the steam knob to froth':'奶缸已就位，打开蒸汽旋钮打奶泡','Jug under the wand — open the steam knob to froth the milk':'奶缸已就位，打开蒸汽旋钮打奶泡','Pouring…':'正在倒入…','Wait for the shot to finish':'请等待萃取结束','Enjoy! — click the drip tray for a fresh cup':'请享用，点击滴水盘可放入新杯子','Cup removed — click the drip tray for a fresh one':'杯子已取走，点击滴水盘放入新杯子','There is already a cup under the group':'冲煮头下已经有杯子','Pouring the milk… latte art incoming':'正在倒牛奶，拉花马上完成…','Cooling down':'正在冷却','Off — flip the power switch to heat up':'电源关闭，打开开关开始加热','Shot + frothed milk — click the jug to pour':'咖啡和奶泡已就绪，点击奶缸倒入','Cups warming on top — take the cup under the group first':'顶部杯子正在温杯，请先取走冲煮头下的杯子','Frothing milk':'正在打奶泡','Pulling shot':'正在萃取','steaming':'正在出蒸汽','click the jug to stop':'点击奶缸停止','click the drip tray to place a cup':'点击滴水盘放入杯子','click the portafilter to pull a shot':'点击手柄开始萃取','now froth some milk for a latte':'现在可以打奶泡制作拿铁',

    'Insert 50¢':'投入 50¢','Choose a drink':'选择商品','Open pickup door':'打开取货门','Take your drink':'取走商品','Return change':'退回余额','Take coins':'取走硬币','Credit':'余额','Credits':'游戏币','Change in the cup':'退币杯内金额','Price':'价格','The door is already open':'门已经打开','Open the pickup door first':'请先打开取货门','Nothing in the tray yet':'托盘里还没有商品','The coin cup is empty':'退币杯是空的','insert a coin, punch a code or tap a product':'投入硬币，输入编号或点击商品。','The machine counts your coins; when there is enough, it pushes your drink off the shelf and it drops into the tray.':'机器计算投入的金额，足够时便把商品从货架推下，落入取货托盘。','Choose a drink — keypad, the glass, or step 2':'通过键盘、玻璃后的商品或第二步选择商品','Insert coins to start':'请先投入硬币','TAKE|ITEM':'取走|商品','SOLD|OUT':'已经|售罄','PICK|A–D':'选择|A–D','MAX|$5.00':'最多|$5.00','COINS|BELOW':'硬币|在下方','THANK|YOU':'谢谢|惠顾','VENDING':'自动售货','TAKE':'取走','ITEM':'商品','SELECT':'选择','CREDIT':'余额','INSERT':'投入','COIN':'硬币','DRINKS · SNACKS':'饮料 · 零食','OPEN':'营业中','KEEP 10 cm':'保持 10 cm','FROM WALL':'离墙距离','↔ VENTILATION':'↔ 保持通风','PULL':'拉开','COLD':'冷饮','SNACKS':'零食',

    'Choose shade':'选择烘烤程度','Push the lever':'按下压杆','Take the toast':'取走吐司','Push the lever (space) · shade dial (D) · click the toast to take it (T)':'按压杆（空格）· 调节烘烤程度（D）· 点击吐司取走（T）','Isometric toaster with a see-through side. Push the lever: the wires glow, a metal strip bends, unlocks the latch, and the toast pops up.':'侧面透明的等距烤面包机。按下压杆后，电热丝发光，金属片弯曲并解锁卡扣，吐司弹出。','A metal strip inside bends as it gets hot, and when it bends far enough it lets the toast pop up.':'内部的金属片受热弯曲，弯到一定程度便让吐司弹出。','Push the lever down. The wires get hot and glow.':'按下压杆，电热丝升温并发光。','The metal strip warms up and starts to bend.':'金属片受热后开始弯曲。','It bends far enough to unlock the spring. POP!':'弯到一定程度后释放弹簧，吐司弹出。','light':'浅烘','golden':'金黄','dark':'深烘','lightly':'轻度','toasting · wires heating up':'正在烘烤，电热丝升温中','yum! fresh bread coming…':'真香，正在补入新面包…','oops, burnt! · click it to take':'烤焦了，点击吐司取走','SHADE':'烘烤程度','WIRES':'电热丝','STRIP':'金属片','LATCH':'卡扣',

    'Choose food':'选择食物','Add 30 s':'增加 30 秒','Start':'开始','Stop':'停止','Open door':'开门','Take food out':'取出食物','The door is open':'门已打开','The door is closed':'门已关闭','Nothing inside':'里面没有食物','Open the door first':'请先开门','popcorn':'爆米花','soup':'汤','pizza':'披萨','POP':'爆米花','SOUP':'汤','PIZZA':'披萨','COOK':'烹饪','STOP':'停止','DOOR OPEN':'开门','CAUTION':'注意','HIGH VOLTAGE':'高压危险','DO NOT REMOVE':'请勿拆卸','COVER':'外壳','End':'结束','DING!':'叮！','Done':'完成',
    'Cooking — press STOP first':'正在烹饪，请先按停止','Close the door first':'请先关门','Nothing inside — pick a food first':'里面没有食物，请先选择','Door opened — cooking paused':'门已打开，烹饪已暂停',"Hands off — it's cooking":'正在烹饪，请勿触碰','Open the door to put food in':'请先开门再放入食物','pick a food, add time, START — then open the door to take it out':'选择食物、设定时间并开始，完成后开门取出。','Microwaves make the water inside food jiggle, and jiggling makes heat. The plate turns so every side gets its turn.':'微波使食物中的水分子振动产生热量，转盘旋转让各处受热更均匀。','Door open · empty turntable — click it to put food in':'门已打开，转盘是空的，点击放入食物','Empty — open the door and click the turntable, or pick POP / SOUP / PIZZA':'里面是空的，开门点击转盘放入食物，或选择爆米花 / 汤 / 披萨','START to resume, STOP to clear':'按开始继续，按停止清除','click it to take it out, or close the door':'点击取出食物，或关上门','press DOOR OPEN':'请按开门','add time (+30s / dial), then START':'增加时间（+30 秒 / 旋钮），再按开始','press START':'请按开始',

    'Turn the crank':'转动摇柄','Take the pencil':'取出铅笔','Empty the drawer':'倒空木屑抽屉','Hold the crank or TURN (space) · TAKE pencil (T) · EMPTY drawer (E)':'按住摇柄或转动（空格）· 取出铅笔（T）· 倒空抽屉（E）','Isometric crank pencil sharpener with a peek window over the slanted blade and a see-through shavings drawer. Turn the crank to sharpen the pencil.':'等距手摇卷笔刀，顶部小窗能看见斜刀片，透明抽屉装木屑。转动摇柄削尖铅笔。','The blade is set at a slant, so as the pencil turns it shaves the wood away in a cone and leaves a sharp point.':'刀片倾斜安装，铅笔旋转时木头被削成圆锥，留下尖细的笔芯。','Put the pencil in the hole and turn the crank.':'把铅笔插入孔中，转动摇柄。','The slanted blade shaves off thin curls of wood. They fall into the drawer.':'斜刀片削下薄薄的卷曲木屑，落入抽屉。','Round and round, the end becomes a sharp cone.':'不断转动，笔头逐渐变成尖锥。','TURN':'转动','TURN (space)':'转动（空格）','EMPTY DRAWER (E)':'倒空抽屉（E）','TAKE PENCIL':'取出铅笔','EMPTY DRAWER':'倒空抽屉','NEW PENCIL (T)':'换支铅笔（T）','PUT IT BACK (T)':'放回铅笔（T）','TAKE PENCIL (T)':'取出铅笔（T）','look at that point! sharp':'看，笔尖已经削好了','sharp!':'削尖了','getting sharper':'正在变尖','blunt':'未削尖','sharp! take the pencil (T)':'削好了，取出铅笔（T）','no pencil in the hole':'孔中没有铅笔','already sharp! take the pencil (T)':'已经削尖，请取出铅笔（T）','drawer empty':'抽屉已空',

    'Wind the key':'上发条','Let go':'松手','Reset':'复位','Click the key to wind (or w) · space or click the car to let go · r to reset':'点击钥匙上发条（W）· 空格或点击小车松手 · R 复位','Isometric wind-up toy car on a track. Wind the key to coil the spring, then let go and the car drives.':'轨道上的等距发条玩具车。转动钥匙卷紧弹簧，松手后小车行驶。','Winding the key stores energy in a coiled spring; as the spring unwinds it turns the gears and the wheels.':'上发条把能量储存在卷紧的弹簧里，弹簧松开时带动齿轮和车轮。','Turn the key. The spring coils up tight.':'转动钥匙，把弹簧卷紧。','Let go. The spring uncoils and turns the gears.':'松手后弹簧展开，带动齿轮。','The gears turn the wheels until the spring is loose.':'齿轮带动车轮，直到弹簧完全松开。','back to the start…':'正在回到起点…','fully wound! press space to let go':'发条已满，按空格松手','wind the key first (w)':'请先上发条（W）','whirr… the spring is letting go':'嗡…弹簧正在释放能量','ready · click the key to wind':'准备好了，点击钥匙上发条','ENERGY':'能量',

    'Press WAIT':'按下等候按钮','Auto cycle: off':'自动循环：关闭','Auto cycle: on':'自动循环：开启','Press WAIT (or space) to cross':'按下等候按钮（或空格）准备过街','Isometric pedestrian crossing. Cars drive on green, slow down on amber and stop at the line on red; then the green walking man lights up and the people cross. Press WAIT to ask for a turn.':'等距人行横道。绿灯时车辆通行，黄灯时减速，红灯时停在线前；行人绿灯亮后过街。按下等候按钮申请通行。','Red means stop, amber means slow down, green means go — and the green walking man means it is safe to cross.':'红灯停、黄灯减速、绿灯行；行人绿灯表示可以安全过街。','Press WAIT — you ask for a turn.':'按下等候按钮，申请过街。','Amber: cars slow down. Red: cars stop at the line.':'黄灯时车辆减速，红灯时停在线前。','Green man: walk across!':'行人绿灯亮，可以过街。','GO':'通行','SLOW DOWN':'减速','WALK':'可以过街','WAIT':'等候','PUSH':'按下','WAIT pressed · your turn is coming':'已按等候按钮，请等待通行','green · cars go · people wait':'绿灯：车辆通行，行人等候','amber · cars slow down':'黄灯：车辆减速','green man · walk across!':'行人绿灯：可以过街','red · cars stop at the line':'红灯：车辆停在线前','red + amber · cars get ready':'红黄灯：车辆准备通行',

    'Puff smoke':'释放烟雾','Clear the air':'清除烟雾','Test':'测试','Puff smoke: toast, PUFF or space · Clear: fan, CLEAR or C · Test: T':'释放烟雾：吐司、放烟按钮或空格 · 清除：风扇、清除按钮或 C · 测试：T','Isometric smoke alarm with its cover cut away, on a wooden stand. Puff smoke from the burnt toast to set it off, blow it away with the fan, or press test.':'木质展台上的等距剖面烟雾报警器。从焦吐司释放烟雾触发报警，用风扇清除烟雾，或按测试按钮。','Inside is a tiny dark chamber with a hidden light. Smoke bounces the light onto a sensor, and that sets off the beep.':'内部有一个带光源的小暗室。烟雾把光散射到传感器上，触发鸣响。','A little light shines across a dark chamber. Normally it misses the sensor.':'光线穿过暗室，正常情况下照不到传感器。','Smoke drifts in and bounces the light onto the sensor.':'烟雾飘入，把光散射到传感器上。','The sensor tells the buzzer to beep!':'传感器通知蜂鸣器发声。','PUFF SMOKE':'释放烟雾','CLEAR AIR':'清除烟雾','TEST':'测试','LIGHT':'光源','SENSOR':'传感器','BUZZER':'蜂鸣器','BATTERY':'电池','RED LIGHT':'红色指示灯','DARK CHAMBER':'暗室','SMOKE ALARM':'烟雾报警器','BEEP!':'哔！','ALARM · BEEP BEEP · clear the air!':'报警：哔哔，请清除烟雾','test · beep!':'测试：哔！','smoke bounces light onto the sensor…':'烟雾把光散射到传感器上…','smoke drifting…':'烟雾正在飘入…','clear air · the light misses the sensor':'空气清洁，光线照不到传感器',

    'Open the fridge':'打开冷藏门','Take a snack':'取一份食物','Close the fridge':'关上冷藏门','Open the freezer':'打开冷冻门','Close the freezer':'关上冷冻门','Restock':'补满食物','Already closed':'已经关闭','Already full':'已经满了','The fridge is open':'冷藏门已经打开','The freezer is open':'冷冻门已经打开','open the doors · take a snack · don’t leave it open':'打开冰箱，取一份食物，记得及时关门。',"A fridge doesn't make cold — it carries heat out of the box and lets it go from the coil on the back. Turn it around to see.":'冰箱把箱内热量带走，通过背面的盘管散出。转到背面可以看见。','BEEP BEEP — close the door! The light is flickering':'哔哔，请关门，灯正在闪烁','Opening the fridge… click lights on':'冷藏门正在打开，内灯亮起…','Closing the fridge…':'冷藏门正在关闭…','Both doors open':'冷藏门和冷冻门都打开了','Door ajar':'门半开','Light on':'内灯已亮','shelves are empty — hit Restock':'层架空了，请点击补满食物','Freezer open — brrr. Ice tray, peas, a tub of ice cream':'冷冻门打开了，真冷。里面有冰格、豌豆和冰淇淋','Click the big door to open the fridge — or the top door for the freezer':'点击大门打开冷藏室，点击顶部小门打开冷冻室','PEAS':'豌豆','DAIRY':'乳制品',
    'cake':'蛋糕','eggs':'鸡蛋','milk':'牛奶','jam':'果酱','pickles':'腌黄瓜','cheese':'奶酪','the watermelon slice':'西瓜片','watermelon slice':'西瓜片','a can of cola':'一罐可乐','a can of lemonade':'一罐柠檬汽水','leftovers':'剩菜','water':'水','orange juice':'橙汁','ketchup':'番茄酱','wine':'葡萄酒','oat milk':'燕麦奶','OJ carton':'盒装橙汁',

    'One note':'播放一个音符','Turn the crank (drag it, click it or the button) · space = one line · arrows = one note':'转动摇柄（拖动、点击或按按钮）· 空格播放一小节 · 方向键播放单音','Isometric music box with the lid open. Turning the crank spins a pinned drum that plucks metal teeth and plays Twinkle Twinkle.':'打开盖子的等距音乐盒。转动摇柄，带凸点的滚筒拨动金属梳齿，播放《小星星》。','Pins on a turning drum pluck metal teeth — long teeth make low notes, short teeth make high notes.':'旋转滚筒上的凸点拨动金属梳齿，长齿发低音，短齿发高音。','Turn the crank — the drum spins.':'转动摇柄，滚筒旋转。','A pin catches a tooth and plucks it: ping!':'凸点拨动梳齿，叮地响起。','Short teeth sing high, long teeth sing low.':'短齿发高音，长齿发低音。','long tooth, low note':'长齿，低音','short tooth, high note':'短齿，高音','middle tooth, middle note':'中间梳齿，中音','the drum is turning…':'滚筒正在转动…','turn the crank to play':'转动摇柄播放','TURN THE CRANK':'转动摇柄',

    'Flush':'冲水','FLUSH':'冲水','Click the handle or FLUSH (or space)':'点击把手或冲水按钮（或空格）','Isometric toilet with a see-through cistern. Flush it to watch the plug lift, the water rush out, and the float refill the tank and shut the tap.':'带透明水箱的等距马桶。冲水时观察塞子抬起、水流排出，浮球随补水上升并关闭进水阀。','A float rises with the water and shuts the tap off when the tank is full, so it never overflows.':'浮球随水位上升，水箱满时关闭进水阀，防止溢出。','Push the handle. The plug lifts and the water whooshes into the bowl.':'按下把手，塞子抬起，水流冲入便池。','The plug drops shut and the tap starts refilling the tank.':'塞子落下关闭，进水阀开始补水。','The float rises with the water and shuts the tap when it is full.':'浮球随水位上升，水满时关闭进水阀。','PLUG':'塞子','TAP':'进水阀','FLOAT':'浮球','OVERFLOW':'溢流管','FULL':'已满','tank full · click the handle to flush':'水箱已满，点击把手冲水','full! the float shut the tap':'水箱已满，浮球关闭了进水阀',

    'Insert coin':'投入硬币','Turn crank':'转动摇柄','Open capsule':'打开胶囊','Put the prize away':'收好奖品','Refill':'补满','Capsules left':'剩余胶囊','No capsule yet':'还没有胶囊','Already open':'已经打开','Open a capsule first':'请先打开胶囊','Globe refilled':'胶囊仓已补满','insert a coin, turn the crank, open the capsule':'投币、转动摇柄，再打开胶囊。','Each turn of the crank lines up one capsule-sized hole, so exactly one capsule drops out for each coin.':'每次转动摇柄，一个胶囊大小的孔会对准出口，因此每投一枚硬币只掉出一个胶囊。','There is already a coin in — turn the crank':'已经投过币，请转动摇柄','Sold out — refill first':'已售罄，请先补满','Take your capsule first':'请先取走胶囊','Take your capsule first — click it':'请先点击胶囊取走','Insert a coin first':'请先投币','Sold out':'已售罄','Clink — coin going in…':'叮，硬币正在投入…','Ka-chunk! Something is coming down the chute…':'咔嗒，有东西正从滑道落下…','A capsule rolls out…':'胶囊正在滚出…','Opening…':'正在打开…','A capsule! Click it to open':'胶囊出来了，点击打开','Sold out — refill the globe':'已售罄，请补满胶囊仓','Coin in — the price lights up. Turn the crank':'已投币，价格亮起，请转动摇柄','Turn the crank to get a capsule':'转动摇柄获取胶囊','Empty — insert a coin and turn the crank':'出口是空的，请投币并转动摇柄','Rubber duck':'橡皮鸭','Lucky star':'幸运星','Lucky cat':'招财猫','Tin robot':'铁皮机器人','Tiny dino':'小恐龙','CAPSULE · TOYS':'胶囊 · 玩具','1 PLAY 100¥':'一次 100¥','REFILL':'补满','COIN BOX':'硬币盒',

    'Open curtain, step in':'打开帘子，进入亭内','Take photos':'拍照','Collect strip':'收取照片条','Close curtain':'关上帘子','Session in progress':'拍照正在进行','Credit already in — press start':'已投币，请按开始','Collect your strip first':'请先收取照片条','Strip collected — nice faces':'照片条已收取，拍得不错','open the curtain, insert a coin, press start':'打开帘子、投币，再按开始。','The flash fires for a tiny moment, so even if you move, the photo freezes you.':'闪光只持续很短一瞬，即使你在移动，照片也能定格。','Developing your strip…':'照片条正在显影…','Your strip is sliding out…':'照片条正在送出…','Strip ready — click it to collect':'照片条已就绪，点击收取','Clink…':'叮…','Credit 50¢ · press start for 4 photos':'已投 50¢，按开始拍 4 张照片','Curtain open · insert a coin to start':'帘子已打开，请投币开始','Click the curtain to look inside · or insert a coin':'点击帘子查看内部，或先投币','Curtain is open — insert a coin':'帘子已打开，请投币','No strip yet':'还没有照片条','Curtain is already closed':'帘子已经关上','50¢ · 4 poses':'50¢ · 4 张照片','Service door is locked — staff only':'维修门已锁，仅供工作人员使用','SMILE':'微笑','PRESS':'按下','PHOTOS':'照片','STAFF ONLY':'仅限工作人员','PHOTO BOOTH':'照相亭','4 POSES · READY IN 3 MIN':'4 张照片 · 3 分钟出片','‹ ENTRANCE':'‹ 入口','PHOTO':'照相','BOOTH':'亭','4 POSES · 50¢':'4 张照片 · 50¢',

    'Insert 25¢':'投入 25¢','1P Start':'单人开始','Move ◀':'向左 ◀','Fire':'发射','Move ▶':'向右 ▶','Score':'得分','Hi-score':'最高分','Credits full (9)':'游戏币已满（9 枚）','Game already running':'游戏已经开始','insert a coin, press 1P start, then ← → and space':'投币后按单人开始，使用 ← → 移动、空格发射。','A joystick is just four little switches — leaning it presses one, and the game moves your ship.':'摇杆里有四个小开关，向一边倾斜就按下对应开关，控制飞船移动。','Game over':'游戏结束','Playing':'游戏进行中','Coin in…':'正在投币…','Insert coin — click a 25¢ slot (or press 5)':'请投币，点击 25¢ 投币口（或按 5）','GAME OVER':'游戏结束','NEW HI-SCORE!':'新的最高分！','PUSH 1P START':'按单人开始','INSERT COIN':'投入硬币','· ONE PLAYER · 25¢ ·':'· 单人游戏 · 25¢ ·','DO NOT OPEN':'请勿打开','press 1P start':'按单人开始','insert coin':'投入硬币',

    'Open the hatch':'打开遮棚','Order food':'点餐','Take your food':'取餐','Close the hatch':'收起遮棚','Taco':'塔可','Burrito':'墨西哥卷饼','Nachos':'玉米片','Taco $3':'塔可 $3','Burrito $7':'墨西哥卷饼 $7','Nachos $5':'玉米片 $5','Still cooking · wait for the orders':'正在制作，请等待出餐','Hand out the food on the counter first':'请先取走柜台上的食物','Opening up · one moment':'正在开棚，请稍等',"We're closed · click the awning to open up":'尚未营业，点击遮棚开始营业','Queue is full · 3 orders max':'订单队列已满，最多 3 单','lift the awning, order from the menu board, grab your food':'掀起遮棚、从菜单点餐，再取走食物。','A whole little kitchen fits in a van because everything is in one line: grill, counter, window.':'烤炉、柜台和窗口排成一条线，一辆车里就能放下小厨房。','Opening up…':'正在开棚…','Closing up…':'正在收棚…','Closed · click the awning to open the hatch':'尚未营业，点击遮棚打开窗口','● Open · pick a dish from the menu board':'● 正在营业，请从菜单选择食物',"We're open · place an order":'正在营业，可以点餐','Still cooking…':'正在制作…','Order something first':'请先点餐','CLOSED':'未营业','MENU':'菜单','click to order':'点击点餐','TACOS':'塔可','· FRESH OFF THE GRIDDLE ·':'· 现做现卖 ·',

    'Close & lock door':'关门上锁','Unlock & open door':'解锁开门','Already locked':'已经上锁','click the door, light or bowl':'点击门、灯或马桶。','Locking the door also flips the sign outside to IN USE, so everyone knows to wait.':'锁门时，外面的标牌同时翻为使用中，提醒其他人等候。','Flushing…':'正在冲水…','Closing…':'正在关闭…','● Occupied · locked':'● 使用中 · 已上锁','● Vacant · door open':'● 空闲 · 门已打开','IN USE':'使用中','VACANT':'空闲','WC':'卫生间','SERVICE':'维修',

    'Insert a coin':'投入硬币','Take the gumball':'取走口香糖球','Refill the globe':'补满球仓','Insert a coin (0) · turn the crank (space) · take the gum (T)':'投入硬币（0）· 转动摇柄（空格）· 取走糖球（T）','Isometric gumball machine with a glass globe of gumballs and a see-through mechanism. Insert a coin, turn the crank, and a gumball rolls out into the tray.':'带玻璃球仓和透明机构的等距口香糖机。投入硬币、转动摇柄，糖球便滚到托盘里。','GUMBALLS':'口香糖球','25 CENTS':'25 美分','GUMS':'糖球','WHEEL':'转轮','TURN CRANK':'转动摇柄','TAKE GUM':'取走糖球',

    'Put on a record':'放上唱片','Drop the needle':'放下唱针','Lift the needle':'抬起唱针','Take the record off':'取下唱片','Put on a record · drop the needle':'放上唱片，再放下唱针。','Isometric record player. Put a record on the platter, drop the needle and the record spins and plays.':'等距唱片机。把唱片放上转盘，落下唱针，唱片旋转并播放音乐。','STEREO TURNTABLE':'立体声唱片机','NO RECORD':'没有唱片','SIDE A':'A 面','NEEDLE IN THE GROOVE':'唱针进入音轨','PLAYING':'正在播放','CUEING':'正在落针','READY':'准备就绪',

    'Fill with water':'加满水','Switch on':'打开开关','Pour a cup':'倒一杯水','Switch on (space) · fill (F) · pour (P)':'打开开关（空格）· 加水（F）· 倒水（P）','Isometric glass kettle. Switch it on: the heater warms the water, it boils, steam runs down a tube in the handle to a metal disc, the disc snaps and the switch clicks off.':'等距玻璃水壶。打开开关后加热器把水烧开，蒸汽通过把手内的管道到达金属碟，使其变形并跳开开关。','SWITCHED OFF':'已关闭','ADD WATER FIRST':'请先加水','WAIT - DISC HOT':'请等待，金属碟仍热','SWITCH OFF FIRST':'请先关闭开关','FILLED - COLD':'已加满冷水','EMPTY - ADD WATER':'空壶，请加水','1 HEATER':'1 加热器','2 STEAM':'2 蒸汽','3 DISC SNAPS!':'3 金属碟跳开','3 DISC':'3 金属碟','CLICK!':'咔嗒！','CLICK! OFF':'咔嗒，已断电','DISC HEATING UP':'金属碟正在升温','STEAM TO DISC':'蒸汽流向金属碟','BOILING 100C':'水已沸腾 100°C',

    'Heat water':'加热水','Grind beans':'研磨咖啡豆','Add grounds':'加入咖啡粉','Pour water':'注水','Serve':'倒入杯中','Start again':'重新开始','heat, grind, add the grounds, pour, serve':'加热、磨豆、加粉、注水，再倒入杯中。','one step at a time':'请等待上一步完成','the water is already hot':'水已经热了','the grounds are in the filter already':'滤杯里已经有咖啡粉','ground already - add the grounds':'豆子已经磨好，请加入咖啡粉','grinding the beans first':'先研磨咖啡豆','brewed and served - start again':'已冲好并倒入杯中，请重新开始','brewed - now serve it':'咖啡已冲好，现在可以倒入杯中','the cup is full - start again':'杯子已满，请重新开始','nothing brewed yet - pour the water first':'咖啡还没冲好，请先注水','a cup of filter coffee':'一杯手冲咖啡','brewed - serve it':'咖啡已冲好，可以倒入杯中','grounds in the filter - pour':'咖啡粉已加入滤杯，可以注水','ground - add to the filter':'已磨好，请把咖啡粉倒入滤杯','water hot - grind':'水已热，可以磨豆','heat the water':'请先加热水','heating the water':'加热水','grinding':'研磨咖啡豆','adding the grounds':'加入咖啡粉','Coffee':'咖啡','fresh beans, cold water':'已准备新咖啡豆和冷水','FILTER':'滤杯','GRIND':'研磨',

    'Reading':'阅读','Reach up':'向上伸展','Lean low':'低头照明','Down':'向下','Angled':'倾斜','Out':'向外','it is already there':'已经在这个位置','Light on desk':'桌面照度','Shade height':'灯罩高度','Switch on / off':'打开 / 关闭灯','Bend the arm':'调整灯臂','Tilt the shade':'倾斜灯罩','switch it on, then bend the arm and tilt the shade':'打开灯，再调整灯臂和灯罩角度。',

    'Fill water':'加水','Half, 0.8 L':'半壶，0.8 L','Full, 1.7 L':'满壶，1.7 L','Switch off':'关闭开关','switch it on and watch what switches it off':'打开开关，看看是什么让它自动断电。','Boiling water makes steam; a tube carries it to a bimetal disc that snaps when hot and trips the switch.':'水沸腾产生蒸汽，管道把蒸汽引到双金属片，使其受热跳变并断开开关。','click! the steam-hot disc snapped':'咔嗒，蒸汽加热的金属碟跳开了','it is already on':'已经开启','wait for the lid to close':'请等待壶盖关闭','too little water: fill it past MIN first':'水太少，请先加水超过最低刻度','the disc is still hot, so the switch springs back up. wait a moment':'金属碟仍热，开关会弹回，请稍等','it is already off':'已经关闭','switch it off before filling':'加水前请先关闭开关','already filling':'正在加水','boiling: steam is heating the disc':'水已沸腾，蒸汽正在加热金属碟','heating':'加热中','Water':'水温','Steam at the disc':'金属碟处蒸汽温度','In the kettle':'壶内水量','HEATER':'加热器','STEAM TUBE':'蒸汽管','BIMETAL DISC':'双金属片','SWITCH':'开关',

    'Speed':'风速','Swing on / off':'开启 / 关闭摇头','Tilt':'俯仰角度','Up':'向上','Level':'水平','low':'低速','medium':'中速','high':'高速','pick a speed, let it swing, tilt the head':'选择风速、开启摇头，再调整俯仰角度。','already off — the blades are coasting to a stop':'已经关闭，叶片正在惯性减速','the fan is already off':'风扇已经关闭','switched on at speed 1 — the swing is driven by the motor':'已开启 1 档，电机带动摇头机构','swinging side to side':'正在左右摇头','swing off — the head stays where it is':'摇头已关闭，机头保持当前位置','swinging':'摇头中','OFF':'关闭',
    'BOILER 1.8 L · 12 BAR':'锅炉 1.8 L · 12 bar','HI':'最高','THANK':'谢谢','YOU':'惠顾','COINS':'硬币','BELOW':'在下方','ENJOY':'请享用','PICK':'选择','SOLD':'已经','No figures yet':'暂无小机关'
  });

  // Match case variants only when the same spelling has no conflicting meanings.
  const folded = new Map();
  for (const [key, value] of Object.entries(dictionary)) {
    const lower = key.toLowerCase();
    folded.set(lower, folded.has(lower) && folded.get(lower) !== value ? null : value);
  }
  const brands = new Set(['Colorfigures','April Zhu','WASHMATIC','WASHMATIC 9','CAFFÈ','MICRO·CHEF','TOASTY','SHARPY','FRIGO','GACHA','COLORFIG CO.','STAR BLASTER','SPIN','BREEZE','TAC0 8','RETRO']);
  const direct = (text, context) => {
    if ((context === 'canova' || context === 'sculpture') && text === 'Pause') return '暂停播放';
    if ((context === 'canova' || context === 'sculpture') && text === 'Resume') return '继续播放';
    if (text === 'SPIN' && context === 'washer') return '脱水';
    if (context === 'vending' && text === 'OUT') return '售罄';
    if (context === 'vending' && text === 'MAX') return '最多';
    if (brands.has(text)) return text;
    return Object.prototype.hasOwnProperty.call(dictionary, text) ? dictionary[text] : folded.get(text.toLowerCase());
  };

  function core(text, context, depth = 0) {
    const known = direct(text, context);
    if (known != null) return known;
    if (depth > 5) return text;
    const tr = value => core(value, context, depth + 1);
    const food = value => tr(value.replace(/^the /i, ''));
    const rules = [
      [/^(.+)(▾)$/, (_, label, marker) => `${tr(label)}${marker}`],
      [/^(\d+) (INSERT COIN|TURN CRANK|TAKE GUM)$/, (_, n, label) => `${n} ${tr(label)}`],
      [/^Fig(?:ure)?\.?\s*(\d+)(?:\s*[·—]\s*(.+))?$/i, (_, n, name) => `图 ${n}${name ? ` · ${tr(name)}` : ''}`],
      [/^(.+) · Colorfigures recreation$/, (_, name) => `${tr(name)} · Colorfigures 复刻`],
      [/^(COTTON|QUICK|SPIN) paused$/i, (_, name) => `${tr(name.toUpperCase())}已暂停`],
      [/^♪ ding! (cotton|quick|spin) done — open the door$/i, (_, name) => `♪ 叮，${tr(name.toUpperCase())}完成，请开门`],
      [/^(\d+:\d+) left$/i, (_, time) => `剩余 ${time}`],
      [/^Heating… boiler ([\d.]+) bar$/i, (_, pressure) => `正在加热，锅炉 ${pressure} bar`],
      [/^boiler ([\d.]+) bar$/i, (_, pressure) => `锅炉 ${pressure} bar`],
      [/^Shot ready(?: \((\d+) s\))?$/i, (_, seconds) => `咖啡已萃取好${seconds ? `（${seconds} 秒）` : ''}`],
      [/^(\d+)% — click the jug to stop$/i, (_, n) => `${n}% — 点击奶缸停止`],
      [/^([\d.]+) s \/ ([\d.]+) s$/i, (_, a, b) => `${a} 秒 / ${b} 秒`],
      [/^Vending ([A-D]\d)…$/i, (_, code) => `正在出货 ${code}…`],
      [/^([A-D]\d) is in the tray — click it to collect$/i, (_, code) => `${code} 已到托盘，点击取走`],
      [/^([A-D]\d) is in the tray — open the pickup door$/i, (_, code) => `${code} 已到托盘，请打开取货门`],
      [/^(\$[\d.]+) in the coin return — click the cup to collect$/i, (_, money) => `退币杯内有 ${money}，点击取走`],
      [/^Collected (\$[\d.]+)$/i, (_, money) => `已取走 ${money}`],
      [/^INSERT\|(.+)$/i, (_, money) => `请投入|${money}`],
      [/^ENJOY\|([A-D]\d)$/i, (_, code) => `请享用|${code}`],
      [/^toasting · strip bent (\d+)%$/i, (_, n) => `正在烘烤 · 金属片弯曲 ${n}%`],
      [/^pop! (light|golden|dark|lightly) toasted · click it to take$/i, (_, shade) => `弹出来了，${tr(shade.toLowerCase())}吐司，点击取走`],
      [/^ready · shade: (light|golden|dark) · push the lever$/i, (_, shade) => `准备就绪 · ${tr(shade.toLowerCase())} · 按下压杆`],
      [/^(popcorn|soup|pizza) · (\d+:\d+)$/i, (_, name, time) => `${food(name)} · ${time}`],
      [/^DING! (popcorn|soup|pizza) is ready — open the door$/i, (_, name) => `叮，${food(name)}好了，请开门`],
      [/^DING! Done — open the door$/i, () => '叮，完成了，请开门'],
      [/^Cooking (popcorn|soup|pizza)$/i, (_, name) => `正在烹饪${food(name)}`],
      [/^~ h[m\s]+ ~$/i, () => '~ 嗡嗡嗡 ~'],
      [/^Putting in the (popcorn|soup|pizza)…$/i, (_, name) => `正在放入${food(name)}…`],
      [/^(popcorn|soup|pizza)(?: \((hot!|half cooked)\))?$/i, (_, name, state) => `${food(name)}${state ? `（${state === 'hot!' ? '很烫' : '还没熟'}）` : ''}`],
      [/^(popcorn|soup|pizza) is ready$/i, (_, name) => `${food(name)}好了`],
      [/^(popcorn|soup|pizza) inside$/i, (_, name) => `里面有${food(name)}`],
      [/^set (\d+:\d+)$/i, (_, time) => `设定 ${time}`],
      [/^Enjoy your (popcorn|soup|pizza)!$/i, (_, name) => `请享用${food(name)}`],
      [/^Took out the (popcorn|soup|pizza)( \(only half cooked\))?$/i, (_, name, half) => `已取出${food(name)}${half ? '（还没熟）' : ''}`],
      [/^out · (\d+)% sharp$/i, (_, n) => `铅笔已取出 · 削尖进度 ${n}%`],
      [/^(sharp!|getting sharper|blunt) · (\d+)% · turns (\d+) · shavings (\d+)$/i, (_, state, percent, turns, shavings) => `${tr(state)} · ${percent}% · 已转 ${turns} 圈 · 木屑 ${shavings}`],
      [/^wound (\d+) of (\d+) · (tight! )?space to let go$/i, (_, amount, max, tight) => `已上发条 ${amount}/${max}${tight ? '，已卷紧' : ''} · 按空格松手`],
      [/^stopped after (\d+) cm · (\d+) winds? · wind again for another go$/i, (_, distance, winds) => `行驶 ${distance} cm 后停下 · 上发条 ${winds} 次 · 再上发条继续玩`],
      [/^smoke in chamber: (\d+) bits$/i, (_, n) => `暗室内有 ${n} 团烟雾`],
      [/^(\d+) things on the shelves — click one to take it(?: out)?$/i, (_, n) => `层架上有 ${n} 件食物，点击一件取走`],
      [/^Took (.+)$/i, (_, name) => `已取走${food(name)}`],
      [/^Restocked (\d+) items?$/i, (_, n) => `已补回 ${n} 件食物`],
      [/^note (.+?) · tooth (\d+) of (\d+) · (.+)$/i, (_, note, n, total, hint) => `音符 ${note} · 第 ${n}/${total} 根梳齿 · ${tr(hint)}`],
      [/^whoosh! plug up · tank (\d+)%$/i, (_, n) => `哗，塞子抬起 · 水箱 ${n}%`],
      [/^plug shut · tap open · filling (\d+)%$/i, (_, n) => `塞子关闭 · 进水阀打开 · 补水 ${n}%`],
      [/^float rising · tap closing · (\d+)%$/i, (_, n) => `浮球上升 · 进水阀正在关闭 · ${n}%`],
      [/^Turning — (.+)$/i, (_, clicks) => `正在转动 — ${clicks.replace(/click/g, '咔嗒')}`],
      [/^You got: (.+?)( \(rare!\))? — click to clear$/i, (_, prize, rare) => `获得了${tr(prize)}${rare ? '（稀有）' : ''}，点击收好`],
      [/^(.+) added to your collection$/i, (_, prize) => `${tr(prize)}已加入收藏`],
      [/^Insert a coin \(100¥\) — (\d+) capsules left$/i, (_, n) => `投入硬币（100¥）· 剩余 ${n} 个胶囊`],
      [/^(\d+) capsules inside — what will you get\?$/i, (_, n) => `仓内有 ${n} 个胶囊，会得到什么呢？`],
      [/^Strip collected \((\d+) so far\)$/i, (_, n) => `照片条已收取，累计 ${n} 条`],
      [/^Flash! · shot (\d+) of (\d+)$/i, (_, n, total) => `闪光！· 第 ${n}/${total} 张`],
      [/^Shot (\d+) of (\d+) · (\d+)…$/i, (_, n, total, count) => `第 ${n}/${total} 张 · ${count}…`],
      [/^Shot (\d+) of (\d+) taken$/i, (_, n, total) => `已拍 ${n}/${total} 张`],
      [/^(Game over|Playing) · score (\d+) — turn to the front to see the screen$/i, (_, state, score) => `${tr(state)} · 得分 ${score} · 转到正面查看屏幕`],
      [/^Paused mid-game · score (\d+) — press ← → or fire to resume$/i, (_, score) => `游戏已暂停 · 得分 ${score} · 按 ← → 或发射继续`],
      [/^Score (\d+) · ships (\d+) · ← → or the joystick to steer, space \/ red button to fire$/i, (_, score, ships) => `得分 ${score} · 飞船 ${ships} · ← → 或摇杆移动，空格 / 红色按钮发射`],
      [/^Game over · score (\d+) · hi (\d+)( — press 1P start| — insert coin)?$/i, (_, score, hi, next) => `游戏结束 · 得分 ${score} · 最高 ${hi}${next ? ` — ${tr(next.slice(3))}` : ''}`],
      [/^Credits (\d+) — press the white 1P START button \(or Enter\)$/i, (_, credits) => `游戏币 ${credits} · 按白色单人开始按钮（或回车）`],
      [/^(SCORE|HI|CREDIT)\s+(\d+)$/i, (_, key, n) => `${({SCORE:'得分',HI:'最高',CREDIT:'游戏币'})[key.toUpperCase()]} ${n}`],
      [/^Order #(\d+) is up · (taco|burrito|nachos) on the counter$/i, (_, n, dish) => `第 ${n} 单好了，${food(dish)}已放到柜台`],
      [/^Order #(\d+) · enjoy!$/i, (_, n) => `第 ${n} 单，请享用`],
      [/^Cooking order #(\d+)$/i, (_, n) => `正在制作第 ${n} 单`],
      [/^(taco|burrito|nachos) (\d+)%$/i, (_, name, n) => `${food(name)} ${n}%`],
      [/^(\d+) waiting$/i, (_, n) => `${n} 单等待中`],
      [/^#(\d+) ready$/i, (_, n) => `第 ${n} 单已就绪`],
      [/^Order #(\d+) ready · click the (taco|burrito|nachos) on the counter$/i, (_, n, dish) => `第 ${n} 单好了，点击柜台上的${food(dish)}取走`],
      [/^HEATING (\d+)C$/i, (_, n) => `加热中 ${n}°C`],
      [/^OFF (\d+)C$/i, (_, n) => `已关闭 ${n}°C`],
      [/^it already holds ([\d.]+) L$/i, (_, n) => `壶内已有 ${n} L 水`],
      [/^speed ([123])(?: · swinging)?$/i, (all, n) => `${n} 档${/swinging/i.test(all) ? ' · 摇头中' : ''}`],
      [/^the head is already tilted (up|level|down)$/i, (_, direction) => `机头已经${tr(direction)}`],
      [/^(.+) — already set$/i, (_, choice) => `${tr(choice)}，已经选定`],
      [/^(.+) isn't possible right now$/i, (_, choice) => `当前无法选择${tr(choice)}`],
      [/^(heating the water|grinding|adding the grounds)(?:, then (heating the water|grinding|adding the grounds))? first$/i, (_, first, next) => `请先${tr(first)}${next ? `，再${tr(next)}` : ''}`]
    ];
    for (const [pattern, replacement] of rules) {
      if (pattern.test(text)) return text.replace(pattern, replacement);
    }
    // Compound live readouts are assembled from already-translated complete phrases.
    for (const separator of [' · ', ' — ']) {
      if (text.includes(separator)) {
        const parts = text.split(separator), translated = parts.map(part => tr(part));
        if (translated.some((part, index) => part !== parts[index])) return translated.join(separator);
      }
    }
    return text;
  }

  function translate(value, locale, context) {
    if (locale !== 'zh' || typeof value !== 'string' || !value.trim()) return value;
    const [, leading, body, trailing] = value.match(/^(\s*)([\s\S]*?)(\s*)$/);
    return leading + core(body, context) + trailing;
  }

  window.ColorfiguresText = Object.freeze({ translate, dictionary, locales: ['en', 'zh'] });
})();
