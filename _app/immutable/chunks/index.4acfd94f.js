function M(){}function et(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function I(){return Object.create(null)}function $(t){t.forEach(J)}function K(t){return typeof t=="function"}function $t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function vt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function nt(t){return Object.keys(t).length===0}function it(t,...e){if(t==null)return M;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function kt(t,e,n){t.$$.on_destroy.push(it(e,n))}function Et(t,e,n,i){if(t){const c=Q(t,e,n,i);return t[0](c)}}function Q(t,e,n,i){return t[1]&&i?et(n.ctx.slice(),t[1](i(e))):n.ctx}function Nt(t,e,n,i){if(t[2]&&i){const c=t[2](i(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const l=[],r=Math.max(e.dirty.length,c.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|c[o];return l}return e.dirty|c}return e.dirty}function St(t,e,n,i,c,l){if(c){const r=Q(e,n,i,l);t.p(r,c)}}function At(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Mt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function jt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Ct(t){const e={};for(const n in t)e[n]=!0;return e}let j=!1;function rt(){j=!0}function ct(){j=!1}function st(t,e,n,i){for(;t<e;){const c=t+(e-t>>1);n(c)<=i?t=c+1:e=c}return t}function ot(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let c=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,a=(c>0&&e[n[c]].claim_order<=u?c+1:st(1,c,_=>e[n[_]].claim_order,u))-1;i[s]=n[a]+1;const d=a+1;n[d]=s,c=Math.max(d,c)}const l=[],r=[];let o=e.length-1;for(let s=n[c]+1;s!=0;s=i[s-1]){for(l.push(e[s-1]);o>=s;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<r.length;s++){for(;u<l.length&&r[s].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(r[s],a)}}function ut(t,e){if(j){for(ot(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Lt(t,e,n){j&&!n?ut(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function Ot(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ft(t){return document.createElement(t)}function at(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function qt(){return z(" ")}function Bt(){return z("")}function Pt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function _t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Tt(t,e){for(const n in e)_t(t,n,e[n])}function dt(t){return Array.from(t.childNodes)}function ht(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,i,c=!1){ht(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const s=n(o);return s===void 0?t.splice(r,1):t[r]=s,c||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const s=n(o);return s===void 0?t.splice(r,1):t[r]=s,c?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function U(t,e,n,i){return R(t,c=>c.nodeName===e,c=>{const l=[];for(let r=0;r<c.attributes.length;r++){const o=c.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>c.removeAttribute(r))},()=>i(e))}function zt(t,e,n){return U(t,e,n,ft)}function Dt(t,e,n){return U(t,e,n,at)}function mt(t,e){return R(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function Ft(t){return mt(t," ")}function Ht(t,e){e=""+e,t.data!==e&&(t.data=e)}function It(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Wt(t,e,n){t.classList[n?"add":"remove"](e)}function Gt(t,e){return new t(e)}let k;function v(t){k=t}function V(){if(!k)throw new Error("Function called outside component initialization");return k}function Jt(t){V().$$.on_mount.push(t)}function Kt(t){V().$$.after_update.push(t)}const w=[],W=[];let b=[];const G=[],X=Promise.resolve();let P=!1;function Y(){P||(P=!0,X.then(Z))}function Qt(){return Y(),X}function T(t){b.push(t)}const B=new Set;let x=0;function Z(){if(x!==0)return;const t=k;do{try{for(;x<w.length;){const e=w[x];x++,v(e),pt(e.$$)}}catch(e){throw w.length=0,x=0,e}for(v(null),w.length=0,x=0;W.length;)W.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];B.has(n)||(B.add(n),n())}b.length=0}while(w.length);for(;G.length;)G.pop()();P=!1,B.clear(),v(t)}function pt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}function yt(t){const e=[],n=[];b.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),b=e}const A=new Set;let g;function Rt(){g={r:0,c:[],p:g}}function Ut(){g.r||$(g.c),g=g.p}function tt(t,e){t&&t.i&&(A.delete(t),t.i(e))}function gt(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),g.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Vt(t,e){t.d(1),e.delete(t.key)}function Xt(t,e){gt(t,1,1,()=>{e.delete(t.key)})}function Yt(t,e,n,i,c,l,r,o,s,u,a,d){let _=t.length,m=l.length,h=_;const C={};for(;h--;)C[t[h].key]=h;const E=[],L=new Map,O=new Map,D=[];for(h=m;h--;){const f=d(c,l,h),p=n(f);let y=r.get(p);y?i&&D.push(()=>y.p(f,e)):(y=u(p,f),y.c()),L.set(p,E[h]=y),p in C&&O.set(p,Math.abs(h-C[p]))}const F=new Set,H=new Set;function q(f){tt(f,1),f.m(o,a),r.set(f.key,f),a=f.first,m--}for(;_&&m;){const f=E[m-1],p=t[_-1],y=f.key,N=p.key;f===p?(a=f.first,_--,m--):L.has(N)?!r.has(y)||F.has(y)?q(f):H.has(N)?_--:O.get(y)>O.get(N)?(H.add(y),q(f)):(F.add(N),_--):(s(p,r),_--)}for(;_--;){const f=t[_];L.has(f.key)||s(f,r)}for(;m;)q(E[m-1]);return $(D),E}function Zt(t,e){const n={},i={},c={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const s in r)s in o||(i[s]=1);for(const s in o)c[s]||(n[s]=o[s],c[s]=1);t[l]=o}else for(const s in r)c[s]=1}for(const r in i)r in n||(n[r]=void 0);return n}function te(t){t&&t.c()}function ee(t,e){t&&t.l(e)}function xt(t,e,n,i){const{fragment:c,after_update:l}=t.$$;c&&c.m(e,n),i||T(()=>{const r=t.$$.on_mount.map(J).filter(K);t.$$.on_destroy?t.$$.on_destroy.push(...r):$(r),t.$$.on_mount=[]}),l.forEach(T)}function wt(t,e){const n=t.$$;n.fragment!==null&&(yt(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(w.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ne(t,e,n,i,c,l,r,o=[-1]){const s=k;v(t);const u=t.$$={fragment:null,ctx:[],props:l,update:M,not_equal:c,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:I(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};r&&r(u.root);let a=!1;if(u.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return u.ctx&&c(u.ctx[d],u.ctx[d]=h)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](h),a&&bt(t,d)),_}):[],u.update(),a=!0,$(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){rt();const d=dt(e.target);u.fragment&&u.fragment.l(d),d.forEach(lt)}else u.fragment&&u.fragment.c();e.intro&&tt(t.$$.fragment),xt(t,e.target,e.anchor,e.customElement),ct(),Z()}v(s)}class ie{$destroy(){wt(this,1),this.$destroy=M}$on(e,n){if(!K(n))return M;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const c=i.indexOf(n);c!==-1&&i.splice(c,1)}}$set(e){this.$$set&&!nt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{xt as A,wt as B,ut as C,M as D,Pt as E,Et as F,vt as G,St as H,At as I,Nt as J,at as K,Dt as L,kt as M,Yt as N,Xt as O,Vt as P,et as Q,Tt as R,ie as S,Zt as T,Ot as U,jt as V,Mt as W,Wt as X,Ct as Y,qt as a,Lt as b,Ft as c,gt as d,Bt as e,Ut as f,tt as g,lt as h,ne as i,Kt as j,ft as k,zt as l,dt as m,_t as n,Jt as o,It as p,z as q,mt as r,$t as s,Qt as t,Ht as u,Rt as v,W as w,Gt as x,te as y,ee as z};