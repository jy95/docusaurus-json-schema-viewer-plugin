"use strict";(self.webpackChunktestsite=self.webpackChunktestsite||[]).push([[7937],{50510:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=a(87462),s=(a(27378),a(3905)),o=a(74866),r=a(85162);const i={title:"\u2753 FAQ",description:"Frequently Asked Questions"},l=void 0,u={unversionedId:"faq",id:"faq",title:"\u2753 FAQ",description:"Frequently Asked Questions",source:"@site/docs/faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/docusaurus-json-schema-plugin/docs/faq",draft:!1,editUrl:"https://github.com/jy95/docusaurus-json-schema-plugin/tree/main/testsite/docs/faq.mdx",tags:[],version:"current",frontMatter:{title:"\u2753 FAQ",description:"Frequently Asked Questions"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0e @theme/JSONSchemaViewer",permalink:"/docusaurus-json-schema-plugin/docs/api/JSONSchemaViewer"},next:{title:"\ud83d\udea7 Roadmap",permalink:"/docusaurus-json-schema-plugin/docs/next-steps"}},p={},m=[],c={toc:m};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Frequently asked questions")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"How can I contribute ?"),(0,s.kt)("p",null,"Any contribution is welcome! Read more ",(0,s.kt)("a",{parentName:"p",href:"contributing"},"here"),".")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"How to swizzling components ?"),(0,s.kt)(o.default,{groupId:"npm2yarn",mdxType:"Tabs"},(0,s.kt)(r.default,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle docusaurus-json-schema-plugin [component name]\n"))),(0,s.kt)(r.default,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn swizzle docusaurus-json-schema-plugin [component name]\n")))),(0,s.kt)("p",null,"For extra information, please consult ",(0,s.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/swizzling"},"Docusaurus Swizzling documentation"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Why do I get `Loading ...` using `JSONSchemaViewer` ?"),(0,s.kt)("p",null,"Several reasons, most likely :"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"You have an error not related to ",(0,s.kt)("inlineCode",{parentName:"li"},"docusaurus-json-schema-plugin")," in your codebase like ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/jy95/docusaurus-json-schema-plugin/issues/17"},"this one")," : missing language(s) in prism config / ..."),(0,s.kt)("li",{parentName:"ol"},"You broke the ",(0,s.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-rules.html"},"rules of hooks")," or one of your dependancies did"),(0,s.kt)("li",{parentName:"ol"},"You have more than ",(0,s.kt)("a",{parentName:"li",href:"https://reactjs.org/warnings/invalid-hook-call-warning.html"},"one copy of React in the same app")," or mismatching versions of React and React DOM")),(0,s.kt)("p",null,"If none of these helped you, consider to have a reproducible example before asking help to ",(0,s.kt)("a",{parentName:"p",href:"https://docusaurus.io/community/support"},"Docusaurus")," / ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/issues/13991"},"React"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"How to translate labels into my own language ?"),(0,s.kt)("p",null,"Please refer for extra information to :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/cli#docusaurus-write-translations-sitedir"},"docusaurus write-translations")," CLI command"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/i18n/introduction"},"Internationalization")))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Which features of JSON Schema are not supported yet ?"),(0,s.kt)("p",null,"It is explained on the ",(0,s.kt)("a",{parentName:"p",href:"next-steps"},"Roadmap page"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Why the minimal JSON Schema version is Draft-07 ?"),(0,s.kt)("p",null,"Several reasons :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Many actors (like ",(0,s.kt)("a",{parentName:"li",href:"https://ajv.js.org/guide/schema-language.html#draft-07-and-draft-06"},"ajv")," ) acknowledge that it is most widely used version of JSON Schema specification"),(0,s.kt)("li",{parentName:"ul"},"Many tools don't care anymore for older versions such as Draft-04"),(0,s.kt)("li",{parentName:"ul"},"It fits my needs when I designed this project")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can migrate schemas from draft-04 to draft-07 using ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ajv-validator/ajv-cli#migrate-schemas"},"ajv-cli")))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"How to support specifications that extends the one of JSON Schema (such as OpenAPI, MongoDB, ... )"),(0,s.kt)("p",null,"That is a good question as many extensions exist in the wild : "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://spec.openapis.org/oas/latest.html"},"OpenAPI")," "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.mongodb.com/docs/manual/reference/operator/query/jsonSchema/"},"MongoDB")),(0,s.kt)("li",{parentName:"ul"},"...")),(0,s.kt)("p",null,"In the case of OpenAPI, since ",(0,s.kt)("a",{parentName:"p",href:"https://www.openapis.org/blog/2021/02/16/migrating-from-openapi-3-0-to-3-1-0"},"OpenAPI 3.1"),"+ , they are now valid ",(0,s.kt)("a",{parentName:"p",href:"https://json-schema.org/draft/2020-12/release-notes.html"},"Draft 2020-12")," JSON Schema so compatible with this lib.  "),(0,s.kt)("p",null,"For the time being, it is low priority as several aspects needs to be considered that might lead to issues , breaking changes, ..."),(0,s.kt)("p",null,"In the meantime, feel free to share your feedback on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/jy95/docusaurus-json-schema-plugin/discussions"},"Github discussions"))))}d.isMDXComponent=!0}}]);