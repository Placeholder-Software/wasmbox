"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[6500],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"WASM In Jobs",sidebar_position:5},i=void 0,l={unversionedId:"basics/jobs",id:"basics/jobs",title:"WASM In Jobs",description:"The wrapper code which Wasmbox automatically generates is designed to work within the Unity Job safety system. A wrapper requires write access for every operation, so it can only be used within one single job.",source:"@site/docs/basics/jobs.md",sourceDirName:"basics",slug:"/basics/jobs",permalink:"/wasmbox/basics/jobs",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/basics/jobs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"WASM In Jobs",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Epochs Interruption",permalink:"/wasmbox/basics/limiting_execution/epochinterruption"},next:{title:"Advanced",permalink:"/wasmbox/category/advanced"}},s={},c=[{value:"1. Define a Job",id:"1-define-a-job",level:3},{value:"2. Schedule Job",id:"2-schedule-job",level:3},{value:"3. Epochs (Optional)",id:"3-epochs-optional",level:3},{value:"Thread Safety",id:"thread-safety",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The wrapper code which Wasmbox automatically generates is designed to work within the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/2020.1/Documentation/Manual/JobSystemSafetySystem.html"},"Unity Job safety system"),". A wrapper requires ",(0,r.kt)("strong",{parentName:"p"},"write")," access for ",(0,r.kt)("strong",{parentName:"p"},"every")," operation, so it can only be used within one single job."),(0,r.kt)("h3",{id:"1-define-a-job"},"1. Define a Job"),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"IJob")," struct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clike"},"public struct DemoJob\n    : IJob\n{\n    private AutogeneratedScriptName _wrapper;\n\n    public WasmWrapperJob(AutogeneratedScriptName wrapper)\n    {\n        _wrapper = wrapper;\n    }\n\n    public void Execute()\n    {\n        _wrapper.CallSomeWasmFunction();\n    }\n}\n")),(0,r.kt)("h3",{id:"2-schedule-job"},"2. Schedule Job"),(0,r.kt)("p",null,"Schedule the Job with the Unity safety system. Once the Job has completed call ",(0,r.kt)("inlineCode",{parentName:"p"},"handle.Complete()")," to be able to use the wrapper in the main thread again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clike"},"var handle = new DemoJob(the_wrapper).Schedule();\n\n// Wait a while\n// Do other work...\n\n// You **must** call `handle.Complete()` before accessing the wrapper\nhandle.Complete();\n\n// You may now use the wrapper in non-job code\nthe_wrapper.CallSomeWasmFunction();\n")),(0,r.kt)("h3",{id:"3-epochs-optional"},"3. Epochs (Optional)"),(0,r.kt)("p",null,"You may want to put a limit on how long WASM code can run for in a job. This can be done with ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/basics/limiting_execution/epochinterruption"},(0,r.kt)("inlineCode",{parentName:"a"},"Epoch Interruption")),"."),(0,r.kt)("p",null,"To setup epoch interruption:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Call ",(0,r.kt)("inlineCode",{parentName:"li"},"SetEpochDeadline(the_deadline)")," on the store."),(0,r.kt)("li",{parentName:"ol"},"Get an ",(0,r.kt)("inlineCode",{parentName:"li"},"EpochHandle")," from the ",(0,r.kt)("a",{parentName:"li",href:"/wasmbox/reference/code/engineconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"EngineConfig")),"."),(0,r.kt)("li",{parentName:"ol"},"Start the job."),(0,r.kt)("li",{parentName:"ol"},"While the job is running call ",(0,r.kt)("inlineCode",{parentName:"li"},"SetEpoch")," on the ",(0,r.kt)("inlineCode",{parentName:"li"},"EpochHandle")," (for example every frame)."),(0,r.kt)("li",{parentName:"ol"},"If the epoch you set is higher than the deadline the code will immediately terminate execution.")),(0,r.kt)("h2",{id:"thread-safety"},"Thread Safety"),(0,r.kt)("p",null,"By using the ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/linker"},(0,r.kt)("inlineCode",{parentName:"a"},"Linker"))," it is easy to accidentally bypass the safety system through WASM code. For example this code keeps a counter in a non-threadsafe way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clike"},'int counter = 1;\n\nlinker.DefineFunction("this_is_bad", "accumulate_not_threadsafe", (int a) => {\n    counter += a;\n    return counter;\n});\n')),(0,r.kt)("p",null,"If this same ",(0,r.kt)("inlineCode",{parentName:"p"},"Linker")," is used to create two WASM instances and those instances are both scheduled to run in Jobs simultaneously it would be possible to corrupt this counter."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you are going to schedule WASM code to run in jobs everything defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Linker")," must be threadsafe.")),(0,r.kt)("p",null,"A simple modification to the above code which makes it threadsafe is to add a lock:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clike"},'var safety = new object();\nint counter = 1;\n\nlinker.DefineFunction("this_is_ok", "accumulate_safe", (int a) => {\n    lock (safety)\n    {\n        counter += a;\n        return counter;\n    }\n});\n')))}u.isMDXComponent=!0}}]);