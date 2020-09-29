(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{71:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var i=t(2),o=t(6),a=(t(0),t(76)),r={title:"Setting up Definitions"},c={unversionedId:"guide-definitions",id:"guide-definitions",isDocsHomePage:!1,title:"Setting up Definitions",description:"Understanding Definitions",source:"@site/docs/guide-definitions.md",slug:"/guide-definitions",permalink:"/docs/guide-definitions",editUrl:"https://github.com/ceramicstudio/js-idx/edit/master/website/docs/guide-definitions.md",version:"current",sidebar:"docs",previous:{title:"Understanding authentication",permalink:"/docs/guide-authentication"}},s=[{value:"Understanding Definitions",id:"understanding-definitions",children:[]},{value:"Definition contents",id:"definition-contents",children:[]},{value:"Creating a Definition using IDX tools",id:"creating-a-definition-using-idx-tools",children:[]},{value:"Definition aliases",id:"definition-aliases",children:[{value:"During development",id:"during-development",children:[]},{value:"Application runtime",id:"application-runtime",children:[]}]}],d={rightToc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"understanding-definitions"},"Understanding Definitions"),Object(a.b)("p",null,"In IDX, ",Object(a.b)("strong",{parentName:"p"},"Definitions")," are needed to access resources. They are used in two main ways:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Their ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/terminology#docid"}),"Document Identifier (DocID)")," is used a key in the ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/terminology#identity-index--idx"}),"Identity Index")," map."),Object(a.b)("li",{parentName:"ol"},"Their ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/terminology#document"}),"Document")," contents contain metadata describing the resource associated to them")),Object(a.b)("h2",{id:"definition-contents"},"Definition contents"),Object(a.b)("p",null,"A ",Object(a.b)("strong",{parentName:"p"},"Definition")," contains the following metadata:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"schema")," (required): the ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/terminology#docid"}),"DocID")," of the ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/terminology#schema"}),"Schema")," that will be used to validate the associated resource contents"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"name")," (required): a name for the Definition, helping unique identification and discovery"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"description")," (optional): a short description of the Definition, to help with discovery"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"url")," (optional): URL of the specification for the Definition or associated project"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"config")," (optional): any additional contents that may be needed by applications to support additional logic when interacting with the resource")),Object(a.b)("h2",{id:"creating-a-definition-using-idx-tools"},"Creating a Definition using IDX tools"),Object(a.b)("p",null,"Developers can create ",Object(a.b)("strong",{parentName:"p"},"Definitions")," specific to their application needs directly by using the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-tools#createdefinition"}),Object(a.b)("inlineCode",{parentName:"a"},"createDefinition")," method")," of the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-tools"}),Object(a.b)("inlineCode",{parentName:"a"},"idx-tools"),"library"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"import { createDefinition } from '@ceramicstudio/idx-tools'\n\nconst definitionID = await createDefinition(ceramic, {\n  name: 'my app definition',\n  schema: 'ceramic://...'\n})\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"definitionID")," created here is ",Object(a.b)("strong",{parentName:"p"},"immutable")," and can be used by other methods of IDX, for example to get and set the contents associated to this definition:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"import { IDX } from '@ceramicstudio/idx'\n\n// See constructor options\nconst idx = new IDX(...)\n\nawait idx.set(definitionID, { my: 'contents' })\nawait idx.get(definitionID) // { my: 'contents' }\n")),Object(a.b)("h2",{id:"definition-aliases"},"Definition aliases"),Object(a.b)("p",null,"Rather than using ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/terminology#docid"}),"DocIDs")," to identify contents used by apps, it's possible provide a ",Object(a.b)("inlineCode",{parentName:"p"},"definitions")," record to the ",Object(a.b)("inlineCode",{parentName:"p"},"IDX")," constructor, to be used in other methods."),Object(a.b)("h3",{id:"during-development"},"During development"),Object(a.b)("p",null,"Aliases only need to be ",Object(a.b)("strong",{parentName:"p"},"created once")," so they are available on the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/terminology#ceramic"}),"Ceramic network"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"const [userDefinitionID, collectionDefinitionID] = await Promise.all([\n  createDefinition(ceramic, {\n    name: 'my first definition',\n    schema: 'ceramic://...'\n  }),\n  createDefinition(ceramic, {\n    name: 'my second definition',\n    schema: 'ceramic://...'\n  })\n])\n\nconst definitions = { user: userDefinitionID, collection: collectionDefinitionID }\n")),Object(a.b)("h3",{id:"application-runtime"},"Application runtime"),Object(a.b)("p",null,"A deployed application can use the Definition aliases created during development to identify contents."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"// The definition name to DocID map created during development\nconst definitions = {...}\n\n// See constructor options\nconst idx = new IDX({ definitions, ... })\n\n// Definitiona aliases can then be used in IDX methods\nconst user = await idx.get('user')\nawait idx.set('collection', { my: 'data' })\n")))}l.isMDXComponent=!0},76:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var i=t(0),o=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),l=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=i,m=p["".concat(r,".").concat(u)]||p[u]||b[u]||a;return t?o.a.createElement(m,c(c({ref:n},d),{},{components:t})):o.a.createElement(m,c({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var d=2;d<a;d++)r[d]=t[d];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);