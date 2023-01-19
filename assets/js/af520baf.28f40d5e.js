"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Function"},i=void 0,l={unversionedId:"reference/code/wasmtime/function",id:"reference/code/wasmtime/function",title:"Function",description:"A Function represents a callable piece of code. This may be a WASM function that can be called by C# code, or a C# function which can be called by WASM code. The Function class is a wrapper around the wasmtime::Func struct.",source:"@site/docs/reference/code/wasmtime/function.md",sourceDirName:"reference/code/wasmtime",slug:"/reference/code/wasmtime/function",permalink:"/wasmbox/reference/code/wasmtime/function",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/reference/code/wasmtime/function.md",tags:[],version:"current",frontMatter:{title:"Function"},sidebar:"tutorialSidebar",previous:{title:"Wasmtime Introduction",permalink:"/wasmbox/reference/code/wasmtime/Introduction"},next:{title:"Global",permalink:"/wasmbox/reference/code/wasmtime/global"}},c={},p=[{value:"Properties",id:"properties",level:2},{value:"<code>IReadOnlyList&lt;ValueKind&gt; Parameters</code>",id:"ireadonlylistvaluekind-parameters",level:3},{value:"<code>IReadOnlyList&lt;ValueKind&gt; Results</code>",id:"ireadonlylistvaluekind-results",level:3},{value:"<code>bool IsNull</code>",id:"bool-isnull",level:3},{value:"<code>Function Null</code>",id:"function-null",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>bool CheckTypeSignature(Type? returnType = null, params Type[] parameters)</code>",id:"bool-checktypesignaturetype-returntype--null-params-type-parameters",level:3},{value:"Invoke",id:"invoke",level:3},{value:"<code>WrapAction</code>/<code>WrapFunc</code>",id:"wrapactionwrapfunc",level:3},{value:"<code>FromCallback</code>",id:"fromcallback",level:3}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," represents a callable piece of code. This may be a WASM function that can be called by C# code, or a C# function which can be called by WASM code. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," class is a wrapper around the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/wasmtime/latest/wasmtime/struct.Func.html"},(0,r.kt)("inlineCode",{parentName:"a"},"wasmtime::Func")," struct"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In many cases you will not need to directly use this type. The ",(0,r.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/codegeneration"},"autogenerated wrapper code")," already handles calling functions in the most efficient way possible.")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"ireadonlylistvaluekind-parameters"},(0,r.kt)("inlineCode",{parentName:"h3"},"IReadOnlyList<ValueKind> Parameters")),(0,r.kt)("p",null,"Get the types of the parameters that this function is called with."),(0,r.kt)("h3",{id:"ireadonlylistvaluekind-results"},(0,r.kt)("inlineCode",{parentName:"h3"},"IReadOnlyList<ValueKind> Results")),(0,r.kt)("p",null,"Get the types of the values that this function returns."),(0,r.kt)("h3",{id:"bool-isnull"},(0,r.kt)("inlineCode",{parentName:"h3"},"bool IsNull")),(0,r.kt)("p",null,"Get a value indicating if this ",(0,r.kt)("inlineCode",{parentName:"p"},"Function"),' represents the "null" function.'),(0,r.kt)("h3",{id:"function-null"},(0,r.kt)("inlineCode",{parentName:"h3"},"Function Null")),(0,r.kt)("p",null,'Get a "null" function reference.'),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"bool-checktypesignaturetype-returntype--null-params-type-parameters"},(0,r.kt)("inlineCode",{parentName:"h3"},"bool CheckTypeSignature(Type? returnType = null, params Type[] parameters)")),(0,r.kt)("p",null,"Check if the given match the Results/Parameters of this ",(0,r.kt)("inlineCode",{parentName:"p"},"Function"),". This can be used as a type check before calling ",(0,r.kt)("inlineCode",{parentName:"p"},"Invoke"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clike"},"// func.Results == [ ValueKind.Float32 ]\n// func.Parameters == [ ValueKind.Int32, ValueKind.Int64 ]\n\n// True\nfunc.CheckTypeSignature(typeof(float), typeof(int), typeof(long));\n\n// False\nfunc.CheckTypeSignature(null, typeof(long), typeof(double));\n")),(0,r.kt)("h3",{id:"invoke"},"Invoke"),(0,r.kt)("p",null,"There are a thee ",(0,r.kt)("inlineCode",{parentName:"p"},"Invoke")," functions which call this function and return a result."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"object? Invoke()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"object? Invoke(params ValueBox[] arguments)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"object? Invoke(ReadOnlySpan<ValueBox> arguments)"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Using these methods always allocates, prefer using ",(0,r.kt)("inlineCode",{parentName:"p"},"WrapAction"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"WrapFunc"),".")),(0,r.kt)("h3",{id:"wrapactionwrapfunc"},(0,r.kt)("inlineCode",{parentName:"h3"},"WrapAction"),"/",(0,r.kt)("inlineCode",{parentName:"h3"},"WrapFunc")),(0,r.kt)("p",null,'Attempt to "Wrap" a ',(0,r.kt)("inlineCode",{parentName:"p"},"Function")," as a standard C# ",(0,r.kt)("inlineCode",{parentName:"p"},"Action")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Func"),". Using a wrapper is less error prone (type safe), faster to execute and does not allocate on every call."),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"Action<T>")," represents a function which accepts a value (type ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),") and returns nothing. A ",(0,r.kt)("inlineCode",{parentName:"p"},"Func<T>")," represents a function which accepts nothing and return a value (type ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),")."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A wrapper cannot be created if the types do not match the signature of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Function"),". In this case ",(0,r.kt)("inlineCode",{parentName:"p"},"Wrap")," will return ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clike"},'Function func = some_func;\n\n// Try to wrap the function as an "Action" which accepts an int.\nAction<int> action = func.WrapAction<int>();\n\n// Invoke it like a normal C# method call.\naction(10);\n')),(0,r.kt)("h3",{id:"fromcallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"FromCallback")),(0,r.kt)("p",null,"Convert a standard C# ",(0,r.kt)("inlineCode",{parentName:"p"},"Action")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Func")," into a ",(0,r.kt)("inlineCode",{parentName:"p"},"Function"),". This can be used to allow WASM code to call back into C# code."))}s.isMDXComponent=!0}}]);