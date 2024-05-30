(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4215:function(e,t,r){Promise.resolve().then(r.bind(r,5897))},5897:function(e,t,r){"use strict";r.r(t),r.d(t,{Calculator:function(){return b}});var a=r(7437),s=r(2265),l=r(9733),n=r(4033),i=r(8095),d=r(7289),c=r(883),o=r(3113),u=r(9354);let m=e=>{let{shouldScaleBackground:t=!0,...r}=e;return(0,a.jsx)(o.d.Root,{shouldScaleBackground:t,...r})};m.displayName="Drawer";let x=o.d.Trigger,f=o.d.Portal,h=o.d.Close,v=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(o.d.Overlay,{ref:t,className:(0,u.cn)("fixed inset-0 z-50 bg-black/80",r),...s})});v.displayName=o.d.Overlay.displayName;let p=s.forwardRef((e,t)=>{let{className:r,children:s,...l}=e;return(0,a.jsxs)(f,{children:[(0,a.jsx)(v,{}),(0,a.jsxs)(o.d.Content,{ref:t,className:(0,u.cn)("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",r),...l,children:[(0,a.jsx)("div",{className:"mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"}),s]})]})});p.displayName="DrawerContent";let g=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,u.cn)("grid gap-1.5 p-4 text-center sm:text-left",t),...r})};g.displayName="DrawerHeader";let j=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,u.cn)("mt-auto flex flex-col gap-2 p-4",t),...r})};j.displayName="DrawerFooter";let N=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(o.d.Title,{ref:t,className:(0,u.cn)("text-lg font-semibold leading-none tracking-tight",r),...s})});N.displayName=o.d.Title.displayName,s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(o.d.Description,{ref:t,className:(0,u.cn)("text-sm text-muted-foreground",r),...s})}).displayName=o.d.Description.displayName;let b=()=>{let[e,t]=s.useState([]),[r,o]=s.useState([]),f=e=>{t(t=>[...t,{id:Math.random(),value:e}])},v=e=>{o(t=>[...t,e]),setTimeout(()=>{t(t=>t.filter(t=>t.id!==e)),o(t=>t.filter(t=>t!==e))},295)},b=(0,s.useMemo)(()=>{let t=e.filter(e=>!r.includes(e.id));return 0===t.length?0:t.reduce((e,t)=>e+t.value,0)/t.length},[r,e]);return(0,a.jsxs)("div",{className:"h-full w-full max-w-[500px] flex flex-col gap-3 px-2",children:[(0,a.jsx)("div",{className:"flex flex-grow"}),(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("h2",{className:"text text-slate-600 text-2xl",children:b.toFixed(2)}),(0,a.jsx)("h1",{className:"text-6xl",children:Math.round(b)})]}),(0,a.jsx)("div",{className:"grid h-[60dvh] max-h-80 grid-cols-3 gap-1",children:Array.from({length:12},(e,t)=>t+1).map(e=>(0,a.jsx)(l.z,{variant:"outline",className:"h-full text-md",onClick:()=>f(e),children:e},e))}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-1",children:[(0,a.jsxs)(l.z,{variant:"secondary",onClick:()=>{let t=e.toReversed().find(e=>!r.includes(e.id));t&&v(t.id)},children:[(0,a.jsx)(n.Z,{className:"mr-2 h-4 w-4"}),"Відмінити"]}),(0,a.jsxs)(l.z,{variant:"destructive",onClick:()=>{o(e.map(e=>e.id)),setTimeout(()=>{t([]),o([])},295)},children:[(0,a.jsx)(i.Z,{className:"mr-2 h-4 w-4"}),"Скинути"]})]}),(0,a.jsx)("div",{className:"mb-5",children:(0,a.jsxs)(m,{children:[(0,a.jsxs)("div",{className:"flex justify-between items-stretch",children:[(0,a.jsx)("ul",{className:"w-full flex items-center gap-2 text-slate-600 overflow-x-auto",children:e.toReversed().map(e=>{let t=r.includes(e.id),s=e.value>9?"20px":"14px";return(0,a.jsx)("li",{className:"duration-300 fill-mode-forwards ease-in-out ".concat(t?"animate-shrink-out":"animate-shrink-in"),style:{"--animate-element-width":s,"--animate-element-gap":"-8px"},children:e.value},"".concat(e.value,"-").concat(e.id))})}),(0,a.jsx)("div",{className:"w-8 -ml-5 -mr-2 bg-gradient-to-r from-transparent to-background z-10"}),(0,a.jsx)(x,{asChild:!0,children:(0,a.jsxs)(l.z,{variant:"link",children:[(0,a.jsx)(d.Z,{className:"mr-2 h-4 w-4"}),"Список"]})})]}),(0,a.jsx)(p,{children:(0,a.jsxs)("div",{className:"mx-auto w-full max-w-sm",children:[(0,a.jsx)(g,{children:(0,a.jsx)(N,{children:"Список оцінок"})}),(0,a.jsx)("div",{className:"p-4 pb-0",children:(0,a.jsx)("ul",{className:"w-full max-h-[50dvh] flex flex-col gap-2 overflow-x-auto",children:e.toReversed().map(e=>{let t=r.includes(e.id);return(0,a.jsxs)("li",{className:(0,u.cn)("flex items-center justify-between rounded-md p-1 pl-3 text-md border border-input-800",t&&"duration-300 fill-mode-forwards ease-in-out animate-collapse-out"),style:{"--animate-element-height":"50px","--animate-element-gap":"-18px"},children:[(0,a.jsx)("p",{children:e.value}),(0,a.jsx)(l.z,{variant:"destructive",className:"text-sm",onClick:()=>v(e.id),children:(0,a.jsx)(c.Z,{className:"h-4 w-4"})})]},"".concat(e.value,"-").concat(e.id))})})}),(0,a.jsx)(j,{children:(0,a.jsx)(h,{asChild:!0,children:(0,a.jsx)(l.z,{variant:"outline",children:"Скасувати"})})})]})})]})})]})}},9733:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var a=r(7437),s=r(2265),l=r(1538),n=r(2218),i=r(9354);let d=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:r,variant:s,size:n,asChild:c=!1,...o}=e,u=c?l.g7:"button";return(0,a.jsx)(u,{className:(0,i.cn)(d({variant:s,size:n,className:r})),ref:t,...o})});c.displayName="Button"},9354:function(e,t,r){"use strict";r.d(t,{cn:function(){return l}});var a=r(4839),s=r(6164);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,a.W)(t))}}},function(e){e.O(0,[969,88,971,23,744],function(){return e(e.s=4215)}),_N_E=e.O()}]);