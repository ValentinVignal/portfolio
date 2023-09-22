import{s as he,c as ne}from"../chunks/scheduler.bb130b15.js";import{S as ve,i as ge,g as v,h as g,j as k,f,k as c,a as j,b as _e,d as C,t as U,s as G,m as E,c as A,n as $,z as s,o as M,p as me,r as ke,u as be,v as we,w as ye}from"../chunks/index.68f64671.js";import{e as oe,u as De,o as Se}from"../chunks/each.9b350fed.js";import{b as se}from"../chunks/paths.d163a611.js";import{I as Ee,f as $e}from"../chunks/Icon.8ef5946c.js";const ee={name:"Novade Solutions",url:"https://www.novade.net/",logo:"https://media.licdn.com/dms/image/C4D0BAQE2vYPi2C2EAQ/company-logo_200_200/0/1519922033388?e=1697673600&v=beta&t=_SehKVTRlmf7JP2sDVbjDjnM348Ml_37XG0CiV9m91U"},ie="on the main web and mobile application with Flutter for the front end, NestJS for the backend, GraphQL for the API and PostgreSQL for the database.",Ie=[{id:"novade-senior-full-stack-developer",company:ee,title:"Senior Full Stack Developer",url:"novade-solutions",description:`Senior full stack developer ${ie}`,start:new Date(2022,8),country:"Singapore"},{id:"novade-software-developer",company:ee,title:"Software Developer",url:"novade-solutions",description:`Full stack developer ${ie}`,start:new Date(2020,5),end:new Date(2022,7),country:"Singapore"},{id:"novade-part-time",company:ee,title:"Part time Software Developer",description:"Implement e2e testing on the web application using Cypress.",start:new Date(2019,5),end:new Date(2020,4),country:"Singapore"}],qe=()=>({workExperiences:Ie}),je=Object.freeze(Object.defineProperty({__proto__:null,load:qe},Symbol.toStringTag,{value:"Module"}));function ce(h,e,t){const o=h.slice();return o[1]=e[t],o}function fe(h){let e,t,o;return t=new Ee({props:{src:$e,size:"25"}}),{c(){e=v("div"),ke(t.$$.fragment),this.h()},l(l){e=g(l,"DIV",{class:!0});var a=k(e);be(t.$$.fragment,a),a.forEach(f),this.h()},h(){c(e,"class","arrow-icon svelte-138fqvi")},m(l,a){j(l,e,a),we(t,e,null),o=!0},i(l){o||(C(t.$$.fragment,l),o=!0)},o(l){U(t.$$.fragment,l),o=!1},d(l){l&&f(e),ye(t)}}}function ue(h){var o;let e=((o=h[1].end)==null?void 0:o.toLocaleDateString("en-GB",{month:"short",year:"numeric"}))+"",t;return{c(){t=E(e)},l(l){t=$(l,e)},m(l,a){j(l,t,a)},p(l,a){var _;a&1&&e!==(e=((_=l[1].end)==null?void 0:_.toLocaleDateString("en-GB",{month:"short",year:"numeric"}))+"")&&M(t,e)},d(l){l&&f(t)}}}function de(h){let e,t=h[1].description+"",o;return{c(){e=v("p"),o=E(t)},l(l){e=g(l,"P",{});var a=k(e);o=$(a,t),a.forEach(f)},m(l,a){j(l,e,a),s(e,o)},p(l,a){a&1&&t!==(t=l[1].description+"")&&M(o,t)},d(l){l&&f(e)}}}function pe(h,e){let t,o,l,a,_,n,r,u,K,S,b,q=e[1].company.name+"",B,Q,X,L=e[1].title+"",z,Y,H,P,D,V=e[1].start.toLocaleDateString("en-GB",{month:"short",year:"numeric"})+"",F,W,Z,J,x,w,i=e[1].url&&fe(),d=e[1].end&&ue(e),p=e[1].description&&de(e);return{key:h,first:null,c(){t=v("li"),o=v("a"),l=v("div"),a=v("div"),_=v("div"),n=v("div"),r=v("img"),K=G(),S=v("div"),b=v("a"),B=E(q),X=E(`
									-
									`),z=E(L),Y=G(),i&&i.c(),H=G(),P=v("p"),D=v("small"),F=E(V),W=E(` -
								`),d&&d.c(),Z=G(),p&&p.c(),x=G(),this.h()},l(y){t=g(y,"LI",{"data-content":!0,class:!0});var m=k(t);o=g(m,"A",{href:!0});var te=k(o);l=g(te,"DIV",{class:!0});var le=k(l);a=g(le,"DIV",{class:!0});var I=k(a);_=g(I,"DIV",{class:!0});var N=k(_);n=g(N,"DIV",{class:!0});var O=k(n);r=g(O,"IMG",{src:!0,alt:!0,class:!0}),K=A(O),S=g(O,"DIV",{});var R=k(S);b=g(R,"A",{href:!0,class:!0,target:!0,rel:!0});var ae=k(b);B=$(ae,q),ae.forEach(f),X=$(R,`
									-
									`),z=$(R,L),R.forEach(f),O.forEach(f),Y=A(N),i&&i.l(N),N.forEach(f),H=A(I),P=g(I,"P",{});var re=k(P);D=g(re,"SMALL",{});var T=k(D);F=$(T,V),W=$(T,` -
								`),d&&d.l(T),T.forEach(f),re.forEach(f),Z=A(I),p&&p.l(I),I.forEach(f),le.forEach(f),te.forEach(f),x=A(m),m.forEach(f),this.h()},h(){ne(r.src,u=e[1].company.logo)||c(r,"src",u),c(r,"alt","logo"),c(r,"class","h-12 rounded svelte-138fqvi"),c(b,"href",Q=e[1].company.url),c(b,"class","company-url svelte-138fqvi"),c(b,"target","_blank"),c(b,"rel","noopener noreferrer"),c(n,"class","card-name svelte-138fqvi"),c(_,"class","card-title svelte-138fqvi"),c(a,"class","card-body"),c(l,"class","card shadow-xl bg-base-100 max-w-96 card-bordered svelte-138fqvi"),c(o,"href",J=e[1].url?`${se}/work-experience/${e[1].url}`:null),c(t,"data-content",""),c(t,"class","step step-primary svelte-138fqvi"),this.first=t},m(y,m){j(y,t,m),s(t,o),s(o,l),s(l,a),s(a,_),s(_,n),s(n,r),s(n,K),s(n,S),s(S,b),s(b,B),s(S,X),s(S,z),s(_,Y),i&&i.m(_,null),s(a,H),s(a,P),s(P,D),s(D,F),s(D,W),d&&d.m(D,null),s(a,Z),p&&p.m(a,null),s(t,x),w=!0},p(y,m){e=y,(!w||m&1&&!ne(r.src,u=e[1].company.logo))&&c(r,"src",u),(!w||m&1)&&q!==(q=e[1].company.name+"")&&M(B,q),(!w||m&1&&Q!==(Q=e[1].company.url))&&c(b,"href",Q),(!w||m&1)&&L!==(L=e[1].title+"")&&M(z,L),e[1].url?i?m&1&&C(i,1):(i=fe(),i.c(),C(i,1),i.m(_,null)):i&&(me(),U(i,1,1,()=>{i=null}),_e()),(!w||m&1)&&V!==(V=e[1].start.toLocaleDateString("en-GB",{month:"short",year:"numeric"})+"")&&M(F,V),e[1].end?d?d.p(e,m):(d=ue(e),d.c(),d.m(D,null)):d&&(d.d(1),d=null),e[1].description?p?p.p(e,m):(p=de(e),p.c(),p.m(a,null)):p&&(p.d(1),p=null),(!w||m&1&&J!==(J=e[1].url?`${se}/work-experience/${e[1].url}`:null))&&c(o,"href",J)},i(y){w||(C(i),w=!0)},o(y){U(i),w=!1},d(y){y&&f(t),i&&i.d(),d&&d.d(),p&&p.d()}}}function Le(h){let e,t=[],o=new Map,l,a=oe(h[0].workExperiences);const _=n=>n[1].id;for(let n=0;n<a.length;n+=1){let r=ce(h,a,n),u=_(r);o.set(u,t[n]=pe(u,r))}return{c(){e=v("ul");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=g(n,"UL",{class:!0});var r=k(e);for(let u=0;u<t.length;u+=1)t[u].l(r);r.forEach(f),this.h()},h(){c(e,"class","steps steps-vertical svelte-138fqvi")},m(n,r){j(n,e,r);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(e,null);l=!0},p(n,[r]){r&1&&(a=oe(n[0].workExperiences),me(),t=De(t,r,_,1,n,a,o,e,Se,pe,null,ce),_e())},i(n){if(!l){for(let r=0;r<a.length;r+=1)C(t[r]);l=!0}},o(n){for(let r=0;r<t.length;r+=1)U(t[r]);l=!1},d(n){n&&f(e);for(let r=0;r<t.length;r+=1)t[r].d()}}}function Pe(h,e,t){let{data:o}=e;return h.$$set=l=>{"data"in l&&t(0,o=l.data)},[o]}class Be extends ve{constructor(e){super(),ge(this,e,Pe,Le,he,{data:0})}}export{Be as component,je as universal};