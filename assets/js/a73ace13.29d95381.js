"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[8078],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7294),a=n(6010),o=n(3438),i=n(9960),s=n(3919),c=n(5999);const l="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},n)}function d(e){let{href:t,icon:n,title:o,description:i}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",m),title:i},i))}function f(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:a?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(b,e);const i=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},8558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),o=n(2991);const i={title:"Compiling To WASM"},s=void 0,c={unversionedId:"basics/languages/index",id:"basics/languages/index",title:"Compiling To WASM",description:"There are many languages that compile to WASM and this section is not an exhaustive list of them! Each of these guides provides a brief overview of the language and links to resources for compiling that language to WASM.",source:"@site/docs/basics/languages/index.md",sourceDirName:"basics/languages",slug:"/basics/languages/",permalink:"/wasmbox/basics/languages/",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/basics/languages/index.md",tags:[],version:"current",frontMatter:{title:"Compiling To WASM"},sidebar:"tutorialSidebar",previous:{title:"WASM In Jobs",permalink:"/wasmbox/basics/jobs"},next:{title:"AssemblyScript",permalink:"/wasmbox/basics/languages/assemblyscript"}},l={},u=[{value:"Other Languages",id:"other-languages",level:2}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are many languages that compile to WASM and this section is ",(0,a.kt)("em",{parentName:"p"},"not")," an exhaustive list of them! Each of these guides provides a brief overview of the language and links to resources for compiling that language to WASM."),(0,a.kt)("h2",{id:"other-languages"},"Other Languages"),(0,a.kt)("p",null,"if there is another language which you think should be on this list why not ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Placeholder-Software/wasmbox/tree/master/docs/basics/languages"},"Open a Pull Request")," and add it!"),(0,a.kt)("hr",null),(0,a.kt)(o.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);