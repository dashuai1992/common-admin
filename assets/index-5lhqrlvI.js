import{Z as Xe,_ as et,$ as ge,a0 as tt,d as L,a1 as A,e as I,o as f,c as P,b as $,r as T,v as z,u as H,f as k,m as b,B as x,a2 as Be,a3 as He,g as ee,n as ze,a4 as xe,a5 as we,z as Ve,a6 as nt,x as fe,k as O,a7 as ot,a8 as st,P as be,I as ie,l as Te,E as ye,Q as je,h as w,a9 as te,aa as qe,ab as at,F as Q,O as Oe,ac as Le,ad as ve,ae as lt,w as it,af as ut,L as rt,t as ct,W as ue,D as Me,q as he,ag as Pe,ah as dt,G as pt,A as Ae,s as Se,ai as mt,aj as ft,p as vt,a as ht}from"./index-untXIC5m.js";import{E as Ue,I as _t,a as gt}from"./IndexHeaderUser-Chf8mh7F.js";import{u as bt,a as ne,_ as re,b as pe,r as Ce,h as yt,T as Mt,i as le,E as Ct}from"./el-button-RZyaAOMD.js";import{_ as D}from"./plugin-vueexport-helper-DlAUqK2U.js";import{E as W,u as It}from"./aria-D7INUw58.js";import{t as _e,i as Re}from"./el-badge-QthoRExF.js";import{m as kt}from"./typescript-Bp3YSIOJ.js";import{f as $t}from"./vnode-vwvOjtJd.js";import"./el-button-group-DzpN_ZK4.js";const me=function(e,n,...o){let a;n.includes("mouse")||n.includes("click")?a="MouseEvents":n.includes("key")?a="KeyboardEvent":a="HTMLEvents";const t=document.createEvent(a);return t.initEvent(n,...o),e.dispatchEvent(t),e},G=new Map;if(Xe){let e;document.addEventListener("mousedown",n=>e=n),document.addEventListener("mouseup",n=>{if(e){for(const o of G.values())for(const{documentHandler:a}of o)a(n,e);e=void 0}})}function We(e,n){let o=[];return Array.isArray(n.arg)?o=n.arg:et(n.arg)&&o.push(n.arg),function(a,t){const d=n.instance.popperRef,l=a.target,g=t==null?void 0:t.target,s=!n||!n.instance,p=!l||!g,v=e.contains(l)||e.contains(g),m=e===l,u=o.length&&o.some(N=>N==null?void 0:N.contains(l))||o.length&&o.includes(g),h=d&&(d.contains(l)||d.contains(g));s||p||v||m||u||h||n.value(a,t)}}const Et={beforeMount(e,n){G.has(e)||G.set(e,[]),G.get(e).push({documentHandler:We(e,n),bindingFn:n.value})},updated(e,n){G.has(e)||G.set(e,[]);const o=G.get(e),a=o.findIndex(d=>d.bindingFn===n.oldValue),t={documentHandler:We(e,n),bindingFn:n.value};a>=0?o.splice(a,1,t):o.push(t)},unmounted(e){G.delete(e)}},Tt=ge({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:tt},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),St={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},xt=L({name:"ElTag"}),wt=L({...xt,props:Tt,emits:St,setup(e,{emit:n}){const o=e,a=bt(),t=A("tag"),d=I(()=>{const{type:s,hit:p,effect:v,closable:m,round:u}=o;return[t.b(),t.is("closable",m),t.m(s||"primary"),t.m(a.value),t.m(v),t.is("hit",p),t.is("round",u)]}),l=s=>{n("close",s)},g=s=>{n("click",s)};return(s,p)=>s.disableTransitions?(f(),P("span",{key:0,class:z(H(d)),style:ze({backgroundColor:s.color}),onClick:g},[$("span",{class:z(H(t).e("content"))},[T(s.$slots,"default")],2),s.closable?(f(),k(H(ne),{key:0,class:z(H(t).e("close")),onClick:He(l,["stop"])},{default:b(()=>[x(H(Be))]),_:1},8,["class","onClick"])):ee("v-if",!0)],6)):(f(),k(xe,{key:1,name:`${H(t).namespace.value}-zoom-in-center`,appear:""},{default:b(()=>[$("span",{class:z(H(d)),style:ze({backgroundColor:s.color}),onClick:g},[$("span",{class:z(H(t).e("content"))},[T(s.$slots,"default")],2),s.closable?(f(),k(H(ne),{key:0,class:z(H(t).e("close")),onClick:He(l,["stop"])},{default:b(()=>[x(H(Be))]),_:1},8,["class","onClick"])):ee("v-if",!0)],6)]),_:3},8,["name"]))}});var Ot=re(wt,[["__file","tag.vue"]]);const Pt=we(Ot),Nt=L({name:"ElCollapseTransition"}),Bt=L({...Nt,setup(e){const n=A("collapse-transition"),o=t=>{t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},a={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height&&(t.dataset.elExistsHeight=t.style.height),t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){requestAnimationFrame(()=>{t.dataset.oldOverflow=t.style.overflow,t.dataset.elExistsHeight?t.style.maxHeight=t.dataset.elExistsHeight:t.scrollHeight!==0?t.style.maxHeight=`${t.scrollHeight}px`:t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom,t.style.overflow="hidden"})},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},enterCancelled(t){o(t)},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){o(t)},leaveCancelled(t){o(t)}};return(t,d)=>(f(),k(xe,Ve({name:H(n).b()},nt(a)),{default:b(()=>[T(t.$slots,"default")]),_:3},16,["name"]))}});var Ht=re(Bt,[["__file","collapse-transition.vue"]]);const zt=we(Ht);let Lt=class{constructor(n,o){this.parent=n,this.domNode=o,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(n){n===this.subMenuItems.length?n=0:n<0&&(n=this.subMenuItems.length-1),this.subMenuItems[n].focus(),this.subIndex=n}addListeners(){const n=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,o=>{o.addEventListener("keydown",a=>{let t=!1;switch(a.code){case W.down:{this.gotoSubIndex(this.subIndex+1),t=!0;break}case W.up:{this.gotoSubIndex(this.subIndex-1),t=!0;break}case W.tab:{me(n,"mouseleave");break}case W.enter:case W.space:{t=!0,a.currentTarget.click();break}}return t&&(a.preventDefault(),a.stopPropagation()),!1})})}},At=class{constructor(n,o){this.domNode=n,this.submenu=null,this.submenu=null,this.init(o)}init(n){this.domNode.setAttribute("tabindex","0");const o=this.domNode.querySelector(`.${n}-menu`);o&&(this.submenu=new Lt(this,o)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",n=>{let o=!1;switch(n.code){case W.down:{me(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),o=!0;break}case W.up:{me(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),o=!0;break}case W.tab:{me(n.currentTarget,"mouseleave");break}case W.enter:case W.space:{o=!0,n.currentTarget.click();break}}o&&n.preventDefault()})}},Rt=class{constructor(n,o){this.domNode=n,this.init(o)}init(n){const o=this.domNode.childNodes;Array.from(o).forEach(a=>{a.nodeType===1&&new At(a,n)})}};const Wt=L({name:"ElMenuCollapseTransition",setup(){const e=A("menu");return{listeners:{onBeforeEnter:o=>o.style.opacity="0.2",onEnter(o,a){pe(o,`${e.namespace.value}-opacity-transition`),o.style.opacity="1",a()},onAfterEnter(o){Ce(o,`${e.namespace.value}-opacity-transition`),o.style.opacity=""},onBeforeLeave(o){o.dataset||(o.dataset={}),yt(o,e.m("collapse"))?(Ce(o,e.m("collapse")),o.dataset.oldOverflow=o.style.overflow,o.dataset.scrollWidth=o.clientWidth.toString(),pe(o,e.m("collapse"))):(pe(o,e.m("collapse")),o.dataset.oldOverflow=o.style.overflow,o.dataset.scrollWidth=o.clientWidth.toString(),Ce(o,e.m("collapse"))),o.style.width=`${o.scrollWidth}px`,o.style.overflow="hidden"},onLeave(o){pe(o,"horizontal-collapse-transition"),o.style.width=`${o.dataset.scrollWidth}px`}}}}});function Dt(e,n,o,a,t,d){return f(),k(xe,Ve({mode:"out-in"},e.listeners),{default:b(()=>[T(e.$slots,"default")]),_:3},16)}var Ft=re(Wt,[["render",Dt],["__file","menu-collapse-transition.vue"]]);function Ge(e,n){const o=I(()=>{let t=e.parent;const d=[n.value];for(;t.type.name!=="ElMenu";)t.props.index&&d.unshift(t.props.index),t=t.parent;return d});return{parentMenu:I(()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t}),indexPath:o}}function Vt(e){return I(()=>{const o=e.backgroundColor;return o?new Mt(o).shade(20).toString():""})}const Ke=(e,n)=>{const o=A("menu");return I(()=>o.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":Vt(e).value||"","active-color":e.activeTextColor||"",level:`${n}`}))},jt=ge({index:{type:String,required:!0},showTimeout:Number,hideTimeout:Number,popperClass:String,disabled:Boolean,teleported:{type:Boolean,default:void 0},popperOffset:Number,expandCloseIcon:{type:le},expandOpenIcon:{type:le},collapseCloseIcon:{type:le},collapseOpenIcon:{type:le}}),Ie="ElSubMenu";var Ne=L({name:Ie,props:jt,setup(e,{slots:n,expose:o}){const a=Oe(),{indexPath:t,parentMenu:d}=Ge(a,I(()=>e.index)),l=A("menu"),g=A("sub-menu"),s=fe("rootMenu");s||_e(Ie,"can not inject root menu");const p=fe(`subMenu:${d.value.uid}`);p||_e(Ie,"can not inject sub menu");const v=O({}),m=O({});let u;const h=O(!1),N=O(),Y=O(null),F=I(()=>Z.value==="horizontal"&&V.value?"bottom-start":"right-start"),q=I(()=>Z.value==="horizontal"&&V.value||Z.value==="vertical"&&!s.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?M.value?e.expandOpenIcon:e.expandCloseIcon:ot:e.collapseCloseIcon&&e.collapseOpenIcon?M.value?e.collapseOpenIcon:e.collapseCloseIcon:st),V=I(()=>p.level===0),K=I(()=>{const c=e.teleported;return c===void 0?V.value:c}),oe=I(()=>s.props.collapse?`${l.namespace.value}-zoom-in-left`:`${l.namespace.value}-zoom-in-top`),se=I(()=>Z.value==="horizontal"&&V.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),M=I(()=>s.openedMenus.includes(e.index)),U=I(()=>{let c=!1;return Object.values(v.value).forEach(y=>{y.active&&(c=!0)}),Object.values(m.value).forEach(y=>{y.active&&(c=!0)}),c}),Z=I(()=>s.props.mode),J=be({index:e.index,indexPath:t,active:U}),ae=Ke(s.props,p.level+1),ce=I(()=>{var c;return(c=e.popperOffset)!=null?c:s.props.popperOffset}),X=I(()=>{var c;return(c=e.popperClass)!=null?c:s.props.popperClass}),de=I(()=>{var c;return(c=e.showTimeout)!=null?c:s.props.showTimeout}),i=I(()=>{var c;return(c=e.hideTimeout)!=null?c:s.props.hideTimeout}),r=()=>{var c,y,S;return(S=(y=(c=Y.value)==null?void 0:c.popperRef)==null?void 0:y.popperInstanceRef)==null?void 0:S.destroy()},_=c=>{c||r()},E=()=>{s.props.menuTrigger==="hover"&&s.props.mode==="horizontal"||s.props.collapse&&s.props.mode==="vertical"||e.disabled||s.handleSubMenuClick({index:e.index,indexPath:t.value,active:U.value})},C=(c,y=de.value)=>{var S;if(c.type!=="focus"){if(s.props.menuTrigger==="click"&&s.props.mode==="horizontal"||!s.props.collapse&&s.props.mode==="vertical"||e.disabled){p.mouseInChild.value=!0;return}p.mouseInChild.value=!0,u==null||u(),{stop:u}=Le(()=>{s.openMenu(e.index,t.value)},y),K.value&&((S=d.value.vnode.el)==null||S.dispatchEvent(new MouseEvent("mouseenter")))}},R=(c=!1)=>{var y;if(s.props.menuTrigger==="click"&&s.props.mode==="horizontal"||!s.props.collapse&&s.props.mode==="vertical"){p.mouseInChild.value=!1;return}u==null||u(),p.mouseInChild.value=!1,{stop:u}=Le(()=>!h.value&&s.closeMenu(e.index,t.value),i.value),K.value&&c&&((y=p.handleMouseleave)==null||y.call(p,!0))};ie(()=>s.props.collapse,c=>_(!!c));{const c=S=>{m.value[S.index]=S},y=S=>{delete m.value[S.index]};Te(`subMenu:${a.uid}`,{addSubMenu:c,removeSubMenu:y,handleMouseleave:R,mouseInChild:h,level:p.level+1})}return o({opened:M}),ye(()=>{s.addSubMenu(J),p.addSubMenu(J)}),je(()=>{p.removeSubMenu(J),s.removeSubMenu(J)}),()=>{var c;const y=[(c=n.title)==null?void 0:c.call(n),w(ne,{class:g.e("icon-arrow"),style:{transform:M.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&s.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>te(q.value)?w(a.appContext.components[q.value]):w(q.value)})],S=s.isMenuPopup?w(Ue,{ref:Y,visible:M.value,effect:"light",pure:!0,offset:ce.value,showArrow:!1,persistent:!0,popperClass:X.value,placement:F.value,teleported:K.value,fallbackPlacements:se.value,transition:oe.value,gpuAcceleration:!1},{content:()=>{var B;return w("div",{class:[l.m(Z.value),l.m("popup-container"),X.value],onMouseenter:j=>C(j,100),onMouseleave:()=>R(!0),onFocus:j=>C(j,100)},[w("ul",{class:[l.b(),l.m("popup"),l.m(`popup-${F.value}`)],style:ae.value},[(B=n.default)==null?void 0:B.call(n)])])},default:()=>w("div",{class:g.e("title"),onClick:E},y)}):w(Q,{},[w("div",{class:g.e("title"),ref:N,onClick:E},y),w(zt,{},{default:()=>{var B;return qe(w("ul",{role:"menu",class:[l.b(),l.m("inline")],style:ae.value},[(B=n.default)==null?void 0:B.call(n)]),[[at,M.value]])}})]);return w("li",{class:[g.b(),g.is("active",U.value),g.is("opened",M.value),g.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:M.value,onMouseenter:C,onMouseleave:()=>R(),onFocus:C},[S])}}});const qt=ge({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:ve(Array),default:()=>kt([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,closeOnClickOutside:Boolean,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperOffset:{type:Number,default:6},ellipsisIcon:{type:le,default:()=>lt},popperEffect:{type:ve(String),default:"dark"},popperClass:String,showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300}}),ke=e=>Array.isArray(e)&&e.every(n=>te(n)),Ut={close:(e,n)=>te(e)&&ke(n),open:(e,n)=>te(e)&&ke(n),select:(e,n,o,a)=>te(e)&&ke(n)&&ut(o)&&(a===void 0||a instanceof Promise)};var Gt=L({name:"ElMenu",props:qt,emits:Ut,setup(e,{emit:n,slots:o,expose:a}){const t=Oe(),d=t.appContext.config.globalProperties.$router,l=O(),g=A("menu"),s=A("sub-menu"),p=O(-1),v=O(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),m=O(e.defaultActive),u=O({}),h=O({}),N=I(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),Y=()=>{const i=m.value&&u.value[m.value];if(!i||e.mode==="horizontal"||e.collapse)return;i.indexPath.forEach(_=>{const E=h.value[_];E&&F(_,E.indexPath)})},F=(i,r)=>{v.value.includes(i)||(e.uniqueOpened&&(v.value=v.value.filter(_=>r.includes(_))),v.value.push(i),n("open",i,r))},q=i=>{const r=v.value.indexOf(i);r!==-1&&v.value.splice(r,1)},V=(i,r)=>{q(i),n("close",i,r)},K=({index:i,indexPath:r})=>{v.value.includes(i)?V(i,r):F(i,r)},oe=i=>{(e.mode==="horizontal"||e.collapse)&&(v.value=[]);const{index:r,indexPath:_}=i;if(!(Re(r)||Re(_)))if(e.router&&d){const E=i.route||r,C=d.push(E).then(R=>(R||(m.value=r),R));n("select",r,_,{index:r,indexPath:_,route:E},C)}else m.value=r,n("select",r,_,{index:r,indexPath:_})},se=i=>{const r=u.value,_=r[i]||m.value&&r[m.value]||r[e.defaultActive];_?m.value=_.index:m.value=i},M=i=>{const r=getComputedStyle(i),_=Number.parseInt(r.marginLeft,10),E=Number.parseInt(r.marginRight,10);return i.offsetWidth+_+E||0},U=()=>{var i,r;if(!l.value)return-1;const _=Array.from((r=(i=l.value)==null?void 0:i.childNodes)!=null?r:[]).filter(j=>j.nodeName!=="#comment"&&(j.nodeName!=="#text"||j.nodeValue)),E=64,C=getComputedStyle(l.value),R=Number.parseInt(C.paddingLeft,10),c=Number.parseInt(C.paddingRight,10),y=l.value.clientWidth-R-c;let S=0,B=0;return _.forEach((j,Je)=>{S+=M(j),S<=y-E&&(B=Je+1)}),B===_.length?-1:B},Z=i=>h.value[i].indexPath,J=(i,r=33.34)=>{let _;return()=>{_&&clearTimeout(_),_=setTimeout(()=>{i()},r)}};let ae=!0;const ce=()=>{if(p.value===U())return;const i=()=>{p.value=-1,rt(()=>{p.value=U()})};ae?i():J(i)(),ae=!1};ie(()=>e.defaultActive,i=>{u.value[i]||(m.value=""),se(i)}),ie(()=>e.collapse,i=>{i&&(v.value=[])}),ie(u.value,Y);let X;it(()=>{e.mode==="horizontal"&&e.ellipsis?X=It(l,ce).stop:X==null||X()});const de=O(!1);{const i=C=>{h.value[C.index]=C},r=C=>{delete h.value[C.index]};Te("rootMenu",be({props:e,openedMenus:v,items:u,subMenus:h,activeIndex:m,isMenuPopup:N,addMenuItem:C=>{u.value[C.index]=C},removeMenuItem:C=>{delete u.value[C.index]},addSubMenu:i,removeSubMenu:r,openMenu:F,closeMenu:V,handleMenuItemClick:oe,handleSubMenuClick:K})),Te(`subMenu:${t.uid}`,{addSubMenu:i,removeSubMenu:r,mouseInChild:de,level:0})}return ye(()=>{e.mode==="horizontal"&&new Rt(t.vnode.el,g.namespace.value)}),a({open:r=>{const{indexPath:_}=h.value[r];_.forEach(E=>F(E,_))},close:q,handleResize:ce}),()=>{var i,r;let _=(r=(i=o.default)==null?void 0:i.call(o))!=null?r:[];const E=[];if(e.mode==="horizontal"&&l.value){const y=$t(_),S=p.value===-1?y:y.slice(0,p.value),B=p.value===-1?[]:y.slice(p.value);B!=null&&B.length&&e.ellipsis&&(_=S,E.push(w(Ne,{index:"sub-menu-more",class:s.e("hide-arrow"),popperOffset:e.popperOffset},{title:()=>w(ne,{class:s.e("icon-more")},{default:()=>w(e.ellipsisIcon)}),default:()=>B})))}const C=Ke(e,0),R=e.closeOnClickOutside?[[Et,()=>{v.value.length&&(de.value||(v.value.forEach(y=>n("close",y,Z(y))),v.value=[]))}]]:[],c=qe(w("ul",{key:String(e.collapse),role:"menubar",ref:l,style:C.value,class:{[g.b()]:!0,[g.m(e.mode)]:!0,[g.m("collapse")]:e.collapse}},[..._,...E]),R);return e.collapseTransition&&e.mode==="vertical"?w(Ft,()=>c):c}}});const Kt=ge({index:{type:ve([String,null]),default:null},route:{type:ve([String,Object])},disabled:Boolean}),Zt={click:e=>te(e.index)&&Array.isArray(e.indexPath)},$e="ElMenuItem",Qt=L({name:$e,components:{ElTooltip:Ue},props:Kt,emits:Zt,setup(e,{emit:n}){const o=Oe(),a=fe("rootMenu"),t=A("menu"),d=A("menu-item");a||_e($e,"can not inject root menu");const{parentMenu:l,indexPath:g}=Ge(o,ct(e,"index")),s=fe(`subMenu:${l.value.uid}`);s||_e($e,"can not inject sub menu");const p=I(()=>e.index===a.activeIndex),v=be({index:e.index,indexPath:g,active:p}),m=()=>{e.disabled||(a.handleMenuItemClick({index:e.index,indexPath:g.value,route:e.route}),n("click",v))};return ye(()=>{s.addSubMenu(v),a.addMenuItem(v)}),je(()=>{s.removeSubMenu(v),a.removeMenuItem(v)}),{parentMenu:l,rootMenu:a,active:p,nsMenu:t,nsMenuItem:d,handleClick:m}}});function Yt(e,n,o,a,t,d){const l=ue("el-tooltip");return f(),P("li",{class:z([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:e.handleClick},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(f(),k(l,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:b(()=>[T(e.$slots,"title")]),default:b(()=>[$("div",{class:z(e.nsMenu.be("tooltip","trigger"))},[T(e.$slots,"default")],2)]),_:3},8,["effect"])):(f(),P(Q,{key:1},[T(e.$slots,"default"),T(e.$slots,"title")],64))],10,["onClick"])}var Ze=re(Qt,[["render",Yt],["__file","menu-item.vue"]]);const Jt={title:String},Xt="ElMenuItemGroup",en=L({name:Xt,props:Jt,setup(){return{ns:A("menu-item-group")}}});function tn(e,n,o,a,t,d){return f(),P("li",{class:z(e.ns.b())},[$("div",{class:z(e.ns.e("title"))},[e.$slots.title?T(e.$slots,"title",{key:1}):(f(),P(Q,{key:0},[Me(he(e.title),1)],64))],2),$("ul",null,[T(e.$slots,"default")])],2)}var Qe=re(en,[["render",tn],["__file","menu-item-group.vue"]]);const nn=we(Gt,{MenuItem:Ze,MenuItemGroup:Qe,SubMenu:Ne}),on=Pe(Ze);Pe(Qe);const sn=Pe(Ne),an="/common-admin/assets/menu_top_logo-Du-TojUW.png",ln={},un={class:"layout-wrapper"};function rn(e,n){return f(),P("div",un,[T(e.$slots,"default",{},void 0,!0)])}const cn=D(ln,[["render",rn],["__scopeId","data-v-e4dad8dd"]]),dn={class:"left-content"},Ee=1080,pn=L({__name:"LeftContainer",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:["update:modelValue"],setup(e,{expose:n}){const o=dt(e,"modelValue"),a=O(window.innerWidth),t=window.innerWidth<Ee;o.value=!t;const d=O(t),l=()=>{a.value=window.innerWidth,a.value<Ee&&(d.value=!0,o.value=!1)};ye(()=>{window.addEventListener("resize",l)}),pt(()=>{window.removeEventListener("resize",l)});const g=()=>{d.value?(d.value=!d.value,setTimeout(()=>{o.value=!o.value},50)):(o.value=!o.value,setTimeout(()=>{d.value=!d.value},200))};return n({onOff:g}),(s,p)=>(f(),P("div",{class:z(["overlay",{"opacity-0":!o.value&&a.value<Ee,"display-none":d.value}]),onClick:g},[$("div",{class:z(["left",{"width-0":!o.value,"display-none":d.value}]),onClick:p[0]||(p[0]=v=>{v.stopPropagation()})},[$("div",dn,[T(s.$slots,"default",{},void 0,!0)])],2)],2))}}),mn=D(pn,[["__scopeId","data-v-5d3cb8b5"]]),fn={},vn={class:"layout-right-content-wrapper"};function hn(e,n){return f(),P("div",vn,[T(e.$slots,"default",{},void 0,!0)])}const _n=D(fn,[["render",hn],["__scopeId","data-v-3e0f9f14"]]),gn={},bn={class:"container-body br8 bs-el p10"};function yn(e,n){return f(),P("div",bn,[T(e.$slots,"default",{},void 0,!0)])}const Mn=D(gn,[["render",yn],["__scopeId","data-v-88027a50"]]),Cn={},In={class:"header-wrapper br8 bs-el p10"};function kn(e,n){return f(),P("div",In,[T(e.$slots,"default",{},void 0,!0)])}const De=D(Cn,[["render",kn],["__scopeId","data-v-b90e3dff"]]),$n={},En={class:"header-left padding-lr-8"};function Tn(e,n){return f(),P("div",En,[T(e.$slots,"default")])}const Sn=D($n,[["render",Tn]]),xn={},wn={class:"header-midium padding-lr-8"};function On(e,n){return f(),P("div",wn,[T(e.$slots,"default",{},void 0,!0)])}const Fe=D(xn,[["render",On],["__scopeId","data-v-f540c05c"]]),Pn={},Nn={class:"header-right padding-lr-8 center"};function Bn(e,n){return f(),P("div",Nn,[T(e.$slots,"default")])}const Hn=D(Pn,[["render",Bn]]),zn=L({__name:"MyMenuItem",props:{item:{}},setup(e){return(n,o)=>{var g,s,p,v;const a=ne,t=on,d=ue("MyMenuItem",!0),l=sn;return f(),P(Q,null,[(g=n.item)!=null&&g.component&&!((s=n.item.meta)!=null&&s.hidden)?(f(),k(t,{key:0,index:n.item.path},{title:b(()=>{var m;return[Me(he((m=n.item.meta)==null?void 0:m.title),1)]}),default:b(()=>{var m;return[(m=n.item.meta)!=null&&m.icon?(f(),k(a,{key:0},{default:b(()=>[(f(),k(Ae(n.item.meta.icon)))]),_:1})):ee("",!0)]}),_:1},8,["index"])):ee("",!0),!((p=n.item)!=null&&p.component)&&((v=n.item)!=null&&v.children)?(f(),k(l,{key:1,index:n.item.path},{title:b(()=>{var m,u;return[(m=n.item.meta)!=null&&m.icon?(f(),k(a,{key:0},{default:b(()=>{var h;return[(f(),k(Ae((h=n.item.meta)==null?void 0:h.icon)))]}),_:1})):ee("",!0),$("span",null,he((u=n.item.meta)==null?void 0:u.title),1)]}),default:b(()=>[(f(!0),P(Q,null,Se(n.item.children,m=>(f(),k(d,{item:m},null,8,["item"]))),256))]),_:1},8,["index"])):ee("",!0)],64)}}}),Ye=e=>(vt("data-v-31b873cf"),e=e(),ht(),e),Ln=Ye(()=>$("img",{class:"header-logo",src:an},null,-1)),An={class:"my-menu bs-el br8"},Rn={class:"toggle align-items-center"},Wn={class:"my-header-tags"},Dn={class:"body-view"},Fn=Ye(()=>$("div",{class:"copy-right-info"},[Me("Copyright © 2020-2024 YDS "),$("span",null,[$("a",{class:"iconfont icon-github",target:"_blank",href:"https://github.com/dashuai1992/common-admin"})])],-1)),Vn=L({__name:"index",setup(e){const n=mt(),o=ft(),a=O(),t=O(!0),d=O(""),l=be([{name:"主页",path:"/",checked:!0,closable:!1}]),g=u=>{let h=l.findIndex(N=>v(N,u));l.splice(h,1),l.length>=1?u.checked&&m(l.length-1):o.push("/")},s=u=>{let h=l.findIndex(N=>v(N,u));m(h)},p=u=>{let h=l.findIndex(N=>v(N,u));h<0?(l.push(u),m(l.length-1)):m(h)},v=(u,h)=>u.path===h.path,m=u=>{d.value=l[u].path,!l[u].checked&&(l.forEach(h=>h.checked=!1),l[u].checked=!0,o.push(l[u].path))};return ie(()=>o.currentRoute.value,u=>{var h;(h=u.meta)!=null&&h.title&&p({name:u.meta.title,path:u.path,checked:!1,closable:u.path!=="/"})},{immediate:!0}),(u,h)=>{const N=nn,Y=ue("Fold"),F=ue("Expand"),q=ne,V=Ct,K=Pt,oe=ue("router-view"),se=gt;return f(),k(cn,null,{default:b(()=>[x(mn,{ref_key:"left",ref:a,modelValue:t.value,"onUpdate:modelValue":h[0]||(h[0]=M=>t.value=M)},{default:b(()=>[$("div",null,[$("div",null,[x(De,null,{default:b(()=>[x(Fe,{class:"center"},{default:b(()=>[Ln]),_:1})]),_:1})]),$("div",An,[x(N,{class:"menu-height",router:!0,"default-active":d.value},{default:b(()=>[(f(!0),P(Q,null,Se(H(n).user.permissions,M=>(f(),k(zn,{item:M},null,8,["item"]))),256))]),_:1},8,["default-active"])])])]),_:1},8,["modelValue"]),x(_n,null,{default:b(()=>[x(De,null,{default:b(()=>[x(Sn,null,{default:b(()=>[$("div",Rn,[x(V,{type:"primary",plain:"",onClick:h[1]||(h[1]=M=>a.value.onOff())},{default:b(()=>[x(q,{size:"large"},{default:b(()=>[t.value?(f(),k(Y,{key:0})):(f(),k(F,{key:1}))]),_:1})]),_:1})])]),_:1}),x(Fe,null,{default:b(()=>[$("div",Wn,[(f(!0),P(Q,null,Se(l,M=>(f(),k(K,{class:z(["m5",M.checked?"":"cursor-pointer"]),key:M.name,size:"large",type:M.checked?"primary":"info",effect:M.checked?"dark":"light",closable:M.closable,round:!0,onClose:U=>g(M),onClick:U=>s(M)},{default:b(()=>[Me(he(M.name),1)]),_:2},1032,["class","type","effect","closable","onClose","onClick"]))),128))])]),_:1}),x(Hn,{class:"header-user-info"},{default:b(()=>[x(_t)]),_:1})]),_:1}),x(Mn,null,{default:b(()=>[x(se,null,{default:b(()=>[$("div",Dn,[x(oe)])]),_:1})]),_:1}),Fn]),_:1})]),_:1})}}}),jn=D(Vn,[["__scopeId","data-v-31b873cf"]]),qn=L({__name:"index",setup(e){return(n,o)=>(f(),k(jn))}}),so=D(qn,[["__scopeId","data-v-9cf3bf91"]]);export{so as default};
