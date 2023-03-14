"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[9861],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=m(a),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(k,i(i({ref:e},s),{},{components:a})):n.createElement(k,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1204:(t,e,a)=>{a.d(e,{GT:()=>o,Mn:()=>i,O5:()=>r,nW:()=>l});var n=a(7294);const r=t=>{let{children:e}=t;return n.createElement("a",{href:"https://discord.gg/3RtDa2M9Bx"},e??"Discord")},l=t=>{let{children:e}=t;return n.createElement("a",{href:"https://github.com/Placeholder-Software/wasmbox/issues"},e??"Issue Tracker")},i=t=>{let{children:e}=t;return n.createElement("a",{href:"todo:link-asset-store"},e??"Unity Asset Store")},o=t=>{let{children:e}=t;return n.createElement("a",{href:"mailto:admin@placeholder-software.co.uk"},e??"admin@placeholder-software.co.uk")}},5781:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905)),l=a(1204);const i={title:"Platform Support",sidebar_position:2},o=void 0,p={unversionedId:"getting_started/platforms",id:"getting_started/platforms",title:"Platform Support",description:"Wasmbox is built using the Wasmtime WebAssembly engine. Wasmbox supported platforms are derived from the Wasmtime supported platforms policy.",source:"@site/docs/getting_started/platforms.md",sourceDirName:"getting_started",slug:"/getting_started/platforms",permalink:"/wasmbox/getting_started/platforms",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/getting_started/platforms.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Platform Support",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What Is WebAssembly?",permalink:"/wasmbox/getting_started/wasmintro"},next:{title:"Installation",permalink:"/wasmbox/getting_started/installation"}},m={},s=[{value:"Editor Platforms",id:"editor-platforms",level:2},{value:"Player Platforms",id:"player-platforms",level:2},{value:"Stability",id:"stability",level:2}],d={toc:s};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Wasmbox is built using the ",(0,r.kt)("a",{parentName:"p",href:"https://wasmtime.dev/"},"Wasmtime")," WebAssembly engine. Wasmbox supported platforms are derived from the Wasmtime ",(0,r.kt)("a",{parentName:"p",href:"https://docs.wasmtime.dev/stability-tiers.html"},"supported platforms")," policy."),(0,r.kt)("h2",{id:"editor-platforms"},"Editor Platforms"),(0,r.kt)("p",null,"All editor features of Wasmbox should work in any of the platforms listed here. If you encounter an issue on any of these platforms please ",(0,r.kt)(l.nW,null,"open an issue"),"!"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Unity Platform"),(0,r.kt)("th",{parentName:"tr",align:null},"Wasmtime Platform"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://docs.wasmtime.dev/stability-tiers.html"},"Wasmtime Support Tier")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x86_64-pc-windows-msvc")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x86_64-unknown-linux-gnu")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x86_64-apple-darwin")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MacOS ARM"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aarch64-apple-darwin")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 3")))),(0,r.kt)("h2",{id:"player-platforms"},"Player Platforms"),(0,r.kt)("p",null,"All runtime features of Wasmbox should work in any of the platforms listed here. If you encounter an issue on any of these platforms please ",(0,r.kt)(l.nW,null,"open an issue"),"!"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Unity Platform"),(0,r.kt)("th",{parentName:"tr",align:null},"Wasmtime Platform"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://docs.wasmtime.dev/stability-tiers.html"},"Wasmtime Support Tier")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x86_64-pc-windows-msvc")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows ARM"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aarch64-pc-windows-msvc")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x86_64-unknown-linux-gnu")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linux ARM (Desktop)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aarch64-unknown-linux-gnu")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linux ARM (Android)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aarch64-unknown-linux-gnu")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x86_64-apple-darwin")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MacOS ARM"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aarch64-apple-darwin")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iOS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Unsupported")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"None"))))),(0,r.kt)("h2",{id:"stability"},"Stability"),(0,r.kt)("p",null,"According to the Wasmtime ",(0,r.kt)("a",{parentName:"p",href:"https://docs.wasmtime.dev/stability-release.html"},"release policy")," a new version is released every month, which ",(0,r.kt)("em",{parentName:"p"},"may")," include breaking changes. Wasmbox will frequently update to the latest version of Wasmtime, which may also include breaking changes. The impact of breaking changes will be minimised by using ",(0,r.kt)("inlineCode",{parentName:"p"},"[Obsolete]")," attributes to mark out-of-date APIs, which will print a warning in the Editor when called."))}u.isMDXComponent=!0}}]);