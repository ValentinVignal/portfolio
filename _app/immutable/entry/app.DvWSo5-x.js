const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.DHNfF0dX.js","../chunks/disclose-version.Ck9RZUZx.js","../chunks/runtime.DR-VfCur.js","../chunks/slot.BTByCpqt.js","../chunks/props.BpJQu7R0.js","../chunks/lifecycle.BFC74lHd.js","../chunks/stores.DsJijIJw.js","../chunks/entry.CeLMxILR.js","../chunks/Icon.D0wgPWF4.js","../chunks/render.C7QhZUlA.js","../chunks/attributes.BEBjIQvE.js","../chunks/index.B4gE-Eqw.js","../chunks/index-client.Cu_9H9H_.js","../chunks/gtag.B56OAI1E.js","../chunks/ValentinVignal.ejUdSkxi.js","../assets/0.5oLndFPK.css","../nodes/1.B7qbu3hQ.js","../nodes/2.x2-wAm_t.js","../assets/2.ZwBOKnza.css","../nodes/3.uJ8YdnLS.js","../chunks/LogoTitle.BYpEUiu0.js","../assets/LogoTitle.CM-ajlIE.css","../assets/3.eMD0jcNC.css","../nodes/4.C2xyTs3L.js","../chunks/skills.DAp2Z1pH.js","../chunks/Skills.DnoSVqPs.js","../assets/Skills.Cf9kZDn0.css","../assets/4.ETvPxLZU.css","../nodes/5.CykMDy97.js","../assets/5.DPRky2Hm.css","../nodes/6.CPoimbuz.js","../assets/6.BXbCN8w4.css","../nodes/7.o9QkaiAS.js","../assets/7.BohhE9Di.css","../nodes/8.Dp0LXkQ7.js","../assets/8.Ch5_Ol2z.css","../nodes/9.B4dF12hY.js","../assets/9.iguxw1ev.css","../nodes/10.V-D_TpXh.js","../assets/10.DyP30BYc.css"])))=>i.map(i=>d[i]);
var q=e=>{throw TypeError(e)};var F=(e,t,r)=>t.has(e)||q("Cannot "+r);var u=(e,t,r)=>(F(e,t,"read from private field"),r?r.call(e):t.get(e)),p=(e,t,r)=>t.has(e)?q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),w=(e,t,r,i)=>(F(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r);import{h as K,b as Y,W as z,al as H,G as Q,y as X,a1 as Z,aJ as $,aK as tt,g as et,O as rt,ae as st,j as g,K as T,aE as at,aF as nt,V as ot,p as it,u as ct,d as ut,aL as lt,f as L,s as ft,a as mt,aM as x,c as dt,t as _t,r as ht,m as V}from"../chunks/runtime.DR-VfCur.js";import{h as vt,m as gt,u as Et,s as yt}from"../chunks/render.C7QhZUlA.js";import{j as D,a as b,t as G,g as Pt}from"../chunks/disclose-version.Ck9RZUZx.js";import{p as I,a as Rt,i as S}from"../chunks/props.BpJQu7R0.js";import{o as bt}from"../chunks/index-client.Cu_9H9H_.js";function C(e,t,r){K&&Y();var i=e,n,o;z(()=>{n!==(n=t())&&(o&&(Z(o),o=null),n&&(o=Q(()=>r(i,n))))},H),K&&(i=X)}function U(e,t){return e===t||(e==null?void 0:e[st])===t}function j(e={},t,r,i){return $(()=>{var n,o;return tt(()=>{n=o,o=[],et(()=>{e!==r(...o)&&(t(e,...o),n&&U(r(...n),e)&&t(null,...n))})}),()=>{rt(()=>{o&&U(r(...o),e)&&t(null,...o)})}}),e}function kt(e){return class extends Lt{constructor(t){super({component:e,...t})}}}var E,f;class Lt{constructor(t){p(this,E);p(this,f);var o;var r=new Map,i=(a,s)=>{var m=ot(s);return r.set(a,m),m};const n=new Proxy({...t.props||{},$$events:{}},{get(a,s){return g(r.get(s)??i(s,Reflect.get(a,s)))},has(a,s){return g(r.get(s)??i(s,Reflect.get(a,s))),Reflect.has(a,s)},set(a,s,m){return T(r.get(s)??i(s,m),m),Reflect.set(a,s,m)}});w(this,f,(t.hydrate?vt:gt)(t.component,{target:t.target,props:n,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&at(),w(this,E,n.$$events);for(const a of Object.keys(u(this,f)))a==="$set"||a==="$destroy"||a==="$on"||nt(this,a,{get(){return u(this,f)[a]},set(s){u(this,f)[a]=s},enumerable:!0});u(this,f).$set=a=>{Object.assign(n,a)},u(this,f).$destroy=()=>{Et(u(this,f))}}$set(t){u(this,f).$set(t)}$on(t,r){u(this,E)[t]=u(this,E)[t]||[];const i=(...n)=>r.call(this,...n);return u(this,E)[t].push(i),()=>{u(this,E)[t]=u(this,E)[t].filter(n=>n!==i)}}$destroy(){u(this,f).$destroy()}}E=new WeakMap,f=new WeakMap;const Tt="modulepreload",At=function(e,t){return new URL(e,t).href},W={},h=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){const a=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),m=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(r.map(l=>{if(l=At(l,i),l in W)return;W[l]=!0;const y=l.endsWith(".css"),A=y?'[rel="stylesheet"]':"";if(!!i)for(let d=a.length-1;d>=0;d--){const v=a[d];if(v.href===l&&(!y||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${A}`))return;const c=document.createElement("link");if(c.rel=y?"stylesheet":Tt,y||(c.as="script"),c.crossOrigin="",c.href=l,m&&c.setAttribute("nonce",m),document.head.appendChild(c),y)return new Promise((d,v)=>{c.addEventListener("load",d),c.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return n.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},Bt={};var Ot=G('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),pt=G("<!> <!>",1);function wt(e,t){it(t,!0);let r=I(t,"components",23,()=>[]),i=I(t,"data_0",3,null),n=I(t,"data_1",3,null);ct(()=>t.stores.page.set(t.page)),ut(()=>{t.stores,t.page,t.constructors,r(),t.form,i(),n(),t.stores.page.notify()});let o=x(!1),a=x(!1),s=x(null);bt(()=>{const P=t.stores.page.subscribe(()=>{g(o)&&(T(a,!0),lt().then(()=>{T(s,Rt(document.title||"untitled page"))}))});return T(o,!0),P});const m=V(()=>t.constructors[1]);var l=pt(),y=L(l);S(y,()=>t.constructors[1],P=>{var c=D();const d=V(()=>t.constructors[0]);var v=L(c);C(v,()=>g(d),(R,O)=>{j(O(R,{get data(){return i()},get form(){return t.form},children:(_,xt)=>{var B=D(),J=L(B);C(J,()=>g(m),(M,N)=>{j(N(M,{get data(){return n()},get form(){return t.form}}),k=>r()[1]=k,()=>{var k;return(k=r())==null?void 0:k[1]})}),b(_,B)},$$slots:{default:!0}}),_=>r()[0]=_,()=>{var _;return(_=r())==null?void 0:_[0]})}),b(P,c)},P=>{var c=D();const d=V(()=>t.constructors[0]);var v=L(c);C(v,()=>g(d),(R,O)=>{j(O(R,{get data(){return i()},get form(){return t.form}}),_=>r()[0]=_,()=>{var _;return(_=r())==null?void 0:_[0]})}),b(P,c)});var A=ft(y,2);S(A,()=>g(o),P=>{var c=Ot(),d=dt(c);S(d,()=>g(a),v=>{var R=Pt();_t(()=>yt(R,g(s))),b(v,R)}),ht(c),b(P,c)}),b(e,l),mt()}const qt=kt(wt),Ft=[()=>h(()=>import("../nodes/0.DHNfF0dX.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url),()=>h(()=>import("../nodes/1.B7qbu3hQ.js"),__vite__mapDeps([16,1,2,9,5,6,7]),import.meta.url),()=>h(()=>import("../nodes/2.x2-wAm_t.js"),__vite__mapDeps([17,1,2,10,18]),import.meta.url),()=>h(()=>import("../nodes/3.uJ8YdnLS.js"),__vite__mapDeps([19,11,1,2,4,8,9,10,5,20,3,21,22]),import.meta.url),()=>h(()=>import("../nodes/4.C2xyTs3L.js"),__vite__mapDeps([23,1,2,5,20,9,4,3,10,8,21,24,25,6,7,13,12,26,27]),import.meta.url),()=>h(()=>import("../nodes/5.CykMDy97.js"),__vite__mapDeps([28,24,1,2,9,4,8,10,5,25,6,7,13,12,26,11,29]),import.meta.url),()=>h(()=>import("../nodes/6.CPoimbuz.js"),__vite__mapDeps([30,1,2,5,24,25,8,9,4,10,6,7,13,12,26,20,3,21,31]),import.meta.url),()=>h(()=>import("../nodes/7.o9QkaiAS.js"),__vite__mapDeps([32,1,2,10,14,33]),import.meta.url),()=>h(()=>import("../nodes/8.Dp0LXkQ7.js"),__vite__mapDeps([34,24,1,2,8,9,4,10,5,6,7,12,13,11,35]),import.meta.url),()=>h(()=>import("../nodes/9.B4dF12hY.js"),__vite__mapDeps([36,24,1,2,9,4,8,10,5,6,7,25,13,12,26,11,3,37]),import.meta.url),()=>h(()=>import("../nodes/10.V-D_TpXh.js"),__vite__mapDeps([38,1,2,10,20,9,4,3,8,5,21,39]),import.meta.url)],Kt=[],Ut={"/":[2],"/accounts":[3],"/contributions":[4],"/education":[5],"/projects":[6],"/resume":[7],"/skills":[8],"/work-experience":[9],"/work-experience/novade-solutions":[10]},Wt={handleError:({error:e})=>{console.error(e)},reroute:()=>{}};export{Ut as dictionary,Wt as hooks,Bt as matchers,Ft as nodes,qt as root,Kt as server_loads};
