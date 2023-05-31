"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[5920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,y=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"Async Execution",sidebar_position:6},o=void 0,s={unversionedId:"getting_started/demos/async",id:"getting_started/demos/async",title:"Async Execution",description:"This scene demonstrates how to use async execution. Async execution allows a some running code to be paused and then resumed later. This is similar to a Unity coroutine but it can work with any program, even ones which were not designed for async execution! For more information about using async execution, see this tutorial.",source:"@site/docs/getting_started/demos/async.md",sourceDirName:"getting_started/demos",slug:"/getting_started/demos/async",permalink:"/wasmbox/getting_started/demos/async",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/getting_started/demos/async.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Async Execution",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Parallel Jobs",permalink:"/wasmbox/getting_started/demos/jobs"},next:{title:"Async Execution With Jobs",permalink:"/wasmbox/getting_started/demos/async_job"}},l={},c=[],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This scene demonstrates how to use async execution. Async execution allows a some running code to be paused and then resumed later. This is similar to a Unity coroutine but it can work with any program, even ones which were not designed for async execution! For more information about using async execution, see ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/advanced/asyncify"},"this tutorial"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Demo Object")," has a ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncDemoScript"),' attached which is loading the "AsyncWat" asset. This asset has the ',(0,a.kt)("b",null,"Asyncify")," option ticked ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/editor/import#3-transformation"},"in the importer"),", which rewrites the WASM code to add support for async suspend/resume. Once the ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncDemoScript")," is loaded it begins running in a Unity coroutine."),(0,a.kt)("p",null,"The running WASM code looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-wasm"},';; get a number (the current time)\n(call $.get_number)\n\n;; suspend execution until the "Complete" button is clicked\n(drop (call $wasi_snapshot_preview1.sched_yield))\n\n;; get another number  (the current time)\n(call $.get_number)\n\n;; Return both numbers\n')),(0,a.kt)("p",null,'The running WASM code is suspended and will remain suspended until the "Complete" button is clicked. While suspended no CPU resources are used at all. Once the button is clicked it will finish running and displays the difference between the two numbers.'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Inspect ",(0,a.kt)("inlineCode",{parentName:"li"},"AsyncWat"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Asyncify"),' has been ticked in the "Transformation" section'))),(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("inlineCode",{parentName:"li"},"AsyncDemoScript"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DemoCoroutine"),' calls the "run()" method and receives a ',(0,a.kt)("a",{parentName:"li",href:"/wasmbox/reference/code/future"},(0,a.kt)("inlineCode",{parentName:"a"},"Future"))," object."),(0,a.kt)("li",{parentName:"ul"},"Once created a Future ",(0,a.kt)("strong",{parentName:"li"},"must")," be run to completion, it cannot be cancelled!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yield return future;")," will resume the future once every frame until it is complete."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"future.TryGetResult")," will attempt get a result from the future if it is complete."),(0,a.kt)("li",{parentName:"ul"},"When ",(0,a.kt)("inlineCode",{parentName:"li"},"future.TryGetResult")," returns true it has returned a valid result and has internally disposed the future, it ",(0,a.kt)("strong",{parentName:"li"},"must")," not be called again.")))))}m.isMDXComponent=!0}}]);