"use strict";(self.webpackChunktestsite=self.webpackChunktestsite||[]).push([[9352,2186],{1629:(e,i,d)=>{d.r(i),d.d(i,{assets:()=>h,contentTitle:()=>p,default:()=>_,frontMatter:()=>u,metadata:()=>m,toc:()=>b});var n=d(62540),t=d(28453),r=d(21432),s=d(62186),a=d(21344),c=d.n(a),o=d(11470),l=d(19365);const u={description:"schema conditionally with dependentRequired (bidirectional) showcase",title:"\ud83d\udd01 dependentRequired (bidirectional)"},p="dependentRequired (bidirectional)",m={id:"demo-viewer/schema_conditionally/dependentRequired_bidirectional",title:"\ud83d\udd01 dependentRequired (bidirectional)",description:"schema conditionally with dependentRequired (bidirectional) showcase",source:"@site/docs/demo-viewer/schema_conditionally/dependentRequired_bidirectional.mdx",sourceDirName:"demo-viewer/schema_conditionally",slug:"/demo-viewer/schema_conditionally/dependentRequired_bidirectional",permalink:"/docusaurus-json-schema-plugin/docs/demo-viewer/schema_conditionally/dependentRequired_bidirectional",draft:!1,unlisted:!1,editUrl:"https://github.com/jy95/docusaurus-json-schema-plugin/tree/main/testsite/docs/demo-viewer/schema_conditionally/dependentRequired_bidirectional.mdx",tags:[],version:"current",frontMatter:{description:"schema conditionally with dependentRequired (bidirectional) showcase",title:"\ud83d\udd01 dependentRequired (bidirectional)"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd11 dependentRequired",permalink:"/docusaurus-json-schema-plugin/docs/demo-viewer/schema_conditionally/dependentRequired"},next:{title:"\ud83c\udfd7\ufe0f dependentSchemas",permalink:"/docusaurus-json-schema-plugin/docs/demo-viewer/schema_conditionally/dependentSchemas"}},h={},b=[];function w(e){const i={h1:"h1",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"dependentrequired-bidirectional",children:"dependentRequired (bidirectional)"}),"\n",(0,n.jsxs)(o.default,{children:[(0,n.jsx)(l.default,{value:"Viewer",label:"Viewer",default:!0,children:(0,n.jsx)(c(),{schema:s})}),(0,n.jsx)(l.default,{value:"JSON Schema",label:"JSON Schema",children:(0,n.jsx)(r.default,{language:"json-schema",children:JSON.stringify(s,null,2)})})]})]})}function _(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(w,{...e})}):w(e)}},62186:e=>{e.exports=JSON.parse('{"type":"object","properties":{"name":{"type":"string"},"credit_card":{"type":"number"},"billing_address":{"type":"string"}},"required":["name"],"dependentRequired":{"credit_card":["billing_address"],"billing_address":["credit_card"]}}')}}]);