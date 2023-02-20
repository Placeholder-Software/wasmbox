"use strict";(self.webpackChunkwasmbox_docs=self.webpackChunkwasmbox_docs||[]).push([[1512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=n(2389);const b="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==l&&(p(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",v,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function E(e){const t=(0,g.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},9998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={title:"Epochs Interruption",sidebar_position:3},s=void 0,u={unversionedId:"basics/limiting_execution/epochinterruption",id:"basics/limiting_execution/epochinterruption",title:"Epochs Interruption",description:"When executing WASM code it is sometimes useful to set a limit on how long it can run for. This can be used to prevent potentially malicious or buggy code from running forever and slowing down your application. Wasmbox includes two mechanisms to do this, Epoch Interruption and Fuel Usage.",source:"@site/docs/basics/limiting_execution/epochinterruption.md",sourceDirName:"basics/limiting_execution",slug:"/basics/limiting_execution/epochinterruption",permalink:"/wasmbox/basics/limiting_execution/epochinterruption",draft:!1,editUrl:"https://github.com/Placeholder-Software/Wasmbox/tree/master/docs/basics/limiting_execution/epochinterruption.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Epochs Interruption",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Fuel Usage",permalink:"/wasmbox/basics/limiting_execution/fuelusage"},next:{title:"WASM In Jobs",permalink:"/wasmbox/basics/jobs"}},c={},p=[{value:"Enabling Epoch Interruption",id:"enabling-epoch-interruption",level:2},{value:"Setting A Limit",id:"setting-a-limit",level:2},{value:"Incrementing The Epoch",id:"incrementing-the-epoch",level:2},{value:"Handling An Epoch Timeout",id:"handling-an-epoch-timeout",level:2}],m={toc:p};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When executing WASM code it is sometimes useful to set a limit on how long it can run for. This can be used to prevent potentially malicious or buggy code from running forever and slowing down your application. Wasmbox includes two mechanisms to do this, ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/basics/limiting_execution/epochinterruption"},"Epoch Interruption")," and ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/basics/limiting_execution/fuelusage"},"Fuel Usage"),"."),(0,a.kt)("p",null,"Epoch interruption allows a deadline to be set, once that deadline has passed executing code will immediately terminate execution. Epochs are not automatically incremented, your own script must be increasing the epoch when you wish to indicate that time has passed. For example WASM executing within a ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/basics/jobs"},"Job")," while the main thread increments the epoch every frame."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Epoch Interruption is faster than fuel usage, but requires another thread to increment epochs.")),(0,a.kt)("h2",{id:"enabling-epoch-interruption"},"Enabling Epoch Interruption"),(0,a.kt)("p",null,"Epoch Interruption must be enabled in the ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/engineconfig"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineConfig"))," used to load a WASM Asset:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-clike"},"EngineConfig config = EngineConfig.Default;\nconfig.UseEpochInterruption = true;\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If the WASM Asset is precompiled it must ",(0,a.kt)("strong",{parentName:"p"},"also")," be enabled in the ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/editor/import#4-compilation"},"importer"),":"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{alt:"Compilation Inspector",src:n(1277).Z,width:"981",height:"233"}))),(0,a.kt)("h2",{id:"setting-a-limit"},"Setting A Limit"),(0,a.kt)("p",null,"The Epoch limit is set on a ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/store"},(0,a.kt)("inlineCode",{parentName:"a"},"Store")),", all ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/instance"},(0,a.kt)("inlineCode",{parentName:"a"},"Instances"))," sharing a ",(0,a.kt)("inlineCode",{parentName:"p"},"Store")," share the same epoch deadline."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-clike"},"Store store; // Get a store from somewhere\n\nstore.SetEpochDeadline(100);\n")),(0,a.kt)("h2",{id:"incrementing-the-epoch"},"Incrementing The Epoch"),(0,a.kt)("p",null,"The epoch is incremented on the ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/wasmtime/engine"},(0,a.kt)("inlineCode",{parentName:"a"},"Engine")),", through an ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/engineconfig#getepochgroup"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineConfig")),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"All WASM Instances loaded with the same ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/engineconfig"},(0,a.kt)("inlineCode",{parentName:"a"},"EngineConfig"))," share the same epoch. Use ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/engineconfig#epochgroup"},(0,a.kt)("inlineCode",{parentName:"a"},"EpochGroup"))," to split up identical engine configs if necessary.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-clike"},'EngineConfig config = EngineConfig.Default;\n\nvar handle = config.GetEpochGroup();\n\nif (handle == null)\n    throw new NotImplementedException("handle is null if config.UseEpochInterruption is false!");\n\nhandle.SetEpoch(Time.frameCount);\n')),(0,a.kt)("h2",{id:"handling-an-epoch-timeout"},"Handling An Epoch Timeout"),(0,a.kt)("p",null,"WASM function calls through the Wasmbox ",(0,a.kt)("a",{parentName:"p",href:"/wasmbox/reference/code/codegeneration#trap-handling"},"generated wrapper code")," have two trap handling methods: exceptions and results. Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"Trap Handling")," option in the importer to choose which one to use."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"exceptions",label:"Exception",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-clike"},'try\n{\n    var value = wrapper.hello();\n    Debug.Log("WASM Result: " + value);\n}\ncatch (TrapException ex)\n{\n    Debug.LogError("WASM Trap: " + ex.Type);\n}\n'))),(0,a.kt)(i.Z,{value:"result",label:"Result",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-clike"},'var result = wrapper.hello();\nif (result.Type == ResultType.Ok)\n{\n    var value = result.Value;\n    Debug.Log("WASM Result: " + value);\n}\nelse\n{\n    Debug.Log("WASM Trap: " + result.TrapCode);\n}\n')))))}d.isMDXComponent=!0},1277:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CompilationInspector-a87999b04920f9d33046a3c10a0850a3.png"}}]);