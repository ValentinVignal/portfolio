import{s as A,n as b,c as C,b as G,a as j}from"./scheduler.DuswzE1b.js";import{S as q,i as M,e as m,c as p,a as v,d as g,m as u,g as E,s as U,f as D,n as f,h as k,o as F}from"./index.VWL0RkfW.js";import{e as I,u as N,d as P}from"./Icon.CneBwPUo.js";import{p as T}from"./stores.CHyIGhSx.js";import{s as V,g as z}from"./skills.BFttcg9d.js";import{c as B,g as H,G as J}from"./gtag.BUIw7TPH.js";function w(o,l,e){const t=o.slice();t[7]=l[e],t[10]=e;const n=t[0].includes(t[7].id);return t[8]=n,t}function y(o,l){let e,t,n,h,s,a,i,_;function r(){return l[5](l[7])}return{key:o,first:null,c(){e=m("a"),t=m("span"),n=m("img"),s=U(),this.h()},l(d){e=p(d,"A",{"data-sveltekit-noscroll":!0,href:!0,class:!0});var c=v(e);t=p(c,"SPAN",{class:!0,"data-tip":!0});var S=v(t);n=p(S,"IMG",{src:!0,alt:!0}),S.forEach(g),s=D(c),c.forEach(g),this.h()},h(){j(n.src,h=`https://www.google.com/s2/favicons?domain=${l[7].url}`)||u(n,"src",h),u(n,"alt",`${l[7].name} logo`),u(t,"class","badge badge-neutral tooltip tooltip-bottom hover:ring-2 hover:ring-accent/50"),u(t,"data-tip",l[7].name),f(t,"ring-accent",l[8]),f(t,"ring-2",l[8]),f(t,"active",l[8]),u(e,"data-sveltekit-noscroll",""),u(e,"href",a=l[1][l[10]]),u(e,"class","svelte-18j392c"),this.first=e},m(d,c){E(d,e,c),k(e,t),k(t,n),k(e,s),i||(_=F(e,"click",r),i=!0)},p(d,c){l=d,c&5&&f(t,"ring-accent",l[8]),c&5&&f(t,"ring-2",l[8]),c&5&&f(t,"active",l[8]),c&2&&a!==(a=l[1][l[10]])&&u(e,"href",a)},d(d){d&&g(e),i=!1,_()}}}function K(o){let l,e=[],t=new Map,n=I(o[2]);const h=s=>s[7].id;for(let s=0;s<n.length;s+=1){let a=w(o,n,s),i=h(a);t.set(i,e[s]=y(i,a))}return{c(){l=m("div");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){l=p(s,"DIV",{class:!0});var a=v(l);for(let i=0;i<e.length;i+=1)e[i].l(a);a.forEach(g),this.h()},h(){u(l,"class","skills svelte-18j392c")},m(s,a){E(s,l,a);for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(l,null)},p(s,[a]){a&15&&(n=I(s[2]),e=N(e,a,h,1,s,n,t,l,P,y,null,w))},i:b,o:b,d(s){s&&g(l);for(let a=0;a<e.length;a+=1)e[a].d()}}}function L(o,l,e){let t;C(o,T,r=>e(6,t=r));let{skillIds:n}=l;const h=V(n);let s=[],a=Array(h.length).map(()=>t.url.toString());G(()=>{e(0,s=z(t.url)),e(1,a=h.map(r=>B(t.url,r.id).toString()))});const i=r=>{const d=s.includes(r);H({event:J.SkillClick,data:{location:"skill-chip",id:r,selected:!d}})},_=r=>i(r.id);return o.$$set=r=>{"skillIds"in r&&e(4,n=r.skillIds)},[s,a,h,i,n,_]}class Z extends q{constructor(l){super(),M(this,l,L,K,A,{skillIds:4})}}export{Z as S};