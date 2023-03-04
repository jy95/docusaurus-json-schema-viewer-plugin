"use strict";(self.webpackChunktestsite=self.webpackChunktestsite||[]).push([[6342],{81947:function(e,t,n){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(n(27378)),r=l(n(71544)),i=l(n(91262)),o=l(n(44763)),u=n(75087);function c(e){let{error:t,tryAgain:n}=e;return a.default.createElement("div",null,a.default.createElement("p",null,a.default.createElement(u.ErrorOccurredLabel,{error:t})),a.default.createElement("button",{onClick:n},"Try Again!"))}function s(e){const{schema:t,...n}=e;return a.default.createElement(r.default,{height:"90vh",language:"json",editorWillMount:e=>{let n=t,l="boolean"!=typeof n&&void 0!==(null==n?void 0:n.$id)?n.$id:"https://docusaurus.io/json-viewer/schema.json";e.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,schemas:[{uri:l,fileMatch:["*"],schema:t}]})},...n})}t.default=function(e){return a.default.createElement(i.default,{fallback:a.default.createElement(u.LoadingLabel,null)},(()=>a.default.createElement(a.default.Fragment,null,a.default.createElement(o.default,{fallback:e=>a.default.createElement(c,{...e})},a.default.createElement(s,{...e})))))}},63346:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(27378),a=n(47676),r=n(92949),i=n(91262),o=n(60442);function u(){let[e,t]=l.useState({$schema:"http://json-schema.org/draft-07/schema",...o}),[a,i]=l.useState(""),[u,c]=l.useState("");const{colorMode:s}=(0,r.I)();l.useEffect((()=>{i(JSON.stringify(e))}),[e]);const d=n(47718).default,f=n(81947).default;return l.createElement(l.Fragment,null,l.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},l.createElement("div",{style:{boxSizing:"border-box",width:"50%"}},l.createElement("h1",null,"Schema"),l.createElement("div",null,l.createElement("button",{onClick:()=>function(){try{let e=JSON.parse(a);0===u.length&&void 0!==e.$ref&&c(e.$ref),0!==u.length&&(e.$ref=u),t(e)}catch(e){alert(e)}}()},"Update Editor / Viewer"),"\xa0",l.createElement("label",{htmlFor:"jsonPointer",title:"If you want to cover only a specific path of your specs, such as '#/definitions/*'"},"JSON Pointer :"),"\xa0",l.createElement("input",{type:"text",id:"jsonPointer",name:"jsonPointer",onChange:e=>c(e.target.value),value:u})),l.createElement(f,{value:JSON.stringify(e,null,"\t"),schema:{},onChange:e=>{i(e)}})),l.createElement("div",{style:{boxSizing:"border-box",width:"50%"},key:JSON.stringify(e)},l.createElement("h1",null,"JSON Schema Editor"),l.createElement("br",null),l.createElement(f,{schema:e,theme:"dark"===s?"vs-dark":"vs"}))),l.createElement("div",{key:JSON.stringify(e)},l.createElement("h1",null,"JSON Schema Viewer"),l.createElement(d,{schema:e,resolverOptions:{jsonPointer:0!==u.length?u:void 0}})))}function c(){return l.createElement(i.default,{fallback:l.createElement("div",null,"Loading...")},(()=>l.createElement(u,null)))}function s(){return l.createElement(a.Z,{title:"Playground",description:"Description will go into a meta tag in <head />"},l.createElement(c,null))}},60442:e=>{e.exports=JSON.parse('{"type":"object","properties":{"number":{"type":"number"},"street_name":{"type":"string"},"street_type":{"enum":["Street","Avenue","Boulevard"]}},"additionalProperties":false}')}}]);