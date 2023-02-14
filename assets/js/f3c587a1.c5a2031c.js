"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[2143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,c=p["".concat(s,".").concat(u)]||p[u]||g[u]||r;return n?i.createElement(c,o(o({ref:t},m),{},{components:n})):i.createElement(c,o({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const r={title:"Module"},o=void 0,l={unversionedId:"reference/code/wasmtime/module",id:"reference/code/wasmtime/module",title:"Module",description:"A Module represents WASM code that has been compiled by an Engine into executable machine code. The Module class is a wrapper around the wasmtime::Module struct. A Module declares a set of imports (things it requires) and exports (things it provides).",source:"@site/docs/reference/code/wasmtime/module.md",sourceDirName:"reference/code/wasmtime",slug:"/reference/code/wasmtime/module",permalink:"/wasmbox/reference/code/wasmtime/module",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/reference/code/wasmtime/module.md",tags:[],version:"current",frontMatter:{title:"Module"},sidebar:"tutorialSidebar",previous:{title:"Memory",permalink:"/wasmbox/reference/code/wasmtime/memory"},next:{title:"Store",permalink:"/wasmbox/reference/code/wasmtime/store"}},s={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>string Name</code>",id:"string-name",level:3},{value:"<code>IReadOnlyList&lt;Import&gt; Imports</code>",id:"ireadonlylistimport-imports",level:3},{value:"<code>IReadOnlyList&lt;Export&gt; Exports</code>",id:"ireadonlylistexport-exports",level:3},{value:"Static Methods",id:"static-methods",level:2},{value:"<code>string? Validate(Engine engine, ReadOnlySpan&lt;byte&gt; bytes)</code>",id:"string-validateengine-engine-readonlyspanbyte-bytes",level:3},{value:"<code>byte[] ConvertText(string wat)</code>",id:"byte-converttextstring-wat",level:3},{value:"<code>Module FromBytes(Engine engine, string name, ReadOnlySpan&lt;byte&gt; bytes)</code>",id:"module-frombytesengine-engine-string-name-readonlyspanbyte-bytes",level:3},{value:"<code>Module FromFile(Engine engine, string path)</code>",id:"module-fromfileengine-engine-string-path",level:3},{value:"<code>Module FromStream(Engine engine, string name, Stream stream)</code>",id:"module-fromstreamengine-engine-string-name-stream-stream",level:3},{value:"<code>Module FromText(Engine engine, string name, string text)</code>",id:"module-fromtextengine-engine-string-name-string-text",level:3},{value:"<code>Module FromTextFile(Engine engine, string path)</code>",id:"module-fromtextfileengine-engine-string-path",level:3},{value:"<code>Module Deserialize(Engine engine, string name, ReadOnlySpan&lt;byte&gt; bytes)</code>",id:"module-deserializeengine-engine-string-name-readonlyspanbyte-bytes",level:3},{value:"<code>Module DeserializeFile(Engine engine, string name, string path)</code>",id:"module-deserializefileengine-engine-string-name-string-path",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>byte[] Serialize()</code>",id:"byte-serialize",level:3}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Module")," represents WASM code that has been compiled by an ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/engine"},(0,a.kt)("inlineCode",{parentName:"a"},"Engine"))," into executable machine code. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Module")," class is a wrapper around the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/wasmtime/latest/wasmtime/struct.Module.html"},(0,a.kt)("inlineCode",{parentName:"a"},"wasmtime::Module"))," struct. A ",(0,a.kt)("inlineCode",{parentName:"p"},"Module")," declares a set of imports (things it requires) and exports (things it provides)."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/engine"},(0,a.kt)("inlineCode",{parentName:"a"},"Engine"))," which is used controls exactly how the WASM is compiled into a ",(0,a.kt)("inlineCode",{parentName:"p"},"Module"),". For example if the ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/engine"},(0,a.kt)("inlineCode",{parentName:"a"},"Engine"))," has ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/basics/fuelusage"},"fuel usage")," enabled the ",(0,a.kt)("inlineCode",{parentName:"p"},"Module")," will be compiled with support for fuel usage. It is possible to have multiple modules which represent the same WASM code compiled with different engines. An ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/engine"},(0,a.kt)("inlineCode",{parentName:"a"},"Engine"))," in WasmBox is usually configured with an ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/engineconfig"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineConfig")),"."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"string-name"},(0,a.kt)("inlineCode",{parentName:"h3"},"string Name")),(0,a.kt)("p",null,"Get the name of this module."),(0,a.kt)("h3",{id:"ireadonlylistimport-imports"},(0,a.kt)("inlineCode",{parentName:"h3"},"IReadOnlyList<Import> Imports")),(0,a.kt)("p",null,"Get the list of things that are imported by this ",(0,a.kt)("inlineCode",{parentName:"p"},"Module"),". When the ",(0,a.kt)("inlineCode",{parentName:"p"},"Module")," is instantiated all imports must be satisfied by something, for example they could be added to the ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/linker"},(0,a.kt)("inlineCode",{parentName:"a"},"Linker")),"."),(0,a.kt)("h3",{id:"ireadonlylistexport-exports"},(0,a.kt)("inlineCode",{parentName:"h3"},"IReadOnlyList<Export> Exports")),(0,a.kt)("p",null,"Get the list of things that are exported by this ",(0,a.kt)("inlineCode",{parentName:"p"},"Module"),"."),(0,a.kt)("h2",{id:"static-methods"},"Static Methods"),(0,a.kt)("h3",{id:"string-validateengine-engine-readonlyspanbyte-bytes"},(0,a.kt)("inlineCode",{parentName:"h3"},"string? Validate(Engine engine, ReadOnlySpan<byte> bytes)")),(0,a.kt)("p",null,"Validates the given WebAssembly module. Returns *",(0,a.kt)("em",{parentName:"p"},"null")," if the module is valid. Returns an error message if it is invalid."),(0,a.kt)("h3",{id:"byte-converttextstring-wat"},(0,a.kt)("inlineCode",{parentName:"h3"},"byte[] ConvertText(string wat)")),(0,a.kt)("p",null,"Convert ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format"},"Web Assembly Text (WAT)")," formatted string into WASM bytes."),(0,a.kt)("h3",{id:"module-frombytesengine-engine-string-name-readonlyspanbyte-bytes"},(0,a.kt)("inlineCode",{parentName:"h3"},"Module FromBytes(Engine engine, string name, ReadOnlySpan<byte> bytes)")),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Module")," from a span of WASM bytes."),(0,a.kt)("h3",{id:"module-fromfileengine-engine-string-path"},(0,a.kt)("inlineCode",{parentName:"h3"},"Module FromFile(Engine engine, string path)")),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Module")," from the WASM bytes in the given file."),(0,a.kt)("h3",{id:"module-fromstreamengine-engine-string-name-stream-stream"},(0,a.kt)("inlineCode",{parentName:"h3"},"Module FromStream(Engine engine, string name, Stream stream)")),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Module")," from the WASM bytes in the given stream."),(0,a.kt)("h3",{id:"module-fromtextengine-engine-string-name-string-text"},(0,a.kt)("inlineCode",{parentName:"h3"},"Module FromText(Engine engine, string name, string text)")),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Module")," from ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format"},"Web Assembly Text (WAT)")," formatted text."),(0,a.kt)("h3",{id:"module-fromtextfileengine-engine-string-path"},(0,a.kt)("inlineCode",{parentName:"h3"},"Module FromTextFile(Engine engine, string path)")),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Module")," from ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format"},"Web Assembly Text (WAT)")," formatted text in a file."),(0,a.kt)("h3",{id:"module-deserializeengine-engine-string-name-readonlyspanbyte-bytes"},(0,a.kt)("inlineCode",{parentName:"h3"},"Module Deserialize(Engine engine, string name, ReadOnlySpan<byte> bytes)")),(0,a.kt)("p",null,"Deserialize a precompiled ",(0,a.kt)("inlineCode",{parentName:"p"},"Module")," from the given bytes. See ",(0,a.kt)("a",{parentName:"p",href:"#byte-serialize"},(0,a.kt)("inlineCode",{parentName:"a"},"Serialize")),"."),(0,a.kt)("h3",{id:"module-deserializefileengine-engine-string-name-string-path"},(0,a.kt)("inlineCode",{parentName:"h3"},"Module DeserializeFile(Engine engine, string name, string path)")),(0,a.kt)("p",null,"Deserialize a precompiled ",(0,a.kt)("inlineCode",{parentName:"p"},"Module")," from the bytes in a given file. See ",(0,a.kt)("a",{parentName:"p",href:"#byte-serialize"},(0,a.kt)("inlineCode",{parentName:"a"},"Serialize")),"."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"byte-serialize"},(0,a.kt)("inlineCode",{parentName:"h3"},"byte[] Serialize()")),(0,a.kt)("p",null,"Serialize this ",(0,a.kt)("inlineCode",{parentName:"p"},"Module")," into an array of bytes. See ",(0,a.kt)("a",{parentName:"p",href:"#module-deserializeengine-engine-string-name-readonlyspanbyte-bytes"},(0,a.kt)("inlineCode",{parentName:"a"},"Deserialize")),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Modules serialized in this way must be deserialized by an ",(0,a.kt)("inlineCode",{parentName:"p"},"Engine")," with an identical config and an identical version of Wasmtime.")))}p.isMDXComponent=!0}}]);