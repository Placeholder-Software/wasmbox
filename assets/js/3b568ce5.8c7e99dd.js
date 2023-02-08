"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[4674],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={title:"Using WASM In Scripts",sidebar_position:1},o=void 0,s={unversionedId:"basics/using_wasm",id:"basics/using_wasm",title:"Using WASM In Scripts",description:"todo:basic usage of WASM",source:"@site/docs/basics/using_wasm.md",sourceDirName:"basics",slug:"/basics/using_wasm",permalink:"/wasmbox/basics/using_wasm",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/basics/using_wasm.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Using WASM In Scripts",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/wasmbox/category/basics"},next:{title:"Addressable Loading",permalink:"/wasmbox/basics/addressables"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"todo:basic usage of WASM"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Extend ",(0,a.kt)("inlineCode",{parentName:"li"},"SimpleWasmMonoBehaviour<>")),(0,a.kt)("li",{parentName:"ol"},"Pass wrapper type as generic ",(0,a.kt)("inlineCode",{parentName:"li"},"<WasmUUtils.WasmUUtils>")),(0,a.kt)("li",{parentName:"ol"},"Override ",(0,a.kt)("inlineCode",{parentName:"li"},"protected override void ConfigureLinker(Linker linker)")),(0,a.kt)("li",{parentName:"ol"},"In editor, set ",(0,a.kt)("inlineCode",{parentName:"li"},"Wasm Asset")," to the relevant asset"),(0,a.kt)("li",{parentName:"ol"},"In editor, configure engine"),(0,a.kt)("li",{parentName:"ol"},"Call ",(0,a.kt)("inlineCode",{parentName:"li"},"Wrapper.Whatever()"))))}u.isMDXComponent=!0}}]);