"use strict";(self.webpackChunktestsite=self.webpackChunktestsite||[]).push([[3365,6368],{97503:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return a.default.createElement(i.default,{fallback:a.default.createElement(s.LoadingLabel,null)},(()=>a.default.createElement(a.default.Fragment,null,a.default.createElement(l.default,{fallback:e=>a.default.createElement(c,{...e})},a.default.createElement(d,{...e})))))};const a=r(n(63696)),o=r(n(39781)),i=r(n(78478)),l=r(n(67489)),s=n(206);function c(e){let{error:t,tryAgain:n}=e;return a.default.createElement("div",null,a.default.createElement("p",null,a.default.createElement(s.ErrorOccurredLabel,{error:t})),a.default.createElement("button",{onClick:n},"Try Again!"))}function u(e,t){let n=e;return"boolean"==typeof n||void 0===n.$id?`https://docusaurus.io/json-viewer/schema_${t}.json`:n.$id}function d(e){const{schema:t,diagnosticsOptions:n,...r}=e;return a.default.createElement(o.default,{height:"90vh",language:"json",editorWillMount:e=>{const r=(Array.isArray(t)?t:[t]).map(((e,n)=>({uri:u(t,n),fileMatch:["*"],schema:e})));e.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,schemas:r,...n})},...r})}},99073:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.monaco=void 0,t.default=function(e){return l.default.createElement(c.default,{fallback:l.default.createElement(d.LoadingLabel,null)},(()=>l.default.createElement(l.default.Fragment,null,l.default.createElement(u.default,{fallback:e=>l.default.createElement(f,{...e})},l.default.createElement(s.default,{...e})))))};const l=i(n(63696)),s=i(n(39781)),c=i(n(78478)),u=i(n(67489)),d=n(206);function f(e){let{error:t,tryAgain:n}=e;return l.default.createElement("div",null,l.default.createElement("p",null,l.default.createElement(d.ErrorOccurredLabel,{error:t})),l.default.createElement("button",{onClick:n},"Try Again!"))}t.monaco=o(n(85868))},25493:(e,t,n)=>{n.d(t,{A:()=>W});var r=n(63696),a=n(78478),o=n(27293),i=n(28774),l=n(21344),s=n.n(l),c=n(95293),u=n(9269),d=n(63282),f=n.n(d),m=n(99073),h=n.n(m),p=n(37817);const g=(0,r.createContext)({state:{fullSchema:{},userSchema:{},jsonPointer:"",data:"{}",schemaRef:void 0,editorRef:void 0,schemaErrors:[],dataErrors:[]},updateState:()=>{}}),x=()=>(0,r.useContext)(g),y=g.Provider;var b=n(99571),j=n(62540);function v(e){let{label:t,onImport:n}=e;const a=r.createRef();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("input",{type:"file",accept:".json",style:{display:"none"},ref:a,onChange:e=>{const t=e.target.files[0];if(!t)return;const r=new FileReader;r.onload=()=>{try{const e=JSON.parse(r.result);n(e)}catch(e){b.oR.error(e.message,{autoClose:5e3})}},r.readAsText(t)}}),(0,j.jsx)("button",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"32px",height:"32px",marginRight:"8px",backgroundColor:"transparent",cursor:"pointer",border:"1px solid",fontWeight:"bold"},onClick:()=>a.current.click(),title:t,children:"\ud83d\udce5"})]})}function S(e){let{label:t,filename:n,getValue:r}=e;return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("button",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"32px",height:"32px",marginRight:"8px",backgroundColor:"transparent",cursor:"pointer",border:"1px solid",fontWeight:"bold"},onClick:()=>{const e=r();if(0===e.length)return;const t=new Blob([e],{type:"application/json"}),a=URL.createObjectURL(t),o=document.createElement("a");o.href=a,o.download=n,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(a)},title:t,children:"\ud83d\udcbe"})})}const k=e=>{let{onRefresh:t,onCopy:n,onExport:r,onImport:a}=e;const o={toolbar:{display:"flex",justifyContent:"flex-start",alignItems:"center",padding:"8px",backgroundColor:"inherit"},icon:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"32px",height:"32px",marginRight:"8px",backgroundColor:"transparent",cursor:"pointer",border:"1px solid",fontWeight:"bold"}};return(0,j.jsxs)("div",{style:o.toolbar,children:[(0,j.jsx)("h1",{children:"Schema"}),"\xa0",(0,j.jsx)("div",{style:{flex:1}}),(0,j.jsx)("button",{style:o.icon,onClick:t,title:"Update Data Editor / Schema Viewer",children:"\ud83c\udf00"}),(0,j.jsx)("button",{style:o.icon,onClick:n,title:"Copy Schema to clipboard",children:"\ud83d\udccb"}),(0,j.jsx)(v,{label:"Import Schema from file",onImport:a}),(0,j.jsx)(S,{filename:"schema.json",label:"Export to JSON File",getValue:r})]})},C=e=>JSON.stringify(e,null,"\t");function w(){const{state:{fullSchema:e,schemaRef:t},updateState:n}=x(),{colorMode:r}=(0,c.G)();async function a(){try{let e=t?.getModel().getValue(),r=JSON.parse(e);n({fullSchema:r}),await async function(e){let t="";if(void 0!==e.$ref&&(t=e.$ref),0===t.length)n({userSchema:e,jsonPointer:t});else try{const r=await(new u.Resolver).resolve(e,{jsonPointer:"object"!=typeof e||Array.isArray(e)||null===e?void 0:t});n({userSchema:r.result,jsonPointer:t})}catch(r){b.oR.error(r.message,{autoClose:5e3})}}(r),await async function(e){const n=new(f())({allErrors:!0,strictSchema:!1,allowMatchingProperties:!0,strictRequired:!1,strictTypes:!0,strictTuples:!1,validateFormats:!1,validateSchema:!0}),r=[],a=C(e);let o=n.validateSchema(e);if(!o){n.errors.forEach((e=>{const t=function(e){switch(e.keyword){case"type":case"maxItems":case"minItems":case"minLength":case"maxLength":case"maximum":case"minimum":case"exclusiveMaximum":case"exclusiveMinimum":case"minProperties":case"maxProperties":case"pattern":case"multipleOf":return{markIdentifier:!1,severity:m.monaco.MarkerSeverity.Warning};case"format":case"uniqueItems":return{markIdentifier:!1,severity:m.monaco.MarkerSeverity.Info};case"const":case"enum":return{markIdentifier:!1,severity:m.monaco.MarkerSeverity.Hint};default:return{markIdentifier:!1,severity:m.monaco.MarkerSeverity.Error}}}(e);let n={message:e.message,severity:t.severity};if(e.instancePath.length>0){const r=(0,p.xJ)(a,{pointerPath:e.instancePath,markIdentifier:t.markIdentifier});n.startLineNumber=r.start.line,n.startColumn=r.start.column,n.endLineNumber=r.end.line,n.endColumn=r.end.column}r.push(n)}))}m.monaco.editor.setModelMarkers(t?.getModel(),"schema-validation",r)}(r)}catch(e){alert(e)}}return(0,j.jsxs)("div",{style:{boxSizing:"border-box",width:"50%"},children:[(0,j.jsx)(k,{onRefresh:async()=>{await a()},onCopy:async()=>{const e=t.getModel().getValue()||"";await navigator.clipboard.writeText(e),b.oR.success("Schema copied")},onExport:()=>(b.oR.info("Exporting Schema ..."),t.getModel().getValue()||""),onImport:async e=>{t.setValue(JSON.stringify(e,null,"\t")),await a()}}),(0,j.jsx)(h(),{value:C(e),theme:"dark"===r?"vs-dark":"vs",language:"json",height:"70vh",editorDidMount:e=>{n({schemaRef:e})}})]})}function E(){return(0,j.jsx)(a.default,{fallback:(0,j.jsx)("div",{children:"Loading..."}),children:()=>(0,j.jsx)(w,{})})}var O=n(97503),R=n.n(O),M=n(25691);function I(e){if(Array.isArray(e))return{type:"array",items:e.map((e=>I(e)))};if("object"==typeof e&&null!==e){const t={};for(const n of Object.keys(e))t[n]=I(e[n]);return{type:"object",properties:t}}return{string:{type:"string"},number:{type:"number"},boolean:{type:"boolean"},undefined:{type:"null"}}[typeof e]}function _(e){const t=I(e);return t.$schema="http://json-schema.org/draft-07/schema#",t}function P(){const{state:{schemaRef:e,editorRef:t},updateState:n}=x();return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("button",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"32px",height:"32px",marginRight:"8px",backgroundColor:"transparent",cursor:"pointer",border:"1px solid",fontWeight:"bold"},onClick:async()=>{let e=t.getModel().getValue();try{const t=_(JSON.parse(e));n({jsonPointer:"",data:e,userSchema:t,fullSchema:t})}catch(r){b.oR.error(r.message,{autoClose:5e3})}},title:"Infer Schema from data",children:"\u2728"})})}const L=e=>{let{onGenerate:t,onCopy:n,onExport:r,onImport:a}=e;const o={toolbar:{display:"flex",justifyContent:"flex-start",alignItems:"center",padding:"8px",backgroundColor:"inherit"},icon:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"32px",height:"32px",marginRight:"8px",backgroundColor:"transparent",cursor:"pointer",border:"1px solid",fontWeight:"bold"}};return(0,j.jsxs)("div",{style:o.toolbar,children:[(0,j.jsx)("h1",{children:"Data"}),"\xa0",(0,j.jsx)("div",{style:{flex:1}}),(0,j.jsx)("button",{style:o.icon,onClick:t,title:"Generate Data",children:"\ud83d\udd04"}),(0,j.jsx)(P,{}),(0,j.jsx)("button",{style:o.icon,onClick:n,title:"Copy Data to clipboard",children:"\ud83d\udccb"}),(0,j.jsx)(v,{label:"Import Data from file",onImport:a}),(0,j.jsx)(S,{filename:"data.json",label:"Export to JSON File",getValue:r})]})},A=e=>JSON.stringify(e,null,"\t");function N(){const{state:{userSchema:e,editorRef:t,data:n},updateState:r}=x(),{colorMode:a}=(0,c.G)();return(0,j.jsxs)("div",{style:{boxSizing:"border-box",width:"50%"},children:[(0,j.jsx)(L,{onGenerate:()=>{M.N.resolve(e).then((e=>{t.setValue(A(e))})).catch((e=>b.oR.error(e.message,{autoClose:5e3})))},onCopy:async()=>{const e=t.getModel().getValue()||"";await navigator.clipboard.writeText(e),b.oR.success("Data copied")},onExport:()=>(b.oR.info("Exporting data ..."),t.getModel().getValue()||""),onImport:e=>{t.setValue(JSON.stringify(e,null,"\t"))}}),(0,j.jsx)(R(),{value:n,schema:e,theme:"dark"===a?"vs-dark":"vs",editorDidMount:e=>{r({editorRef:e})},height:"70vh"},A(e))]})}function D(){return(0,j.jsx)(a.default,{fallback:(0,j.jsx)("div",{children:"Loading..."}),children:()=>(0,j.jsx)(N,{})})}var J=n(56347),V=n(13293),F=n(16368);const T=e=>JSON.stringify(e,null,"\t");function $(){const{state:{userSchema:e}}=x();return(0,j.jsxs)("div",{style:{display:"flex",flexDirection:"column",overflowY:"hidden",overflowX:"hidden"},children:[(0,j.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,j.jsx)(E,{}),(0,j.jsx)(D,{},T(e))]}),(0,j.jsxs)("div",{style:{marginTop:"0.5rem"},children:[(0,j.jsx)("h1",{style:{fontSize:"1.5rem",marginBottom:"1rem"},children:"JSON Schema Viewer"}),(0,j.jsx)(s(),{schema:e},T(e))]}),(0,j.jsx)(o.A,{type:"tip",children:(0,j.jsxs)("p",{children:["You can use \xa0",(0,j.jsx)(i.A,{to:`/playground?b64Schema=${V.o4.encode(T(e)).replace("+","-").replace("/","_").replace("=","")}`,children:"b64Schema query parameter"}),"\xa0with a JSON Schema in Base64URL format so that you can bookmark this page with wanted schema"]})})]})}function U(){const e={$schema:"http://json-schema.org/draft-07/schema",...F},[t,n]=r.useState({jsonPointer:"",userSchema:e,fullSchema:e});function a(e){n((t=>({...t,...e})))}const o=function(){const{search:e}=(0,J.zy)();return r.useMemo((()=>new URLSearchParams(e)),[e])}();return r.useEffect((()=>{if(o.has("b64Schema")){let t=o.get("b64Schema");try{let e=V.o4.decode(t),n=JSON.parse(e);a({fullSchema:n,userSchema:n,jsonPointer:""})}catch(e){console.error("Invalid JSON in b64Schema parameter"),console.error(t)}}}),[o]),(0,j.jsx)(y,{value:{state:t,updateState:a},children:(0,j.jsx)($,{})})}function W(){return(0,j.jsx)(a.default,{fallback:(0,j.jsx)("div",{children:"Loading..."}),children:()=>(0,j.jsx)(U,{})})}},81891:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});n(63696);var r=n(41957),a=n(78478),o=n(67489),i=n(99571),l=(n(42113),n(62540));function s(){return(0,l.jsx)(o.default,{fallback:e=>{let{error:t,tryAgain:n}=e;return(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{children:["Playground component crashed because of error: ",t.message,"."]}),(0,l.jsx)("button",{onClick:n,children:"Try Again!"})]})},children:(0,l.jsx)(a.default,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:()=>{const e=n(25493).A;return(0,l.jsx)(e,{})}})})}function c(){return(0,l.jsxs)(r.A,{title:"Playground",description:"Playground of docusaurus-json-schema-plugin",children:[(0,l.jsx)(s,{}),(0,l.jsx)(i.N9,{position:"bottom-right",autoClose:1e3})]})}},16368:e=>{e.exports=JSON.parse('{"type":"object","properties":{"number":{"type":"number"},"street_name":{"type":"string"},"street_type":{"enum":["Street","Avenue","Boulevard"]}},"additionalProperties":false}')}}]);