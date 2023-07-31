"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[6612],{3905:(e,n,i)=>{i.d(n,{Zo:()=>s,kt:()=>u});var t=i(7294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=t.createContext({}),d=function(e){var n=t.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},s=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(i),h=a,u=c["".concat(p,".").concat(h)]||c[h]||m[h]||r;return i?t.createElement(u,o(o({ref:n},s),{},{components:i})):t.createElement(u,o({ref:n},s))}));function u(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=h;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=i[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}h.displayName="MDXCreateElement"},8173:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(7462),a=(i(7294),i(3905));const r={title:"SimpleWasmMonoBehaviour",sidebar_position:9},o=void 0,l={unversionedId:"reference/code/simplewasmmonobehaviour",id:"reference/code/simplewasmmonobehaviour",title:"SimpleWasmMonoBehaviour",description:"SimpleWasmMonoBehaviour provides an easy to use system which can load a WASM module and execute code in it, all from within a standard MonoBehaviour. For more information see this tutorial.",source:"@site/docs/reference/code/simplewasmmonobehaviour.md",sourceDirName:"reference/code",slug:"/reference/code/simplewasmmonobehaviour",permalink:"/wasmbox/reference/code/simplewasmmonobehaviour",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/reference/code/simplewasmmonobehaviour.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"SimpleWasmMonoBehaviour",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"FutureRunner<T>",permalink:"/wasmbox/reference/code/futurerunner"},next:{title:"WASI",permalink:"/wasmbox/category/wasi"}},p={},d=[{value:"Life Cycle",id:"life-cycle",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>IWasmAsset? WasmAsset</code>",id:"iwasmasset-wasmasset",level:3},{value:"<code>EngineConfig EngineConfig</code>",id:"engineconfig-engineconfig",level:3},{value:"<code>TWrapper Wrapper</code>",id:"twrapper-wrapper",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>TWrapper? TryGetWrapper()</code>",id:"twrapper-trygetwrapper",level:3},{value:"Callbacks And Events",id:"callbacks-and-events",level:2},{value:"<code>Linker CreateLinker(EngineConfig config)</code>",id:"linker-createlinkerengineconfig-config",level:3},{value:"<code>void ConfigureLinker(Linker linker)</code>",id:"void-configurelinkerlinker-linker",level:3},{value:"<code>virtual void OnLoadingFailed()</code>",id:"virtual-void-onloadingfailed",level:3},{value:"<code>void OnLoadingWait(Task loading)</code>",id:"void-onloadingwaittask-loading",level:3},{value:"<code>void OnUsingEngine(Engine engine, IEpochHandle? epochs)</code>",id:"void-onusingengineengine-engine-iepochhandle-epochs",level:3},{value:"<code>void OnWrapperCreated(TWrapper wrapper)</code>",id:"void-onwrappercreatedtwrapper-wrapper",level:3}],s={toc:d};function c(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,t.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SimpleWasmMonoBehaviour")," provides an easy to use system which can load a WASM module and execute code in it, all from within a standard ",(0,a.kt)("inlineCode",{parentName:"p"},"MonoBehaviour"),". For more information see ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/basics/using_wasm"},"this tutorial"),"."),(0,a.kt)("h2",{id:"life-cycle"},"Life Cycle"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SimpleWasmMonoBehaviour")," handles loading an asset and instantiating it (",(0,a.kt)("inlineCode",{parentName:"p"},"OnEnable"),"), creating a Linker & Store (",(0,a.kt)("inlineCode",{parentName:"p"},"Awake"),"), and destroying everything (",(0,a.kt)("inlineCode",{parentName:"p"},"OnDestroy"),"). Refer to the Unity ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/ExecutionOrder.html"},'"Order of execution for event functions"')," documentation for the exact order of these events. As the ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleWasmMonoBehaviour")," is creating and destroying various WASM components, there are ",(0,a.kt)("em",{parentName:"p"},"callbacks")," (shown in diamonds) which your code can use to track what is being done."),(0,a.kt)("mermaid",{value:'flowchart TD;\n%%{ init : { "flowchart" : { "curve" : "linear" }}}%%\n\n    subgraph idinit ["Initialization"]\n        Awake([Awake])\n            --\x3e OnEnable([OnEnable])\n    end\n\n    OnEnable --\x3e idcoro\n\n    subgraph idcoro ["Loading Coroutine"]\n        OnUsingEngine[/"OnUsingEngine"/]\n            --\x3e Store("Create Store")\n            --\x3e Linker[/"Create Linker"/]\n            --\x3e ConfigLinker[/"ConfigureLinker"/]\n            --\x3e LoadingModule("Loading Module")\n            --\x3e OnLoadingWait[/"OnLoadingWait"/]\n            --\x3e OnWrapperCreated[/"OnWrapperCreated"/]\n\n        OnLoadingWait --\x3e OnLoadingWait\n        OnLoadingWait --x OnLoadingFailed[/"OnLoadingFailed"/]\n    end\n\n    OnEnable --\x3e idupdate\n\n    subgraph idupdate ["Game Logic"]\n        Update([Update])\n    end\n\n    idupdate --\x3e iddisable\n\n    subgraph iddisable ["Decommissioning"]\n        OnDisable([OnDisable])\n            --\x3e WrapperDispose("Wrapper.Dispose()")\n            --\x3e OnDestroy([OnDestroy])\n            --\x3e StoreDispose("Store.Dispose()")\n            --\x3e LinkerDispose("Linker.Dispose()")\n    end'}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"iwasmasset-wasmasset"},(0,a.kt)("inlineCode",{parentName:"h3"},"IWasmAsset? WasmAsset")),(0,a.kt)("p",null,"Get or set the ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/iwasmasset"},(0,a.kt)("inlineCode",{parentName:"a"},"IWasmAsset"))," which this behaviour will create. When this is set, the asset will ",(0,a.kt)("strong",{parentName:"p"},"not"),' immediately be reloaded; it is loaded in the "Loading Coroutine", which is started in ',(0,a.kt)("inlineCode",{parentName:"p"},"OnEnable"),"."),(0,a.kt)("h3",{id:"engineconfig-engineconfig"},(0,a.kt)("inlineCode",{parentName:"h3"},"EngineConfig EngineConfig")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/engineconfig"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineConfig"))," determines which ",(0,a.kt)("inlineCode",{parentName:"p"},"Engine")," will be used to compile the WasmAsset into machine code. When this is set the asset will ",(0,a.kt)("strong",{parentName:"p"},"not"),' immediately be recompiled, it is loaded in the "Loading Coroutine" which is started in ',(0,a.kt)("inlineCode",{parentName:"p"},"OnEnable"),"."),(0,a.kt)("h3",{id:"twrapper-wrapper"},(0,a.kt)("inlineCode",{parentName:"h3"},"TWrapper Wrapper")),(0,a.kt)("p",null,'Get the "wrapper" code which has been created. WASM code can be invoked through this.'),(0,a.kt)("p",null,"This property will throw an ",(0,a.kt)("inlineCode",{parentName:"p"},"InvalidOperationException")," if it is access when the wrapper is not valid. The wrapper is only valid after ",(0,a.kt)("inlineCode",{parentName:"p"},"OnWrapperCreated")," has been called and before ",(0,a.kt)("inlineCode",{parentName:"p"},"OnDisable")," has been called."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"twrapper-trygetwrapper"},(0,a.kt)("inlineCode",{parentName:"h3"},"TWrapper? TryGetWrapper()")),(0,a.kt)("p",null,"Safe alternative to the ",(0,a.kt)("a",{parentName:"p",href:"#twrapper-wrapper"},(0,a.kt)("inlineCode",{parentName:"a"},"Wrapper"))," property. Tries to get the wrapper and returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," if it is not currently valid."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"void Update()\n{\n    var wrapper = TryGetWrapper();\n    if (wrapper.HasValue)\n        wrapper.Value.CallSomething();\n}\n")),(0,a.kt)("h2",{id:"callbacks-and-events"},"Callbacks And Events"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Some Unity events are used inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleWasmMonoBehaviour"),". If you use these events you ",(0,a.kt)("strong",{parentName:"p"},"must")," override them and call the base method.")),(0,a.kt)("p",null,"For example to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"OnEnable")," event:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'protected override void OnEnable()\n{\n    Debug.Log("Your code here!");\n    base.OnEnable();\n}\n')),(0,a.kt)("h3",{id:"linker-createlinkerengineconfig-config"},(0,a.kt)("inlineCode",{parentName:"h3"},"Linker CreateLinker(EngineConfig config)")),(0,a.kt)("p",null,"This method will be called to create a new linker"),(0,a.kt)("h3",{id:"void-configurelinkerlinker-linker"},(0,a.kt)("inlineCode",{parentName:"h3"},"void ConfigureLinker(Linker linker)")),(0,a.kt)("p",null,"This method will be called when a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Linker")," is created. Use it to define things on the linker such as functions & WASI features."),(0,a.kt)("h3",{id:"virtual-void-onloadingfailed"},(0,a.kt)("inlineCode",{parentName:"h3"},"virtual void OnLoadingFailed()")),(0,a.kt)("p",null,"This method will be called if the ",(0,a.kt)("inlineCode",{parentName:"p"},"WasmAsset")," fails to produce a ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/loadedmodule"},(0,a.kt)("inlineCode",{parentName:"a"},"LoadedModule"))," for some reason."),(0,a.kt)("h3",{id:"void-onloadingwaittask-loading"},(0,a.kt)("inlineCode",{parentName:"h3"},"void OnLoadingWait(Task loading)")),(0,a.kt)("p",null,"This method will be called every frame while the ",(0,a.kt)("inlineCode",{parentName:"p"},"WasmAsset")," is loading."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Call ",(0,a.kt)("inlineCode",{parentName:"p"},"loading.Wait()")," to wait for the task to complete. This will ",(0,a.kt)("strong",{parentName:"p"},"freeze the main thread"),".")),(0,a.kt)("h3",{id:"void-onusingengineengine-engine-iepochhandle-epochs"},(0,a.kt)("inlineCode",{parentName:"h3"},"void OnUsingEngine(Engine engine, IEpochHandle? epochs)")),(0,a.kt)("p",null,"This method will be called every time a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Engine")," has been chosen (because the ",(0,a.kt)("a",{parentName:"p",href:"#engineconfig-engineconfig"},"EngineConfig")," has changed). If ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/basics/limiting_execution/epochinterruption"},"Epoch Interruption")," is enabled the ",(0,a.kt)("inlineCode",{parentName:"p"},"epochs")," object will be non-null, use it to set the epoch for this engine."),(0,a.kt)("h3",{id:"void-onwrappercreatedtwrapper-wrapper"},(0,a.kt)("inlineCode",{parentName:"h3"},"void OnWrapperCreated(TWrapper wrapper)")),(0,a.kt)("p",null,"This method will be called when a new wrapper is created, it is the very last part of the loading coroutine."))}c.isMDXComponent=!0}}]);