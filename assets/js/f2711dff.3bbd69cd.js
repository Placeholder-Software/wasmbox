"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[5521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Installation",sidebar_position:3},o=void 0,l={unversionedId:"getting_started/installation",id:"getting_started/installation",title:"Installation",description:"1. Purchase Wasmbox on the Unity Asset Store.",source:"@site/docs/getting_started/installation.md",sourceDirName:"getting_started",slug:"/getting_started/installation",permalink:"/wasmbox/getting_started/installation",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/getting_started/installation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Installation",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Platform Support",permalink:"/wasmbox/getting_started/platforms"},next:{title:"Demos",permalink:"/wasmbox/getting_started/demos"}},s={},p=[{value:"Optional Extras",id:"optional-extras",level:2},{value:"Assembly Definitions",id:"assembly-definitions",level:3},{value:"Addressables",id:"addressables",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Purchase Wasmbox on the ",(0,r.kt)("a",{parentName:"li",href:"todo:link_asset_store"},"Unity Asset Store"),"."),(0,r.kt)("li",{parentName:"ol"},"Open the package manager (Window > Package Manager)."),(0,r.kt)("li",{parentName:"ol"},"Switch to ",(0,r.kt)("inlineCode",{parentName:"li"},"My Assets"),"."),(0,r.kt)("li",{parentName:"ol"},"Find ",(0,r.kt)("inlineCode",{parentName:"li"},"Wasmbox")," in the list of assets."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Download")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Update"),"."),(0,r.kt)("li",{parentName:"ol"},"When the download is complete click ",(0,r.kt)("inlineCode",{parentName:"li"},"Import"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The asset will be installed into ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets/Plugins/PlaceholderSoftware/Wasmbox"))),(0,r.kt)("h2",{id:"optional-extras"},"Optional Extras"),(0,r.kt)("h3",{id:"assembly-definitions"},"Assembly Definitions"),(0,r.kt)("p",null,"If you application is using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/ScriptCompilationAssemblyDefinitionFiles.html"},"Assembly definitions")," to organise scripts you must add a reference to Wasmbox before you can use it."),(0,r.kt)("p",null,"To reference Wasmbox:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select your ",(0,r.kt)("inlineCode",{parentName:"li"},".asmdef")," file"),(0,r.kt)("li",{parentName:"ol"},"Add a new item to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Assembly Definition References")," list"),(0,r.kt)("li",{parentName:"ol"},"Place ",(0,r.kt)("inlineCode",{parentName:"li"},"Wasmbox")," into the new entry")),(0,r.kt)("h3",{id:"addressables"},"Addressables"),(0,r.kt)("p",null,"Wasmbox can make use of the Unity ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/com.unity.addressables.html"},"Addressable Asset System")," to asynchronously load content and to simplify managing WASM dependencies."),(0,r.kt)("p",null,"To use addressable loading:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"Addressables")," 1.19 or greater."),(0,r.kt)("li",{parentName:"ol"},"Tick ",(0,r.kt)("inlineCode",{parentName:"li"},"Addressable Loading")," when ",(0,r.kt)("a",{parentName:"li",href:"/wasmbox/reference/editor/import#6-code-generation"},"importing")," a WASM Asset.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/wasmbox/basics/addressables"},"Wasmbox Addressables tutorial"),".")))}m.isMDXComponent=!0}}]);