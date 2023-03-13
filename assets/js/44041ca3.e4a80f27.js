"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[1446],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1204:(e,t,r)=>{r.d(t,{GT:()=>i,Mn:()=>l,O5:()=>a,nW:()=>o});var n=r(7294);const a=e=>{let{children:t}=e;return n.createElement("a",{href:"https://discord.gg/3RtDa2M9Bx"},t??"Discord")},o=e=>{let{children:t}=e;return n.createElement("a",{href:"https://github.com/Placeholder-Software/wasmbox/issues"},t??"Issue Tracker")},l=e=>{let{children:t}=e;return n.createElement("a",{href:"todo:link-asset-store"},t??"Unity Asset Store")},i=e=>{let{children:t}=e;return n.createElement("a",{href:"mailto:admin@placeholder-software.co.uk"},t??"admin@placeholder-software.co.uk")}},2175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),o=r(1204);const l={date:new Date("2023-03-13T00:00:00.000Z")},i=void 0,s={permalink:"/wasmbox/releases/v1.0.0",source:"@site/release_notes/v1.0.0.md",title:"v1.0.0",description:"The first release of Wasmbox! Since this is the very first release it is likely you will encounter bugs, awkward APIs or missing features. Please direct feedback to  or the .",date:"2023-03-13T00:00:00.000Z",formattedDate:"March 13, 2023",tags:[],readingTime:.38,hasTruncateMarker:!0,authors:[],frontMatter:{date:"2023-03-13T00:00:00.000Z"}},c={authorsImageUrls:[]},u=[{value:"Features \ud83d\ude80",id:"features-",level:2},{value:"Bugfixes \ud83d\udc1b",id:"bugfixes-",level:2}],p={toc:u};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The first release of Wasmbox! Since this is the very first release it is likely you will encounter bugs, awkward APIs or missing features. Please direct feedback to ",(0,a.kt)(o.O5,null)," or the ",(0,a.kt)(o.nW,null),"."),(0,a.kt)("p",null,"todo:set the date when asset is released"),(0,a.kt)("h2",{id:"features-"},"Features \ud83d\ude80"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wasmtime based WASM runtime for Unity."),(0,a.kt)("li",{parentName:"ul"},"Custom WASI implementation."),(0,a.kt)("li",{parentName:"ul"},"Optimising import pipeline."),(0,a.kt)("li",{parentName:"ul"},"Unity ",(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Manual/JobSystem.html"},"Job System")," compatible.")),(0,a.kt)("h2",{id:"bugfixes-"},"Bugfixes \ud83d\udc1b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"None.")))}f.isMDXComponent=!0}}]);