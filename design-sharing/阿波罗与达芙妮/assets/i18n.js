(() => {
  'use strict';
  if(!document.documentElement)return;
  const eventName='colorfigures:language';
  const attributes=['aria-label','aria-description','aria-valuetext','title','placeholder','alt','label'];
  const originals=new WeakMap();
  const context='sculpture';
  const locale='zh';
  const text=(value)=>window.ColorfiguresText.translate(value,locale,context);
  function excluded(element){return !element||!!element.closest('script,style,noscript,[data-i18n-ignore]');}
  function replace(node,name,value){
    let saved=originals.get(node);
    if(!saved){saved={};originals.set(node,saved);}
    const previous=saved[name];
    const source=previous&&value===previous.output?previous.source:value;
    const output=text(source);
    saved[name]={source,output};
    if(output!==value){if(name==='text')node.data=output;else node.setAttribute(name,output);}
  }
  function translate(root=document.documentElement){
    if(root.nodeType===3){if(!excluded(root.parentElement))replace(root,'text',root.data);return;}
    if(root.nodeType===9)root=root.documentElement;
    if(root.nodeType!==1||excluded(root))return;
    for(const element of [root,...root.querySelectorAll('[aria-label],[aria-description],[aria-valuetext],[title],[placeholder],[alt],[label]')]){
      if(excluded(element))continue;
      for(const name of attributes){const value=element.getAttribute(name);if(value)replace(element,name,value);}
    }
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    let node;
    while((node=walker.nextNode()))if(node.data.trim()&&!excluded(node.parentElement))replace(node,'text',node.data);
  }
  const observer=new MutationObserver(records=>{
    if(locale==='en')return;
    observer.disconnect();
    const roots=new Set();
    for(const record of records){
      if(record.type==='childList'){if(record.addedNodes.length)roots.add(record.target);}
      else roots.add(record.target);
    }
    for(const root of roots)if(root.isConnected)translate(root);
    observe();
  });
  function observe(){if(document.documentElement)observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:attributes});}
  function set(next){
    if(next!=='zh'||!document.documentElement)return;
    observer.disconnect();
    document.documentElement.lang=locale==='zh'?'zh-CN':'en';
    translate();
    document.querySelectorAll('[data-locale]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.locale===locale)));
    observe();
    window.dispatchEvent(new CustomEvent(eventName,{detail:locale}));
    for(const frame of document.querySelectorAll('iframe'))frame.contentWindow?.postMessage({type:eventName,locale},location.origin);
  }
  window.ColorfiguresLocale={get:()=>locale,set,translate};
  set(locale);
})();
