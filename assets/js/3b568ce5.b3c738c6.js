"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[4674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r=n.p+"assets/images/ImportedAssetInspector-3351aaf51e1152b020e10de91ededd70.png",o=n.p+"assets/images/WasmDemoScriptInspector-5e618834019ee1a861cbac6b960d4d31.png",l={title:"Using WASM In Scripts",sidebar_position:0},s=void 0,p={unversionedId:"basics/using_wasm",id:"basics/using_wasm",title:"Using WASM In Scripts",description:"todo: other ways to use WASM",source:"@site/docs/basics/using_wasm.md",sourceDirName:"basics",slug:"/basics/using_wasm",permalink:"/wasmbox/basics/using_wasm",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/basics/using_wasm.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Using WASM In Scripts",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/wasmbox/category/basics"},next:{title:"Engines, Modules, Stores & Instances \ud83d\ude35",permalink:"/wasmbox/basics/concepts"}},d={},c=[{value:"1. Import WASM File",id:"1-import-wasm-file",level:2},{value:"2. Create a MonoBehaviour",id:"2-create-a-monobehaviour",level:2},{value:"3. Configuration In Editor",id:"3-configuration-in-editor",level:2},{value:"3. Loading",id:"3-loading",level:2},{value:"4. Configuration (Optional)",id:"4-configuration-optional",level:2},{value:"5. Run Code",id:"5-run-code",level:2},{value:"6. Destroy",id:"6-destroy",level:2}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"todo: other ways to use WASM"),(0,i.kt)("h2",{id:"1-import-wasm-file"},"1. Import WASM File"),(0,i.kt)("p",null,"Drag and drop a ",(0,i.kt)("inlineCode",{parentName:"p"},".wasm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".wat")," file into your project. The file will automatically be imported as a ",(0,i.kt)("inlineCode",{parentName:"p"},"WasmAsset"),". By default a C# script will be generated next to the file."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"See the ",(0,i.kt)("a",{parentName:"p",href:"/wasmbox/reference/editor/import"},"Importing WebAssembly")," documentation for more detail on import settings.")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:r,width:"66%"})),(0,i.kt)("h2",{id:"2-create-a-monobehaviour"},"2. Create a MonoBehaviour"),(0,i.kt)("p",null,"Create a new Unity script which uses ",(0,i.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/simplewasmmonobehaviour"},(0,i.kt)("inlineCode",{parentName:"a"},"SimpleWasmMonoBehaviour<>"))," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"MonoBehaviour"),". Inside the angle brackets put the name of the generated C# script."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-clike"},"public class WasmDemoScript\n    : SimpleWasmMonoBehaviour<AutogeneratedScriptName>\n{\n}\n")),(0,i.kt)("p",null,"This script will automatically handle most of the setup steps for running WASM code."),(0,i.kt)("h2",{id:"3-configuration-in-editor"},"3. Configuration In Editor"),(0,i.kt)("p",null,"In the Unity Editor the script will show two fields, ",(0,i.kt)("inlineCode",{parentName:"p"},"Wasm Asset")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Engine Config"),". Drag and drop the imported file into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Wasm Asset")," field."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:o,width:"66%"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Engine Config")," field controls how the WASM code will be compiled and executed. Including ",(0,i.kt)("a",{parentName:"p",href:"/wasmbox/basics/fuelusage"},"Fuel")," and ",(0,i.kt)("a",{parentName:"p",href:"/wasmbox/basics/epochinterruption"},"Epoch Interruption")," to limit buggy/malicious code execution."),(0,i.kt)("h2",{id:"3-loading"},"3. Loading"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"OnEnable")," is called the WasmAsset will begin loading in a background thread, it may be several frames before it completes loading. There are several callbacks available to monitor the loading process:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-clike"},"protected override void OnLoadingWait(Task loading)\n{\n    // This is called every frame while loading\n\n    // Call this to wait for loading to complete.\n    loading.Wait();\n\n    base.OnLoadingWait(loading);\n}\n\nprotected override void OnLoadingFailed()\n{\n    // This is called if loading failed\n    base.OnLoadingFailed();\n}\n\nprotected override void OnCreatedWrapper(AutogeneratedScriptName wrapper)\n{\n    // This is called when loading is complete\n    // You may use `wrapper` any time after this point until `OnDisable` is called\n    base.OnCreatedWrapper(wrapper);\n}\n")),(0,i.kt)("h2",{id:"4-configuration-optional"},"4. Configuration (Optional)"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'Some WASM code is completely "self contained", you can call a function and it will calculate a result. If your WASM code is like that then you can ignore this section.')),(0,i.kt)("p",null,'By default nothing is accessible to WASM code, it is a completely contained "sandbox". However some WASM code requires access to external resources such as random number generation, the filesystem, or other systems in your application. Use the ',(0,i.kt)("inlineCode",{parentName:"p"},"ConfigureLinker")," callback to make things available to WASM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-clike"},'protected override void ConfigureLinker(Linker linker)\n{\n    // Add a C# method which can be called by WASM\n    linker.DefineFunction("module", "add", (int a, int b) => a + b);\n\n    // Add a WASI random number generation\n    linker.Add(new CryptoRandomSource());\n\n    base.ConfigureLinker(linker);\n}\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"See the ",(0,i.kt)("a",{parentName:"p",href:"/wasmbox/basics/linker"},"Linker Tutorial")," for more detail on linking WASM.")),(0,i.kt)("h2",{id:"5-run-code"},"5. Run Code"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Update")," method is called on this script just like any other ",(0,i.kt)("inlineCode",{parentName:"p"},"MonoBehaviour"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"wrapper")," is an instance of the auto generated script (called ",(0,i.kt)("inlineCode",{parentName:"p"},"AutogeneratedScriptName")," in this tutorial) which has public methods and properties for every WASM item (functions, globals, memories and tables). Functions can be called as normal C# functions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-clike"},'void Update()\n{\n    var wrapper = TryGetWrapper();\n\n    if (!wrapper.HasValue)\n    {\n        Debug.Log("Not yet loaded");\n    }\n    else\n    {\n        wrapper.CallSomeWasmFunction();\n    }\n}\n')),(0,i.kt)("h2",{id:"6-destroy"},"6. Destroy"),(0,i.kt)("p",null,"The WASM Instance will be automatically disposed in ",(0,i.kt)("strong",{parentName:"p"},"OnDisable"),", a new one will be created if ",(0,i.kt)("strong",{parentName:"p"},"OnEnable")," is called again. The Store and the Linker will be automatically disposed in ",(0,i.kt)("strong",{parentName:"p"},"OnDestroy"),"."))}u.isMDXComponent=!0}}]);