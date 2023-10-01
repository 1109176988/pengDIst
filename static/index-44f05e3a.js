import{g as Y,a as g,j as u}from"./index-14a3ee8b.js";import{a as S,F as W}from"./Fade-26a477af.js";import{p as R,g as C,w as J}from"./wrap-964b16f0.js";const A="_abort_17cdp_1",L="_workspace_17cdp_9",U="_info_17cdp_24",V="_avatar_17cdp_30",z="_button_17cdp_76",B="_subtitleClip_17cdp_1",m={abort:A,workspace:L,info:U,avatar:V,button:z,subtitleClip:B},G="/static/page-hero-workspace-5250b4a4.webp",H="/static/avatar-3ac0203d.webp";var w={},K={get exports(){return w},set exports(d){w=d}};(function(d,s){function c(r){return r&&r.__esModule?r:{default:r}}function h(r,e){var n={};for(var o in r)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n}function f(){return b||(b=(0,i.animation)(v))}function p(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i.defaults,e=r.children,n=(r.out,r.timeout),o=r.duration,a=o===void 0?i.defaults.duration:o,_=r.delay,x=_===void 0?i.defaults.delay:_,y=r.count,E=y===void 0?i.defaults.count:y,P=r.forever,F=h(r,["children","out","timeout","duration","delay","count","forever"]),T={make:f,duration:n===void 0?a:n,delay:x,forever:P,count:E,style:{animationFillMode:"both"}};return(0,k.default)(F,T,!1,e,!0)}Object.defineProperty(s,"__esModule",{value:!0});var t=R,l=J,k=c(l),i=C,j={duration:t.number,timeout:t.number,delay:t.number,count:t.number,forever:t.bool},v=`
  from, 11.1%, to {
    transform: none;
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
}
`,b=!1;p.propTypes=j,s.default=p,d.exports=s.default})(K,w);const Q=Y(w);var O={},Z={get exports(){return O},set exports(d){O=d}};(function(d,s){function c(e){return e&&e.__esModule?e:{default:e}}function h(e,n){var o={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(o[a]=e[a]);return o}function f(e){function n(I){return I?X?{duration:P,delay:F,count:T,forever:M,className:X,style:{}}:q:N?{duration:a===void 0?_:a,delay:x,count:y,forever:E,className:N,style:{}}:$}var o=e.children,a=e.timeout,_=e.duration,x=e.delay,y=e.count,E=e.forever,P=e.durationOut,F=e.delayOut,T=e.countOut,M=e.foreverOut,N=e.effect,X=e.effectOut,$=e.inEffect,q=e.outEffect,D=h(e,["children","timeout","duration","delay","count","forever","durationOut","delayOut","countOut","foreverOut","effect","effectOut","inEffect","outEffect"]);return(0,i.default)(D,n(!1),n(!0),o)}Object.defineProperty(s,"__esModule",{value:!0});var p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},t=R,l=C,k=J,i=c(k),j=S,v=c(j),b={in:t.object,out:(0,t.oneOfType)([t.object,(0,t.oneOf)([!1])]),effect:t.string,effectOut:t.string,duration:t.number,timeout:t.number,delay:t.number,count:t.number,forever:t.bool,durationOut:t.number,delayOut:t.number,countOut:t.number,foreverOut:t.bool},r=p({},l.defaults,{durationOut:l.defaults.duration,delayOut:l.defaults.delay,countOut:l.defaults.count,foreverOut:l.defaults.forever,inEffect:(0,v.default)(l.defaults),outEffect:(0,v.default)(p({out:!0},l.defaults))});f.propTypes=b,f.defaultProps=r,s.default=f,d.exports=s.default})(Z,O);const ee=Y(O),ne=d=>{const s=()=>{const c=document.querySelector("#project");c&&c.scrollIntoView({behavior:"smooth"})};return g("div",{className:m.abort,id:"about",children:[u("div",{className:m.workspace,children:u("img",{src:G,alt:"workspace"})}),g("div",{className:m.info,children:[u(W,{bottom:!0,children:u("div",{className:m.avatar,children:u("img",{src:H,alt:"个人头像"})})}),g(ee,{effect:"fadeInUp",children:[u("h2",{children:"Jabin Li"}),u("h3",{children:"软件开发人员"}),g("p",{children:["👋🏽 嘿，我叫 李志鹏，我是一名前端开发人员 👨‍💻， 🏠住在武汉。 大多数情况下，我正在处理一些网站 🕸 和移动端 📱 。 目前就职于",u("a",{target:"_blank",href:"https://www.fs.com",children:"FS"}),"。业余爱好喜欢打游戏，也喜欢折腾一些电子产品来取乐。努力成为一个终身学习者🧠以及一个好父亲💁🏻‍♂️"]})]}),u(Q,{children:u("div",{className:m.button,onClick:s,children:"了解更多👇"})})]})]})};export{ne as default};
