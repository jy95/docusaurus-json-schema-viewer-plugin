(self.webpackChunktestsite=self.webpackChunktestsite||[]).push([[7889,8180],{11155:(e,s,a)=>{"use strict";a.r(s),a.d(s,{assets:()=>j,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>x,toc:()=>f});var n=a(62540),t=a(28453),m=a(21432),o=a(8180),c=a(21344),l=a.n(c),r=a(96988),i=a(29585),p=a(11470),h=a(19365);const d={description:"References local file $ref showcase",title:"\ud83d\udcc1$ref (as local file)"},u="$ref (as local file)",x={id:"demo-viewer/refs/localFile",title:"\ud83d\udcc1$ref (as local file)",description:"References local file $ref showcase",source:"@site/docs/demo-viewer/refs/localFile.mdx",sourceDirName:"demo-viewer/refs",slug:"/demo-viewer/refs/localFile",permalink:"/docusaurus-json-schema-plugin/docs/demo-viewer/refs/localFile",draft:!1,unlisted:!1,editUrl:"https://github.com/jy95/docusaurus-json-schema-plugin/tree/main/testsite/docs/demo-viewer/refs/localFile.mdx",tags:[],version:"current",frontMatter:{description:"References local file $ref showcase",title:"\ud83d\udcc1$ref (as local file)"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcce References",permalink:"/docusaurus-json-schema-plugin/docs/category/-references"},next:{title:"\ud83d\udca1 $ref (inline)",permalink:"/docusaurus-json-schema-plugin/docs/demo-viewer/refs/ref"}},j={},f=[];function y(e){const s={h1:"h1",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"ref-as-local-file",children:"$ref (as local file)"}),"\n",(0,n.jsxs)(p.default,{children:[(0,n.jsx)(h.default,{value:"Viewer",label:"Viewer",default:!0,children:(0,n.jsx)(l(),{schema:o,resolverOptions:(0,r.A)({basePath:"/schemas/examples/refs"})})}),(0,n.jsx)(h.default,{value:"resolverOptions",label:"resolverOptions",children:(0,n.jsx)(m.default,{language:"js",children:`${(0,i.A)((0,r.A)({basePath:"/schemas/examples/refs"}))}`})}),(0,n.jsx)(h.default,{value:"JSON Schema",label:"JSON Schema",children:(0,n.jsx)(m.default,{language:"json-schema",children:JSON.stringify(o,null,2)})})]})]})}function g(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(y,{...e})}):y(e)}},96988:(e,s,a)=>{"use strict";function n(e){return void 0===e&&(e=""),{resolve:s=>new Promise(((n,t)=>{const m=function(e,s){void 0===s&&(s="");const a=e.toString().split("/");let n=s;for(let t=0;t<a.length;t++)if(".."===a[t])n=n.split("/").slice(0,-1).join("/");else{if("."===a[t])continue;n=`${n}/${a[t]}`}return n}(s,e);a(59620)(`./${m.substring(1)}`).then((e=>n(e.default))).catch((e=>t(e)))}))}}function t(e){return void 0===e&&(e="http"),{resolve:e=>new Promise(((s,a)=>{fetch(e.toString(),{headers:{Accept:"application/json"}}).then((e=>e.json())).then((e=>s(e))).catch((e=>a(e)))}))}}function m(e){const{basePath:s,jsonPointer:a,remote:m}=e;let o={};return s&&(o.resolvers={file:n(s)}),m&&(void 0===o.resolvers&&(o.resolvers={}),o.resolvers.http=t("http"),o.resolvers.https=t("https")),a&&(o.jsonPointer=a),o}a.d(s,{A:()=>m})},29585:(e,s,a)=>{"use strict";function n(e,s){void 0===s&&(s=2);return`{\n${Object.keys(e).map((a=>{const t=e[a];if("function"==typeof t){const e=t.toString().match(/function\s+([\w$]+)\s*\(([^)]*)\)/),n=e?e[1]:"anonymous",m=e?e[2].split(",").map((e=>e.trim())).join(", "):"";return`${" ".repeat(s)}${a}: function ${n}(${m}) { /* function body */ },`}return"object"!=typeof t||Array.isArray(t)||null===t?`${" ".repeat(s)}${a}: ${JSON.stringify(t)},`:`${" ".repeat(s)}${a}: ${n(t,s+2)},`})).join("\n")}\n${" ".repeat(s-2)}}`}a.d(s,{A:()=>n})},59620:(e,s,a)=>{var n={"./img/favicon.ico":[32532,9,2532],"./img/gear-tools.svg":[19229,9,9229],"./img/logo.svg":[18187,9,8187],"./img/opensource-icon.svg":[16949,9,6949],"./img/project_icon.svg":[30635,9,635],"./img/undraw_code_review.svg":[82022,9,2022],"./schemas/examples/array/additionalItems1":[77240,3,7240],"./schemas/examples/array/additionalItems1.json":[77240,3,7240],"./schemas/examples/array/additionalItems2":[24629,3,4629],"./schemas/examples/array/additionalItems2.json":[24629,3,4629],"./schemas/examples/array/contains":[49567,3,9567],"./schemas/examples/array/contains.json":[49567,3,9567],"./schemas/examples/array/items":[4082,3,4082],"./schemas/examples/array/items.json":[4082,3,4082],"./schemas/examples/array/length":[18210,3,8210],"./schemas/examples/array/length.json":[18210,3,8210],"./schemas/examples/array/minContainsAndMaxContains":[53839,3,3839],"./schemas/examples/array/minContainsAndMaxContains.json":[53839,3,3839],"./schemas/examples/array/simple":[56864,3,6864],"./schemas/examples/array/simple.json":[56864,3,6864],"./schemas/examples/array/tuples":[62441,3,2441],"./schemas/examples/array/tuples.json":[62441,3,2441],"./schemas/examples/array/unevaluatedItems1":[9933,3,9933],"./schemas/examples/array/unevaluatedItems1.json":[9933,3,9933],"./schemas/examples/array/unevaluatedItems2":[54416,3,4416],"./schemas/examples/array/unevaluatedItems2.json":[54416,3,4416],"./schemas/examples/array/uniqueItems":[97095,3,7095],"./schemas/examples/array/uniqueItems.json":[97095,3,7095],"./schemas/examples/boolean/simple":[9175,3,9175],"./schemas/examples/boolean/simple.json":[9175,3,9175],"./schemas/examples/custom/description":[37662,3,7662],"./schemas/examples/custom/description.json":[37662,3,7662],"./schemas/examples/custom/unresolved_refs":[52498,3,2498],"./schemas/examples/custom/unresolved_refs.json":[52498,3,2498],"./schemas/examples/custom/values":[66546,3,6546],"./schemas/examples/custom/values.json":[66546,3,6546],"./schemas/examples/generic_keywords/annotations":[63563,3,3563],"./schemas/examples/generic_keywords/annotations.json":[63563,3,3563],"./schemas/examples/generic_keywords/const":[14130,3,4130],"./schemas/examples/generic_keywords/const.json":[14130,3,4130],"./schemas/examples/generic_keywords/enum":[4534,3,4534],"./schemas/examples/generic_keywords/enum.json":[4534,3,4534],"./schemas/examples/null/simple":[5040,3,5040],"./schemas/examples/null/simple.json":[5040,3,5040],"./schemas/examples/numeric/integer":[2910,3,2910],"./schemas/examples/numeric/integer.json":[2910,3,2910],"./schemas/examples/numeric/multipleOf":[94369,3,4369],"./schemas/examples/numeric/multipleOf.json":[94369,3,4369],"./schemas/examples/numeric/number":[99621,3,9621],"./schemas/examples/numeric/number.json":[99621,3,9621],"./schemas/examples/numeric/ranges":[9086,3,9086],"./schemas/examples/numeric/ranges.json":[9086,3,9086],"./schemas/examples/object/additionalProperties":[16368,3,6368],"./schemas/examples/object/additionalProperties.json":[16368,3,6368],"./schemas/examples/object/additionalProperties2":[47434,3,7434],"./schemas/examples/object/additionalProperties2.json":[47434,3,7434],"./schemas/examples/object/additionalPropertiesWithPatternProperties":[55951,3,5951],"./schemas/examples/object/additionalPropertiesWithPatternProperties.json":[55951,3,5951],"./schemas/examples/object/patternProperties":[17555,3,7555],"./schemas/examples/object/patternProperties.json":[17555,3,7555],"./schemas/examples/object/properties":[37669,3,7669],"./schemas/examples/object/properties.json":[37669,3,7669],"./schemas/examples/object/propertyNames":[55607,3,5607],"./schemas/examples/object/propertyNames.json":[55607,3,5607],"./schemas/examples/object/required":[68369,3,8369],"./schemas/examples/object/required.json":[68369,3,8369],"./schemas/examples/object/simpleObject":[93289,3,3289],"./schemas/examples/object/simpleObject.json":[93289,3,3289],"./schemas/examples/object/size":[75113,3,5113],"./schemas/examples/object/size.json":[75113,3,5113],"./schemas/examples/object/unevaluatedProperties":[34437,3,4437],"./schemas/examples/object/unevaluatedProperties.json":[34437,3,4437],"./schemas/examples/object/unevaluatedProperties1":[44360,3,4360],"./schemas/examples/object/unevaluatedProperties1.json":[44360,3,4360],"./schemas/examples/object/unevaluatedProperties2":[30277,3,277],"./schemas/examples/object/unevaluatedProperties2.json":[30277,3,277],"./schemas/examples/refs/localFile":[8180,3,8180],"./schemas/examples/refs/localFile.json":[8180,3,8180],"./schemas/examples/refs/refOnRoot":[63601,3,3601],"./schemas/examples/refs/refOnRoot.json":[63601,3,3601],"./schemas/examples/refs/remoteRef":[16474,3,6474],"./schemas/examples/refs/remoteRef.json":[16474,3,6474],"./schemas/examples/schema_composition/allOf":[4275,3,4275],"./schemas/examples/schema_composition/allOf.json":[4275,3,4275],"./schemas/examples/schema_composition/anyOf":[83974,3,3974],"./schemas/examples/schema_composition/anyOf.json":[83974,3,3974],"./schemas/examples/schema_composition/not":[15648,3,5648],"./schemas/examples/schema_composition/not.json":[15648,3,5648],"./schemas/examples/schema_composition/oneOf":[33536,3,3536],"./schemas/examples/schema_composition/oneOf.json":[33536,3,3536],"./schemas/examples/schema_conditionally/dependencies_dependentRequired":[12304,3,2304],"./schemas/examples/schema_conditionally/dependencies_dependentRequired.json":[12304,3,2304],"./schemas/examples/schema_conditionally/dependencies_dependentSchemas":[42783,3,2783],"./schemas/examples/schema_conditionally/dependencies_dependentSchemas.json":[42783,3,2783],"./schemas/examples/schema_conditionally/dependentRequired":[1250,3,1250],"./schemas/examples/schema_conditionally/dependentRequired.json":[1250,3,1250],"./schemas/examples/schema_conditionally/dependentRequired_bidirectional":[62186,3,2186],"./schemas/examples/schema_conditionally/dependentRequired_bidirectional.json":[62186,3,2186],"./schemas/examples/schema_conditionally/dependentSchemas":[80561,3,561],"./schemas/examples/schema_conditionally/dependentSchemas.json":[80561,3,561],"./schemas/examples/schema_conditionally/if-then-else":[2881,3,2881],"./schemas/examples/schema_conditionally/if-then-else.json":[2881,3,2881],"./schemas/examples/schema_conditionally/if-then-else_multiple":[89534,3,9534],"./schemas/examples/schema_conditionally/if-then-else_multiple.json":[89534,3,9534],"./schemas/examples/string/basic":[94820,3,4820],"./schemas/examples/string/basic.json":[94820,3,4820],"./schemas/examples/string/contentEncoding":[12570,3,2570],"./schemas/examples/string/contentEncoding.json":[12570,3,2570],"./schemas/examples/string/contentEncodingWithContentMediaType":[80513,3,513],"./schemas/examples/string/contentEncodingWithContentMediaType.json":[80513,3,513],"./schemas/examples/string/contentMediaType":[95741,3,5741],"./schemas/examples/string/contentMediaType.json":[95741,3,5741],"./schemas/examples/string/contentSchema":[1616,3,1616],"./schemas/examples/string/contentSchema.json":[1616,3,1616],"./schemas/examples/string/format":[9569,3,9569],"./schemas/examples/string/format.json":[9569,3,9569],"./schemas/examples/string/length":[92334,3,2334],"./schemas/examples/string/length.json":[92334,3,2334],"./schemas/examples/string/pattern":[75188,3,5188],"./schemas/examples/string/pattern.json":[75188,3,5188],"./schemas/examples/type/multipleType":[65465,3,5465],"./schemas/examples/type/multipleType.json":[65465,3,5465],"./schemas/examples/type/singleType":[41201,3,1201],"./schemas/examples/type/singleType.json":[41201,3,1201],"./schemas/realWorld/boxFileSchema":[4651,3,4651],"./schemas/realWorld/boxFileSchema.json":[4651,3,4651],"./schemas/realWorld/githubIssueSchema":[91530,3,1530],"./schemas/realWorld/githubIssueSchema.json":[91530,3,1530]};function t(e){if(!a.o(n,e))return Promise.resolve().then((()=>{var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}));var s=n[e],t=s[0];return a.e(s[2]).then((()=>a.t(t,16|s[1])))}t.keys=()=>Object.keys(n),t.id=59620,e.exports=t},8180:e=>{"use strict";e.exports=JSON.parse('{"type":"object","properties":{"externalProp":{"$ref":"../array/tuples.json"}}}')}}]);