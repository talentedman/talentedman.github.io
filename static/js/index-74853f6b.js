import{u as j,a as v,r as u,j as s,L as f,M as S,O as L,R as m,S as C,b as _,c as E,d as P,e as R,f as O,P as b,H as w,C as N,z as A}from"./vendor-40e7f10d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(n){if(n.ep)return;n.ep=!0;const e=o(n);fetch(n.href,e)}})();const k="modulepreload",I=function(r,t){return new URL(r,t).href},p={},g=function(t,o,a){if(!o||o.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(o.map(e=>{if(e=I(e,a),e in p)return;p[e]=!0;const i=e.endsWith(".css"),x=i?'[rel="stylesheet"]':"";if(!!a)for(let l=n.length-1;l>=0;l--){const d=n[l];if(d.href===e&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${x}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":k,i||(c.as="script",c.crossOrigin=""),c.href=e,document.head.appendChild(c),i)return new Promise((l,d)=>{c.addEventListener("load",l),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>t())},{Content:z,Sider:B}=f,T=[{path:"/",icon:s.jsx(m,{}),label:"测试OpenAI余额"},{path:"/upup",icon:s.jsx(m,{}),label:"举牌小人生成器"}];function K(){const r=j(),t=v(),[o,a]=u.useState(["/"]);u.useEffect(()=>{const e=[t.pathname];a(e)},[t]);const n=e=>{r(e),a([e])};return s.jsx(f,{style:{width:"100%",height:"100%"},children:s.jsxs(f,{children:[s.jsx(B,{theme:"light",children:s.jsx(S,{mode:"inline",selectedKeys:o,style:{height:"100%",paddingBottom:200,overflowY:"auto",overflowX:"hidden"},className:"hide-scrollbar",items:T.map(e=>({key:e.path,icon:e.icon,label:e.label,onClick:()=>{n(e.path)}}))})}),s.jsx(f,{className:"site-layout",children:s.jsx(z,{className:"site-layout-background",style:{padding:12,minHeight:280,overflowX:"hidden"},children:s.jsx(L,{})})})]})})}const M=u.lazy(()=>g(()=>import("./Widget_CheckChatGPTMoney-00f7db7c.js"),["./Widget_CheckChatGPTMoney-00f7db7c.js","./vendor-40e7f10d.js"],import.meta.url)),U=u.lazy(()=>g(()=>import("./Widget_UpUp-6808e3d2.js"),["./Widget_UpUp-6808e3d2.js","./vendor-40e7f10d.js"],import.meta.url)),W=[{path:"/",element:s.jsx(K,{}),children:[{index:!0,element:y(s.jsx(M,{}))},{path:"/upup",element:y(s.jsx(U,{}))}]}];function y(r){const t=s.jsx("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx(C,{size:"large",tip:"Loading..."})});return s.jsx(u.Suspense,{fallback:t,children:r})}function $(){return _(W)}const H={value:0,status:"idle"},h=E("counter/incrementAsync",async r=>(await new Promise(o=>{setTimeout(()=>o({data:r}),1e3)})).data),V=P({name:"counter",initialState:H,reducers:{increment:r=>{r.value+=1},decrement:r=>{r.value-=1},incrementByAmount:(r,t)=>{r.value+=t.payload}},extraReducers:r=>{r.addCase(h.pending,t=>{t.status="loading"}).addCase(h.fulfilled,(t,o)=>{t.status="idle",t.value+=o.payload}).addCase(h.rejected,t=>{t.status="failed"})}}),q=V.reducer,D=R({reducer:{counter:q}});O.createRoot(document.getElementById("root")).render(s.jsx(b,{store:D,children:s.jsx(w,{children:s.jsx(N,{locale:A,children:s.jsx($,{})})})}));