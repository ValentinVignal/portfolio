function E(){}const U=t=>t;function j(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function A(){return Object.create(null)}function v(t){t.forEach(q)}function C(t){return typeof t=="function"}function D(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let f;function g(t,n){return t===n?!0:(f||(f=document.createElement("a")),f.href=n,t===f.href)}function m(t){return t.split(",").map(n=>n.trim().split(" ").filter(Boolean))}function F(t,n){const e=m(t.srcset),r=m(n||"");return r.length===e.length&&r.every(([o,c],s)=>c===e[s][1]&&(g(e[s][0],o)||g(o,e[s][0])))}function P(t){return Object.keys(t).length===0}function O(t,...n){if(t==null){for(const r of n)r(void 0);return E}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function G(t,n,e){t.$$.on_destroy.push(O(n,e))}function H(t,n,e,r){if(t){const o=k(t,n,e,r);return t[0](o)}}function k(t,n,e,r){return t[1]&&r?j(e.ctx.slice(),t[1](r(n))):e.ctx}function I(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const c=[],s=Math.max(n.dirty.length,o.length);for(let a=0;a<s;a+=1)c[a]=n.dirty[a]|o[a];return c}return n.dirty|o}return n.dirty}function J(t,n,e,r,o,c){if(o){const s=k(n,e,r,c);t.p(s,o)}}function K(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function L(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function N(t,n){const e={};n=new Set(n);for(const r in t)!n.has(r)&&r[0]!=="$"&&(e[r]=t[r]);return e}function Q(t){const n={};for(const e in t)n[e]=!0;return n}let _;function h(t){_=t}function b(){if(!_)throw new Error("Function called outside component initialization");return _}function R(t){b().$$.before_update.push(t)}function T(t){b().$$.on_mount.push(t)}function V(t){b().$$.after_update.push(t)}const i=[],y=[];let l=[];const x=[],w=Promise.resolve();let p=!1;function z(){p||(p=!0,w.then(M))}function W(){return z(),w}function B(t){l.push(t)}const d=new Set;let u=0;function M(){if(u!==0)return;const t=_;do{try{for(;u<i.length;){const n=i[u];u++,h(n),S(n.$$)}}catch(n){throw i.length=0,u=0,n}for(h(null),i.length=0,u=0;y.length;)y.pop()();for(let n=0;n<l.length;n+=1){const e=l[n];d.has(e)||(d.add(e),e())}l.length=0}while(i.length);for(;x.length;)x.pop()();p=!1,d.clear(),h(t)}function S(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(B)}}function X(t){const n=[],e=[];l.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),l=n}export{h as A,q as B,i as C,z as D,F as E,g as a,R as b,G as c,Q as d,H as e,I as f,K as g,j as h,N as i,L as j,V as k,y as l,B as m,E as n,T as o,C as p,U as q,v as r,D as s,W as t,J as u,A as v,M as w,P as x,X as y,_ as z};
