"use strict";(self.webpackChunktestsite=self.webpackChunktestsite||[]).push([[6342,442],{81947:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(27378)),l=r(n(71544)),u=r(n(91262)),c=r(n(44763)),i=n(75087);function o(e){let{error:t,tryAgain:n}=e;return a.default.createElement("div",null,a.default.createElement("p",null,a.default.createElement(i.ErrorOccurredLabel,{error:t})),a.default.createElement("button",{onClick:n},"Try Again!"))}function s(e,t){let n=e;return"boolean"==typeof n||void 0===n.$id?`https://docusaurus.io/json-viewer/schema_${t}.json`:n.$id}function m(e){const{schema:t,diagnosticsOptions:n,...r}=e;return a.default.createElement(l.default,{height:"90vh",language:"json",editorWillMount:e=>{const r=(Array.isArray(t)?t:[t]).map(((e,n)=>({uri:s(t,n),fileMatch:["*"],schema:e})));e.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,schemas:r,...n})},...r})}t.default=function(e){return a.default.createElement(u.default,{fallback:a.default.createElement(i.LoadingLabel,null)},(()=>a.default.createElement(a.default.Fragment,null,a.default.createElement(c.default,{fallback:e=>a.default.createElement(o,{...e})},a.default.createElement(m,{...e})))))}},68332:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.monaco=void 0;const c=u(n(27378)),i=u(n(71544)),o=u(n(91262)),s=u(n(44763)),m=n(75087);function d(e){let{error:t,tryAgain:n}=e;return c.default.createElement("div",null,c.default.createElement("p",null,c.default.createElement(m.ErrorOccurredLabel,{error:t})),c.default.createElement("button",{onClick:n},"Try Again!"))}t.monaco=l(n(60555)),t.default=function(e){return c.default.createElement(o.default,{fallback:c.default.createElement(m.LoadingLabel,null)},(()=>c.default.createElement(c.default.Fragment,null,c.default.createElement(s.default,{fallback:e=>c.default.createElement(d,{...e})},c.default.createElement(i.default,{...e})))))}},29893:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n(27378),a=n(92949),l=n(91262),u=n(81947),c=n.n(u),i=n(47718),o=n.n(i),s=n(60819),m=n(1581),d=n.n(m),f=n(68332),h=n.n(f),v=n(31662);const E=(0,r.createContext)({state:{fullSchema:{},userSchema:{},jsonPointer:""},updateState:()=>{}}),p=()=>(0,r.useContext)(E),y=E.Provider,g=e=>JSON.stringify(e,null,"\t");function b(){const{state:{jsonPointer:e,fullSchema:t},updateState:n}=p(),l=r.useRef(null),{colorMode:u}=(0,a.I)(),c=r.useRef(null);async function i(){try{const t=c.current;if(!t)return;let r=t.getModel().getValue(),a=JSON.parse(r);n({fullSchema:a}),await async function(t){const r=l.current.value;let a="";if(0===r.length&&void 0!==t.$ref&&(a=t.$ref),r.length>0&&(a=r),0===r.length&&e.length>0&&(a=""),l.current.value=a,n({jsonPointer:a}),0===a.length)n({userSchema:t});else try{const e=await(new s.Resolver).resolve(t,{jsonPointer:"object"!=typeof t||Array.isArray(t)||null===t?void 0:a});n({userSchema:e.result})}catch(u){alert(u)}}(a),await async function(e){const t=c.current;if(!t)return;const n=new(d())({allErrors:!0,strictSchema:!1,allowMatchingProperties:!0,strictRequired:!1,strictTypes:!0,strictTuples:!1,validateFormats:!1,validateSchema:!0}),r=[],a=g(e);let l=n.validateSchema(e);if(!l){n.errors.forEach((e=>{const t=function(e){switch(e.keyword){case"type":case"maxItems":case"minItems":case"minLength":case"maxLength":case"maximum":case"minimum":case"exclusiveMaximum":case"exclusiveMinimum":case"minProperties":case"maxProperties":case"pattern":case"multipleOf":return{markIdentifier:!1,severity:f.monaco.MarkerSeverity.Warning};case"format":case"uniqueItems":return{markIdentifier:!1,severity:f.monaco.MarkerSeverity.Info};case"const":case"enum":return{markIdentifier:!1,severity:f.monaco.MarkerSeverity.Hint};default:return{markIdentifier:!1,severity:f.monaco.MarkerSeverity.Error}}}(e);let n={message:e.message,severity:t.severity};if(e.instancePath.length>0){const r=(0,v.hZ)(a,{pointerPath:e.instancePath,markIdentifier:t.markIdentifier});n.startLineNumber=r.start.line,n.startColumn=r.start.column,n.endLineNumber=r.end.line,n.endColumn=r.end.column}r.push(n)}))}f.monaco.editor.setModelMarkers(t.getModel(),"schema-validation",r)}(a)}catch(t){alert(t)}}return r.createElement("div",{style:{boxSizing:"border-box",width:"50%"}},r.createElement("h1",null,"Schema"),r.createElement("div",null,r.createElement("button",{onClick:()=>i()},"Update Editor / Viewer"),"\xa0",r.createElement("label",{htmlFor:"jsonPointer",title:"If you want to cover only a specific path of your specs, such as '#/definitions/*'"},"JSON Pointer :"),"\xa0",r.createElement("input",{type:"text",id:"jsonPointer",name:"jsonPointer",ref:l,defaultValue:e})),r.createElement(h(),{value:g(t),theme:"dark"===u?"vs-dark":"vs",language:"json",editorDidMount:e=>{c.current=e}}))}function k(){return r.createElement(l.default,{fallback:r.createElement("div",null,"Loading...")},(()=>r.createElement(b,null)))}var S=n(93335),j=n(60442);const P=e=>JSON.stringify(e,null,"\t");function _(){const{state:{userSchema:e}}=p(),{colorMode:t}=(0,a.I)(),n=r.useRef(null);return r.createElement(r.Fragment,null,r.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},r.createElement(k,null),r.createElement("div",{style:{boxSizing:"border-box",width:"50%"}},r.createElement("h1",null,"JSON Schema Editor"),r.createElement("div",null,r.createElement("button",{onClick:()=>function(){const t=n.current;t&&S.n.resolve(e).then((e=>{t.setValue(P(e))})).catch((e=>alert(e)))}()},"Generate fake data")),r.createElement(c(),{schema:e,theme:"dark"===t?"vs-dark":"vs",editorDidMount:e=>{n.current=e},key:P(e)}))),r.createElement("div",null,r.createElement("h1",null,"JSON Schema Viewer"),r.createElement(o(),{schema:e,key:P(e)})))}function M(){const e={$schema:"http://json-schema.org/draft-07/schema",...j},[t,n]=r.useState({jsonPointer:"",userSchema:e,fullSchema:e});return r.createElement(y,{value:{state:t,updateState:function(e){n((t=>({...t,...e})))}}},r.createElement(_,null))}function O(){return r.createElement(l.default,{fallback:r.createElement("div",null,"Loading...")},(()=>r.createElement(M,null)))}},63346:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(27378),a=n(47676),l=n(91262),u=n(44763);function c(){return r.createElement(u.default,{fallback:e=>{let{error:t,tryAgain:n}=e;return r.createElement("div",null,r.createElement("p",null,"Playground component crashed because of error: ",t.message,"."),r.createElement("button",{onClick:n},"Try Again!"))}},r.createElement(l.default,{fallback:r.createElement("div",null,"Loading...")},(()=>{const e=n(29893).Z;return r.createElement(e,null)})))}function i(){return r.createElement(a.Z,{title:"Playground",description:"Playground of docusaurus-json-schema-plugin"},r.createElement(c,null))}},60442:e=>{e.exports=JSON.parse('{"type":"object","properties":{"number":{"type":"number"},"street_name":{"type":"string"},"street_type":{"enum":["Street","Avenue","Boulevard"]}},"additionalProperties":false}')}}]);