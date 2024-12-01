import{a as aa,g as ea}from"../chunks/skills.DAp2Z1pH.js";import{a as A,e as q,t as j,h as ta}from"../chunks/disclose-version.BOtpLlNO.js";import"../chunks/legacy.DReSujvu.js";import{ae as ra,aO as sa,aP as ia,aG as oa,e as na,S as I,aQ as la,z as ca,ax as w,aR as da,aB as M,al as P,a1 as fa,p as V,o as C,q as S,c as y,s as U,r as $,t as B,i as k,a as K,aE as va,aF as pa,$ as ua,j as _a,v as ma}from"../chunks/runtime.Bhn-hSDb.js";import{I as ga,t as L,e as ha}from"../chunks/Icon.x0ca0SVx.js";import{i as Q}from"../chunks/lifecycle.BoauyODE.js";import{p as z,i as ba}from"../chunks/props.CWUYXNl4.js";import{d as $a,s as D,b as H,a as ka}from"../chunks/store.C8AgzT5l.js";import{p as J}from"../chunks/stores.Cpojg2Yu.js";import{b as X}from"../chunks/index-client.PWDaif1d.js";import{s as E}from"../chunks/attributes.BwAeFzQw.js";import{c as ya,g as wa,G as Sa}from"../chunks/gtag._9ijHryW.js";import{a as xa}from"../chunks/index.B4gE-Eqw.js";const Fa=()=>performance.now(),b={tick:e=>requestAnimationFrame(e),now:()=>Fa(),tasks:new Set};function Y(e){b.tasks.forEach(a=>{a.c(e)||(b.tasks.delete(a),a.f())}),b.tasks.size!==0&&b.tick(Y)}function Ea(e){let a;return b.tasks.size===0&&b.tick(Y),{promise:new Promise(s=>{b.tasks.add(a={c:e,f:s})}),abort(){b.tasks.delete(a)}}}function T(e,a){e.dispatchEvent(new CustomEvent(a))}function Ta(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const a=e.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(s=>s[0].toUpperCase()+s.slice(1)).join("")}function W(e){const a={},s=e.split(";");for(const i of s){const[o,n]=i.split(":");if(!o||n===void 0)break;const l=Ta(o.trim());a[l]=n.trim()}return a}const Ca=e=>e;function Oa(e,a,s,i){var o=(e&da)!==0,n="both",l,p=a.inert,c,t;function r(){var f=fa,m=I;M(null),P(null);try{return l??(l=s()(a,(i==null?void 0:i())??{},{direction:n}))}finally{M(f),P(m)}}var g={is_global:o,in(){a.inert=p,T(a,"introstart"),c=R(a,r(),t,1,()=>{T(a,"introend"),c==null||c.abort(),c=l=void 0})},out(f){a.inert=!0,T(a,"outrostart"),t=R(a,r(),c,0,()=>{T(a,"outroend"),f==null||f()})},stop:()=>{c==null||c.abort(),t==null||t.abort()}},u=I;if((u.transitions??(u.transitions=[])).push(g),$a){var _=o;if(!_){for(var v=u.parent;v&&v.f&ra;)for(;(v=v.parent)&&!(v.f&sa););_=!v||(v.f&ia)!==0}_&&oa(()=>{na(()=>g.in())})}}function R(e,a,s,i,o){var n=i===1;if(la(a)){var l,p=!1;return ca(()=>{if(!p){var m=a({direction:n?"in":"out"});l=R(e,m,s,i,o)}}),{abort:()=>{p=!0,l==null||l.abort()},deactivate:()=>l.deactivate(),reset:()=>l.reset(),t:()=>l.t()}}if(s==null||s.deactivate(),!(a!=null&&a.duration))return o(),{abort:w,deactivate:w,reset:w,t:()=>i};const{delay:c=0,css:t,tick:r,easing:g=Ca}=a;var u=[];if(n&&s===void 0&&(r&&r(0,1),t)){var _=W(t(0,1));u.push(_,_)}var v=()=>1-i,f=e.animate(u,{duration:c});return f.onfinish=()=>{var m=(s==null?void 0:s.t())??1-i;s==null||s.abort();var d=i-m,h=a.duration*Math.abs(d),x=[];if(h>0){if(t)for(var N=Math.ceil(h/16.666666666666668),O=0;O<=N;O+=1){var G=m+d*g(O/N),Z=t(G,1-G);x.push(W(Z))}v=()=>{var F=f.currentTime;return m+d*g(F/h)},r&&Ea(()=>{if(f.playState!=="running")return!1;var F=v();return r(F,1-F),!0})}f=e.animate(x,{duration:h,fill:"forwards"}),f.onfinish=()=>{v=()=>i,r==null||r(i,1-i),o()}},{abort:()=>{f&&(f.cancel(),f.effect=null,f.onfinish=w)},deactivate:()=>{o=w},reset:()=>{i===0&&(r==null||r(1,0))},t:()=>v()}}const qa=()=>({skills:aa}),Xa=Object.freeze(Object.defineProperty({__proto__:null,load:qa},Symbol.toStringTag,{value:"Module"}));function Aa(e){const a=e-1;return a*a*a+1}function za(e,{delay:a=0,duration:s=400,easing:i=Aa,axis:o="y"}={}){const n=getComputedStyle(e),l=+n.opacity,p=o==="y"?"height":"width",c=parseFloat(n[p]),t=o==="y"?["top","bottom"]:["left","right"],r=t.map(d=>`${d[0].toUpperCase()}${d.slice(1)}`),g=parseFloat(n[`padding${r[0]}`]),u=parseFloat(n[`padding${r[1]}`]),_=parseFloat(n[`margin${r[0]}`]),v=parseFloat(n[`margin${r[1]}`]),f=parseFloat(n[`border${r[0]}Width`]),m=parseFloat(n[`border${r[1]}Width`]);return{delay:a,duration:s,easing:i,css:d=>`overflow: hidden;opacity: ${Math.min(d*20,1)*l};${p}: ${d*c}px;padding-${t[0]}: ${d*g}px;padding-${t[1]}: ${d*u}px;margin-${t[0]}: ${d*_}px;margin-${t[1]}: ${d*v}px;border-${t[0]}-width: ${d*f}px;border-${t[1]}-width: ${d*m}px;`}}var Ra=j('<button class="link-icon btn btn-square m-4 svelte-103xf8a"><a target="_blank" rel="noopener noreferrer"><!></a></button>'),ja=j('<div role="button" tabindex="0" class="card card-bordered shadow-xl bg-base-100 hover:ring-2 hover:ring-accent/50 svelte-103xf8a"><a data-sveltekit-noscroll=""><div class="card-body"><div class="card-title svelte-103xf8a"><img> </div></div></a> <!></div>');function Na(e,a){V(a,!1);const s=D(),i=()=>H(J,"$page",s);let o=z(a,"skill",8),n=z(a,"selected",8),l=C(!1),p=C(i().url.toString());X(()=>{S(p,ya(i().url,o().id).toString())});const c=()=>{wa({event:Sa.SkillClick,data:{location:"skill-page",selected:!n(),id:o().id}})};Q();var t=ja(),r=y(t),g=y(r),u=y(g),_=y(u),v=U(_);$(u),$(g),$(r);var f=U(r,2);ba(f,()=>k(l),m=>{var d=Ra(),h=y(d),x=y(h);ga(x,{src:xa,size:"25"}),$(h),$(d),B(()=>E(h,"href",o().url)),Oa(3,d,()=>za,()=>({axis:"x"})),A(m,d)}),$(t),B(()=>{L(t,"ring-2",n()),L(t,"ring-accent",n()),E(r,"href",k(p)),E(_,"src",`https://www.google.com/s2/favicons?domain=${o().url}`),E(_,"alt",`${o().name} logo`),ka(v,` ${o().name??""}`)}),q("click",r,c),q("mouseenter",t,()=>S(l,!0)),q("mouseleave",t,()=>S(l,!1)),A(e,t),K()}var Ga=j('<div class="skills-container svelte-15w7eqj"></div>');function Ya(e,a){V(a,!1);const s=D(),i=()=>H(J,"$page",s),o=C();let n=C([]);X(()=>{S(n,ea(i().url))});let l=z(a,"data",8);va(()=>_a(l()),()=>{S(o,l().skills)}),pa(),Q();var p=Ga();ta(c=>{ua.title="Valentin Vignal - Skills"}),ha(p,5,()=>k(o),c=>c.id,(c,t)=>{const r=ma(()=>k(n).includes(k(t).id));Na(c,{get skill(){return k(t)},get selected(){return k(r)}})}),$(p),A(e,p),K()}export{Ya as component,Xa as universal};