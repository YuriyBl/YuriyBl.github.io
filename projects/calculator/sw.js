if(!self.define){let t,e={};const s=(s,i)=>(s=new URL(s+".js",i).href,e[s]||new Promise((e=>{if("document"in self){const t=document.createElement("script");t.src=s,t.onload=e,document.head.appendChild(t)}else t=s,importScripts(s),e()})).then((()=>{let t=e[s];if(!t)throw new Error(`Module ${s} didn’t register its module`);return t})));self.define=(i,a)=>{const c=t||("document"in self?document.currentScript.src:"")||location.href;if(e[c])return;let r={};const n=t=>s(t,c),o={module:{uri:c},exports:r,require:n};e[c]=Promise.all(i.map((t=>o[t]||n(t)))).then((t=>(a(...t),r)))}}define(["./workbox-1bb06f5e"],(function(t){"use strict";importScripts(),self.skipWaiting(),t.clientsClaim(),t.precacheAndRoute([{url:"/android-chrome-192x192.png",revision:"a842441bb5148853a5cf227f12627143"},{url:"/android-chrome-512x512.png",revision:"314e0a9d82179b6ba414866624dd9bfa"},{url:"/apple-touch-icon.png",revision:"4c987586493cc9941888a9434f6cad05"},{url:"/favicon-16x16.png",revision:"1b2a2320aa30c89f039bae69cfaa28ff"},{url:"/favicon-32x32.png",revision:"3a33142a779da046a0f421fdc3ab7fc9"},{url:"/favicon.ico",revision:"91c52dfd0fe59df785aca2912cebfe64"},{url:"/manifest.json",revision:"38090d04f14af6c9a944df734d6ecdf7"},{url:"https://yuriybl.github.io/projects/calculator/_next/app-build-manifest.json",revision:"6357ef3d690e5a2963eef65f87a3ab75"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/LTBZE8ytP1rWtKqBAOmRd/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/LTBZE8ytP1rWtKqBAOmRd/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/110-79237d86d1ab5d9c.js",revision:"LTBZE8ytP1rWtKqBAOmRd"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/23-e9b3016ee375c6a4.js",revision:"LTBZE8ytP1rWtKqBAOmRd"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/88-56141e1202d778f7.js",revision:"LTBZE8ytP1rWtKqBAOmRd"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/969-2cd30ca46ded643f.js",revision:"LTBZE8ytP1rWtKqBAOmRd"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/app/_not-found/page-66ea361c5f6bd229.js",revision:"LTBZE8ytP1rWtKqBAOmRd"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/app/layout-633453aeaea98325.js",revision:"LTBZE8ytP1rWtKqBAOmRd"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/app/page-ac499873faa2b586.js",revision:"LTBZE8ytP1rWtKqBAOmRd"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/fd9d1056-82fc2a82826c61b9.js",revision:"LTBZE8ytP1rWtKqBAOmRd"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/framework-f66176bb897dc684.js",revision:"LTBZE8ytP1rWtKqBAOmRd"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/main-56d94db6e448f520.js",revision:"LTBZE8ytP1rWtKqBAOmRd"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/main-app-5e8613806e32f1d4.js",revision:"LTBZE8ytP1rWtKqBAOmRd"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"LTBZE8ytP1rWtKqBAOmRd"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"LTBZE8ytP1rWtKqBAOmRd"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/webpack-2db0c97f3fe0a335.js",revision:"LTBZE8ytP1rWtKqBAOmRd"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/css/d7635c42626355ca.css",revision:"d7635c42626355ca"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"}],{ignoreURLParametersMatching:[]}),t.cleanupOutdatedCaches(),t.registerRoute("/",new t.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:t,response:e,event:s,state:i})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),t.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new t.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new t.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),t.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new t.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new t.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),t.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new t.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new t.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),t.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new t.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new t.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),t.registerRoute(/\/_next\/image\?url=.+$/i,new t.StaleWhileRevalidate({cacheName:"next-image",plugins:[new t.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),t.registerRoute(/\.(?:mp3|wav|ogg)$/i,new t.CacheFirst({cacheName:"static-audio-assets",plugins:[new t.RangeRequestsPlugin,new t.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),t.registerRoute(/\.(?:mp4)$/i,new t.CacheFirst({cacheName:"static-video-assets",plugins:[new t.RangeRequestsPlugin,new t.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),t.registerRoute(/\.(?:js)$/i,new t.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new t.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),t.registerRoute(/\.(?:css|less)$/i,new t.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new t.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),t.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new t.StaleWhileRevalidate({cacheName:"next-data",plugins:[new t.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),t.registerRoute(/\.(?:json|xml|csv)$/i,new t.NetworkFirst({cacheName:"static-data-assets",plugins:[new t.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),t.registerRoute((({url:t})=>{if(!(self.origin===t.origin))return!1;const e=t.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new t.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new t.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),t.registerRoute((({url:t})=>{if(!(self.origin===t.origin))return!1;return!t.pathname.startsWith("/api/")}),new t.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new t.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),t.registerRoute((({url:t})=>!(self.origin===t.origin)),new t.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new t.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
