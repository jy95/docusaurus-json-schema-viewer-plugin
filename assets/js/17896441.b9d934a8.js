"use strict";(self.webpackChunktestsite=self.webpackChunktestsite||[]).push([[8401],{27293:(e,t,n)=>{n.d(t,{A:()=>H});var s=n(63696),a=n(62540);function i(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),i=t.filter((e=>e!==n)),l=n?.props.children;return{mdxAdmonitionTitle:l,rest:i.length>0?(0,a.jsx)(a.Fragment,{children:i}):null}}(e.children),i=e.title??t;return{...e,...i&&{title:i},children:n}}var l=n(34164),o=n(21312),r=n(17559);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:n,children:s}=e;return(0,a.jsx)("div",{className:(0,l.A)(r.G.common.admonition,r.G.common.admonitionType(t),c.admonition,n),children:s})}function u(e){let{icon:t,title:n}=e;return(0,a.jsxs)("div",{className:c.admonitionHeading,children:[(0,a.jsx)("span",{className:c.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,a.jsx)("div",{className:c.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:i,className:l}=e;return(0,a.jsxs)(d,{type:t,className:l,children:[(0,a.jsx)(u,{title:s,icon:n}),(0,a.jsx)(m,{children:i})]})}function x(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,a.jsx)(x,{}),title:(0,a.jsx)(o.default,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function v(e){return(0,a.jsx)(h,{...f,...e,className:(0,l.A)("alert alert--secondary",e.className),children:e.children})}function p(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,a.jsx)(p,{}),title:(0,a.jsx)(o.default,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function g(e){return(0,a.jsx)(h,{...j,...e,className:(0,l.A)("alert alert--success",e.className),children:e.children})}function b(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,a.jsx)(b,{}),title:(0,a.jsx)(o.default,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function A(e){return(0,a.jsx)(h,{...N,...e,className:(0,l.A)("alert alert--info",e.className),children:e.children})}function C(e){return(0,a.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const L={icon:(0,a.jsx)(C,{}),title:(0,a.jsx)(o.default,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function _(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const T={icon:(0,a.jsx)(_,{}),title:(0,a.jsx)(o.default,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const k={icon:(0,a.jsx)(C,{}),title:(0,a.jsx)(o.default,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const y={...{note:v,tip:g,info:A,warning:function(e){return(0,a.jsx)(h,{...L,...e,className:(0,l.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,a.jsx)(h,{...T,...e,className:(0,l.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,a.jsx)(v,{title:"secondary",...e}),important:e=>(0,a.jsx)(A,{title:"important",...e}),success:e=>(0,a.jsx)(g,{title:"success",...e}),caution:function(e){return(0,a.jsx)(h,{...k,...e,className:(0,l.A)("alert alert--warning",e.className),children:e.children})}}};function H(e){const t=i(e),n=(s=t.type,y[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),y.info));var s;return(0,a.jsx)(n,{...t})}},71243:(e,t,n)=>{n.d(t,{A:()=>p});n(63696);var s=n(34164),a=n(17559),i=n(84142),l=n(99169),o=n(28774),r=n(21312),c=n(86025),d=n(62540);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.A)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.A,{"aria-label":(0,r.translate)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const x={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function f(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,d.jsx)(o.A,{className:a,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function v(e){let{children:t,active:n,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function p(){const e=(0,i.OF)(),t=(0,l.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(a.G.docs.docBreadcrumbs,x.breadcrumbsContainer),"aria-label":(0,r.translate)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(v,{active:s,index:n,addMicrodata:!!a,children:(0,d.jsx)(f,{href:a,isLast:s,children:t.label})},n)}))]})}):null}},72438:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ke});var s=n(63696),a=n(1003),i=n(89532),l=n(62540);const o=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(o.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(34164),m=n(24581),h=n(86929);function x(){const{metadata:e}=c();return(0,l.jsx)(h.A,{previous:e.previous,next:e.next})}var f=n(51878),v=n(4267),p=n(17559),j=n(21312);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,l.jsx)(j.default,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function b(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(j.default,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,l.jsxs)("span",{className:p.G.common.lastUpdated,children:[(0,l.jsx)(j.default,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,l.jsx)(g,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,l.jsx)(b,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var A=n(28774);const C={iconEdit:"iconEdit_Z9Sw"};function L(e){let{className:t,...n}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(C.iconEdit,t),"aria-hidden":"true",...n,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function _(e){let{editUrl:t}=e;return(0,l.jsxs)(A.A,{to:t,className:p.G.common.editThisPage,children:[(0,l.jsx)(L,{}),(0,l.jsx)(j.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const T={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function k(e){let{permalink:t,label:n,count:s}=e;return(0,l.jsxs)(A.A,{href:t,className:(0,u.A)(T.tag,s?T.tagWithCount:T.tagRegular),children:[n,s&&(0,l.jsx)("span",{children:s})]})}const y={tags:"tags_jXut",tag:"tag_QGVx"};function H(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(j.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.A)(y.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,l.jsx)("li",{className:y.tag,children:(0,l.jsx)(k,{label:t,permalink:n})},n)}))})]})}const w={lastUpdated:"lastUpdated_vwxv"};function U(e){return(0,l.jsx)("div",{className:(0,u.A)(p.G.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(H,{...e})})})}function M(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a}=e;return(0,l.jsxs)("div",{className:(0,u.A)(p.G.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(_,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.A)("col",w.lastUpdated),children:(n||s)&&(0,l.jsx)(N,{lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:s})})]})}function B(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a,tags:i}=e,o=i.length>0,r=!!(t||n||a);return o||r?(0,l.jsxs)("footer",{className:(0,u.A)(p.G.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)(U,{tags:i}),r&&(0,l.jsx)(M,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s})]}):null}var I=n(41422),E=n(6342);function z(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function V(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=V({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function R(e){const t=e.getBoundingClientRect();return t.top===t.bottom?R(e.parentNode):t}function G(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>R(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(R(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function O(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,E.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function S(e){const t=(0,s.useRef)(void 0),n=O();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),r=G(o,{anchorTopOffset:n.current}),c=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function D(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,l.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,l.jsxs)("li",{children:[(0,l.jsx)(A.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,l.jsx)(D,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const F=s.memo(D);function P(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:o,maxHeadingLevel:r,...c}=e;const d=(0,E.p)(),u=o??d.tableOfContents.minHeadingLevel,m=r??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>V({toc:z(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return S((0,s.useMemo)((()=>{if(a&&i)return{linkClassName:a,linkActiveClassName:i,minHeadingLevel:u,maxHeadingLevel:m}}),[a,i,u,m])),(0,l.jsx)(F,{toc:h,className:n,linkClassName:a,...c})}const q={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function W(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",q.tocCollapsibleButton,!t&&q.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(j.default,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const $={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function Z(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,I.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)($.tocCollapsible,!i&&$.tocCollapsibleExpanded,n),children:[(0,l.jsx)(W,{collapsed:i,onClick:o}),(0,l.jsx)(I.N,{lazy:!0,className:$.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(P,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const J={tocMobile:"tocMobile_ITEo"};function Q(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(p.G.docs.docTocMobile,J.tocMobile)})}const X={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},Y="table-of-contents__link toc-highlight",K="table-of-contents__link--active";function ee(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,u.A)(X.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(P,{...n,linkClassName:Y,linkActiveClassName:K})})}function te(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(ee,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:p.G.docs.docTocDesktop})}var ne=n(51107),se=n(28453),ae=n(5260),ie=n(21432);function le(e){return(0,l.jsx)("code",{...e})}var oe=n(41622);function re(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,l.jsx)(l.Fragment,{children:t.filter((e=>e!==n))});return(0,l.jsx)(oe.default,{...e,summary:n,children:a})}function ce(e){return(0,l.jsx)(ne.A,{...e})}const de={containsTaskList:"containsTaskList_mC6p"};function ue(e){if(void 0!==e)return(0,u.A)(e,e?.includes("contains-task-list")&&de.containsTaskList)}var me=n(63427);const he={img:"img_ev3q"};var xe=n(27293),fe=n(20418);const ve={Head:ae.A,details:re,Details:re,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,l.jsx)(le,{...e}):(0,l.jsx)(ie.default,{...e})},a:function(e){return(0,l.jsx)(A.A,{...e})},pre:function(e){return(0,l.jsx)(l.Fragment,{children:e.children})},ul:function(e){return(0,l.jsx)("ul",{...e,className:ue(e.className)})},li:function(e){return(0,me.A)().collectAnchor(e.id),(0,l.jsx)("li",{...e})},img:function(e){return(0,l.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,u.A)(t,he.img))});var t},h1:e=>(0,l.jsx)(ce,{as:"h1",...e}),h2:e=>(0,l.jsx)(ce,{as:"h2",...e}),h3:e=>(0,l.jsx)(ce,{as:"h3",...e}),h4:e=>(0,l.jsx)(ce,{as:"h4",...e}),h5:e=>(0,l.jsx)(ce,{as:"h5",...e}),h6:e=>(0,l.jsx)(ce,{as:"h6",...e}),admonition:xe.A,mermaid:fe.A};function pe(e){let{children:t}=e;return(0,l.jsx)(se.x,{components:ve,children:t})}function je(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(p.G.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(ne.A,{as:"h1",children:n})}),(0,l.jsx)(pe,{children:t})]})}var ge=n(71243);function be(){return(0,l.jsx)(j.default,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function Ne(){return(0,l.jsx)(j.default,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function Ae(){return(0,l.jsx)(ae.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function Ce(e){let{className:t}=e;return(0,l.jsx)(xe.A,{type:"caution",title:(0,l.jsx)(be,{}),className:(0,u.A)(t,p.G.common.unlistedBanner),children:(0,l.jsx)(Ne,{})})}function Le(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Ae,{}),(0,l.jsx)(Ce,{...e})]})}const _e={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Te(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,l.jsx)(Q,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(te,{})}}(),{metadata:{unlisted:s}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&_e.docItemCol),children:[s&&(0,l.jsx)(Le,{}),(0,l.jsx)(f.A,{}),(0,l.jsxs)("div",{className:_e.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(ge.A,{}),(0,l.jsx)(v.A,{}),n.mobile,(0,l.jsx)(je,{children:t}),(0,l.jsx)(B,{})]}),(0,l.jsx)(x,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function ke(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(Te,{children:(0,l.jsx)(n,{})})]})})}},86929:(e,t,n)=>{n.d(t,{A:()=>r});n(63696);var s=n(21312),a=n(34164),i=n(28774),l=n(62540);function o(e){const{permalink:t,title:n,subLabel:s,isNext:o}=e;return(0,l.jsxs)(i.A,{className:(0,a.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,l.jsx)("div",{className:"pagination-nav__label",children:n})]})}function r(e){const{previous:t,next:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.translate)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(o,{...t,subLabel:(0,l.jsx)(s.default,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,l.jsx)(o,{...n,subLabel:(0,l.jsx)(s.default,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,t,n)=>{n.d(t,{A:()=>r});n(63696);var s=n(34164),a=n(21312),i=n(17559),l=n(32252),o=n(62540);function r(e){let{className:t}=e;const n=(0,l.r)();return n.badge?(0,o.jsx)("span",{className:(0,s.A)(t,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(a.default,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},51878:(e,t,n)=>{n.d(t,{A:()=>v});n(63696);var s=n(34164),a=n(44586),i=n(28774),l=n(21312),o=n(44070),r=n(17559),c=n(55597),d=n(32252),u=n(62540);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.default,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.default,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function x(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(l.default,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.A,{to:n,onClick:s,children:(0,u.jsx)(l.default,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function f(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,a.A)(),{pluginId:l}=(0,o.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(l),{latestDocSuggestion:m,latestVersionSuggestion:f}=(0,o.HW)(l),v=m??(p=f).docs.find((e=>e.id===p.mainDocId));var p;return(0,u.jsxs)("div",{className:(0,s.A)(t,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(x,{versionLabel:f.label,to:v.path,onClick:()=>d(f.name)})})]})}function v(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(f,{className:t,versionMetadata:n}):null}}}]);