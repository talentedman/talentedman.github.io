import{u as j,a as x,r as u,j as n,L as m,M as v,O as L,R as S,S as _,b,c as R,d as E,e as w,f as C,P,H as O,C as N,z as A}from"./vendor-3ce47a86.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(s){if(s.ep)return;s.ep=!0;const e=o(s);fetch(s.href,e)}})();const k="modulepreload",z=function(r,t){return new URL(r,t).href},h={},g=function(t,o,a){if(!o||o.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(o.map(e=>{if(e=z(e,a),e in h)return;h[e]=!0;const i=e.endsWith(".css"),y=i?'[rel="stylesheet"]':"";if(!!a)for(let l=s.length-1;l>=0;l--){const d=s[l];if(d.href===e&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${y}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":k,i||(c.as="script",c.crossOrigin=""),c.href=e,document.head.appendChild(c),i)return new Promise((l,d)=>{c.addEventListener("load",l),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>t())},B=""+new URL("../assets/upupimg_0-84e6f1aa.png",import.meta.url).href,{Content:I,Sider:T}=m,U=[{path:"/",icon:n.jsx(S,{}),label:"小冰冰传奇"},{path:"/upup",icon:n.jsx("img",{src:B,style:{height:14,objectFit:"contain"}}),label:"举牌小人生成器"}];function K(){const r=j(),t=x(),[o,a]=u.useState(["/"]);u.useEffect(()=>{const e=[t.pathname];a(e)},[t]);const s=e=>{r(e),a([e])};return n.jsx(m,{style:{width:"100%",height:"100%"},children:n.jsxs(m,{children:[n.jsx(T,{theme:"light",children:n.jsx(v,{mode:"inline",selectedKeys:o,style:{height:"100%",paddingBottom:200,overflowY:"auto",overflowX:"hidden"},className:"hide-scrollbar",items:U.map(e=>({key:e.path,icon:e.icon,label:e.label,onClick:()=>{s(e.path)}}))})}),n.jsx(m,{className:"site-layout",children:n.jsx(I,{className:"site-layout-background",style:{padding:12,minHeight:280,overflowX:"hidden"},children:n.jsx(L,{})})})]})})}const W=u.lazy(()=>g(()=>import("./Widget_Xbbcq-ac049eae.js"),["./Widget_Xbbcq-ac049eae.js","./vendor-3ce47a86.js"],import.meta.url)),$=u.lazy(()=>g(()=>import("./Widget_UpUp-e03d279f.js"),["./Widget_UpUp-e03d279f.js","./vendor-3ce47a86.js"],import.meta.url)),q=[{path:"/",element:n.jsx(K,{}),children:[{path:"/",element:p(n.jsx(W,{}))},{path:"/upup",element:p(n.jsx($,{}))}]}];function p(r){const t=n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:n.jsx(_,{size:"large",tip:"Loading..."})});return n.jsx(u.Suspense,{fallback:t,children:r})}function H(){return b(q)}const M={value:0,status:"idle"},f=R("counter/incrementAsync",async r=>(await new Promise(o=>{setTimeout(()=>o({data:r}),1e3)})).data),V=E({name:"counter",initialState:M,reducers:{increment:r=>{r.value+=1},decrement:r=>{r.value-=1},incrementByAmount:(r,t)=>{r.value+=t.payload}},extraReducers:r=>{r.addCase(f.pending,t=>{t.status="loading"}).addCase(f.fulfilled,(t,o)=>{t.status="idle",t.value+=o.payload}).addCase(f.rejected,t=>{t.status="failed"})}}),X=V.reducer,D=w({reducer:{counter:X}});C.createRoot(document.getElementById("root")).render(n.jsx(P,{store:D,children:n.jsx(O,{children:n.jsx(N,{locale:A,children:n.jsx(H,{})})})}));
