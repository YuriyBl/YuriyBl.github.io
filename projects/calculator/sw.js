if(!self.define){let e,t={};const s=(s,c)=>(s=new URL(s+".js",c).href,t[s]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=t,document.head.appendChild(e)}else e=s,importScripts(s),t()})).then((()=>{let e=t[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(t[a])return;let n={};const r=e=>s(e,a),o={module:{uri:a},exports:n,require:r};t[a]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/android-chrome-192x192.png",revision:"a842441bb5148853a5cf227f12627143"},{url:"/android-chrome-512x512.png",revision:"314e0a9d82179b6ba414866624dd9bfa"},{url:"/apple-touch-icon.png",revision:"4c987586493cc9941888a9434f6cad05"},{url:"/favicon-16x16.png",revision:"1b2a2320aa30c89f039bae69cfaa28ff"},{url:"/favicon-32x32.png",revision:"3a33142a779da046a0f421fdc3ab7fc9"},{url:"/favicon.ico",revision:"91c52dfd0fe59df785aca2912cebfe64"},{url:"/manifest.json",revision:"9cc114ac743c3a40c34390c24c436efa"},{url:"https://yuriybl.github.io/projects/calculator/_next/app-build-manifest.json",revision:"23aec9e2762264117f5df77c92a875c8"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/110-79237d86d1ab5d9c.js",revision:"wHLswPvXupwf-quZfZHAY"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/23-e9b3016ee375c6a4.js",revision:"wHLswPvXupwf-quZfZHAY"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/88-56141e1202d778f7.js",revision:"wHLswPvXupwf-quZfZHAY"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/969-2cd30ca46ded643f.js",revision:"wHLswPvXupwf-quZfZHAY"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/app/_not-found/page-66ea361c5f6bd229.js",revision:"wHLswPvXupwf-quZfZHAY"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/app/layout-2e4e9039ad08dde5.js",revision:"wHLswPvXupwf-quZfZHAY"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/app/page-4604f0791b5059f3.js",revision:"wHLswPvXupwf-quZfZHAY"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/fd9d1056-82fc2a82826c61b9.js",revision:"wHLswPvXupwf-quZfZHAY"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/framework-f66176bb897dc684.js",revision:"wHLswPvXupwf-quZfZHAY"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/main-56d94db6e448f520.js",revision:"wHLswPvXupwf-quZfZHAY"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/main-app-caca6c8fd15cc9e6.js",revision:"wHLswPvXupwf-quZfZHAY"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"wHLswPvXupwf-quZfZHAY"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"wHLswPvXupwf-quZfZHAY"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/chunks/webpack-2db0c97f3fe0a335.js",revision:"wHLswPvXupwf-quZfZHAY"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/css/d7635c42626355ca.css",revision:"d7635c42626355ca"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/wHLswPvXupwf-quZfZHAY/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"https://yuriybl.github.io/projects/calculator/_next/static/wHLswPvXupwf-quZfZHAY/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:t,event:s,state:c})=>t&&"opaqueredirect"===t.type?new Response(t.body,{status:200,statusText:"OK",headers:t.headers}):t}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const t=e.pathname;return!t.startsWith("/api/auth/")&&!!t.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
