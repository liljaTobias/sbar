if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,t)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}}))).then((e=>{const r=t(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-3b5792f5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./index.bundle.js",revision:"7500611725a6088ea8ff3577bc1e8591"},{url:"./index.bundle.js.LICENSE.txt",revision:"06aaf05fc771429393d34842f4440c16"},{url:"./index.html",revision:"a1c7e3f537d417b3d667d6992bb7c4f6"}],{})}));