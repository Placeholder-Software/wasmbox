"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[3518],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[p]="string"==typeof e?e:a,i[1]=d;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Loaded Module",sidebar_position:5},i=void 0,d={unversionedId:"reference/code/loadedmodule",id:"reference/code/loadedmodule",title:"Loaded Module",description:"A LoadedModule represents WASM Asset that has been loaded into memory and is ready to be used to create WASM instances.",source:"@site/docs/reference/code/loadedmodule.md",sourceDirName:"reference/code",slug:"/reference/code/loadedmodule",permalink:"/wasmbox/reference/code/loadedmodule",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/reference/code/loadedmodule.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Loaded Module",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Engine Config",permalink:"/wasmbox/reference/code/engineconfig"},next:{title:"Generated Code",permalink:"/wasmbox/reference/code/codegeneration"}},s={},c=[{value:"Methods",id:"methods",level:2},{value:"<code>Dispose()</code>",id:"dispose",level:3},{value:"<code>Store CreateStore()</code>",id:"store-createstore",level:3},{value:"<code>Linker CreateLinker()</code>",id:"linker-createlinker",level:3},{value:"<code>Instance CreateInstance(Linker linker, Store store)</code>",id:"instance-createinstancelinker-linker-store-store",level:3}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadedModule")," represents ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmasset"},"WASM Asset")," that has been loaded into memory and is ready to be used to create WASM instances."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadedModule")," can be created from any ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmasset"},"WASM Asset")," (including a custom ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/iwasmasset"},"IWasmAsset"),") by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"asset.Load(EngineConfig.Default)"),". Modules will be loaded into memory and compiled the first time this is called, subsequent calls will load from the cache."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"See ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmasset#instantiating-a-wasm-asset"},"this documentation")," for more information on creating WASM Instances")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"dispose"},(0,a.kt)("inlineCode",{parentName:"h3"},"Dispose()")),(0,a.kt)("p",null,"Dispose the ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadedModule")," and free all memory used by it."),(0,a.kt)("h3",{id:"store-createstore"},(0,a.kt)("inlineCode",{parentName:"h3"},"Store CreateStore()")),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/store"},(0,a.kt)("inlineCode",{parentName:"a"},"Store"))," which can be used with instances created from this ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadedModule"),"."),(0,a.kt)("h3",{id:"linker-createlinker"},(0,a.kt)("inlineCode",{parentName:"h3"},"Linker CreateLinker()")),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/linker"},(0,a.kt)("inlineCode",{parentName:"a"},"Linker"))," which can be used to configure instances created from this ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadedModule"),"."),(0,a.kt)("h3",{id:"instance-createinstancelinker-linker-store-store"},(0,a.kt)("inlineCode",{parentName:"h3"},"Instance CreateInstance(Linker linker, Store store)")),(0,a.kt)("p",null,"Use a ",(0,a.kt)("inlineCode",{parentName:"p"},"Store")," and ",(0,a.kt)("inlineCode",{parentName:"p"}," Linker")," to create a new ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/instance"},(0,a.kt)("inlineCode",{parentName:"a"},"Instance"))," which can be used to execute WASM code."))}p.isMDXComponent=!0}}]);