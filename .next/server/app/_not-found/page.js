(()=>{var e={};e.id=409,e.ids=[409],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1665:(e,t,o)=>{"use strict";o.r(t),o.d(t,{GlobalError:()=>a.a,__next_app__:()=>f,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>l}),o(7352),o(5866),o(7949);var r=o(3191),n=o(8716),s=o(7922),a=o.n(s),i=o(5231),d={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);o.d(t,d);let l=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(o.t.bind(o,5866,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(o.bind(o,7949)),"C:\\Users\\Jonatas Moreira\\Downloads\\teste-jr-versao-01\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(o.t.bind(o,5866,23)),"next/dist/client/components/not-found-error"]}],u=[],c="/_not-found/page",f={require:o,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},5160:(e,t,o)=>{Promise.resolve().then(o.t.bind(o,2994,23)),Promise.resolve().then(o.t.bind(o,6114,23)),Promise.resolve().then(o.t.bind(o,9727,23)),Promise.resolve().then(o.t.bind(o,9671,23)),Promise.resolve().then(o.t.bind(o,1868,23)),Promise.resolve().then(o.t.bind(o,4759,23))},788:(e,t,o)=>{Promise.resolve().then(o.bind(o,8667))},8667:(e,t,o)=>{"use strict";o.d(t,{TodoProvider:()=>i,k:()=>a});var r=o(326),n=o(7577);let s=(0,n.createContext)(),a=()=>{let e=(0,n.useContext)(s);if(!e)throw Error("useTodos deve ser usado dentro de um TodoProvider");return e},i=({children:e})=>{let[t,o]=(0,n.useState)([]),[a,i]=(0,n.useState)([]),[d,l]=(0,n.useState)(!1),[u,c]=(0,n.useState)(null);return(0,n.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("todos"))||[],t=JSON.parse(localStorage.getItem("completedTodos"))||[];o(e),i(t)},[]),(0,n.useEffect)(()=>{localStorage.setItem("todos",JSON.stringify(t)),localStorage.setItem("completedTodos",JSON.stringify(a))},[t,a]),r.jsx(s.Provider,{value:{todos:t,completedTodos:a,addTodo:e=>{if(!e.trim())return alert("A tarefa n\xe3o pode estar vazia!");if(t.some(t=>t.text.toLowerCase()===e.toLowerCase()))return alert("Essa tarefa j\xe1 existe!");let r={id:Date.now(),text:e.trim(),completed:!1};o(e=>[...e,r])},handleToggle:e=>{let r=t.find(t=>t.id===e);r&&(r.completed?(i(t=>t.filter(t=>t.id!==e)),o(e=>[...e,{...r,completed:!1}])):(o(t=>t.filter(t=>t.id!==e)),i(e=>[...e,{...r,completed:!0}])))},handleDelete:e=>{a.some(t=>t.id===e)?i(t=>t.filter(t=>t.id!==e)):o(t=>t.filter(t=>t.id!==e)),l(!1),c(null)},showConfirm:d,setShowConfirm:l,confirmDeleteId:u,setConfirmDeleteId:c},children:e})}},6399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var o in t)Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}(t,{isNotFoundError:function(){return n},notFound:function(){return r}});let o="NEXT_NOT_FOUND";function r(){let e=Error(o);throw e.digest=o,e}function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===o}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7352:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var o in t)Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}(t,{PARALLEL_ROUTE_DEFAULT_PATH:function(){return n},default:function(){return s}});let r=o(6399),n="next/dist/client/components/parallel-route-default.js";function s(){(0,r.notFound)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7949:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>i,metadata:()=>a});var r=o(9510);o(5595);var n=o(8570);(0,n.createProxy)(String.raw`C:\Users\Jonatas Moreira\Downloads\teste-jr-versao-01\src\context\TodoContext.js#useTodos`);let s=(0,n.createProxy)(String.raw`C:\Users\Jonatas Moreira\Downloads\teste-jr-versao-01\src\context\TodoContext.js#TodoProvider`),a={title:"Gerenciador de Tarefas",description:"lorem"};function i({children:e}){return r.jsx("html",{lang:"pt-BR",children:r.jsx("body",{className:"containerBody",children:r.jsx(s,{children:e})})})}},5595:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),r=t.X(0,[819],()=>o(1665));module.exports=r})();