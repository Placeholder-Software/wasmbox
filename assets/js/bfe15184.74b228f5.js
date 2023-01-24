"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[8166],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>v});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=i,v=m["".concat(s,".").concat(p)]||m[p]||c[p]||a;return t?r.createElement(v,o(o({ref:n},d),{},{components:t})):r.createElement(v,o({ref:n},d))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={title:"Environment"},o=void 0,l={unversionedId:"reference/code/WASI/environment",id:"reference/code/WASI/environment",title:"Environment",description:"These WASI methods virtualise an environment which the WASM code is executing within (environment variables and arguments).",source:"@site/docs/reference/code/WASI/environment.md",sourceDirName:"reference/code/WASI",slug:"/reference/code/WASI/environment",permalink:"/wasmbox/reference/code/WASI/environment",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/reference/code/WASI/environment.md",tags:[],version:"current",frontMatter:{title:"Environment"},sidebar:"tutorialSidebar",previous:{title:"Clock",permalink:"/wasmbox/reference/code/WASI/clock"},next:{title:"Virtual Filesystem",permalink:"/wasmbox/reference/code/WASI/filesystem"}},s={},u=[{value:"VirtualEnvironment",id:"virtualenvironment",level:2},{value:"<code>SetEnvironmentVariable(string key, string? value = null)</code>",id:"setenvironmentvariablestring-key-string-value--null",level:4},{value:"<code>PassthroughEnvironmentVariables()</code>",id:"passthroughenvironmentvariables",level:4},{value:"<code>SetArgs(params string[] args)</code>",id:"setargsparams-string-args",level:4},{value:"IVirtualEnvironment",id:"ivirtualenvironment",level:2},{value:"<code>WasiError EnvironGetSizes(Caller caller, Pointer&lt;uint&gt; argNum, Pointer&lt;uint&gt; dataLen)</code>",id:"wasierror-environgetsizescaller-caller-pointeruint-argnum-pointeruint-datalen",level:4},{value:"<code>WasiError EnvironGet(Caller caller, ReadonlyPointer&lt;Pointer&lt;uint&gt;&gt; environ, Pointer&lt;byte&gt; environBuffer);</code>",id:"wasierror-environgetcaller-caller-readonlypointerpointeruint-environ-pointerbyte-environbuffer",level:4},{value:"<code>WasiError ArgsGetSizes(Caller caller, Pointer&lt;uint&gt; argNum, Pointer&lt;uint&gt; dataLen)</code>",id:"wasierror-argsgetsizescaller-caller-pointeruint-argnum-pointeruint-datalen",level:4},{value:"<code>WasiError ArgsGet(Caller caller, ReadonlyPointer&lt;Pointer&lt;uint&gt;&gt; environ, Pointer&lt;byte&gt; environBuffer)</code>",id:"wasierror-argsgetcaller-caller-readonlypointerpointeruint-environ-pointerbyte-environbuffer",level:4},{value:"<code>void Register(Linker linker)</code>",id:"void-registerlinker-linker",level:4}],d={toc:u};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"These WASI methods virtualise an environment which the WASM code is executing within (environment variables and arguments)."),(0,i.kt)("h2",{id:"virtualenvironment"},"VirtualEnvironment"),(0,i.kt)("p",null,"Provides a basic implementation of an environment that can be configured before use."),(0,i.kt)("h4",{id:"setenvironmentvariablestring-key-string-value--null"},(0,i.kt)("inlineCode",{parentName:"h4"},"SetEnvironmentVariable(string key, string? value = null)")),(0,i.kt)("p",null,"Set the given environment variable (",(0,i.kt)("inlineCode",{parentName:"p"},"key"),") to the given value (",(0,i.kt)("inlineCode",{parentName:"p"},"value"),"). If ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," is null the variable is deleted."),(0,i.kt)("h4",{id:"passthroughenvironmentvariables"},(0,i.kt)("inlineCode",{parentName:"h4"},"PassthroughEnvironmentVariables()")),(0,i.kt)("p",null,"Copy ",(0,i.kt)("strong",{parentName:"p"},"all")," real environment variables into the WASI context."),(0,i.kt)("h4",{id:"setargsparams-string-args"},(0,i.kt)("inlineCode",{parentName:"h4"},"SetArgs(params string[] args)")),(0,i.kt)("p",null,"The the arguments to the given strings."),(0,i.kt)("h2",{id:"ivirtualenvironment"},"IVirtualEnvironment"),(0,i.kt)("p",null,"The base interface for all WASI environment implementations. If the default implementation does not fit your use-case custom implementations can be built using this interface."),(0,i.kt)("h4",{id:"wasierror-environgetsizescaller-caller-pointeruint-argnum-pointeruint-datalen"},(0,i.kt)("inlineCode",{parentName:"h4"},"WasiError EnvironGetSizes(Caller caller, Pointer<uint> argNum, Pointer<uint> dataLen)")),(0,i.kt)("p",null,"Get information about the number of environment variables. Write the total number of variables into ",(0,i.kt)("inlineCode",{parentName:"p"},"argNum"),". Write the total length of all variables into ",(0,i.kt)("inlineCode",{parentName:"p"},"dataLen"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Each individual item must be encoded into UTF8 and null terminated. e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"Key=Value\\0"))),(0,i.kt)("h4",{id:"wasierror-environgetcaller-caller-readonlypointerpointeruint-environ-pointerbyte-environbuffer"},(0,i.kt)("inlineCode",{parentName:"h4"},"WasiError EnvironGet(Caller caller, ReadonlyPointer<Pointer<uint>> environ, Pointer<byte> environBuffer);")),(0,i.kt)("p",null,"Get all of the environment variables. Write out pointers to the start of each item into this ",(0,i.kt)("inlineCode",{parentName:"p"},"environ"),". Write out all of the environment data into this buffer (UTF8 encoded, null terminated. e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"Key=Value\\0"),"). The buffer will be the size previously returned from ",(0,i.kt)("inlineCode",{parentName:"p"},"EnvironGetSizes"),"."),(0,i.kt)("h4",{id:"wasierror-argsgetsizescaller-caller-pointeruint-argnum-pointeruint-datalen"},(0,i.kt)("inlineCode",{parentName:"h4"},"WasiError ArgsGetSizes(Caller caller, Pointer<uint> argNum, Pointer<uint> dataLen)")),(0,i.kt)("p",null,"Get information about the number of argument variables. Write the total number of variables into ",(0,i.kt)("inlineCode",{parentName:"p"},"argNum"),". Write the total length of all variables into ",(0,i.kt)("inlineCode",{parentName:"p"},"dataLen"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Each individual item must be encoded into UTF8 and null terminated. e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"--foo\\0"))),(0,i.kt)("h4",{id:"wasierror-argsgetcaller-caller-readonlypointerpointeruint-environ-pointerbyte-environbuffer"},(0,i.kt)("inlineCode",{parentName:"h4"},"WasiError ArgsGet(Caller caller, ReadonlyPointer<Pointer<uint>> environ, Pointer<byte> environBuffer)")),(0,i.kt)("p",null,"Get all of the argument variables. Write out pointers to the start of each item into this ",(0,i.kt)("inlineCode",{parentName:"p"},"environ"),". Write out all of the environment data into this buffer (UTF8 encoded, null terminated. e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"Key=Value\\0"),"). The buffer will be the size previously returned from ",(0,i.kt)("inlineCode",{parentName:"p"},"ArgsGetSizes"),"."),(0,i.kt)("h4",{id:"void-registerlinker-linker"},(0,i.kt)("inlineCode",{parentName:"h4"},"void Register(Linker linker)")),(0,i.kt)("p",null,"Add all functions of this implementation to the ",(0,i.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/linker"},"Linker"),". This can usually be implemented as a direct call to ",(0,i.kt)("inlineCode",{parentName:"p"},"linker.Register(this);"),"."))}m.isMDXComponent=!0}}]);