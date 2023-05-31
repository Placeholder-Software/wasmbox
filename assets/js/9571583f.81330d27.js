"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[8882],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>h});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(i),u=n,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return i?a.createElement(h,o(o({ref:t},m),{},{components:i})):a.createElement(h,o({ref:t},m))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<r;p++)o[p]=i[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},179:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=i(7462),n=(i(7294),i(3905));const r={title:"Importing WebAssembly",sidebar_position:1},o=void 0,l={unversionedId:"reference/editor/import",id:"reference/editor/import",title:"Importing WebAssembly",description:"Wasmbox includes an import pipeline for WASM assets which validates, initialises, transforms, optimises, precompiles and compresses the WASM. Any .wasm (binary WebAssembly) or .wat (text WebAssembly) files will automatically be processed and imported through this pipeline into a WasmAsset.",source:"@site/docs/reference/editor/import.md",sourceDirName:"reference/editor",slug:"/reference/editor/import",permalink:"/wasmbox/reference/editor/import",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/reference/editor/import.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Importing WebAssembly",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Editor",permalink:"/wasmbox/category/editor"},next:{title:"WASM Asset",permalink:"/wasmbox/reference/editor/wasmasset"}},s={},p=[{value:"1. Validation",id:"1-validation",level:2},{value:"2. Initialisation",id:"2-initialisation",level:2},{value:"3. Transformation",id:"3-transformation",level:2},{value:"4. Optimisation",id:"4-optimisation",level:2},{value:"5. Compilation",id:"5-compilation",level:2},{value:"6. Compression",id:"6-compression",level:2},{value:"7. Code Generation",id:"7-code-generation",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Wasmbox includes an import pipeline for WASM assets which validates, initialises, transforms, optimises, precompiles and compresses the WASM. Any ",(0,n.kt)("inlineCode",{parentName:"p"},"*.wasm")," (binary WebAssembly) or ",(0,n.kt)("inlineCode",{parentName:"p"},"*.wat")," (text WebAssembly) files will automatically be processed and imported through this pipeline into a ",(0,n.kt)("a",{parentName:"p",href:"/wasmbox/reference/editor/wasmasset"},"WasmAsset"),"."),(0,n.kt)("h2",{id:"1-validation"},"1. Validation"),(0,n.kt)("p",null,"Files will be parsed and validated before any further processing. Any errors in the file will print an error to the console."),(0,n.kt)("h2",{id:"2-initialisation"},"2. Initialisation"),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"Preinitialization")," is ticked the WASM will be processed through ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bytecodealliance/wizer"},"Wizer"),". Wizer instantiates your WebAssembly module, executes its initialization function, and then snapshots the initialized state out into a new WebAssembly module. This allows one-off initialization to be done now, instead of when the module is loaded at runtime."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Wizer does not support all WASM features and not all modules can be pre-initialized by Wizer. If Wizer fails to run for a file a warning will be printed to the console and it will be disabled for this file.")),(0,n.kt)("admonition",{title:"Inspector Options",type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Preinitialize Inspector",src:i(6490).Z,width:"788",height:"241"})),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Initialize Export Name"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Set the name which Wizer will call to initialize the WASM module."),(0,n.kt)("li",{parentName:"ul"},"Refer to Wizer docs for ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/bytecodealliance/wizer#example-usage"},"example usage"),"."),(0,n.kt)("li",{parentName:"ul"},"Refer to Wizer docs for ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/bytecodealliance/wizer#caveats"},"caveats"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Exposed Wasi Directories"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A set of directory paths which will be ",(0,n.kt)("strong",{parentName:"li"},"fully readable and writeable")," during initialization."),(0,n.kt)("li",{parentName:"ul"},"These directories are ",(0,n.kt)("strong",{parentName:"li"},"only")," accessible during wizer initialization."))))),(0,n.kt)("h2",{id:"3-transformation"},"3. Transformation"),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"Transformation")," is ticked the WASM will be rewritten to introduce new capabilities."),(0,n.kt)("admonition",{title:"Inspector Options",type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Optimization Inspector",src:i(9925).Z,width:"771",height:"136"})),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Asyncify"),": Rewrite all functions to make them ",(0,n.kt)("a",{parentName:"li",href:"/wasmbox/advanced/asyncify"},"async"),", allowing execution to be suspended and then resumed later."))),(0,n.kt)("h2",{id:"4-optimisation"},"4. Optimisation"),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"Optimization")," is ticked the WASM will be processed through ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/binaryen#wasm-opt"},"Binaryen"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"Binaryen")," is an optimizer which applies ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/binaryen#binaryen-optimizations"},"a larger number of optimisation passes")," to produce to better (faster/smaller) WASM."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Binaryen does not support all WASM features and not all modules can be optimized by Binaryen. If Binaryen fails to run for a file a warning will be printed to the console and it will be disabled for this file.")),(0,n.kt)("admonition",{title:"Inspector Options",type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Optimization Inspector",src:i(2544).Z,width:"790",height:"166"})),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Binaryen Optimization Level"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Set the optimization level:.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"None"),": Do not optimise (equivalent to disabling optimisation)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"O1"),"/",(0,n.kt)("inlineCode",{parentName:"li"},"O2"),"/",(0,n.kt)("inlineCode",{parentName:"li"},"O3"),"/",(0,n.kt)("inlineCode",{parentName:"li"},"O4"),": Optimize for speed. Higher levels spend ",(0,n.kt)("strong",{parentName:"li"},"significantly")," longer optimising."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Size"),": Optimize mostly for speed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Extreme Size"),": Optimize for absolutely minimum code size."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Binaryen Fast Math"),": Optimize floating point maths without properly handling corner cases of NaNs and rounding."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Binaryen Asyncify"),": Convert WASM into ",(0,n.kt)("a",{parentName:"li",href:"/wasmbox/advanced/asyncify"},"async WASM"),", allowing execution to be suspended and resumed."))),(0,n.kt)("h2",{id:"5-compilation"},"5. Compilation"),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"Compilation"),' is ticked the WASM will be pre-compiled into native machine code for all active platforms. This increases the asset size (often by a factor of 10x or more) but can reduce loading times at runtime. If compiled code cannot be loaded for some reason (e.g. incompatible architecture, pre-compilation is not enabled) the runtime loading will fall back to using the "Universal" version.'),(0,n.kt)("admonition",{title:"Inspector Options",type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Compilation Inspector",src:i(1277).Z,width:"981",height:"233"})),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Fuel Usage"),": Compile with support for ",(0,n.kt)("a",{parentName:"li",href:"/wasmbox/basics/limiting_execution/fuelusage"},"Fuel Usage"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Epoch Interruption"),": Compile with support for ",(0,n.kt)("a",{parentName:"li",href:"/wasmbox/basics/limiting_execution/epochinterruption"},"Epoch Interruption"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SIMD"),": Enable SIMD instructions (faster, but ",(0,n.kt)("a",{parentName:"li",href:"/wasmbox/advanced/determinism"},"non-deterministic"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Cranelift Compiler Settings"),": Enable specific feature flags in the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/bytecodealliance/wasmtime/tree/main/cranelift"},"cranelift")," compiler. The CPU used at runtime must support these features for the precompiled WASM to be loaded, if they are not supported the ",(0,n.kt)("inlineCode",{parentName:"li"},"Universal")," fallback will be used instead (equivalent to not precompiling)."))),(0,n.kt)("h2",{id:"6-compression"},"6. Compression"),(0,n.kt)("p",null,"Compress the final WASM to reduce size, this can reduce loading time if storage is slow."),(0,n.kt)("admonition",{title:"Inspector Options",type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Compression Inspector",src:i(6496).Z,width:"790",height:"166"})),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Compression Level"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Set the amount of work the compressor will do. This corresponds to ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/api/system.io.compression.compressionlevel?view=netstandard-2.0"},"this option")," in the .NET compressor.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Optimal"),": Optimally balance compression speed and output size."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Fastest"),": Compress as quickly as possible, even if the resulting file is not as small as possible."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"No Compression"),": No compression should be performed on the file."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Compression Algorithm"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Brotli: Powerful compression algorithm which usually provides the best compression but is slower to compress and decompress than deflate."),(0,n.kt)("li",{parentName:"ul"},"Deflate: Simple & fast compression algorithm. Usually does not compress as much as Brotli but is often faster to compress and decompress."))))),(0,n.kt)("h2",{id:"7-code-generation"},"7. Code Generation"),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"Generate C# Wrapper Code"),' is ticked a script will be generated which wraps up the WASM module in a C# accessor. This handles many of the "low level" details of interacting with a WASM module. See ',(0,n.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/codegeneration"},"this documentation")," for details on generated wrapper code."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Do not edit the auto generated code! It may be re-generated at any time, which will overwrite your changes.")),(0,n.kt)("admonition",{title:"Inspector Options",type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Code Generation Inspector",src:i(1084).Z,width:"790",height:"424"})),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Naming",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Namespace"),": C# namespace for the generated wrapper code."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Type Name"),": Name of the generated wrapper type."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Visibility"),": Visibility access modifier (",(0,n.kt)("inlineCode",{parentName:"li"},"public"),"/",(0,n.kt)("inlineCode",{parentName:"li"},"internal"),") to apply to the generated wrapper type."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Addressable Loading"),": Generate a ",(0,n.kt)("inlineCode",{parentName:"li"},"CreateAsync")," method which loads the WASM asset using the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.addressables@0.8/manual/index.html"},"Unity Addressable Asset System"),"."))),(0,n.kt)("li",{parentName:"ul"},"Error Handling",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Trap Handling"),": Choose if a WASM Trap throws a C# exception (slow, generates garbage) or returns a ",(0,n.kt)("inlineCode",{parentName:"li"},"Result")," (fast, usually no garbage)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Stack Frames"),": Choose if the ",(0,n.kt)("inlineCode",{parentName:"li"},"Result")," object records the stacktrace of the WASM Trap. This can help with debugging but requires allocating space to store the stacktrace."))),(0,n.kt)("li",{parentName:"ul"},"Exports",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Wrap Exported Functions"),": Generate a wrapper for every callable ",(0,n.kt)("a",{parentName:"li",href:"https://webassembly.github.io/spec/core/syntax/modules.html#functions"},"function")," exported from the WASM module."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Wrap Exported Globals"),": Generate a wrapper for every ",(0,n.kt)("a",{parentName:"li",href:"https://webassembly.github.io/spec/core/syntax/modules.html#syntax-global"},"global")," exported from the WASM module."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Wrap Exported Memory"),": Generate a wrapper for every ",(0,n.kt)("a",{parentName:"li",href:"https://webassembly.github.io/spec/core/syntax/modules.html#syntax-mem"},"memory")," exported from the WASM module."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Wrap Exported Tables"),": Generate a wrapper for every ",(0,n.kt)("a",{parentName:"li",href:"https://webassembly.github.io/spec/core/syntax/modules.html#syntax-table"},"table")," exported from the WASM module."))))))}d.isMDXComponent=!0},2544:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/BinaryenOptimizationInspector-69b601073f09f907c14b8dc65e2e55db.png"},1084:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/CodeGenerationInspector-8350015b59fc724f33be89bee9b0909b.png"},1277:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/CompilationInspector-a87999b04920f9d33046a3c10a0850a3.png"},6496:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/CompressionInspector-538546b2ce3f98a6f98148e3995c8b77.png"},9925:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/TransformationInspector-2dfc8de378f2bc5ed6a7749e1bdd5cb1.png"},6490:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/WizerPreinitializeInspector-02b4a01edf32784e92c631e34cfcea7d.png"}}]);