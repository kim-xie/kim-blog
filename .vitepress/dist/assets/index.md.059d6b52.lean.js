import{_ as L,o as b,c as M,p as B,m as C,k as I,H as P}from"./chunks/framework.c1799029.js";const S={},H=a=>(B("data-v-f994631b"),a=a(),C(),a),k={class:"button-wrap"},W=H(()=>I("button",{type:"button"},"点我",-1)),z=[W];function A(a,m){return b(),M("div",k,z)}const N=L(S,[["render",A],["__scopeId","data-v-f994631b"]]),D=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home"},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),X={name:"index.md"},O=Object.assign(X,{setup(a){function m(){let s=[],o=!1,_,l=0,u,p,d,r,i;const w=["#F73859","#14FFEC","#00E0FF","#FF99FE","#FAF15D"],n=document.createElement("canvas");document.body.appendChild(n),n.setAttribute("style","width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;");const f=document.createElement("span");f.classList.add("pointer"),document.body.appendChild(f),n.getContext&&window.addEventListener?(i=n.getContext("2d"),x(),window.addEventListener("resize",x,!1),g(),window.addEventListener("mousedown",function(e){y(c(10,20),e.clientX,e.clientY),document.body.classList.add("is-pressed"),_=setTimeout(function(){document.body.classList.add("is-longpress"),o=!0},500)},!1),window.addEventListener("mouseup",function(e){clearInterval(_),o==!0&&(document.body.classList.remove("is-longpress"),y(c(50+Math.ceil(l),100+Math.ceil(l)),e.clientX,e.clientY),o=!1),document.body.classList.remove("is-pressed")},!1),window.addEventListener("mousemove",function(e){let t=e.clientX,h=e.clientY;f.style.top=h+"px",f.style.left=t+"px"},!1)):console.log("canvas or addEventListener is unsupported!");function x(){n.width=window.innerWidth*2,n.height=window.innerHeight*2,n.style.width=window.innerWidth+"px",n.style.height=window.innerHeight+"px",i.scale(2,2),u=n.width=window.innerWidth,p=n.height=window.innerHeight,d={x:u/2,y:p/2},r={x:u/2,y:p/2}}class E{constructor(t=d.x,h=d.y){this.x=t,this.y=h,this.angle=Math.PI*2*Math.random(),o==!0?this.multiplier=c(14+l,15+l):this.multiplier=c(6,12),this.vx=(this.multiplier+Math.random()*.5)*Math.cos(this.angle),this.vy=(this.multiplier+Math.random()*.5)*Math.sin(this.angle),this.r=c(8,12)+3*Math.random(),this.color=w[Math.floor(Math.random()*w.length)]}update(){this.x+=this.vx-r.x,this.y+=this.vy-r.y,r.x=-2/window.innerWidth*Math.sin(this.angle),r.y=-2/window.innerHeight*Math.cos(this.angle),this.r-=.3,this.vx*=.9,this.vy*=.9}}function y(e=1,t=d.x,h=d.y){for(let v=0;v<e;v++)s.push(new E(t,h))}function c(e,t){return Math.floor(Math.random()*t)+e}function g(){i.fillStyle="rgba(255, 255, 255, 0)",i.clearRect(0,0,n.width,n.height);for(let e=0;e<s.length;e++){let t=s[e];t.r<0||(i.fillStyle=t.color,i.beginPath(),i.arc(t.x,t.y,t.r,0,Math.PI*2,!1),i.fill(),t.update())}o==!0?l+=.2:!o&&l>=0&&(l-=.4),F(),requestAnimationFrame(g)}function F(){for(let e=0;e<s.length;e++){let t=s[e];(t.x+t.r<0||t.x-t.r>u||t.y+t.r<0||t.y-t.r>p||t.r<0)&&s.splice(e,1)}}}return m(),(s,o)=>(b(),M("div",null,[P(N)]))}});export{D as __pageData,O as default};
