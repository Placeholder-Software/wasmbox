"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={title:"Future<T>",sidebar_position:7},a=void 0,u={unversionedId:"reference/code/future",id:"reference/code/future",title:"Future<T>",description:"When an WASM function is transformed into an async WASM function the return value changes from T to Future. A Future object represents the suspended execution of this function call and can be used to resume execution and to eventually retrieve a result.",source:"@site/docs/reference/code/future.md",sourceDirName:"reference/code",slug:"/reference/code/future",permalink:"/wasmbox/reference/code/future",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/reference/code/future.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Future<T>",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Generated Code",permalink:"/wasmbox/reference/code/codegeneration"},next:{title:"FutureRunner<T>",permalink:"/wasmbox/reference/code/futurerunner"}},l={},s=[{value:"Coroutine Support",id:"coroutine-support",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>IsDisposed</code>",id:"isdisposed",level:3},{value:"<code>HasResult</code>",id:"hasresult",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>CreateFromResult</code>",id:"createfromresult",level:3},{value:"<code>CreateFromSuspended</code>",id:"createfromsuspended",level:3},{value:"<code>ToJob()</code>",id:"tojob",level:3},{value:"<code>Resume()</code>",id:"resume",level:3},{value:"<code>Wait()</code>",id:"wait",level:3},{value:"<code>TryGetResult(out T? result)</code>",id:"trygetresultout-t-result",level:3}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When an WASM function is transformed into an ",(0,o.kt)("a",{parentName:"p",href:"/wasmbox/advanced/asyncify"},"async")," WASM function the return value changes from ",(0,o.kt)("inlineCode",{parentName:"p"},"T")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Future<T>"),". A ",(0,o.kt)("inlineCode",{parentName:"p"},"Future<T>")," object represents the suspended execution of this function call and can be used to resume execution and to eventually retrieve a result."),(0,o.kt)("h2",{id:"coroutine-support"},"Coroutine Support"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Future<T>")," can be yielded in a Unity coroutine, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Future<T>")," will run ",(0,o.kt)("inlineCode",{parentName:"p"},"Resume")," every frame until it is complete."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Async WASM Coroutine"',title:'"Async',WASM:!0,'Coroutine"':!0},"// Call the function like normal\nvar future = Wrapper.run_example_method(1, 2, 3, 4);\n\n// Wait until it is complete\nyield return future;\n\n// Get the final result\nfuture.TryComplete(out var result)\nDebug.Log(result);\n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"isdisposed"},(0,o.kt)("inlineCode",{parentName:"h3"},"IsDisposed")),(0,o.kt)("p",null,"Check if this ",(0,o.kt)("inlineCode",{parentName:"p"},"Future<T>")," has been disposed. No other properties of methods of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Future<T>")," may be accessed once this is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h3",{id:"hasresult"},(0,o.kt)("inlineCode",{parentName:"h3"},"HasResult")),(0,o.kt)("p",null,"Check if this ",(0,o.kt)("inlineCode",{parentName:"p"},"Future<T>")," has finished executing and has a result waiting to be retrieved (call ",(0,o.kt)("inlineCode",{parentName:"p"},"TryGetResult"),")."),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"createfromresult"},(0,o.kt)("inlineCode",{parentName:"h3"},"CreateFromResult")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This is used by Wasmbox code to construct a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Future<T>")," and should not be called directly.")),(0,o.kt)("h3",{id:"createfromsuspended"},(0,o.kt)("inlineCode",{parentName:"h3"},"CreateFromSuspended")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This is used by Wasmbox code to construct a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Future<T>")," and should not be called directly.")),(0,o.kt)("h3",{id:"tojob"},(0,o.kt)("inlineCode",{parentName:"h3"},"ToJob()")),(0,o.kt)("p",null,"Crate a new ",(0,o.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/futurerunner"},(0,o.kt)("inlineCode",{parentName:"a"},"FutureRunner<T>"))," which can be used to execute this ",(0,o.kt)("inlineCode",{parentName:"p"},"Future<T>")," in a job."),(0,o.kt)("h3",{id:"resume"},(0,o.kt)("inlineCode",{parentName:"h3"},"Resume()")),(0,o.kt)("p",null,"Resume execution, running until either the next yield point or until completion. Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"Resume")," needs to be called again."),(0,o.kt)("h3",{id:"wait"},(0,o.kt)("inlineCode",{parentName:"h3"},"Wait()")),(0,o.kt)("p",null,"Run this ",(0,o.kt)("inlineCode",{parentName:"p"},"Future<T>")," until it is complete and then returns the result. Using this method effectively turns the ",(0,o.kt)("inlineCode",{parentName:"p"},"Future<T>")," back into a normal function call, without any of the advantages of async execution."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Calling ",(0,o.kt)("inlineCode",{parentName:"p"},"Wait()")," will block the main thread until execution is complete!")),(0,o.kt)("h3",{id:"trygetresultout-t-result"},(0,o.kt)("inlineCode",{parentName:"h3"},"TryGetResult(out T? result)")),(0,o.kt)("p",null,"Attempt to retrieve a result from this ",(0,o.kt)("inlineCode",{parentName:"p"},"Future<T>"),". Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the ",(0,o.kt)("inlineCode",{parentName:"p"},"Future<T>")," was complete and a result was retrieved. After this has been called once the future is disposed, ",(0,o.kt)("inlineCode",{parentName:"p"},"IsDisposed")," becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", and no methods may be called. If execution resulted in an exception then it will be thrown when this method is called."))}c.isMDXComponent=!0}}]);