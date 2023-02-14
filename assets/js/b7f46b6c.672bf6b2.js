"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[6509],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(m,".").concat(d)]||p[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={title:"Instance"},o=void 0,c={unversionedId:"reference/code/wasmtime/instance",id:"reference/code/wasmtime/instance",title:"Instance",description:"An Instance is an instantiation of a Module, which can be used to execute WASM code. The Instance class is a wrapper around the wasmtime::Instance struct.",source:"@site/docs/reference/code/wasmtime/instance.md",sourceDirName:"reference/code/wasmtime",slug:"/reference/code/wasmtime/instance",permalink:"/wasmbox/reference/code/wasmtime/instance",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/reference/code/wasmtime/instance.md",tags:[],version:"current",frontMatter:{title:"Instance"},sidebar:"tutorialSidebar",previous:{title:"Global",permalink:"/wasmbox/reference/code/wasmtime/global"},next:{title:"Linker",permalink:"/wasmbox/reference/code/wasmtime/linker"}},m={},l=[{value:"Methods",id:"methods",level:2},{value:"<code>Action? GetAction&lt;A,B,C...&gt;(string name)</code>",id:"action-getactionabcstring-name",level:3},{value:"<code>Func&lt;A,B,C,...,R&gt; GetFunction&lt;A,B,C...R&gt;(string name)</code>",id:"funcabcr-getfunctionabcrstring-name",level:3},{value:"<code>Function? GetFunction(string name, Type? returnType, params Type[] parameterTypes)</code>",id:"function-getfunctionstring-name-type-returntype-params-type-parametertypes",level:3},{value:"<code>Function? GetFunction(string name)</code>",id:"function-getfunctionstring-name",level:3},{value:"<code>Table? GetTable(string name)</code>",id:"table-gettablestring-name",level:3},{value:"<code>Memory? GetMemory(string name)</code>",id:"memory-getmemorystring-name",level:3},{value:"<code>Global? GetGlobal(string name)</code>",id:"global-getglobalstring-name",level:3}],s={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"Instance")," is an instantiation of a ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/module"},(0,r.kt)("inlineCode",{parentName:"a"},"Module")),", which can be used to execute WASM code. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Instance")," class is a wrapper around the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/wasmtime/latest/wasmtime/struct.Instance.html"},(0,r.kt)("inlineCode",{parentName:"a"},"wasmtime::Instance"))," struct."),(0,r.kt)("p",null,"Constructing an ",(0,r.kt)("inlineCode",{parentName:"p"},"Instance")," is usually done with a ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/linker"},(0,r.kt)("inlineCode",{parentName:"a"},"Linker"))," which provides all the imports the ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/module"},(0,r.kt)("inlineCode",{parentName:"a"},"Module"))," requires."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"action-getactionabcstring-name"},(0,r.kt)("inlineCode",{parentName:"h3"},"Action? GetAction<A,B,C...>(string name)")),(0,r.kt)("p",null,"Try to get a ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/function"},(0,r.kt)("inlineCode",{parentName:"a"},"Function"))," from this ",(0,r.kt)("inlineCode",{parentName:"p"},"Instance")," with the given name which takes arguments ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),",",(0,r.kt)("inlineCode",{parentName:"p"},"B"),",",(0,r.kt)("inlineCode",{parentName:"p"},"C")," etc (up to 12 parameters) and returns nothing."),(0,r.kt)("h3",{id:"funcabcr-getfunctionabcrstring-name"},(0,r.kt)("inlineCode",{parentName:"h3"},"Func<A,B,C,...,R> GetFunction<A,B,C...R>(string name)")),(0,r.kt)("p",null,"Try to get a ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/function"},(0,r.kt)("inlineCode",{parentName:"a"},"Function"))," from this ",(0,r.kt)("inlineCode",{parentName:"p"},"Instance")," with the given name which takes arguments ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),",",(0,r.kt)("inlineCode",{parentName:"p"},"B"),",",(0,r.kt)("inlineCode",{parentName:"p"},"C")," etc (up to 12 parameters) and returns ",(0,r.kt)("inlineCode",{parentName:"p"},"R"),". If the function has multiple return types use a tuple as ",(0,r.kt)("inlineCode",{parentName:"p"},"R"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clike"},'// Get a function from WASM\nvar func = instance.GetFunction<int, float, (float, int)>("demo_function");\n\nif (func == null)\n    throw new Exception("Oh no");\n\n// Call it\n(float, int) result = func(1, 2f);\n')),(0,r.kt)("h3",{id:"function-getfunctionstring-name-type-returntype-params-type-parametertypes"},(0,r.kt)("inlineCode",{parentName:"h3"},"Function? GetFunction(string name, Type? returnType, params Type[] parameterTypes)")),(0,r.kt)("p",null,"Try to get a ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/function"},(0,r.kt)("inlineCode",{parentName:"a"},"Function"))," from this ",(0,r.kt)("inlineCode",{parentName:"p"},"Instance")," with the given name which returns ",(0,r.kt)("inlineCode",{parentName:"p"},"returnType")," and accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"parameterTypes"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetAction<>"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"GetFunction<>")," versions are safer to use and are much faster to call.")),(0,r.kt)("h3",{id:"function-getfunctionstring-name"},(0,r.kt)("inlineCode",{parentName:"h3"},"Function? GetFunction(string name)")),(0,r.kt)("p",null,"Try to get a ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/function"},(0,r.kt)("inlineCode",{parentName:"a"},"Function"))," from this ",(0,r.kt)("inlineCode",{parentName:"p"},"Instance")," with the given name."),(0,r.kt)("h3",{id:"table-gettablestring-name"},(0,r.kt)("inlineCode",{parentName:"h3"},"Table? GetTable(string name)")),(0,r.kt)("p",null,"Try to get a ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/table"},(0,r.kt)("inlineCode",{parentName:"a"},"Table"))," from this ",(0,r.kt)("inlineCode",{parentName:"p"},"Instance")," with the given name."),(0,r.kt)("h3",{id:"memory-getmemorystring-name"},(0,r.kt)("inlineCode",{parentName:"h3"},"Memory? GetMemory(string name)")),(0,r.kt)("p",null,"Try to get a ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/memory"},(0,r.kt)("inlineCode",{parentName:"a"},"Memory"))," from this ",(0,r.kt)("inlineCode",{parentName:"p"},"Instance")," with the given name."),(0,r.kt)("h3",{id:"global-getglobalstring-name"},(0,r.kt)("inlineCode",{parentName:"h3"},"Global? GetGlobal(string name)")),(0,r.kt)("p",null,"Try to get a ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/global"},(0,r.kt)("inlineCode",{parentName:"a"},"Global"))," from this ",(0,r.kt)("inlineCode",{parentName:"p"},"Instance")," with the given name."))}p.isMDXComponent=!0}}]);