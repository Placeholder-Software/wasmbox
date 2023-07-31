"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(n),u=o,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const a={title:"WASI Demo",sidebar_position:2},i=void 0,s={unversionedId:"getting_started/demos/WasiDemo",id:"getting_started/demos/WasiDemo",title:"WASI Demo",description:"This scene demonstrates the most usage of WASI (WebAssembly System Interface) with Wasmbox. It is located in Assets\\Plugins\\PlaceholderSoftware\\Wasmbox\\Demos.",source:"@site/docs/getting_started/demos/WasiDemo.md",sourceDirName:"getting_started/demos",slug:"/getting_started/demos/WasiDemo",permalink:"/wasmbox/getting_started/demos/WasiDemo",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/getting_started/demos/WasiDemo.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"WASI Demo",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basic MonoBehaviour",permalink:"/wasmbox/getting_started/demos/BasicMonoBehaviour"},next:{title:"Fuel Usage Demo",permalink:"/wasmbox/getting_started/demos/FuelUsage"}},l={},m=[],c={toc:m};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This scene demonstrates the most usage of WASI (WebAssembly System Interface) with ",(0,o.kt)("b",null,"Wasmbox"),". It is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets\\Plugins\\PlaceholderSoftware\\Wasmbox\\Demos"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Demo Object")," has a ",(0,o.kt)("inlineCode",{parentName:"p"},"WasiDemoScript")," attached. The ",(0,o.kt)("a",{parentName:"p",href:"/wasmbox/basics/linker"},(0,o.kt)("inlineCode",{parentName:"a"},"ConfigureLinker"))," method is used to define a random number generator which can be accessed by WASM."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Inspect ",(0,o.kt)("inlineCode",{parentName:"li"},"WasiDemoWat"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Function Imports")," foldout (near the bottom) shows an import of the WASI function ",(0,o.kt)("inlineCode",{parentName:"li"},"random_get"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Function Exports")," foldout (near the bottom) shows an export of a function ",(0,o.kt)("inlineCode",{parentName:"li"},"get_random_i64")))),(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("inlineCode",{parentName:"li"},"WasiDemoScript.cs"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ConfigureLinker")," gives access to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Linker")," which can be used to expose things to WASM."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/wasmbox/reference/code/WASI/random"},(0,o.kt)("inlineCode",{parentName:"a"},"FastRandomSource"))," is added to the linker, this provides the required ",(0,o.kt)("inlineCode",{parentName:"li"},"random_get")," import."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OnEnable")," uses ",(0,o.kt)("b",null,"override")," and calls ",(0,o.kt)("inlineCode",{parentName:"li"},"base.OnEnable()"),", if you use ",(0,o.kt)("inlineCode",{parentName:"li"},"OnEnable")," in your scripts which use ",(0,o.kt)("inlineCode",{parentName:"li"},"SimpleWasmMonoBehaviour")," don't forget to do this!")))))}p.isMDXComponent=!0}}]);