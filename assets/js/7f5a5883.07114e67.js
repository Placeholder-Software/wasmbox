"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[301],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>h});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(i),d=n,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return i?r.createElement(h,o(o({ref:t},m),{},{components:i})):r.createElement(h,o({ref:t},m))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},1204:(e,t,i)=>{i.d(t,{GT:()=>l,Mn:()=>o,O5:()=>n,nW:()=>a});var r=i(7294);const n=e=>{let{children:t}=e;return r.createElement("a",{href:"https://discord.gg/3RtDa2M9Bx"},t??"Discord")},a=e=>{let{children:t}=e;return r.createElement("a",{href:"https://github.com/Placeholder-Software/wasmbox/issues"},t??"Issue Tracker")},o=e=>{let{children:t}=e;return r.createElement("a",{href:"https://assetstore.unity.com/packages/slug/248818?aid=1100lJDF"},t??"Unity Asset Store")},l=e=>{let{children:t}=e;return r.createElement("a",{href:"mailto:admin@placeholder-software.co.uk"},t??"admin@placeholder-software.co.uk")}},8555:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=i(7462),n=(i(7294),i(3905)),a=i(1204);const o={date:new Date("2023-07-31T00:00:00.000Z")},l=void 0,s={permalink:"/wasmbox/releases/v11.0.0",source:"@site/release_notes/v11.0.0.md",title:"v11.0.0",description:"This version of Wasmbox upgrades to Wasmtime v11.0.0.",date:"2023-07-31T00:00:00.000Z",formattedDate:"July 31, 2023",tags:[],readingTime:1.415,hasTruncateMarker:!0,authors:[],frontMatter:{date:"2023-07-31T00:00:00.000Z"},nextItem:{title:"v10.0.0",permalink:"/wasmbox/releases/v10.0.0"}},c={authorsImageUrls:[]},m=[{value:"Zip File Mounting.",id:"zip-file-mounting",level:3},{value:"Mounting A Zip Archive",id:"mounting-a-zip-archive",level:3},{value:"Simplified Importer Settings",id:"simplified-importer-settings",level:3},{value:"Feedback",id:"feedback",level:3},{value:"Features \ud83d\ude80",id:"features-",level:2},{value:"Bugfixes \ud83d\udc1b",id:"bugfixes-",level:2}],p={toc:m};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This version of Wasmbox upgrades to ",(0,n.kt)("inlineCode",{parentName:"p"},"Wasmtime v11.0.0"),"."),(0,n.kt)("h3",{id:"zip-file-mounting"},"Zip File Mounting."),(0,n.kt)("p",null,"This version of Wasmbox introduces the ability to mount a zip archive as a read-only filesystem and simplifies importer settings."),(0,n.kt)("h3",{id:"mounting-a-zip-archive"},"Mounting A Zip Archive"),(0,n.kt)("p",null,"Calling the new ",(0,n.kt)("inlineCode",{parentName:"p"},"MapReadonlyZipArchiveDirectory")," method with the path to a zip archive will mount that entire zip archive as a read-only directory. This can be useful to distribute static content with your application as a single zip archive, which can then be easily mounted as read by wasm code."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Zip Archives are ",(0,n.kt)("strong",{parentName:"p"},"read only")," and must not be modified while mounted.")),(0,n.kt)("h3",{id:"simplified-importer-settings"},"Simplified Importer Settings"),(0,n.kt)("p",null,"Previously there were several settings which might break determinism (e.g. SIMD) and to guarantee deterministic execution you had to carefully read all of the tooltips to see if this option might be non-deterministic. This has all been removed!"),(0,n.kt)("p",null,"There is now a single ",(0,n.kt)("inlineCode",{parentName:"p"},"Non Deterministic")," checkbox at the top of the importer which controls all of this. If it is ticked then extra (potentially non-deterministic) optimisations are enabled. If this checkbox is unticked (the default) the compiled Wasm code will be imported in deterministic mode - guaranteeing the same results across all platforms."),(0,n.kt)("h3",{id:"feedback"},"Feedback"),(0,n.kt)("p",null,"Wasmbox is very new, so it is likely you will encounter bugs, awkward APIs or missing features. Please direct feedback to ",(0,n.kt)(a.O5,null)," or the ",(0,n.kt)(a.nW,null),"."),(0,n.kt)("h2",{id:"features-"},"Features \ud83d\ude80"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Wasmtime ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/bytecodealliance/wasmtime/blob/main/RELEASES.md#1100"},"v11.0.0")),(0,n.kt)("li",{parentName:"ul"},"Wasmtime-dotnet ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/bytecodealliance/wasmtime-dotnet/releases/tag/v11.0.0"},"v11.0.0")),(0,n.kt)("li",{parentName:"ul"},"Single importer setting to ensure determinism."),(0,n.kt)("li",{parentName:"ul"},"Added support for mounting a zip archive."),(0,n.kt)("li",{parentName:"ul"},"Improved error reporting when an invalid wasm file is imported.")),(0,n.kt)("h2",{id:"bugfixes-"},"Bugfixes \ud83d\udc1b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed the virtual file system ",(0,n.kt)("inlineCode",{parentName:"li"},"UnityLog")," sometimes printing nonsense message.")))}u.isMDXComponent=!0}}]);