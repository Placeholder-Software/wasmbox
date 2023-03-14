"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[4173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1204:(e,t,n)=>{n.d(t,{GT:()=>s,Mn:()=>i,O5:()=>a,nW:()=>o});var r=n(7294);const a=e=>{let{children:t}=e;return r.createElement("a",{href:"https://discord.gg/3RtDa2M9Bx"},t??"Discord")},o=e=>{let{children:t}=e;return r.createElement("a",{href:"https://github.com/Placeholder-Software/wasmbox/issues"},t??"Issue Tracker")},i=e=>{let{children:t}=e;return r.createElement("a",{href:"todo:link-asset-store"},t??"Unity Asset Store")},s=e=>{let{children:t}=e;return r.createElement("a",{href:"mailto:admin@placeholder-software.co.uk"},t??"admin@placeholder-software.co.uk")}},1788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),o=n(1204);const i={slug:"/",sidebar_position:0,title:"Wasmbox"},s=void 0,l={unversionedId:"index",id:"index",title:"Wasmbox",description:"Wasmbox is full WebAssembly runtime for Unity, based on Wasmtime. WebAssembly (WASM) makes it possible to execute compiled code (e.g. C, C++ or Rust) in a safe and secure sandbox - providing high performance, safe execution of potentially untrusted code, cross platform portability and deterministic execution.",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/wasmbox/",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/index.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:"/",sidebar_position:0,title:"Wasmbox"},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/wasmbox/getting_started/"}},c={},m=[{value:"How Fast Is It?",id:"how-fast-is-it",level:3},{value:"How Safe Is It?",id:"how-safe-is-it",level:3},{value:"How Easy Is It?",id:"how-easy-is-it",level:3},{value:"Where Can I Get It?",id:"where-can-i-get-it",level:2}],p={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Wasmbox")," is full ",(0,a.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly")," runtime for Unity, based on ",(0,a.kt)("a",{parentName:"p",href:"https://wasmtime.dev/"},"Wasmtime"),". WebAssembly (WASM) makes it possible to execute compiled code (e.g. C, C++ or Rust) in a safe and secure sandbox - providing high ",(0,a.kt)("strong",{parentName:"p"},"performance"),", ",(0,a.kt)("strong",{parentName:"p"},"safe execution")," of potentially untrusted code, cross platform ",(0,a.kt)("strong",{parentName:"p"},"portability")," and ",(0,a.kt)("strong",{parentName:"p"},"deterministic")," execution."),(0,a.kt)("p",null,"Why would you want this? How about:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Executing mods in a safe sandbox."),(0,a.kt)("li",{parentName:"ul"},"Sharing mods between users without any security concerns."),(0,a.kt)("li",{parentName:"ul"},"Running a plugin written in a non-C# language (e.g. Rust) on multiple platforms without recompiling."),(0,a.kt)("li",{parentName:"ul"},'Adding user scripting by running an entire language runtime (e.g. Python) in a "virtual" machine.'),(0,a.kt)("li",{parentName:"ul"},"Executing game code in a totally deterministic runtime for easy lockstep multiplayer.")),(0,a.kt)("h3",{id:"how-fast-is-it"},"How Fast Is It?"),(0,a.kt)("p",null,"WebAssembly is designed for ",(0,a.kt)("strong",{parentName:"p"},"near native")," performance. ",(0,a.kt)("a",{parentName:"p",href:"https://programming-language-benchmarks.vercel.app/wasm-vs-csharp"},"Benchmarks")," show Wasmtime achieves approximately the same performance as C# - usually faster than Mono (Unity) and usually slower than the latest modern runtime (e.g. dotnet 7.0). Wasmbox squeezes out the maximum performance by automatically optimising, precompiling and compressing WASM as part of the asset importing process."),(0,a.kt)("h3",{id:"how-safe-is-it"},"How Safe Is It?"),(0,a.kt)("p",null,"All WebAssembly code is executed in a completely memory-safe sandboxed environment - by default ",(0,a.kt)("strong",{parentName:"p"},"nothing")," is accessible to code running inside the sandbox. Creating new sandboxes is fast and easy, allowing multiple different bits of WASM code to be sandboxed from each other. Additional resources ",(0,a.kt)("em",{parentName:"p"},"can")," be made available inside the sandbox if necessary - this can be as simple as a single C# method that can be called from inside the sandbox, or it can be as complex as an entire virtual filesystem."),(0,a.kt)("h3",{id:"how-easy-is-it"},"How Easy Is It?"),(0,a.kt)("p",null,"WebAssembly files (WASM/WAT format) are imported through the standard Unity asset pipeline. Just drop them into your Assets folder, and Wasmbox will bring them into your project and automatically generate a C# wrapper for your WASM module. This includes support for the Unity ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/JobSystem.html"},"Job/Safety System"),", allowing WASM code to be executed off the main thread. Wasmbox includes a ",(0,a.kt)("inlineCode",{parentName:"p"},"MonoBehaviour")," based script which handles all of the complex work of loading and invoking WASM for you."),(0,a.kt)("h2",{id:"where-can-i-get-it"},"Where Can I Get It?"),(0,a.kt)("b",null,"Buy Wasmbox from the ",(0,a.kt)(o.Mn,null),"!"))}u.isMDXComponent=!0}}]);