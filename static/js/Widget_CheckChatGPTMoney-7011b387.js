import{r as g,j as a,T as x,B as f,D as _,g as D,m as p}from"./vendor-8ced10a8.js";async function b(e){if(!e){p.error("缺少API密钥");return}e=e.trim();const u="https://api.openai.com/dashboard/billing/subscription",i={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.64",Authorization:`Bearer ${e}`,Accept:"*/*",Host:"api.openai.com",Connection:"keep-alive"};try{const t=await(await fetch(u,{headers:i})).json();if(t.error){p.error(t.error.message||JSON.stringify(t));return}const o=c=>`${c.getFullYear()}-${(c.getMonth()+1).toString().padStart(2,"0")}-${c.getDate().toString().padStart(2,"0")}`,s=o(new Date(new Date().getFullYear(),new Date().getMonth()-1,1)),l=o(new Date(new Date().getFullYear(),new Date().getMonth()+1,1)),n=await(await fetch(`https://api.openai.com/dashboard/billing/usage?start_date=${s}&end_date=${l}`,{headers:i})).json(),d=n.total_usage?(Math.round(n.total_usage)/100).toFixed(2):0,m=t.hard_limit_usd?(Math.round(t.hard_limit_usd*100)/100).toFixed(2):0;return t.apiKey=e,t.used=d,t.subscription=m,t.remaining=(Number(m)-Number(d)).toFixed(2),t.expirationDate=new Date(t.access_until*1e3).toLocaleString(),t.isBindCard=t.has_payment_method?"已绑卡":"未绑卡",t.system_hard_limit_usd=t.system_hard_limit_usd.toFixed(2),t}catch(r){p.error(r);return}}function w(){const[e,u]=g.useState(""),[i,r]=g.useState(),[t,o]=g.useState(!1);return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[a.jsx(x,{placeholder:"sk-xxx",style:{width:"60%",marginRight:20},value:e,onChange:s=>{u(s.target.value)},allowClear:!0,disabled:t}),a.jsx(f,{type:"primary",loading:t,onClick:async()=>{r(null),o(!0);const s=e.split(`
`);for(let l=0;l<s.length;l++){const h=s[l],n=await b(h);n&&r(d=>d?[n,...d]:[n])}o(!1)},children:"点击查询"})]}),a.jsx(_,{}),i?a.jsx(D,{columns:[{title:"有效期至",dataIndex:"apiKey"},{title:"有效期至",dataIndex:"expirationDate"},{title:"账户名称",dataIndex:"account_name"},{title:"是否绑卡",dataIndex:"isBindCard"},{title:"已消费额度",dataIndex:"used"},{title:"剩余额度",dataIndex:"remaining"},{title:"账户额度",dataIndex:"subscription"}],dataSource:i,bordered:!0,pagination:!1,size:"small",scroll:{y:700}}):null]})}export{w as default};