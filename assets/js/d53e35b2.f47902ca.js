"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[1736],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(r),u=n,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const i={title:"Determinism",sidebar_position:1},o=void 0,l={unversionedId:"advanced/determinism",id:"advanced/determinism",title:"Determinism",description:"WebAssembly (WASM) is deterministic - it guarantees that the execution of a given module with the same input values will always produce the same output values, regardless of the platform or implementation used to run the module. This means that the execution of a WebAssembly module is predictable and reproducible.",source:"@site/docs/advanced/determinism.md",sourceDirName:"advanced",slug:"/advanced/determinism",permalink:"/wasmbox/advanced/determinism",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/advanced/determinism.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Determinism",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/wasmbox/advanced/"},next:{title:"Runtime WASM Loading",permalink:"/wasmbox/advanced/runtime_wasm_loading"}},s={},m=[{value:"WASI",id:"wasi",level:2},{value:"Threads",id:"threads",level:2}],c={toc:m};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"WebAssembly (WASM) is deterministic - it guarantees that the execution of a given module with the same input values will always produce the same output values, regardless of the platform or implementation used to run the module. This means that the execution of a WebAssembly module is predictable and reproducible."),(0,n.kt)("p",null,"Wasmbox includes a checkbox on the ",(0,n.kt)("a",{parentName:"p",href:"/wasmbox/reference/editor/import#1-general"},"importer")," which configures the importer pipeline (optimiser and compiler) to allow non-deterministic code."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"By default the output of the importer pipeline will be deterministic. Non-determinism must be deliberately ",(0,n.kt)("em",{parentName:"p"},"enabled"),".")),(0,n.kt)("h2",{id:"wasi"},"WASI"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/wasmbox/basics/wasi/"},"WASI")," provides WebAssembly code with access to a large set of features, some of which may introduce non-determinism. For example the realtime clock provides access to the actual time, which changes every time it is read, this is non-deterministic. All Wasmbox WASI implementations can be made to act deterministically:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wasmbox/reference/code/WASI/random"},"IVirtualRandomSource"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CryptoRandomSource")," is truly random (non-deterministic)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"FastRandomSource")," is seeded pseudo-random (deterministic)."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wasmbox/reference/code/WASI/clock"},"IVirtualClock"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"RealtimeClock")," provides the real time (non-deterministic)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ManualClock"),' only "ticks" when specifically instructed to (deterministic).'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wasmbox/reference/code/WASI/environment"},"IVirtualEnvironment"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"VirtualEnvironment")," is deterministic if the real environment variables are not exposed (",(0,n.kt)("inlineCode",{parentName:"li"},"PassthroughEnvironmentVariables()"),")."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wasmbox/reference/code/WASI/filesystem"},"IVirtualFileSystem"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"VirtualFileSystem")," is deterministic if the real filesystem is not exposed."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wasmbox/reference/code/WASI/poll"},"IVirtualEventPoll"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"VirtualEventPoll")," depends on the clock and the file system, it is deterministic if they are."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wasmbox/reference/code/WASI/process"},"IVirtualProcess"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"VirtualProcess")," is always deterministic."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wasmbox/reference/code/WASI/socket"},"IVirtualSocket"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NonFunctionalSocket")," is always deterministic.")))),(0,n.kt)("h2",{id:"threads"},"Threads"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/proposals/issues/14"},(0,n.kt)("inlineCode",{parentName:"a"},"wasm-threads"))," is a proposed extension to WASM which adds support for multiple execution threads. It is not currently supported within Wasmbox."))}p.isMDXComponent=!0}}]);