var H=Object.defineProperty;var W=(_,t,u)=>t in _?H(_,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):_[t]=u;var d=(_,t,u)=>(W(_,typeof t!="symbol"?t+"":t,u),u);import{r as l,h as B,j as g,T as M,i as A,k as L,l as f,n as x,D as k}from"./vendor-40e7f10d.js";const z=""+new URL("../assets/upupimg_0-84e6f1aa.png",import.meta.url).href,F=""+new URL("../assets/upupimg_1-5628b87b.png",import.meta.url).href,P=""+new URL("../assets/upupimg_10-f892599f.png",import.meta.url).href,$=""+new URL("../assets/upupimg_11-16df996a.png",import.meta.url).href,q=""+new URL("../assets/upupimg_12-3615569f.png",import.meta.url).href,G=""+new URL("../assets/upupimg_13-cc20489e.png",import.meta.url).href,J=""+new URL("../assets/upupimg_14-12d95bdb.png",import.meta.url).href,K=""+new URL("../assets/upupimg_15-534fc709.png",import.meta.url).href,N=""+new URL("../assets/upupimg_16-189188f3.png",import.meta.url).href,Q=""+new URL("../assets/upupimg_17-4b7849f4.png",import.meta.url).href,V=""+new URL("../assets/upupimg_18-2beff6ba.png",import.meta.url).href,X=""+new URL("../assets/upupimg_19-a19ae556.png",import.meta.url).href,Y=""+new URL("../assets/upupimg_2-45a04db4.png",import.meta.url).href,Z=""+new URL("../assets/upupimg_20-a8c530fa.png",import.meta.url).href,ee=""+new URL("../assets/upupimg_21-fb1c9940.png",import.meta.url).href,te=""+new URL("../assets/upupimg_22-86d20ef1.png",import.meta.url).href,pe=""+new URL("../assets/upupimg_23-798417ce.png",import.meta.url).href,ue=""+new URL("../assets/upupimg_24-32ff3c9d.png",import.meta.url).href,ie=""+new URL("../assets/upupimg_25-fbb6aada.png",import.meta.url).href,ae=""+new URL("../assets/upupimg_26-eff335e5.png",import.meta.url).href,ge=""+new URL("../assets/upupimg_27-0b5f7138.png",import.meta.url).href,se=""+new URL("../assets/upupimg_28-1dacc5f3.png",import.meta.url).href,ne=""+new URL("../assets/upupimg_29-70b5e9ea.png",import.meta.url).href,_e=""+new URL("../assets/upupimg_3-6b83a82a.png",import.meta.url).href,me=""+new URL("../assets/upupimg_30-5fbb6f3c.png",import.meta.url).href,re=""+new URL("../assets/upupimg_31-f1425bc6.png",import.meta.url).href,oe=""+new URL("../assets/upupimg_32-c49dfc95.png",import.meta.url).href,le=""+new URL("../assets/upupimg_33-abe6df39.png",import.meta.url).href,ce=""+new URL("../assets/upupimg_34-073c4555.png",import.meta.url).href,fe=""+new URL("../assets/upupimg_35-542c4a38.png",import.meta.url).href,he=""+new URL("../assets/upupimg_36-021742a4.png",import.meta.url).href,be=""+new URL("../assets/upupimg_37-21e25525.png",import.meta.url).href,ve=""+new URL("../assets/upupimg_38-ff47b3fc.png",import.meta.url).href,we=""+new URL("../assets/upupimg_39-d659bc07.png",import.meta.url).href,de=""+new URL("../assets/upupimg_4-71ab2e16.png",import.meta.url).href,Re=""+new URL("../assets/upupimg_40-363703a9.png",import.meta.url).href,Ue=""+new URL("../assets/upupimg_5-cb691b5d.png",import.meta.url).href,Le=""+new URL("../assets/upupimg_6-8eba4865.png",import.meta.url).href,xe=""+new URL("../assets/upupimg_7-d9c1e3a0.png",import.meta.url).href,je=""+new URL("../assets/upupimg_8-c55ed4dc.png",import.meta.url).href,De=""+new URL("../assets/upupimg_9-d53c80a2.png",import.meta.url).href;class Ce{constructor(t){d(this,"params");d(this,"timer",null);this.params={containerDiv:t,text:"",color:"#42240f",left:0,bgColor:"transparent",imgObj:{imgLD:35,imgBD:20,left:45},textObj:{width:40,height:40,textRD:20,textBD:10}}}beginDrag(t,u,s){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{this.draw(t,u,s)},100)}draw(t,u,s){let e=this;if(!t)return;e.params.text=t,e.params.bgColor=u,e.params.color=s;const a=e.params.text.split(`
`),p=document.createElement("canvas"),i=p.getContext("2d");if(!i)return;p.width=1920,p.height=980,i.fillStyle=e.params.bgColor,i.fillRect(0,0,p.width,p.height);const n=[];let m=0;const h=[];a.forEach((j,D)=>{e.loadImg(j.split(""),function(C){n[D]=C,++m==a.length&&(m=0,n.forEach(function(y,b){var I=n.length-b-1;y.forEach(function(R,o){var r=R.image,U=R.text;if(!(U===" "&&++m)){if(e.params.left)var c=e.params.left+(o*r.naturalWidth-o*e.params.imgObj.imgLD)-b*e.params.imgObj.left;else var c=o*r.naturalWidth-o*e.params.imgObj.imgLD+I*45;var v=b*(r.naturalHeight*.3)+o*e.params.imgObj.imgBD;h.push({x:c+r.naturalWidth,y:v+r.naturalHeight}),i.drawImage(r,c,v,r.naturalWidth,r.naturalHeight),e.drawText(U,e.params.textObj.width,e.params.textObj.height,function(O){if(i.drawImage(O,c+e.params.textObj.textRD,v+e.params.textObj.textBD),++m===a.join("").length){var E=Math.max.apply(null,h.map(function(w){return w.x})),T=Math.max.apply(null,h.map(function(w){return w.y})),S=i.getImageData(0,0,p.width,p.height);p.width=E,p.height=T,i.putImageData(S,0,0),e.params.containerDiv.innerHTML="",e.params.containerDiv.appendChild(p)}})}})}))})})}loadImg(t,u){let s=this,e=0,a=[];t.forEach(function(p,i){const n=new Image,m=s.getImageUrl();n.onload=function(){a[i]={image:n,text:p},++e===t.length&&u(a)},n.src=m})}drawText(t,u,s,e){const a=document.createElement("canvas");a.width=u,a.height=s;const p=a.getContext("2d");if(!p)return;p.transform(.766044,.3,-.742788,.766044,20,0),p.font="30px SimHei",p.textAlign="center",p.fillStyle=this.params.color,p.fillText(t,14,28);const i=new Image;i.onload=function(){e(i)},i.src=a.toDataURL("image/png")}getImageUrl(){return new URL(Object.assign({"../images/upup/upupimg_0.png":z,"../images/upup/upupimg_1.png":F,"../images/upup/upupimg_10.png":P,"../images/upup/upupimg_11.png":$,"../images/upup/upupimg_12.png":q,"../images/upup/upupimg_13.png":G,"../images/upup/upupimg_14.png":J,"../images/upup/upupimg_15.png":K,"../images/upup/upupimg_16.png":N,"../images/upup/upupimg_17.png":Q,"../images/upup/upupimg_18.png":V,"../images/upup/upupimg_19.png":X,"../images/upup/upupimg_2.png":Y,"../images/upup/upupimg_20.png":Z,"../images/upup/upupimg_21.png":ee,"../images/upup/upupimg_22.png":te,"../images/upup/upupimg_23.png":pe,"../images/upup/upupimg_24.png":ue,"../images/upup/upupimg_25.png":ie,"../images/upup/upupimg_26.png":ae,"../images/upup/upupimg_27.png":ge,"../images/upup/upupimg_28.png":se,"../images/upup/upupimg_29.png":ne,"../images/upup/upupimg_3.png":_e,"../images/upup/upupimg_30.png":me,"../images/upup/upupimg_31.png":re,"../images/upup/upupimg_32.png":oe,"../images/upup/upupimg_33.png":le,"../images/upup/upupimg_34.png":ce,"../images/upup/upupimg_35.png":fe,"../images/upup/upupimg_36.png":he,"../images/upup/upupimg_37.png":be,"../images/upup/upupimg_38.png":ve,"../images/upup/upupimg_39.png":we,"../images/upup/upupimg_4.png":de,"../images/upup/upupimg_40.png":Re,"../images/upup/upupimg_5.png":Ue,"../images/upup/upupimg_6.png":Le,"../images/upup/upupimg_7.png":xe,"../images/upup/upupimg_8.png":je,"../images/upup/upupimg_9.png":De})[`../images/upup/upupimg_${Math.floor(Math.random()*40)}.png`],self.location).href}}function Oe(){const[_,t]=l.useState(""),u=B.createRef(),[s,e]=l.useState("#00000000"),[a,p]=l.useState("#42240f"),i=l.useRef();return l.useEffect(()=>{u.current&&(i.current||(i.current=new Ce(u.current)),i.current.beginDrag(_,s,a))},[_,s,a]),g.jsxs(g.Fragment,{children:[g.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[g.jsx(M,{placeholder:"举牌文字",style:{width:"60%",marginRight:20},value:_,onChange:n=>{t(n.target.value)},allowClear:!0,autoSize:!0}),g.jsxs(A,{align:"middle",children:[g.jsxs(L,{children:[g.jsx(f,{children:"背景颜色:"}),g.jsx(f,{children:g.jsx(x,{format:"rgb",value:s,onChange:(n,m)=>{e(m)}})})]}),g.jsxs(L,{style:{marginLeft:20},children:[g.jsx(f,{children:"文本颜色:"}),g.jsx(f,{children:g.jsx(x,{format:"rgb",value:a,onChange:(n,m)=>{p(m)}})})]})]})]}),g.jsx(k,{}),g.jsx("div",{ref:u,style:{overflow:"auto"}})]})}export{Oe as default};
