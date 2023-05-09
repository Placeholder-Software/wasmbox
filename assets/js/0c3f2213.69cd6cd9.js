"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[5872],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||c;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5695:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const c={title:"Socket"},a=void 0,i={unversionedId:"reference/code/WASI/socket",id:"reference/code/WASI/socket",title:"Socket",description:"The WASI socket interfaces allows WebAssembly code to interact with the network.",source:"@site/docs/reference/code/WASI/socket.md",sourceDirName:"reference/code/WASI",slug:"/reference/code/WASI/socket",permalink:"/wasmbox/reference/code/WASI/socket",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/reference/code/WASI/socket.md",tags:[],version:"current",frontMatter:{title:"Socket"},sidebar:"tutorialSidebar",previous:{title:"Random",permalink:"/wasmbox/reference/code/WASI/random"},next:{title:"SimpleWasmMonoBehaviour",permalink:"/wasmbox/reference/code/simplewasmmonobehaviour"}},l={},s=[{value:"NonFunctionalSocket",id:"nonfunctionalsocket",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The WASI socket interfaces allows WebAssembly code to interact with the network."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Wasmbox does not currently implement the WASI socket interface.")),(0,o.kt)("h2",{id:"nonfunctionalsocket"},"NonFunctionalSocket"),(0,o.kt)("p",null,"Does not do anything and will return an error code to WASM code which calls it. This can be used when loading WASM files which requires the socket imports, but do not actually use them at runtime"))}p.isMDXComponent=!0}}]);