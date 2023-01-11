"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[226],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6592:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Generated Code",sidebar_position:6},i=void 0,l={unversionedId:"reference/code/codegeneration",id:"reference/code/codegeneration",title:"Generated Code",description:'When a .wasm or .wat file is imported the option Generate C# Wrpaper Code can be enabled to automatically generate a C# script which "wraps" the WASM module. This wrapper code handles most of the "low level" details of interacting with an instantiated WASM module.',source:"@site/docs/reference/code/codegeneration.md",sourceDirName:"reference/code",slug:"/reference/code/codegeneration",permalink:"/wasmbox/reference/code/codegeneration",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/reference/code/codegeneration.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Generated Code",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Loaded Module",permalink:"/wasmbox/reference/code/loadedmodule"},next:{title:"Wasmtime",permalink:"/wasmbox/category/wasmtime"}},s={},p=[{value:"Job Safety",id:"job-safety",level:2},{value:"WebAssembly System Interface (WASI)",id:"webassembly-system-interface-wasi",level:2},{value:"Optional Features",id:"optional-features",level:2},{value:"Addressable Loading",id:"addressable-loading",level:3},{value:"Trap Handling",id:"trap-handling",level:3},{value:"Exception",id:"exception",level:4},{value:"Results",id:"results",level:4},{value:"Exported Functions",id:"exported-functions",level:3},{value:"Exported Globals",id:"exported-globals",level:3},{value:"Exported Memory",id:"exported-memory",level:3},{value:"Exported Tables",id:"exported-tables",level:3}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When a ",(0,r.kt)("inlineCode",{parentName:"p"},"*.wasm")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"*.wat")," file is ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/reference/editor/import"},"imported")," the option ",(0,r.kt)("inlineCode",{parentName:"p"},"Generate C# Wrpaper Code"),' can be enabled to automatically generate a C# script which "wraps" the WASM module. This wrapper code handles most of the "low level" details of interacting with an instantiated WASM module.'),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The generated code should not be edited - it may be regenerated at any time which will overwrite any other changes made to the file.")),(0,r.kt)("h2",{id:"job-safety"},"Job Safety"),(0,r.kt)("p",null,"All autogenerated wrapper code is safe to use in the Unity ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/JobSystem.html"},"Job System"),", this allows WASM execution to be moved off the main thread."),(0,r.kt)("p",null,"A WASM instance may only be accessed by one thread at a time (even for read-only operations), therefore the wrapper can only be used within ",(0,r.kt)("em",{parentName:"p"},"one")," job at a time. The Unity ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/JobSystemSafetySystem.html"},"Safety System")," is used to ensure this constraint is not violated."),(0,r.kt)("p",null,"For more information see ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/basics/jobs"},"this tutorial")," on multithreaded jobs."),(0,r.kt)("h2",{id:"webassembly-system-interface-wasi"},"WebAssembly System Interface (WASI)"),(0,r.kt)("p",null,"todo:",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/getting_started/wasi_intro"},"WASI")),(0,r.kt)("h2",{id:"optional-features"},"Optional Features"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/reference/editor/import#6-code-generation"},"importer")," includes several optional features which slightly change how the code is generated."),(0,r.kt)("h3",{id:"addressable-loading"},"Addressable Loading"),(0,r.kt)("p",null,"If this option is enabled the wrapper code will include a static ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateAsync")," method which loads the asset (using the Unity ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.addressables@1.21/manual/index.html"},"Addressable Asset System"),"), instantiates it and returns a wrapper object. Using this method no asset references are required in your script, instead everything to do with locating and loading the appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmAsset")," is handled inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateAsync")," method."),(0,r.kt)("p",null,"For more information see ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/basics/addressables"},"this tutorial")," on addressable loading."),(0,r.kt)("h3",{id:"trap-handling"},"Trap Handling"),(0,r.kt)("p",null,"Certain events (e.g. ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/basics/fuelusage"},"running out of fuel"),') can interrupt execution of WASM code, this is called a "Trap". A trap is very similar to a C# exception - when it is triggered it immediately interrupts execution and "unwinds" the execution stack back out of the WASM engine. Code which calls into WASM must be aware that a trap can happen and be prepared to handle it.'),(0,r.kt)("p",null,"The function wrappers which are generated can indicate a trap in one of two ways: ",(0,r.kt)("strong",{parentName:"p"},"Exceptions")," or ",(0,r.kt)("strong",{parentName:"p"},"Results"),"."),(0,r.kt)("h4",{id:"exception"},"Exception"),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"Trap Handling")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Throw Exception")," then a WASM trap will be converted into a C# ",(0,r.kt)("inlineCode",{parentName:"p"},"TrapException")," and thrown, this can be handled in the normal way in C# using ",(0,r.kt)("inlineCode",{parentName:"p"},"try/catch"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="Trap Exception"',title:'"Trap','Exception"':!0},'try\n{\n    var value = wrapper.hello();\n    Debug.Log("WASM Result: " + value);\n}\ncatch (TrapException ex)\n{\n    Debug.LogError("WASM Trap: " + ex.Type);\n}\n')),(0,r.kt)("h4",{id:"results"},"Results"),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"Trap handling")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Return Result")," then every WASM function will return a result value which can be inspected to check if it represents a success or an error. This is faster than throwing an exception."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="Trap Result"',title:'"Trap','Result"':!0},'var result = wrapper.hello();\nif (result.Type == ResultType.Ok)\n{\n    Debug.Log("WASM Result: " + result.Value);\n}\nelse\n{\n    Debug.Log("WASM Trap: " + result.TrapCode);\n}\n')),(0,r.kt)("h3",{id:"exported-functions"},"Exported Functions"),(0,r.kt)("p",null,"Every function exported from the WASM will be wrapped in a C# method with the same name. If the name contains invalid characters (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"$wasm-function"),") they will be replaced with underscores (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"_wasm_function"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="Exported Function"',title:'"Exported','Function"':!0},"var result = wrapper._wasm_function(1, 2, 3);\n")),(0,r.kt)("h3",{id:"exported-globals"},"Exported Globals"),(0,r.kt)("p",null,"Every global variable exported from the WASM will be wrapped in a C# property with the same name which returns a ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/global"},"Global")," object. If the name contains invalid characters (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"$the-global"),") they will be replaced with underscores (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"_the_global"),"). If the global is ",(0,r.kt)("strong",{parentName:"p"},"immutable")," the property will have a ",(0,r.kt)("em",{parentName:"p"},"getter")," but not a ",(0,r.kt)("em",{parentName:"p"},"setter"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="Exported Global"',title:'"Exported','Global"':!0},"var result = wrapper._a_global;\nwrapper._a_global = result;\n")),(0,r.kt)("h3",{id:"exported-memory"},"Exported Memory"),(0,r.kt)("p",null,"Every memory region exported from the WASM will be wrapped in a C# property with the same name which returns a ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/memory"},(0,r.kt)("inlineCode",{parentName:"a"},"Memory"))," object. If the name contains invalid characters (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/memory\\"),") they will be replaced with underscores (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"_memory_"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="Exported Memory"',title:'"Exported','Memory"':!0},"var integer = wrapper._memory_.ReadInt32(0);\nwrapper._memory_.WriteInt32(0, integer + 1);\n")),(0,r.kt)("h3",{id:"exported-tables"},"Exported Tables"),(0,r.kt)("p",null,"Every table exported from the WASM will be wrapped in a C# property with the same name which returns a ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/table"},(0,r.kt)("inlineCode",{parentName:"a"},"Table"))," object. If the name contains invalid characters (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"this is a table"),") they will be replaced with underscores (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"this_is_a_table"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="Exported Table"',title:'"Exported','Table"':!0},"var size = wrapper.this_is_a_table.GetSize();\n")))}c.isMDXComponent=!0}}]);