"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[6045],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return t?n.createElement(f,l(l({ref:r},d),{},{components:t})):n.createElement(f,l({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=m;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3144:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const i={title:"Process"},l=void 0,a={unversionedId:"reference/code/WASI/process",id:"reference/code/WASI/process",title:"Process",description:'These WASI methods virtualise a Windows/Linux style "process".',source:"@site/docs/reference/code/WASI/process.md",sourceDirName:"reference/code/WASI",slug:"/reference/code/WASI/process",permalink:"/wasmbox/reference/code/WASI/process",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/reference/code/WASI/process.md",tags:[],version:"current",frontMatter:{title:"Process"},sidebar:"tutorialSidebar",previous:{title:"Virtual Filesystem",permalink:"/wasmbox/reference/code/WASI/filesystem"},next:{title:"Random",permalink:"/wasmbox/reference/code/WASI/random"}},c={},s=[{value:"VirtualProcess",id:"virtualprocess",level:2},{value:"IVirtualProcess",id:"ivirtualprocess",level:2},{value:"<code>void ProcExit(Caller caller, uint code)</code>",id:"void-procexitcaller-caller-uint-code",level:4},{value:"<code>WasiError SchedulerYield(Caller caller)</code>",id:"wasierror-scheduleryieldcaller-caller",level:4},{value:"<code>void Register(Linker linker)</code>",id:"void-registerlinker-linker",level:4}],d={toc:s};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'These WASI methods virtualise a Windows/Linux style "process".'),(0,o.kt)("h2",{id:"virtualprocess"},"VirtualProcess"),(0,o.kt)("p",null,"Provides a basic implementation of the process interface which triggers a callback when WASM calls ",(0,o.kt)("inlineCode",{parentName:"p"},"proc_exit"),"."),(0,o.kt)("h2",{id:"ivirtualprocess"},"IVirtualProcess"),(0,o.kt)("p",null,"The base interface for all WASI process implementations. If the default implementation does not fit your use-case custom implementations can be built using this interface."),(0,o.kt)("h4",{id:"void-procexitcaller-caller-uint-code"},(0,o.kt)("inlineCode",{parentName:"h4"},"void ProcExit(Caller caller, uint code)")),(0,o.kt)("p",null,"Terminate the process normally. An exit code of 0 indicates successful termination of the program."),(0,o.kt)("h4",{id:"wasierror-scheduleryieldcaller-caller"},(0,o.kt)("inlineCode",{parentName:"h4"},"WasiError SchedulerYield(Caller caller)")),(0,o.kt)("p",null,"Temporarily yield execution of the calling thread. The default implementation does not support this method."),(0,o.kt)("h4",{id:"void-registerlinker-linker"},(0,o.kt)("inlineCode",{parentName:"h4"},"void Register(Linker linker)")),(0,o.kt)("p",null,"Add all functions of this implementation to the ",(0,o.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/linker"},"Linker"),". This can usually be implemented as a direct call to ",(0,o.kt)("inlineCode",{parentName:"p"},"linker.Register(this);"),"."))}p.isMDXComponent=!0}}]);