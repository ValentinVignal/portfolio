import{s as O}from"../chunks/skills.c255bfe6.js";import{s as P,n as j,d as D}from"../chunks/scheduler.ce7f73b8.js";import{S as x,i as A,g as v,s as w,h as g,j as p,f as h,c as E,x as C,k as _,a as V,m as G,n as T,y as m,o as B}from"../chunks/index.79937e50.js";import{e as q,u as F,d as H}from"../chunks/each.dc30f682.js";const J=()=>({skills:O}),W=Object.freeze(Object.defineProperty({__proto__:null,load:J},Symbol.toStringTag,{value:"Module"}));function z(n,a,e){const l=n.slice();return l[2]=a[e],l}function M(n,a){let e,l,o,r,c,t,s,i=a[2].name+"",u,k,b;return{key:n,first:null,c(){e=v("div"),l=v("a"),o=v("div"),r=v("div"),c=v("img"),s=w(),u=G(i),b=w(),this.h()},l(f){e=g(f,"DIV",{class:!0});var d=p(e);l=g(d,"A",{href:!0});var I=p(l);o=g(I,"DIV",{class:!0});var S=p(o);r=g(S,"DIV",{class:!0});var y=p(r);c=g(y,"IMG",{src:!0,alt:!0}),s=E(y),u=T(y,i),y.forEach(h),S.forEach(h),I.forEach(h),b=E(d),d.forEach(h),this.h()},h(){D(c.src,t=`https://www.google.com/s2/favicons?domain=${a[2].url}`)||_(c,"src",t),_(c,"alt","{skill.name} logo"),_(r,"class","card-title"),_(o,"class","card-body"),_(l,"href",k=a[2].url),_(e,"class","card card-bordered shadow-xl bg-base-100"),this.first=e},m(f,d){V(f,e,d),m(e,l),m(l,o),m(o,r),m(r,c),m(r,s),m(r,u),m(e,b)},p(f,d){a=f,d&1&&!D(c.src,t=`https://www.google.com/s2/favicons?domain=${a[2].url}`)&&_(c,"src",t),d&1&&i!==(i=a[2].name+"")&&B(u,i),d&1&&k!==(k=a[2].url)&&_(l,"href",k)},d(f){f&&h(e)}}}function K(n){let a,e=[],l=new Map,o,r=q(n[0]);const c=t=>t[2].id;for(let t=0;t<r.length;t+=1){let s=z(n,r,t),i=c(s);l.set(i,e[t]=M(i,s))}return{c(){a=v("div");for(let t=0;t<e.length;t+=1)e[t].c();o=w(),this.h()},l(t){a=g(t,"DIV",{class:!0});var s=p(a);for(let u=0;u<e.length;u+=1)e[u].l(s);s.forEach(h),o=E(t),C("svelte-zbzgaf",document.head).forEach(h),this.h()},h(){_(a,"class","skills-container svelte-15w7eqj"),document.title="Valentin Vignal - Skills"},m(t,s){V(t,a,s);for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(a,null);V(t,o,s)},p(t,[s]){s&1&&(r=q(t[0]),e=F(e,s,c,1,t,r,l,a,H,M,null,z))},i:j,o:j,d(t){t&&(h(a),h(o));for(let s=0;s<e.length;s+=1)e[s].d()}}}function L(n,a,e){let l,{data:o}=a;return n.$$set=r=>{"data"in r&&e(1,o=r.data)},n.$$.update=()=>{n.$$.dirty&2&&e(0,l=o.skills)},[l,o]}class X extends x{constructor(a){super(),A(this,a,L,K,P,{data:1})}}export{X as component,W as universal};
