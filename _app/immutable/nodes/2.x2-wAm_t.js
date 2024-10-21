import{j as A,a as g,t as G,e as B}from"../chunks/disclose-version.Ck9RZUZx.js";import{aA as J,W as P,h as w,b as W,aB as K,a4 as k,O as M,a7 as j,V as z,at as E,aC as T,aD as C,a0 as y,G as x,a1 as I,aE as X,y as L,e as Q,p as R,ac as U,ad as Y,f as D,a as Z,j as m,J as ee,c as $,r as F,t as ae,K as te,N as O,$ as se}from"../chunks/runtime.DR-VfCur.js";import{s as V}from"../chunks/attributes.BEBjIQvE.js";const q=0,h=1,N=2;function ie(r,a,t,n,p){w&&W();var o=r,v=J(),l=Q,e,i,c,f,_=(v?j:z)(void 0),H=(v?j:z)(void 0),b=!1;function d(s,u){b=!0,u&&(E(S),T(S),C(l)),s===q&&t&&(i?y(i):i=x(()=>t(o))),s===h&&n&&(c?y(c):c=x(()=>n(o,_))),s===N&&p&&(f?y(f):f=x(()=>p(o,H))),s!==q&&i&&I(i,()=>i=null),s!==h&&c&&I(c,()=>c=null),s!==N&&f&&I(f,()=>f=null),u&&(C(null),T(null),E(null),X())}var S=P(()=>{if(e!==(e=a())){if(K(e)){var s=e;b=!1,s.then(u=>{s===e&&(k(_,u),d(h,!0))},u=>{s===e&&(k(H,u),d(N,!0))}),w||M(()=>{b||d(q,!0)})}else k(_,e),d(h,!1);return()=>e=null}});w&&(o=L)}var re=G("<a><img></a>");function ne(r,a){R(a,!1);const t=ee(),n=async()=>(await(await fetch("https://api.stackexchange.com/2.3/users/12066144?pagesize=1&order=desc&sort=reputation&site=stackoverflow",{method:"GET"})).json()).items[0];U(()=>{},()=>{te(t,n())}),Y();var p=A(),o=D(p);ie(o,()=>m(t),null,(v,l)=>{var e=re(),i=$(e);F(e),ae(()=>{V(e,"href",m(l).link),V(i,"src",`https://img.shields.io/badge/Stack%20Overflow-${m(l).reputation??""}-F47F24`),V(i,"alt",m(l).display_name)}),g(v,e)}),g(r,p),Z()}var oe=G('<div class="row py-4 svelte-1f7b4kq"><div class="svelte-1f7b4kq"><!></div> <a href="https://github.com/ValentinVignal" class="svelte-1f7b4kq"><img alt="GitHub followers" src="https://img.shields.io/github/followers/ValentinVignal"></a> <a href="https://wakatime.com/@a700230c-ba51-4378-8fbc-fbcb542401ed" class="svelte-1f7b4kq"><img src="https://wakatime.com/badge/user/a700230c-ba51-4378-8fbc-fbcb542401ed.svg" alt="Wakatime"></a> <a href="https://x.com/vignalvalentin1" class="svelte-1f7b4kq"><img alt="X (formerly Twitter) Follow" src="https://img.shields.io/twitter/follow/vignalvalentin1"></a></div>');function le(r){var a=oe(),t=$(a),n=$(t);ne(n,{}),F(t),O(6),F(a),g(r,a)}var ce=G(`<!> <article class="prose svelte-1cz6k2f"><p>Hello! I'm Valentin Vignal.</p> <p>I'm a full-stack developer and I'm currently working at <a href="https://www.novade.net/">Novade</a> in Singapore.</p> <p>Passionate about software development, architecture and building tools for developers. I prefer
		quality over quantity. Most experienced Flutter, Svelte and NestJS.</p> <p>I'm a member of the Flutter Github organization with contributor access and over 100
		contributions.</p> <p>I'm a constant learner and enjoy keeping up to date with new technologies. <br> I prioritize honest and straightforward communication over dealing with challenging office politics,
		focusing instead on achieving tangible results rather than engaging in excessive discussions. However,
		I do appreciate having a well-defined plan in place.</p></article>`,1);function ve(r){var a=ce();B(n=>{se.title="Valentin Vignal"});var t=D(a);le(t),O(2),g(r,a)}export{ve as component};
