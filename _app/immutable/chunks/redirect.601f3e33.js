import"./singletons.109453b7.js";const r=(a,s)=>{const e=new URL(a);return e.pathname=s,e},t=(a,s)=>{const e=new URL(a);return a.searchParams.getAll("skill").includes(s)?e.searchParams.delete("skill",s):e.searchParams.append("skill",s),e};export{t as a,r as c};
