"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[1406],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(r),u=n,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return r?a.createElement(f,s(s({ref:t},m),{},{components:r})):a.createElement(f,s({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={title:"WASM Asset",sidebar_position:1},s=void 0,i={unversionedId:"reference/code/wasmasset",id:"reference/code/wasmasset",title:"WASM Asset",description:"A WasmAsset is a WASM module which has been imported in the editor from a .wasm or .wat file and converted into a form ready to load at runtime. For WasmAsset editor/inspector documentation see here.",source:"@site/docs/reference/code/wasmasset.md",sourceDirName:"reference/code",slug:"/reference/code/wasmasset",permalink:"/wasmbox/reference/code/wasmasset",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/reference/code/wasmasset.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"WASM Asset",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Code",permalink:"/wasmbox/category/code"},next:{title:"IWasmAsset",permalink:"/wasmbox/reference/code/iwasmasset"}},c={},l=[{value:"Instantiating A WASM Asset",id:"instantiating-a-wasm-asset",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>Metadata</code>",id:"metadata",level:3}],m={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"WasmAsset")," is a WASM module which has been ",(0,n.kt)("a",{parentName:"p",href:"/wasmbox/reference/editor/import"},"imported")," in the editor from a ",(0,n.kt)("inlineCode",{parentName:"p"},"*.wasm")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"*.wat")," file and converted into a form ready to load at runtime. For ",(0,n.kt)("inlineCode",{parentName:"p"},"WasmAsset")," editor/inspector documentation see ",(0,n.kt)("a",{parentName:"p",href:"/wasmbox/reference/editor/wasmasset"},"here"),"."),(0,n.kt)("p",null,"It is also possible to load a WASM module at runtime from a ",(0,n.kt)("inlineCode",{parentName:"p"},"byte[]")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," (",(0,n.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/dynamicwasmasset"},(0,n.kt)("inlineCode",{parentName:"a"},"DynamicWasmAsset")),") or to create a completely custom WASM asset type (",(0,n.kt)("a",{parentName:"p",href:"/wasmbox/advanced/customwasmasset"},(0,n.kt)("inlineCode",{parentName:"a"},"IWasmAsset")),")."),(0,n.kt)("h2",{id:"instantiating-a-wasm-asset"},"Instantiating A WASM Asset"),(0,n.kt)("p",null,"todo:Instantiating A WASM Asset"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"metadata"},(0,n.kt)("inlineCode",{parentName:"h3"},"Metadata")),(0,n.kt)("p",null,"Contains metadata about the WASM module this asset contains; lists of all imported and exported memories, globals, tables and functions."),(0,n.kt)("p",null,"This allows inspecting the dependencies of a WASM module without instantiating the module itself."))}p.isMDXComponent=!0}}]);