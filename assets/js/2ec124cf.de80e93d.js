"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[5681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1204:(e,t,n)=>{n.d(t,{GT:()=>l,Mn:()=>i,O5:()=>a,nW:()=>o});var r=n(7294);const a=e=>{let{children:t}=e;return r.createElement("a",{href:"https://discord.gg/3RtDa2M9Bx"},t??"Discord")},o=e=>{let{children:t}=e;return r.createElement("a",{href:"https://github.com/Placeholder-Software/wasmbox/issues"},t??"Issue Tracker")},i=e=>{let{children:t}=e;return r.createElement("a",{href:"https://assetstore.unity.com/packages/slug/248818?aid=1100lJDF"},t??"Unity Asset Store")},l=e=>{let{children:t}=e;return r.createElement("a",{href:"mailto:admin@placeholder-software.co.uk"},t??"admin@placeholder-software.co.uk")}},9350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),o=n(1204);const i={date:new Date("2023-05-24T00:00:00.000Z")},l=void 0,s={permalink:"/wasmbox/releases/v9.0.0",source:"@site/release_notes/v9.0.0.md",title:"v9.0.0",description:"This version of Wasmbox upgrades to Wasmtime v9.0.1.",date:"2023-05-24T00:00:00.000Z",formattedDate:"May 24, 2023",tags:[],readingTime:.975,hasTruncateMarker:!0,authors:[],frontMatter:{date:"2023-05-24T00:00:00.000Z"},prevItem:{title:"v10.0.0",permalink:"/wasmbox/releases/v10.0.0"},nextItem:{title:"v8.0.0",permalink:"/wasmbox/releases/v8.0.0"}},c={authorsImageUrls:[]},u=[{value:"Features \ud83d\ude80",id:"features-",level:2},{value:"Bugfixes \ud83d\udc1b",id:"bugfixes-",level:2}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This version of Wasmbox upgrades to ",(0,a.kt)("inlineCode",{parentName:"p"},"Wasmtime v9.0.1"),"."),(0,a.kt)("p",null,"The new ",(0,a.kt)("inlineCode",{parentName:"p"},"IVirtualSocket")," interface introduced in Wasmbox adds support for the Wasi-Socket proposal. The only implementation currently included in Wasmbox (",(0,a.kt)("inlineCode",{parentName:"p"},"NonFunctionalSocket"),") does ",(0,a.kt)("em",{parentName:"p"},"not")," provide network connectivity, instead it always acts as if it is not connected to a network. This can be useful when a large compiled WASM program imports sockets, but you do not actually need networking connectivity for your use case."),(0,a.kt)("p",null,"Wasmbox is very new, so it is likely you will encounter bugs, awkward APIs or missing features. Please direct feedback to ",(0,a.kt)(o.O5,null)," or the ",(0,a.kt)(o.nW,null),"."),(0,a.kt)("h2",{id:"features-"},"Features \ud83d\ude80"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wasmtime ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bytecodealliance/wasmtime/blob/main/RELEASES.md#900"},"v9.0.1")),(0,a.kt)("li",{parentName:"ul"},"Wasmtime-dotnet ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bytecodealliance/wasmtime-dotnet/releases/tag/v9.0.1"},"v9.0.1"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"Store.SetLimits")," which adds hard limits on the amount of memory that can be consumed by WASM."))),(0,a.kt)("li",{parentName:"ul"},"Added a ",(0,a.kt)("inlineCode",{parentName:"li"},"IVirtualSocket"),", representing WASI socket support."),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"NonFunctionalSocket"),", an implementation of ",(0,a.kt)("inlineCode",{parentName:"li"},"IVirtualSocket")," which acts as if it is not connected to a network."),(0,a.kt)("li",{parentName:"ul"},"Modified WASI interfaces to use ",(0,a.kt)("inlineCode",{parentName:"li"},"ref"),",",(0,a.kt)("inlineCode",{parentName:"li"},"out")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Span<T>")," parameters where possible instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"Pointer<T>")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Buffer<T>"),". This significantly improves the user experience when interacting with these interfaces from ",(0,a.kt)("em",{parentName:"li"},"non")," WASM code.")),(0,a.kt)("h2",{id:"bugfixes-"},"Bugfixes \ud83d\udc1b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"None.")))}p.isMDXComponent=!0}}]);