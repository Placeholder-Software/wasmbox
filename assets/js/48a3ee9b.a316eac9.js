"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[2843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=o.createContext({}),c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||r;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const r={title:"Engine Config",sidebar_position:4},a=void 0,l={unversionedId:"reference/code/engineconfig",id:"reference/code/engineconfig",title:"Engine Config",description:"An Engine is used when a WASM Asset is loaded into a LoadedModule. The EngineConfig controls exactly how the asset is loaded and what features are compiled into the code.",source:"@site/docs/reference/code/engineconfig.md",sourceDirName:"reference/code",slug:"/reference/code/engineconfig",permalink:"/wasmbox/reference/code/engineconfig",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/reference/code/engineconfig.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Engine Config",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Dynamic WASM Asset",permalink:"/wasmbox/reference/code/dynamicwasmasset"},next:{title:"Loaded Module",permalink:"/wasmbox/reference/code/loadedmodule"}},d={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>Default</code>",id:"default",level:3},{value:"<code>UseFuel</code>",id:"usefuel",level:3},{value:"<code>UseEpochInterruption</code>",id:"useepochinterruption",level:3},{value:"<code>OptimizationLevel</code>",id:"optimizationlevel",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>GetEngine()</code>",id:"getengine",level:3}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"Engine")," is used when a ",(0,i.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmasset"},"WASM Asset")," is loaded into a ",(0,i.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/loadedmodule"},(0,i.kt)("inlineCode",{parentName:"a"},"LoadedModule")),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"EngineConfig")," controls exactly how the asset is loaded and what features are compiled into the code."),(0,i.kt)("p",null,"todo:interruption/epoch group"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"default"},(0,i.kt)("inlineCode",{parentName:"h3"},"Default")),(0,i.kt)("p",null,"Get an ",(0,i.kt)("inlineCode",{parentName:"p"},"EngineConfig")," with default settings."),(0,i.kt)("h3",{id:"usefuel"},(0,i.kt)("inlineCode",{parentName:"h3"},"UseFuel")),(0,i.kt)("p",null,'Enable "fuel consumption" for WASM code. When enabled each instruction will consume "fuel" and execution will terminate when out of fuel. This can be used to protect against buggy or malicious code taking too much time executing.'),(0,i.kt)("p",null,"For more details on fuel consumption, see ",(0,i.kt)("a",{parentName:"p",href:"/wasmbox/basics/fuelusage"},"this tutorial"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Fuel consumption can significantly slow down the execution of WASM code.")),(0,i.kt)("h3",{id:"useepochinterruption"},(0,i.kt)("inlineCode",{parentName:"h3"},"UseEpochInterruption")),(0,i.kt)("p",null,"Include support for ",(0,i.kt)("inlineCode",{parentName:"p"},"Epoch Interruption")," in precompiled code. When enabled executing WebAssembly code can be interrupted by an external signal from another thread."),(0,i.kt)("p",null,"For more details on epoch interruption, see ",(0,i.kt)("a",{parentName:"p",href:"/wasmbox/basics/epochinterruption"},"this tutorial"),"."),(0,i.kt)("h3",{id:"optimizationlevel"},(0,i.kt)("inlineCode",{parentName:"h3"},"OptimizationLevel")),(0,i.kt)("p",null,"Set the optimization priority for generated code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"None"),": Generated code will not be optimized at all."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Speed")," (",(0,i.kt)("strong",{parentName:"li"},"default"),"): Generated code will be optimized purely for speed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SpeedAndSize")," Generated code will be optimized, but some speed optimizations are disabled if they cause the generated code to be significantly larger.")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"getengine"},(0,i.kt)("inlineCode",{parentName:"h3"},"GetEngine()")),(0,i.kt)("p",null,"Get the wasmtime ",(0,i.kt)("inlineCode",{parentName:"p"},"Engine")," instance for the current configuration. Wasmbox keeps a cache of all ",(0,i.kt)("inlineCode",{parentName:"p"},"Engine")," objects with the same configuration."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Engine")," object returned from this method ",(0,i.kt)("strong",{parentName:"p"},"must not")," be disposed!")))}s.isMDXComponent=!0}}]);