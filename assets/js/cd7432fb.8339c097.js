"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[9170],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),m=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return i.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=m(n),p=r,b=c["".concat(u,".").concat(p)]||c[p]||s[p]||a;return n?i.createElement(b,l(l({ref:t},d),{},{components:n})):i.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<a;m++)l[m]=n[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var i=n(7462),r=(n(7294),n(3905));const a={title:"Table"},l=void 0,o={unversionedId:"reference/code/wasmtime/table",id:"reference/code/wasmtime/table",title:"Table",description:"A Table represents a list references. The Table class is a wrapper around the wasmtime::Table struct.",source:"@site/docs/reference/code/wasmtime/table.md",sourceDirName:"reference/code/wasmtime",slug:"/reference/code/wasmtime/table",permalink:"/wasmbox/reference/code/wasmtime/table",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/reference/code/wasmtime/table.md",tags:[],version:"current",frontMatter:{title:"Table"},sidebar:"tutorialSidebar",previous:{title:"Store",permalink:"/wasmbox/reference/code/wasmtime/store"},next:{title:"ValueKind",permalink:"/wasmbox/reference/code/wasmtime/valuekind"}},u={},m=[{value:"Properties",id:"properties",level:2},{value:"<code>ValueKind Kind</code>",id:"valuekind-kind",level:3},{value:"<code>uint Minimum</code>",id:"uint-minimum",level:3},{value:"<code>uint Maximum</code>",id:"uint-maximum",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>object? GetElement(uint index)</code>",id:"object-getelementuint-index",level:3},{value:"<code>void SetElement(uint index, object? value)</code>",id:"void-setelementuint-index-object-value",level:3},{value:"<code>uint GetSize()</code>",id:"uint-getsize",level:3},{value:"<code>uint Grow(uint delta, object? initialValue)</code>",id:"uint-growuint-delta-object-initialvalue",level:3}],d={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," represents a list references. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," class is a wrapper around the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/wasmtime/latest/wasmtime/struct.Table.html"},(0,r.kt)("inlineCode",{parentName:"a"},"wasmtime::Table"))," struct."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"valuekind-kind"},(0,r.kt)("inlineCode",{parentName:"h3"},"ValueKind Kind")),(0,r.kt)("p",null,"Get ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/valuekind"},"kind")," of values stored in this table."),(0,r.kt)("h3",{id:"uint-minimum"},(0,r.kt)("inlineCode",{parentName:"h3"},"uint Minimum")),(0,r.kt)("p",null,"Get the minimum number of elements in this table."),(0,r.kt)("h3",{id:"uint-maximum"},(0,r.kt)("inlineCode",{parentName:"h3"},"uint Maximum")),(0,r.kt)("p",null,"Get the maximum number of elements in this table."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"object-getelementuint-index"},(0,r.kt)("inlineCode",{parentName:"h3"},"object? GetElement(uint index)")),(0,r.kt)("p",null,"Get the value (may be ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),") at the given index."),(0,r.kt)("h3",{id:"void-setelementuint-index-object-value"},(0,r.kt)("inlineCode",{parentName:"h3"},"void SetElement(uint index, object? value)")),(0,r.kt)("p",null,"Set the value at the given index (may be ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,r.kt)("h3",{id:"uint-getsize"},(0,r.kt)("inlineCode",{parentName:"h3"},"uint GetSize()")),(0,r.kt)("p",null,"Get the current number of elements in the table."),(0,r.kt)("h3",{id:"uint-growuint-delta-object-initialvalue"},(0,r.kt)("inlineCode",{parentName:"h3"},"uint Grow(uint delta, object? initialValue)")),(0,r.kt)("p",null,"Grow the table, adding ",(0,r.kt)("inlineCode",{parentName:"p"},"delta")," copies of ",(0,r.kt)("inlineCode",{parentName:"p"},"initialValue")," to the table. Returns the previous size of the table."))}c.isMDXComponent=!0}}]);