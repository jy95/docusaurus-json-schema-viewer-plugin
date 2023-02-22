"use strict";(self.webpackChunktestsite=self.webpackChunktestsite||[]).push([[2364],{61619:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>u,contentTitle:()=>m,default:()=>g,frontMatter:()=>f,metadata:()=>c,toc:()=>p});var t=r(87462),n=(r(27378),r(3905)),i=r(90814);const o=JSON.parse('{"$ref":"#/definitions/user","definitions":{"user":{"properties":{"first_name":{"$ref":"#/$defs/name"},"last_name":{"$ref":"#/$defs/name"},"addresses":{"type":"array","items":false,"prefixItems":[{"$ref":"#/$defs/street_name"},{"$ref":"#/$defs/street_type"},{"$ref":"#/$defs/direction"}]}},"required":["first_name","last_name"]}},"$defs":{"name":{"type":"string"},"postal_code":{"type":"number","minimum":1000,"exclusiveMaximum":10000},"street_name":{"type":"string","minLength":3},"direction":{"enum":["NW","NE","SW","SE"]},"street_type":{"enum":["Street","Avenue","Boulevard"]}}}');var a=r(48570),d=r.n(a);const f={description:"References $ref showcase"},m="$ref",c={unversionedId:"demo-viewer/refs/ref",id:"demo-viewer/refs/ref",title:"$ref",description:"References $ref showcase",source:"@site/docs/demo-viewer/refs/ref.mdx",sourceDirName:"demo-viewer/refs",slug:"/demo-viewer/refs/ref",permalink:"/docusaurus-json-schema-plugin/docs/demo-viewer/refs/ref",draft:!1,editUrl:"https://github.com/jy95/docusaurus-json-schema-plugin/tree/main/testsite/docs/demo-viewer/refs/ref.mdx",tags:[],version:"current",frontMatter:{description:"References $ref showcase"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcce References",permalink:"/docusaurus-json-schema-plugin/docs/category/-references"},next:{title:"\ud83e\uddf1 Schema Composition",permalink:"/docusaurus-json-schema-plugin/docs/category/-schema-composition"}},u={},l={jsonPointer:"#/definitions/user"},p=[],h={toc:p};function g(e){let{components:s,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},h,r,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ref"},"$ref"),(0,n.kt)("p",null,"JSON Schema :"),(0,n.kt)(i.default,{language:"json",mdxType:"CodeBlock"},JSON.stringify(o,null,2)),(0,n.kt)("p",null,"resolverOptions : "),(0,n.kt)(i.default,{language:"json",mdxType:"CodeBlock"},JSON.stringify(l,null,2)),(0,n.kt)("p",null,"Viewer :"),(0,n.kt)(d(),{schema:o,resolverOptions:l,mdxType:"JSONSchemaViewer"}))}g.isMDXComponent=!0}}]);