(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),o=(n(0),n(205)),i={id:"openapi",title:"OpenAPI / Swagger",sidebar_label:"OpenAPI / Swagger"},c={id:"handlers/openapi",title:"OpenAPI / Swagger",description:"!image",source:"@site/docs/handlers/openapi.md",permalink:"/docs/handlers/openapi",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/handlers/openapi.md",sidebar_label:"OpenAPI / Swagger",sidebar:"sidebar",previous:{title:"GraphQL",permalink:"/docs/handlers/graphql"},next:{title:"gRPC & Protobuf",permalink:"/docs/handlers/grpc"}},p=[{value:"Config API Reference",id:"config-api-reference",children:[]}],l={rightToc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/20847995/79218686-7ba7b900-7e59-11ea-8a5e-676a83b9f86e.png",alt:"image"}))),Object(o.b)("p",null,"This handler allows you to load remote or local ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://swagger.io/"}),"OpenAPI (2/3) and Swagger")," schemas. Based on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.ibm.com/open/projects/openapi-to-graphql/"}),"OpenAPI-to-GraphQL"),"."),Object(o.b)("p",null,"You can import it using remote/local ",Object(o.b)("inlineCode",{parentName:"p"},".json")," or ",Object(o.b)("inlineCode",{parentName:"p"},".yaml"),"."),Object(o.b)("p",null,"To get started, install the handler library from NPM:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn add @graphql-mesh/openapi\n")),Object(o.b)("p",null,"Now, you can use it directly in your Mesh config file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"sources:\n  - name: MyOpenapiApi\n    handler:\n      openapi:\n        source: ./my-schema.json\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"We have a lot of examples for OpenAPI Handler;"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://codesandbox.io/s/github/Urigo/graphql-mesh/tree/master/examples/openapi-javascript-wiki"}),"JavaScript Wiki")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://codesandbox.io/s/github/Urigo/graphql-mesh/tree/master/examples/openapi-location-weather"}),"Location Weather")))),Object(o.b)("h2",{id:"config-api-reference"},"Config API Reference"),Object(o.b)("p",null,Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"source")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),", required) - A pointer to your API source - could be a local file, remote file or url endpoint"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"operationHeaders")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"JSON"),") - JSON object representing the Headers to add to the runtime of the API calls"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"schemaHeaders")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"JSON"),") - If you are using a remote URL endpoint to fetch your schema, you can set headers for the HTTP request to fetch your schema."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"baseUrl")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),") - Specifies the URL on which all paths will be based on.\nOverrides the server object in the OAS."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"skipSchemaValidation")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Boolean"),") - Skip OpenAPI 3 Schema Validation"))))}b.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return n?a.a.createElement(d,c({ref:t},l,{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);