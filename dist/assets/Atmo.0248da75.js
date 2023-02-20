import{o as L,u as $,w as _,r as p,c as v,d as P,P as T,h as F,F as Ye,a as S,b as ae,e as j,p as I,i as O,T as Ke,f as Qe,t as H,g as C,j as Ce,l as G,n as Ze,R as me,k as Xe,m as et,O as M,q as tt,s as ot,v as Se,x as Be,y as E,z as nt,A as z,B as N,C as at,D as Ie,E as rt,G as De,H as lt,I as st}from"./index.b2227315.js";const re=typeof window>"u"||typeof document>"u";function J(e){if(re)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=L(e);if(t)return t.ownerDocument}return document}let ve=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Z=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Z||{}),je=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(je||{}),it=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(it||{});function ut(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ve))}var Re=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Re||{});function dt(e,t=0){var a;return e===((a=J(e))==null?void 0:a.body)?!1:$(t,{[0](){return e.matches(ve)},[1](){let o=e;for(;o!==null;){if(o.matches(ve))return!0;o=o.parentElement}return!1}})}function Q(e){e==null||e.focus({preventScroll:!0})}let ct=["textarea","input"].join(",");function pt(e){var t,a;return(a=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,ct))!=null?a:!1}function ft(e,t=a=>a){return e.slice().sort((a,o)=>{let l=t(a),n=t(o);if(l===null||n===null)return 0;let r=l.compareDocumentPosition(n);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function he(e,t,a=!0,o=null){var l;let n=(l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?l:document,r=Array.isArray(e)?a?ft(e):e:ut(e);o=o!=null?o:n.activeElement;let s=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,r.indexOf(o))-1;if(t&4)return Math.max(0,r.indexOf(o))+1;if(t&8)return r.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=t&32?{preventScroll:!0}:{},d=0,c=r.length,m;do{if(d>=c||d+c<=0)return 0;let w=i+d;if(t&16)w=(w+c)%c;else{if(w<0)return 3;if(w>=c)return 1}m=r[w],m==null||m.focus(u),d+=s}while(m!==n.activeElement);return t&6&&pt(m)&&m.select(),m.hasAttribute("tabindex")||m.setAttribute("tabindex","0"),2}function pe(e,t,a){re||_(o=>{document.addEventListener(e,t,a),o(()=>document.removeEventListener(e,t,a))})}function mt(e,t,a=v(()=>!0)){function o(n,r){if(!a.value||n.defaultPrevented)return;let s=r(n);if(s===null||!s.getRootNode().contains(s))return;let i=function u(d){return typeof d=="function"?u(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let u of i){if(u===null)continue;let d=u instanceof HTMLElement?u:L(u);if(d!=null&&d.contains(s))return}return!dt(s,Re.Loose)&&s.tabIndex!==-1&&n.preventDefault(),t(n,s)}let l=p(null);pe("mousedown",n=>{var r,s;a.value&&(l.value=((s=(r=n.composedPath)==null?void 0:r.call(n))==null?void 0:s[0])||n.target)},!0),pe("click",n=>{!l.value||(o(n,()=>l.value),l.value=null)},!0),pe("blur",n=>o(n,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var ne=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ne||{});let ge=P({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:a}){return()=>{let{features:o,...l}=e,n={"aria-hidden":(o&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(o&4)===4&&(o&2)!==2&&{display:"none"}}};return T({ourProps:n,theirProps:l,slot:{},attrs:a,slots:t,name:"Hidden"})}}});function vt(e,t,a){re||_(o=>{window.addEventListener(e,t,a),o(()=>window.removeEventListener(e,t,a))})}var be=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(be||{});function ht(){let e=p(0);return vt("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Ne(e,t,a,o){re||_(l=>{e=e!=null?e:window,e.addEventListener(t,a,o),l(()=>e.removeEventListener(t,a,o))})}function gt(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}var Me=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Me||{});let K=Object.assign(P({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:Object,default:p(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:a,expose:o}){let l=p(null);o({el:l,$el:l});let n=v(()=>J(l));bt({ownerDocument:n},v(()=>Boolean(e.features&16)));let r=wt({ownerDocument:n,container:l,initialFocus:v(()=>e.initialFocus)},v(()=>Boolean(e.features&2)));yt({ownerDocument:n,container:l,containers:e.containers,previousActiveElement:r},v(()=>Boolean(e.features&8)));let s=ht();function i(){let u=L(l);!u||$(s.value,{[be.Forwards]:()=>he(u,Z.First),[be.Backwards]:()=>he(u,Z.Last)})}return()=>{let u={},d={ref:l},{features:c,initialFocus:m,containers:w,...y}=e;return F(Ye,[Boolean(c&4)&&F(ge,{as:"button",type:"button",onFocus:i,features:ne.Focusable}),T({ourProps:d,theirProps:{...t,...y},slot:u,attrs:t,slots:a,name:"FocusTrap"}),Boolean(c&4)&&F(ge,{as:"button",type:"button",onFocus:i,features:ne.Focusable})])}}}),{features:Me});function bt({ownerDocument:e},t){let a=p(null);function o(){var n;a.value||(a.value=(n=e.value)==null?void 0:n.activeElement)}function l(){!a.value||(Q(a.value),a.value=null)}S(()=>{ae(t,(n,r)=>{n!==r&&(n?o():l())},{immediate:!0})}),j(l)}function wt({ownerDocument:e,container:t,initialFocus:a},o){let l=p(null),n=p(!1);return S(()=>n.value=!0),j(()=>n.value=!1),S(()=>{ae([t,a,o],(r,s)=>{if(r.every((u,d)=>(s==null?void 0:s[d])===u)||!o.value)return;let i=L(t);!i||gt(()=>{var u,d;if(!n.value)return;let c=L(a),m=(u=e.value)==null?void 0:u.activeElement;if(c){if(c===m){l.value=m;return}}else if(i.contains(m)){l.value=m;return}c?Q(c):he(i,Z.First|Z.NoScroll)===je.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),l}function yt({ownerDocument:e,container:t,containers:a,previousActiveElement:o},l){var n;Ne((n=e.value)==null?void 0:n.defaultView,"focus",r=>{if(!l.value)return;let s=new Set(a==null?void 0:a.value);s.add(t);let i=o.value;if(!i)return;let u=r.target;u&&u instanceof HTMLElement?xt(s,u)?(o.value=u,Q(u)):(r.preventDefault(),r.stopPropagation(),Q(i)):Q(o.value)},!0)}function xt(e,t){var a;for(let o of e)if((a=o.value)!=null&&a.contains(t))return!0;return!1}let ke="body > *",W=new Set,B=new Map;function $e(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function Le(e){let t=B.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function Et(e,t=p(!0)){_(a=>{if(!t.value||!e.value)return;let o=e.value,l=J(o);if(l){W.add(o);for(let n of B.keys())n.contains(o)&&(Le(n),B.delete(n));l.querySelectorAll(ke).forEach(n=>{if(n instanceof HTMLElement){for(let r of W)if(n.contains(r))return;W.size===1&&(B.set(n,{"aria-hidden":n.getAttribute("aria-hidden"),inert:n.inert}),$e(n))}}),a(()=>{if(W.delete(o),W.size>0)l.querySelectorAll(ke).forEach(n=>{if(n instanceof HTMLElement&&!B.has(n)){for(let r of W)if(n.contains(r))return;B.set(n,{"aria-hidden":n.getAttribute("aria-hidden"),inert:n.inert}),$e(n)}});else for(let n of B.keys())Le(n),B.delete(n)})}})}let He=Symbol("ForcePortalRootContext");function Ft(){return O(He,!1)}let we=P({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:a}){return I(He,e.force),()=>{let{force:o,...l}=e;return T({theirProps:l,ourProps:{},slot:{},slots:t,attrs:a,name:"ForcePortalRoot"})}}});function St(e){let t=J(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let a=t.getElementById("headlessui-portal-root");if(a)return a;let o=t.createElement("div");return o.setAttribute("id","headlessui-portal-root"),t.body.appendChild(o)}let Ue=P({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:a}){let o=p(null),l=v(()=>J(o)),n=Ft(),r=O(qe,null),s=p(n===!0||r==null?St(o.value):r.resolveTarget());return _(()=>{n||r!=null&&(s.value=r.resolveTarget())}),j(()=>{var i,u;let d=(i=l.value)==null?void 0:i.getElementById("headlessui-portal-root");!d||s.value===d&&s.value.children.length<=0&&((u=s.value.parentElement)==null||u.removeChild(s.value))}),()=>{if(s.value===null)return null;let i={ref:o,"data-headlessui-portal":""};return F(Ke,{to:s.value},T({ourProps:i,theirProps:e,slot:{},attrs:a,slots:t,name:"Portal"}))}}}),qe=Symbol("PortalGroupContext"),Pt=P({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:a}){let o=Qe({resolveTarget(){return e.target}});return I(qe,o),()=>{let{target:l,...n}=e;return T({theirProps:n,ourProps:{},slot:{},attrs:t,slots:a,name:"PortalGroup"})}}}),Ve=Symbol("StackContext");var ye=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ye||{});function Tt(){return O(Ve,()=>{})}function _t({type:e,enabled:t,element:a,onUpdate:o}){let l=Tt();function n(...r){o==null||o(...r),l(...r)}S(()=>{ae(t,(r,s)=>{r?n(0,e,a):s===!0&&n(1,e,a)},{immediate:!0,flush:"sync"})}),j(()=>{t.value&&n(1,e,a)}),I(Ve,n)}let ze=Symbol("DescriptionContext");function At(){let e=O(ze,null);if(e===null)throw new Error("Missing parent");return e}function Dt({slot:e=p({}),name:t="Description",props:a={}}={}){let o=p([]);function l(n){return o.value.push(n),()=>{let r=o.value.indexOf(n);r!==-1&&o.value.splice(r,1)}}return I(ze,{register:l,slot:e,name:t,props:a}),v(()=>o.value.length>0?o.value.join(" "):void 0)}let vo=P({name:"Description",props:{as:{type:[Object,String],default:"p"}},setup(e,{attrs:t,slots:a}){let o=At(),l=`headlessui-description-${H()}`;return S(()=>j(o.register(l))),()=>{let{name:n="Description",slot:r=p({}),props:s={}}=o,i=e,u={...Object.entries(s).reduce((d,[c,m])=>Object.assign(d,{[c]:C(m)}),{}),id:l};return T({ourProps:u,theirProps:i,slot:r.value,attrs:t,slots:a,name:n})}}});function Pe(){let e=[],t=[],a={enqueue(o){t.push(o)},addEventListener(o,l,n,r){return o.addEventListener(l,n,r),a.add(()=>o.removeEventListener(l,n,r))},requestAnimationFrame(...o){let l=requestAnimationFrame(...o);a.add(()=>cancelAnimationFrame(l))},nextFrame(...o){a.requestAnimationFrame(()=>{a.requestAnimationFrame(...o)})},setTimeout(...o){let l=setTimeout(...o);a.add(()=>clearTimeout(l))},add(o){e.push(o)},dispose(){for(let o of e.splice(0))o()},async workQueue(){for(let o of t.splice(0))await o()}};return a}function kt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var $t=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))($t||{});let xe=Symbol("DialogContext");function X(e){let t=O(xe,null);if(t===null){let a=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,X),a}return t}let te="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Lt=P({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:te},initialFocus:{type:Object,default:null}},emits:{close:e=>!0},setup(e,{emit:t,attrs:a,slots:o,expose:l}){var n;let r=p(!1);S(()=>{r.value=!0});let s=p(0),i=Ce(),u=v(()=>e.open===te&&i!==null?$(i.value,{[G.Open]:!0,[G.Closed]:!1}):e.open),d=p(new Set),c=p(null),m=p(null),w=v(()=>J(c));if(l({el:c,$el:c}),!(e.open!==te||i!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof u.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value===te?void 0:e.open}`);let y=v(()=>r.value&&u.value?0:1),Y=v(()=>y.value===0),U=v(()=>s.value>1),se=O(xe,null)!==null,ie=v(()=>U.value?"parent":"leaf");Et(c,v(()=>U.value?Y.value:!1)),_t({type:"Dialog",enabled:v(()=>y.value===0),element:c,onUpdate:(h,f,g)=>{if(f==="Dialog")return $(h,{[ye.Add](){d.value.add(g),s.value+=1},[ye.Remove](){d.value.delete(g),s.value-=1}})}});let ee=Dt({name:"DialogDescription",slot:v(()=>({open:u.value}))}),ue=`headlessui-dialog-${H()}`,q=p(null),A={titleId:q,panelRef:p(null),dialogState:y,setTitleId(h){q.value!==h&&(q.value=h)},close(){t("close",!1)}};return I(xe,A),mt(()=>{var h,f,g;return[...Array.from((f=(h=w.value)==null?void 0:h.querySelectorAll("body > *, [data-headlessui-portal]"))!=null?f:[]).filter(b=>!(!(b instanceof HTMLElement)||b.contains(L(m))||A.panelRef.value&&b.contains(A.panelRef.value))),(g=A.panelRef.value)!=null?g:c.value]},(h,f)=>{A.close(),Ze(()=>f==null?void 0:f.focus())},v(()=>y.value===0&&!U.value)),Ne((n=w.value)==null?void 0:n.defaultView,"keydown",h=>{h.defaultPrevented||h.key===Xe.Escape&&y.value===0&&(U.value||(h.preventDefault(),h.stopPropagation(),A.close()))}),_(h=>{var f;if(y.value!==0||se)return;let g=w.value;if(!g)return;let b=Pe();function x(k,V,Ae){let ce=k.style.getPropertyValue(V);return Object.assign(k.style,{[V]:Ae}),b.add(()=>{Object.assign(k.style,{[V]:ce})})}let D=g==null?void 0:g.documentElement,de=((f=g.defaultView)!=null?f:window).innerWidth-D.clientWidth;if(x(D,"overflow","hidden"),de>0){let k=D.clientWidth-D.offsetWidth,V=de-k;x(D,"paddingRight",`${V}px`)}if(kt()){let k=window.pageYOffset;x(D,"position","fixed"),x(D,"marginTop",`-${k}px`),x(D,"width","100%"),b.add(()=>window.scrollTo(0,k))}h(b.dispose)}),_(h=>{if(y.value!==0)return;let f=L(c);if(!f)return;let g=new IntersectionObserver(b=>{for(let x of b)x.boundingClientRect.x===0&&x.boundingClientRect.y===0&&x.boundingClientRect.width===0&&x.boundingClientRect.height===0&&A.close()});g.observe(f),h(()=>g.disconnect())}),()=>{let h={...a,ref:c,id:ue,role:"dialog","aria-modal":y.value===0?!0:void 0,"aria-labelledby":q.value,"aria-describedby":ee.value},{open:f,initialFocus:g,...b}=e,x={open:y.value===0};return F(we,{force:!0},()=>[F(Ue,()=>F(Pt,{target:c.value},()=>F(we,{force:!1},()=>F(K,{initialFocus:g,containers:d,features:Y.value?$(ie.value,{parent:K.features.RestoreFocus,leaf:K.features.All&~K.features.FocusLock}):K.features.None},()=>T({ourProps:h,theirProps:b,slot:x,attrs:a,slots:o,visible:y.value===0,features:me.RenderStrategy|me.Static,name:"Dialog"}))))),F(ge,{features:ne.Hidden,ref:m})])}}});P({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:a}){let o=X("DialogOverlay"),l=`headlessui-dialog-overlay-${H()}`;function n(r){r.target===r.currentTarget&&(r.preventDefault(),r.stopPropagation(),o.close())}return()=>T({ourProps:{id:l,"aria-hidden":!0,onClick:n},theirProps:e,slot:{open:o.dialogState.value===0},attrs:t,slots:a,name:"DialogOverlay"})}});P({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"}},inheritAttrs:!1,setup(e,{attrs:t,slots:a,expose:o}){let l=X("DialogBackdrop"),n=`headlessui-dialog-backdrop-${H()}`,r=p(null);return o({el:r,$el:r}),S(()=>{if(l.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let s=e,i={id:n,ref:r,"aria-hidden":!0};return F(we,{force:!0},()=>F(Ue,()=>T({ourProps:i,theirProps:{...t,...s},slot:{open:l.dialogState.value===0},attrs:t,slots:a,name:"DialogBackdrop"})))}}});let Ot=P({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:a,expose:o}){let l=X("DialogPanel"),n=`headlessui-dialog-panel-${H()}`;o({el:l.panelRef,$el:l.panelRef});function r(s){s.stopPropagation()}return()=>{let s={id:n,ref:l.panelRef,onClick:r};return T({ourProps:s,theirProps:e,slot:{open:l.dialogState.value===0},attrs:t,slots:a,name:"DialogPanel"})}}}),Ct=P({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"}},setup(e,{attrs:t,slots:a}){let o=X("DialogTitle"),l=`headlessui-dialog-title-${H()}`;return S(()=>{o.setTitleId(l),j(()=>o.setTitleId(null))}),()=>T({ourProps:{id:l},theirProps:e,slot:{open:o.dialogState.value===0},attrs:t,slots:a,name:"DialogTitle"})}});function Bt(e){let t={called:!1};return(...a)=>{if(!t.called)return t.called=!0,e(...a)}}function fe(e,...t){e&&t.length>0&&e.classList.add(...t)}function oe(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Ee=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Ee||{});function It(e,t){let a=Pe();if(!e)return a.dispose;let{transitionDuration:o,transitionDelay:l}=getComputedStyle(e),[n,r]=[o,l].map(s=>{let[i=0]=s.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,d)=>d-u);return i});return n!==0?a.setTimeout(()=>t("finished"),n+r):t("finished"),a.add(()=>t("cancelled")),a.dispose}function Oe(e,t,a,o,l,n){let r=Pe(),s=n!==void 0?Bt(n):()=>{};return oe(e,...l),fe(e,...t,...a),r.nextFrame(()=>{oe(e,...a),fe(e,...o),r.add(It(e,i=>(oe(e,...o,...t),fe(e,...l),s(i))))}),r.add(()=>oe(e,...t,...a,...o,...l)),r.add(()=>s("cancelled")),r.dispose}function R(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let Te=Symbol("TransitionContext");var jt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(jt||{});function Rt(){return O(Te,null)!==null}function Nt(){let e=O(Te,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Mt(){let e=O(_e,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let _e=Symbol("NestingContext");function le(e){return"children"in e?le(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function We(e){let t=p([]),a=p(!1);S(()=>a.value=!0),j(()=>a.value=!1);function o(n,r=M.Hidden){let s=t.value.findIndex(({id:i})=>i===n);s!==-1&&($(r,{[M.Unmount](){t.value.splice(s,1)},[M.Hidden](){t.value[s].state="hidden"}}),!le(t)&&a.value&&(e==null||e()))}function l(n){let r=t.value.find(({id:s})=>s===n);return r?r.state!=="visible"&&(r.state="visible"):t.value.push({id:n,state:"visible"}),()=>o(n,M.Unmount)}return{children:t,register:l,unregister:o}}let Ge=me.RenderStrategy,Fe=P({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:o,expose:l}){if(!Rt()&&et())return()=>F(Je,{...e,onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave")},o);let n=p(null),r=p("visible"),s=v(()=>e.unmount?M.Unmount:M.Hidden);l({el:n,$el:n});let{show:i,appear:u}=Nt(),{register:d,unregister:c}=Mt(),m={value:!0},w=H(),y={value:!1},Y=We(()=>{y.value||(r.value="hidden",c(w),t("afterLeave"))});S(()=>{let f=d(w);j(f)}),_(()=>{if(s.value===M.Hidden&&!!w){if(i&&r.value!=="visible"){r.value="visible";return}$(r.value,{hidden:()=>c(w),visible:()=>d(w)})}});let U=R(e.enter),se=R(e.enterFrom),ie=R(e.enterTo),ee=R(e.entered),ue=R(e.leave),q=R(e.leaveFrom),A=R(e.leaveTo);S(()=>{_(()=>{if(r.value==="visible"){let f=L(n);if(f instanceof Comment&&f.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function h(f){let g=m.value&&!u.value,b=L(n);!b||!(b instanceof HTMLElement)||g||(y.value=!0,i.value&&t("beforeEnter"),i.value||t("beforeLeave"),f(i.value?Oe(b,U,se,ie,ee,x=>{y.value=!1,x===Ee.Finished&&t("afterEnter")}):Oe(b,ue,q,A,ee,x=>{y.value=!1,x===Ee.Finished&&(le(Y)||(r.value="hidden",c(w),t("afterLeave")))})))}return S(()=>{ae([i],(f,g,b)=>{h(b),m.value=!1},{immediate:!0})}),I(_e,Y),tt(v(()=>$(r.value,{visible:G.Open,hidden:G.Closed}))),()=>{let{appear:f,show:g,enter:b,enterFrom:x,enterTo:D,entered:de,leave:k,leaveFrom:V,leaveTo:Ae,...ce}=e;return T({theirProps:ce,ourProps:{ref:n},slot:{},slots:o,attrs:a,features:Ge,visible:r.value==="visible",name:"TransitionChild"})}}}),Ht=Fe,Je=P({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:o}){let l=Ce(),n=v(()=>e.show===null&&l!==null?$(l.value,{[G.Open]:!0,[G.Closed]:!1}):e.show);_(()=>{if(![!0,!1].includes(n.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let r=p(n.value?"visible":"hidden"),s=We(()=>{r.value="hidden"}),i=p(!0),u={show:n,appear:v(()=>e.appear||!i.value)};return S(()=>{_(()=>{i.value=!1,n.value?r.value="visible":le(s)||(r.value="hidden")})}),I(_e,s),I(Te,u),()=>{let d=ot(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),c={unmount:e.unmount};return T({ourProps:{...c,as:"template"},theirProps:{},slot:{},slots:{...o,default:()=>[F(Ht,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...a,...c,...d},o.default)]},attrs:{},features:Ge,visible:r.value==="visible",name:"Transition"})}}});function Ut(e,t){return Se(),Be("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"})])}const qt="/assets/atmo-partner-logos.4271acc4.png",Vt="/assets/atmo-hero-3.f43dd74c.png",zt="/assets/atmo-app-overview.a5c220c5.png",Wt="/assets/user-flow-1.aa031d98.png",Gt="/assets/user-flow-2.09862098.png",Jt="/assets/prototype-flow.8e0bed1f.gif",Yt="/assets/atmo-evolution-edituser.8268afac.png",Kt="/assets/atmo-styles3.954570c4.png",Qt="/assets/atmo-component-styles.126aa2cb.png",Zt="/assets/atmo-final-1.a6374f93.png",Xt="/assets/atmo-final-2.86d2886d.png",eo="/assets/atmo-final-3.82d4d414.png",to=E("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),oo={class:"fixed inset-0 z-10 overflow-y-auto"},no={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},ao={class:"mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100"},ro={class:"mt-3 text-center sm:mt-5"},lo=E("div",{class:"mt-2"},[E("p",{class:"text-sm text-gray-500"}," Please contact samanthaslfoong@gmail.com for permission to view this project. ")],-1),so={class:"mt-5 sm:mt-6"},io={class:"relative mt-1 rounded-md shadow-sm"},uo={class:"mt-5 sm:mt-6"},co={__name:"modal",setup(e){const t=p(!0),a=p(""),o=p(!1),l=p(!1),n=r=>{r=="gluten-quicklime"?(t.value=!1,l.value=!0,o.value=!1):(t.value=!0,o.value=!0)};return(r,s)=>(Se(),nt(C(Je),{as:"template",show:t.value},{default:z(()=>[N(C(Lt),{as:"div",class:"relative z-10",onClose:s[2]||(s[2]=i=>t.value=!0)},{default:z(()=>[N(C(Fe),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:z(()=>[to]),_:1}),E("div",oo,[E("div",no,[N(C(Fe),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:z(()=>[N(C(Ot),{class:"relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"},{default:z(()=>[E("div",null,[E("div",ao,[N(C(Ut),{class:"h-6 w-6 text-red-600","aria-hidden":"true"})]),E("div",ro,[N(C(Ct),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:z(()=>[at("Permission Required")]),_:1}),lo])]),E("div",so,[E("div",io,[Ie(E("input",{type:"text",name:"password",id:"password",class:De([{"ring-red-500 ring rin-offset-2":o.value,"ring-green-500 ring rin-offset-2":l.value},"block w-full rounded-md p-4 border pr-10 sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"]),placeholder:"Password","onUpdate:modelValue":s[0]||(s[0]=i=>a.value=i)},null,2),[[rt,a.value]])]),E("p",{class:De([[o.value?"block":"hidden"],"mt-2 text-sm text-red-600"])}," Wrong password. Please try again. ",2)]),E("div",uo,[E("button",{type:"button",class:"font-raleway font-bold inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-base text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm tracking-wide",onClick:s[1]||(s[1]=i=>n(a.value))}," Enter ")])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}},po={class:"col-start-2 col-span-1"},fo=st('<article class="prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"><h1> Atmo Technology enables cleaner, more cost-effective operations on-site. </h1><h3> Atmo Technology Ltd is an environmental-monitoring-service company with a mission to reduce emissions, maximize efficiency, and save lives on industrial sites across the UK. Atmo uses a network of sensors to monitor pollution and vehicle utilisation, to provide real-time data to site operators, and health and safety officers. They turn data into actionable insights for their clients to maximise asset utilisation, identify inefficiencies and decarbonise their operations. </h3></article><p class="col-start-2 text-center font-bold tracking-[.3em] text-slate-300 mt-8 text-sm mb-6"> TRUSTED BY </p><div class="flex justify-center col-start-2 col-span-1"><img src="'+qt+'" alt=""></div><img src="'+Vt+'" alt="" class="col-span-full mt-10"><article class="col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"><h1>Project Brief</h1><p> Atmo\u2019s first client portal was a great MVP, that served as a proof of concept for their real-time digital twin, but was served by a third party service and had limited customizability which fell short of the product\u2019s growing client requirements. The less than stellar UI also resulted in low user engagement with the real-time portal. My task was to build Atmo\u2019s own real-time environmental monitoring portal, writing the codebase, and designing the user experience. </p><p><span class="font-bold">Time Frame: </span>5 months, full-time<br><span class="font-bold">My Role: </span> Front-end Developer and Product Designer<br><span class="font-bold">Team: </span> Tim Lefevre (Front-end Developer and Product Designer) and Fynn O\u2019Connor (Back-end Developer) </p><h1>App Overview</h1><p class="mb-2"> Here are some snapshots of the final UI designs for the portal. </p></article><img src="'+zt+'" alt="" class="col-span-full"><article class="col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"><h1>Information Architecture and Interaction Design</h1><p> I began by scoping product requirements - what exactly do I need to build? what is Atmo\u2019s value proposition? what tasks do users want to accomplish on the portal? I collected information from various parts of the company, talking to engineers, sales, and clients to really understand the scope and scale of the product I was going to build. </p><p> I created a User Flow Map for the new portal to understand how users may interact with the web app to meet their needs. The diagram also allowed me to identify gaps in my knowledge about Atmo\u2019s product e.g. how many types of sensors do we offer?, and highlighted some discrepancies in their product vocabulary that needed to be clearly defined e.g. an \u201Casset\u201D to the engineering team was different from what our clients thought \u201Cassets\u201D were. </p><p> The final diagram ultimately helped us structure the development process into three distinct portal features - Asset Management, User Management and Site Dashboards. </p></article><img src="'+Wt+'" alt="" class="col-start-2 col-span-1 mb-8"><img src="'+Gt+'" alt="" class="col-start-2 col-span-1"><p class="col-start-2 text-sm mt-3 tracking-wide font-semibold text-slate-500"> Parts of the user flow map of Portal 2.0. </p><p class="col-start-2 prose prose-md my-8"> Some initial prototyping of the UI took place to test out the user flows mapped out in the User Flow Map. </p><img src="'+Jt+'" alt="" class="col-start-2 flex justify-center"><p class="col-start-2 prose prose-md my-8"> Tricky task flows such as editing user details and permissions took many rounds of design and testing before arriving at the final iteration. </p><img src="'+Yt+'" alt="" class="col-span-full"><article class="col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"><h1>Atmo Design System and Component Library</h1><p> Translating prototypes into development-ready designs was a challenging task that I accomplished by creating a design system and component library in Figma. I built Atmo\u2019s first design system following Google\u2019s Material Design guidelines, and used \u201Cdesign tokens\u201D to store and use styles across designs, code, tools and platforms. I then migrated the design tokens to the codebase by extending the Tailwind.css library and used them to code reusable components. </p></article><img src="'+Kt+'" alt="" class="col-start-2 col-span-1 mt-8"><img src="'+Qt+'" alt="" class="col-start-2 col-span-1 mt-4"><article class="col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"><h1>Design to Development</h1><p> Previous to Atmo, I had only ever built basic web apps using HTML/CSS and vanilla Javascript, so learning a front-end framework like Vue.Js was a relief, but also time-consuming. I had to code as a team for the first time, so I had to be more disciplined about branch naming, making regular and descriptive commits, and learnt how to conduct code reviews and make pull requests. </p><p> Building a robust, scalable codebase took up the majority of my time at Atmo. Eventually, I stopped designing in Figma and prototyped new screens and task flows directly in the codebase. I would test these new flows with my co-workers and iterate directly within the codebase. </p></article><img src="'+Zt+'" alt="" class="col-start-2 col-span-1 mt-8"><img src="'+Xt+'" alt="" class="col-start-2 col-span-1 mt-4"><img src="'+eo+'" alt="" class="col-start-2 col-span-1 mt-4">',21),ho={__name:"Atmo",setup(e){const t=p(!0);return(a,o)=>(Se(),Be("div",po,[Ie(N(co,null,null,512),[[lt,t.value]]),fo]))}};export{ho as default};