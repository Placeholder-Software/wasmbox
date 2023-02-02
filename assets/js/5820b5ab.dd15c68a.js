"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=o,f=l["".concat(c,".").concat(d)]||l[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={title:"Epoch Interruption"},a=void 0,s={unversionedId:"basics/epochinterruption",id:"basics/epochinterruption",title:"Epoch Interruption",description:"When executing WASM code it is sometimes useful to set a limit on how long it can run for. This can be used to prevent potentially malicious or buggy code from running forever and slowing down your application. Wasmbox includes two mechanisms to do this, Epoch Interruption and Fuel Usage.",source:"@site/docs/basics/epochinterruption.md",sourceDirName:"basics",slug:"/basics/epochinterruption",permalink:"/wasmbox/basics/epochinterruption",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/basics/epochinterruption.md",tags:[],version:"current",frontMatter:{title:"Epoch Interruption"},sidebar:"tutorialSidebar",previous:{title:"Addressable Loading",permalink:"/wasmbox/basics/addressables"},next:{title:"Fuel Usage",permalink:"/wasmbox/basics/fuelusage"}},c={},p=[],u={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When executing WASM code it is sometimes useful to set a limit on how long it can run for. This can be used to prevent potentially malicious or buggy code from running forever and slowing down your application. Wasmbox includes two mechanisms to do this, ",(0,o.kt)("a",{parentName:"p",href:"/wasmbox/basics/epochinterruption"},"Epoch Interruption")," and ",(0,o.kt)("a",{parentName:"p",href:"/wasmbox/basics/fuelusage"},"Fuel Usage"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Epoch Interruption is faster than fuel usage, but requires another thread to increment epochs.")),(0,o.kt)("p",null,"Epoch interruption allows a deadline to be set, once that deadline has passed executing code will immediately terminate execution. Epochs are not automatically incremented, your own script must be increasing the epoch when you wish to indicate that time has passed."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It is usually best to increment the epoch once per frame.")),(0,o.kt)("p",null,"todo:engine settings to enable epochs\ntodo:How to increment epochs tutorial\ntodo:reference docs for those things"))}l.isMDXComponent=!0}}]);