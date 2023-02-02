"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[5474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>v,default:()=>T,frontMatter:()=>g,metadata:()=>y,toc:()=>x});var r=n(7462),a=n(7294),o=n(3905),l=n(6010),s=n(2389),i=n(7392),u=n(7094),c=n(2466);const p="tabList__CuJ",m="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:o,values:s,groupId:d,className:f}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=s??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,i.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,u.U)(),[x,k]=(0,a.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=d){const e=y[d];null!=e&&e!==x&&h.some((t=>t.value===e))&&k(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==x&&(O(t),k(r),null!=d&&w(d,String(r)))},N=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},f)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:N,onClick:E},o,{className:(0,l.Z)("tabs__item",m,o?.className,{"tabs__item--active":x===t})}),n??t)}))),t?(0,a.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function f(e){const t=(0,s.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}const b="tabItem_Ymn6";function h(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(b,r),hidden:n},t)}const g={title:"Fuel Usage"},v=void 0,y={unversionedId:"basics/fuelusage",id:"basics/fuelusage",title:"Fuel Usage",description:"When executing WASM code it is sometimes useful to set a limit on how long it can run for. This can be used to prevent potentially malicious or buggy code from running forever and slowing down your application. Wasmbox includes two mechanisms to do this, Epoch Interruption and Fuel Usage.",source:"@site/docs/basics/fuelusage.md",sourceDirName:"basics",slug:"/basics/fuelusage",permalink:"/wasmbox/basics/fuelusage",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/basics/fuelusage.md",tags:[],version:"current",frontMatter:{title:"Fuel Usage"},sidebar:"tutorialSidebar",previous:{title:"Epoch Interruption",permalink:"/wasmbox/basics/epochinterruption"},next:{title:"WASM In Jobs",permalink:"/wasmbox/basics/jobs"}},w={},x=[{value:"Using Fuel",id:"using-fuel",level:2}],k={toc:x};function T(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When executing WASM code it is sometimes useful to set a limit on how long it can run for. This can be used to prevent potentially malicious or buggy code from running forever and slowing down your application. Wasmbox includes two mechanisms to do this, ",(0,o.kt)("a",{parentName:"p",href:"/wasmbox/basics/epochinterruption"},"Epoch Interruption")," and ",(0,o.kt)("a",{parentName:"p",href:"/wasmbox/basics/fuelusage"},"Fuel Usage"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Fuel usage is slower than Epoch Interruption, but is simpler to use and provides exact limits.")),(0,o.kt)("p",null,"Most WASM instructions consume 1 unit of fuel, when there is no more fuel executing code will immediately terminate execution. This provides very precise control over exactly how much WASM code can be executed."),(0,o.kt)("h2",{id:"using-fuel"},"Using Fuel"),(0,o.kt)("p",null,"All WASM code is executed within the context of a ",(0,o.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/store"},(0,o.kt)("inlineCode",{parentName:"a"},"Store")),". ",(0,o.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/store#void-addfuelulong-fuel"},"Add fuel")," to the ",(0,o.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/store"},(0,o.kt)("inlineCode",{parentName:"a"},"Store"))," before executing WASM code."),(0,o.kt)("p",null,'When the execution runs out of fuel it will cause a "Trap" which is returned to the caller. A trap is either returned as an exception or a result, this can be configured in the ',(0,o.kt)("a",{parentName:"p",href:"/wasmbox/reference/editor/import#6-code-generation"},"code generation settings")," when importing a WASM asset."),(0,o.kt)(f,{mdxType:"Tabs"},(0,o.kt)(h,{value:"Exception",label:"Exception",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-clike"},'// Add some fuel to the store\nstore.AddFuel(42);\n\n// Try to run some WASM in this store\ntry\n{\n    RunSomeWasm(store);\n    Successul();\n}\ncatch (TrapException ex)\n{\n    // Handle the out-of-fuel exception\n    if (ex.Type == TrapCode.OutOfFuel)\n    {\n        Debug.LogError("Oh no! Ran out of fuel");\n    }\n    else\n    {\n        Debug.LogError("Oh no! WASM Trap: " + ex.Type);\n    }\n}\n'))),(0,o.kt)(h,{value:"Result",label:"Result",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-clike"},'// Add some fuel to the store\nstore.AddFuel(42);\n\nvar result = RunSomeWasm(store);\n\nif (result.Type == ResultType.Trap)\n{\n    if (result.TrapCode == TrapCode.OutOfFuel)\n    {\n        Debug.LogError("Oh no! Ran out of fuel");\n    }\n    else\n    {\n        Debug.LogError("Oh no! WASM Trap: " + ex.Type);\n    }\n}\nelse\n{\n    Successul();\n}\n')))))}T.isMDXComponent=!0}}]);