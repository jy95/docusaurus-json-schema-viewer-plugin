"use strict";(self.webpackChunktestsite=self.webpackChunktestsite||[]).push([[9823,2498],{52684:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>p,contentTitle:()=>m,default:()=>j,frontMatter:()=>u,metadata:()=>h,toc:()=>f});var o=t(62540),r=t(28453),n=t(21432),a=t(52498),i=t(21344),c=t.n(i),d=t(11470),l=t(19365);const u={description:"To overwrite the default handling of unresolved $refs (recursive schemas, partial schemas, ...)",title:"\u26a0\ufe0f Custom Unresolved Refs Component"},m="Custom Unresolved Refs Component",h={id:"demo-viewer/custom/unsolved_refs",title:"\u26a0\ufe0f Custom Unresolved Refs Component",description:"To overwrite the default handling of unresolved $refs (recursive schemas, partial schemas, ...)",source:"@site/docs/demo-viewer/custom/unsolved_refs.mdx",sourceDirName:"demo-viewer/custom",slug:"/demo-viewer/custom/unsolved_refs",permalink:"/docusaurus-json-schema-plugin/docs/demo-viewer/custom/unsolved_refs",draft:!1,unlisted:!1,editUrl:"https://github.com/jy95/docusaurus-json-schema-plugin/tree/main/testsite/docs/demo-viewer/custom/unsolved_refs.mdx",tags:[],version:"current",frontMatter:{description:"To overwrite the default handling of unresolved $refs (recursive schemas, partial schemas, ...)",title:"\u26a0\ufe0f Custom Unresolved Refs Component"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udccb Custom description Component",permalink:"/docusaurus-json-schema-plugin/docs/demo-viewer/custom/description"},next:{title:"\ud83c\udfa8 Custom value Component",permalink:"/docusaurus-json-schema-plugin/docs/demo-viewer/custom/values"}},p={},f=[];function v(e){const s={code:"code",h1:"h1",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"custom-unresolved-refs-component",children:"Custom Unresolved Refs Component"}),"\n",(0,o.jsxs)(d.default,{children:[(0,o.jsx)(l.default,{value:"Viewer",label:"Viewer",default:!0,children:(0,o.jsx)(c(),{schema:a,viewerOptions:{UnresolvedRefsComponent:({schema:e})=>`${e.$ref||e.$dynamicRef||e.$recursiveRef||""} was not resolved`}})}),(0,o.jsx)(l.default,{value:"viewerOptions",label:"viewerOptions",children:(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:'{\n    UnresolvedRefsComponent: ({schema}) => (\n        `${schema.$ref || schema.$dynamicRef || schema.$recursiveRef || ""} was not resolved`\n    )\n}\n'})})}),(0,o.jsx)(l.default,{value:"JSON Schema",label:"JSON Schema",children:(0,o.jsx)(n.default,{language:"json-schema",children:JSON.stringify(a,null,2)})})]})]})}function j(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(v,{...e})}):v(e)}},52498:e=>{e.exports=JSON.parse('{"$schema":"https://json-schema.org/draft/2020-12/schema","$id":"https://example.com/tree","$dynamicAnchor":"node","type":"object","properties":{"data":true,"children":{"type":"array","items":{"$dynamicRef":"#node"}}}}')}}]);