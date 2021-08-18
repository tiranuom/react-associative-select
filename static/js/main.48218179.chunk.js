(this["webpackJsonpreact-associative-select-example"]=this["webpackJsonpreact-associative-select-example"]||[]).push([[0],{277:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),l=n.n(a),r=n(7),i=n.n(r),o=n(31),c=n(282),u=n(281),s=n(21),m=n(22);function p(e){var t=e.title,n=e.description,r=e.code,i=e.children,p=Object(a.useState)(!1),d=Object(o.a)(p,2),h=d[0],v=d[1];return l.a.createElement("div",{className:"mt-5"},l.a.createElement("div",{className:"row d-flex justify-content-between"},l.a.createElement("h5",{className:"col-10"},t),l.a.createElement("a",{className:"btn btn-light col-1",onClick:function(){return v(!h)}},l.a.createElement(s.a,{icon:m.faCode}))),l.a.createElement("p",null,n),l.a.createElement(u.a,{in:h},l.a.createElement("div",null,l.a.createElement(c.a,{language:"typescript",id:"code"},r))),i)}var d=n(30),h=n(3);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var f=["schema","onChange","value","typeProviders","optionMapping"];function g(e){return e.properties?Object.entries(e.properties).map((function(e){var t;return{value:e[0],label:null!=(t=e[1].title)?t:"",base:!0}})):[]}var E=[{matches:function(e){return!!e.enum},toOptions:function(e){var t,n;return null!=(t=null===(n=e.enum)||void 0===n?void 0:n.map((function(e){var t;return{label:null!=(t=null===e||void 0===e?void 0:e.toString())?t:"",value:e}})))?t:[]},isValidNewOption:function(){return!1},fromValue:function(e,t){var n;return null!==(n=t.enum)&&void 0!==n&&n.includes(e)?{label:e.toString(),value:e}:void 0}},{matches:function(e){return"number"===e.type},toOptions:function(){return[]},isValidNewOption:function(e,t){var n=+t;return console.log(n),!isNaN(n)&&(!(e.maximum&&n>e.maximum)&&((!e.multipleOf||n%e.multipleOf===0)&&!(e.minimum&&n<e.minimum)))},fromValue:function(e){return{label:e.toString(),value:e}}},{matches:function(e){return"integer"===e.type},toOptions:function(){return[]},isValidNewOption:function(e,t){var n=+t;return console.log(n),!isNaN(n)&&(!(e.maximum&&n>e.maximum)&&(e.multipleOf=e.multipleOf||1,n%e.multipleOf===0&&!(e.minimum&&n<e.minimum)))},fromValue:function(e){return{label:e.toString(),value:e}}},{matches:function(e){return"string"===e.type},toOptions:function(){return[]},isValidNewOption:function(e,t){return!(e.minLength&&t.length<e.minLength)&&(!(e.maxLength&&t.length>e.maxLength)&&!(e.pattern&&!new RegExp(e.pattern).test(t)))},fromValue:function(e){return{label:e.toString(),value:e}}},{matches:function(e){return"boolean"===e.type},toOptions:function(){return[{label:"True",value:!0},{label:"False",value:!1}]},isValidNewOption:function(){return!1},fromValue:function(e,t){var n;return null!==(n=t.enum)&&void 0!==n&&n.includes(e)?{label:e.toString(),value:e}:void 0}}];function b(e,t){return[].concat(null!=t?t:[],E).find((function(t){return t.matches(e)}))}function y(e){var t=e.schema,n=e.onChange,r=e.value,i=e.typeProviders,o=e.optionMapping,c=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,f),u=Object(a.useState)([]),s=u[0],m=u[1],p=Object(a.useState)([]),E=p[0],y=p[1];Object(a.useEffect)((function(){y(g(t))}),[]),Object(a.useEffect)((function(){Object.entries(null!=r?r:{}).forEach((function(e){var n=e[0],a=e[1];if(t.properties){var l=t.properties[n];if(l){var r=b(l,i);if(r)r.fromValue(a,l)}}}))}),[r]),Object(a.useEffect)((function(){if(n){for(var e={},a=0;a<s.length;a+=2)if(s[a+1]){var l,r,i=s[a].value.split(":")[0];if(t.properties&&"array"===(null===(l=t.properties[i])||void 0===l?void 0:l.type))e[i]=null!=(r=e[i])?r:[],e[i].push(s[a+1].value);else e[i]=s[a+1].value}n(e)}}),[s]),Object(a.useEffect)((function(){C(void 0)}),[s]);var O=Object(a.useCallback)((function(e){if(!t.properties)return!1;if(s.length%2===0)return!1;var n=s[s.length-1],a=t.properties[n.value.split(":")[0]];if(!1===a.additionalItems)return!1;var l=b(a,i);return!l||l.isValidNewOption(a,e)}),[s]),C=Object(a.useCallback)((function(e){y([]),m((function(n){return y((function(a){if(n.length%2===0)return g(t);var l=n[n.length-1].value.split(":")[0];if(o&&o[l])o[l](e).then((function(e){m((function(t){return t[t.length-1].value.split(":")[0]===l&&y(e),t}))}));else if(t.properties&&t.properties[l]&&t.properties[l].enum){var r;return(null!=(r=t.properties[l].enum)?r:[]).map((function(e){return{label:e+"",value:e+""}}))}return a.filter((function(t){return t.label.toLowerCase().startsWith(null!=e?e:"")}))})),n}))}),[]);return l.a.createElement(d.a,Object.assign({},c,{isMulti:!0,isClearable:!0,value:s.map((function(e,t){return v({},e,{index:t})})),options:E,defaultOptions:E,onInputChange:C,allowCreateWhileLoading:!1,onChange:function(e,n){var a;if("remove-value"!==n.action&&"pop-value"!==n.action||(null===(a=n.removedValue)||void 0===a?void 0:a.index)%2===0)"clear"===n.action?m(e):m(e.map((function(e,n){var a;return n%2===0&&t.properties&&"array"===(null===(a=t.properties[e.value])||void 0===a?void 0:a.type)?v({},e,{value:e.value+":"+Date.now()}):e})));else{var l,r=null===(l=n.removedValue)||void 0===l?void 0:l.index;m([].concat(e.filter((function(e){return(null===e||void 0===e?void 0:e.index)!==r-1}))))}},components:v({MultiValueRemove:function(e){return e.data.index%2===0?null:l.a.createElement(h.l.MultiValueRemove,Object.assign({},e))}},c.components),styles:v({},c.styles,{multiValue:function(e,t){var n,a,l=null===(n=c.styles)||void 0===n?void 0:n.multiValue;a=l?l(e,t):void 0;var r,i,o,u,s,m,p,d,h,f,g,E,b,y,O,C,S,R,j,x,N,w,T,L,V,A,k,P,M,U,J,W,F,D,B=t.getValue(),I=B[B.length-1];return t.data.index%2!==0?v({},e,a,{borderRadius:null!=(r=null===(i=a)||void 0===i?void 0:i.borderRadius)?r:0,margin:null!=(o=null===(u=a)||void 0===u?void 0:u.margin)?o:0,marginRight:null!=(s=null===(m=a)||void 0===m?void 0:m.marginRight)?s:5,backgroundColor:null!=(p=null===(d=a)||void 0===d?void 0:d.backgroundColor)?p:"#f5f5f5",borderStyle:null!=(h=null===(f=a)||void 0===f?void 0:f.borderStyle)?h:"solid",borderWidth:null!=(g=null===(E=a)||void 0===E?void 0:E.borderWidth)?g:1,borderColor:null!=(b=null===(y=a)||void 0===y?void 0:y.borderColor)?b:"#b3b3b3",borderLeftWidth:null!=(O=null===(C=a)||void 0===C?void 0:C.borderLeftWidth)?O:0,borderBottomLeftRadius:0,borderTopLeftRadius:0}):v({},e,a,{borderRadius:null!=(S=null===(R=a)||void 0===R?void 0:R.borderRadius)?S:0,margin:null!=(j=null===(x=a)||void 0===x?void 0:x.margin)?j:0,marginLeft:null!=(N=null===(w=a)||void 0===w?void 0:w.marginLeft)?N:5,backgroundColor:null!=(T=null===(L=a)||void 0===L?void 0:L.backgroundColor)?T:"#dbdbdb",borderStyle:null!=(V=null===(A=a)||void 0===A?void 0:A.borderStyle)?V:"solid",borderWidth:null!=(k=null===(P=a)||void 0===P?void 0:P.borderWidth)?k:1,borderColor:null!=(M=null===(U=a)||void 0===U?void 0:U.borderColor)?M:"#b3b3b3",paddingRight:null!=(J=null===(W=a)||void 0===W?void 0:W.paddingRight)?J:5,borderBottomRightRadius:0,borderTopRightRadius:0},I.label===t.data.label?{}:{borderRightWidth:null!=(F=null===(D=a)||void 0===D?void 0:D.borderRightWidth)?F:0})}}),isValidNewOption:O,onCreateOption:function(e){return m((function(t){return[].concat(t,[{label:e,value:e}])}))},formatCreateLabel:function(e){return l.a.createElement("div",null,e)}}))}var O={type:"object",title:"",properties:{name:{type:"string",title:"Name",pattern:"^[a-zA-Z ]+$"},age:{type:"number",title:"Age",minimum:18,maximum:60,multipleOf:1},gender:{type:"string",title:"Gender",enum:["Male","Female"]}}};function C(){return l.a.createElement(y,{schema:O,value:{},onChange:function(e){console.log(e)},className:"react-associative-select",classNamePrefix:"react-associative-select",styles:{multiValue:function(){return{borderRadius:10}}}})}var S=l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Basic usage is simple as defining the schema and adding the ",l.a.createElement("code",null,"AssociativeSelect")," component with callback.")),R={type:"object",title:"",properties:{currencyCode:{type:"string",title:"Currency"}}};function j(){return l.a.createElement("div",null,l.a.createElement(y,{schema:R,onChange:function(e){console.log(e)},optionMapping:{currencyCode:function(e){return new Promise((function(t){setTimeout((function(){t([{label:"LKR",value:"Rs. "},{label:"USD",value:"$"},{label:"EURO",value:"\u20ac"}].filter((function(t){var n=t.label;return!e||n.toLowerCase().startsWith(e.toLowerCase())})))}),1e3)}))}}}))}var x=l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,l.a.createElement("code",null,"react-associative-select")," supports asynchronous data fetching through optionMapping prop."),l.a.createElement("p",null,"The option mapping is a key-value pair object where the key is a key of schema properties and the value is a function which provides a promise of results. The result is in ",l.a.createElement("code",null,"{label: string, value: T}")," shape.")),N={type:"object",title:"",properties:{supportedCurrencies:{type:"array",title:"Currency",items:{type:"string"},enum:["USD","LKR","EURO"]}}};function w(){return l.a.createElement("div",null,l.a.createElement(y,{schema:N,onChange:function(e){console.log(e)}}))}var T=l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"The properties of type ",l.a.createElement("code",null,"array")," are automatically converted to multi-value field.")),L={type:"object",title:"",properties:{currencyCode:{type:"string",title:"Currency",additionalItems:!1}}};function V(){return l.a.createElement("div",null,l.a.createElement(y,{schema:L,onChange:function(e){console.log(e)},optionMapping:{currencyCode:function(e){return new Promise((function(t){setTimeout((function(){t([{label:"LKR",value:"Rs. "},{label:"USD",value:"$"},{label:"EURO",value:"\u20ac"}].filter((function(t){var n=t.label;return!e||n.toLowerCase().startsWith(e.toLowerCase())})))}),1e3)}))}}}))}var A=l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"By default, arbitrary values are supported in the defined fields except for the fields with enum property. This behavior can be changed by using ",l.a.createElement("code",null,"additionalItems")," json-schema property."),l.a.createElement("p",null,"Arbitrary value support control works well with asynchronous data fetching.")),k=(n(274),n(5)),P=n(29);var M=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(k.c,{className:"sidebar"},l.a.createElement(k.f,null,l.a.createElement("div",{className:"header"},"React Associative Select",l.a.createElement("div",{className:"d-flex align-items-end pt-3"},l.a.createElement(P.a,{href:"https://github.com/tiranuom/react-associative-select","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-size":"large","aria-label":"Watch tiranuom/react-associative-select on GitHub"},"Github Repository")))),l.a.createElement(k.d,null,l.a.createElement(k.a,null,l.a.createElement(k.b,null,l.a.createElement("a",{href:"#intro"},"Introduction")),l.a.createElement(k.b,null,l.a.createElement("a",{href:"#basic-usage"},"Basic Usage")),l.a.createElement(k.b,null,l.a.createElement("a",{href:"#async-usage"},"Async Usage")),l.a.createElement(k.b,null,l.a.createElement("a",{href:"#multi-value-support-usage"},"Multi Value Support")),l.a.createElement(k.b,null,l.a.createElement("a",{href:"#arbitrary-value-support-usage"},"Arbitrary Value Support")),l.a.createElement(k.b,null,l.a.createElement("a",{href:"#validations"},"Validations")),l.a.createElement(k.b,null,l.a.createElement("a",{href:"#json-schema-features"},"Jsonschema Features")),l.a.createElement(k.b,null,l.a.createElement("a",{href:"#styling"},"Styling")),l.a.createElement(k.b,null,l.a.createElement("a",{href:"#limitations"},"Limitations")))),l.a.createElement(k.e,{className:"footer"})),l.a.createElement("div",{className:"container row mp-5"},l.a.createElement("div",{className:"col-md-8 offset-4"},l.a.createElement("section",{id:"intro",className:"mt-5"},l.a.createElement("h3",null,"React Associative Select"),l.a.createElement("p",null,l.a.createElement("code",null,"React-associative-select")," uses ",l.a.createElement("a",{href:"https://react-select.com"},"React Select")," under the hood to provide the select functionality. Kudos for the authors of the great tool."),l.a.createElement("p",null,"Furthermore, the library uses ",l.a.createElement("code",null,"JSONSchema7")," schema format to define the shape of search options. Full JSONSchema7 spec is not supported and the project is in active development to support additional features.")),l.a.createElement("section",{id:"installation"},l.a.createElement("h5",null,"Installation"),l.a.createElement("p",null,"The easiest way to install the react-associative-select is through npm or yarn."),l.a.createElement(c.a,{language:"shell"},"$ npm -i react-associative-select"),l.a.createElement("p",null,"or"),l.a.createElement(c.a,{language:"shell"},"$ yarn add react-associative-select")),l.a.createElement("section",{id:"basic-usage"},l.a.createElement(p,{title:"Basic Usage",description:S,code:'\nimport React from \'react\'\n\nimport { AssociativeSelect } from \'react-associative-select\'\nimport {JSONSchema7} from "json-schema";\n\ninterface Person {\n  name: string\n  age: number\n  gender: "Male" | "Female"\n}\n\nconst schema: JSONSchema7 = {\n  type: "object",\n  title: "",\n  properties: {\n    "name": { type: "string", title: "Name", pattern: \'^[a-zA-Z ]+$\' },\n    "age": { type: "number", title: "Age", minimum: 18, maximum: 60, multipleOf: 1 },\n    "gender": { type: "string", title: "Gender", enum: ["Male", "Female"] }\n  }\n}\n\nexport function BasicExample() {\n\n  function onChange(values: Partial<Person>) {\n    console.log(values)\n  }\n\n  return <AssociativeSelect\n    schema={schema}\n    value={{}}\n    onChange={onChange}\n    className=\'react-associative-select\'\n    classNamePrefix=\'react-associative-select\'\n    styles={{\n      multiValue() {\n        return {\n          borderRadius: 10\n        }\n      }\n    }}\n  />\n}\n'},l.a.createElement(C,null))),l.a.createElement("section",{id:"async-usage"},l.a.createElement(p,{title:"Asynchronous options fetching",description:x,code:'\nimport React from "react";\nimport {AssociativeSelect, OptionType} from "react-associative-select";\nimport {JSONSchema7} from "json-schema";\nimport {OptionsType} from "react-select";\n\ninterface CurrencySelection {\n  currencyCode: string\n}\n\nconst schema: JSONSchema7 = {\n  type: "object",\n  title: "",\n  properties: {\n    "currencyCode": {type: "string", title: "Currency"}\n  }\n}\n\nexport function AsyncOptionFetchingExample() {\n\n  function onQueryChange(e: Partial<CurrencySelection>) {\n    console.log(e)\n  }\n\n  return <div>\n    <AssociativeSelect\n      schema={schema}\n      onChange={onQueryChange}\n      optionMapping={{\n        currencyCode: (text: string | undefined) => new Promise<OptionsType<OptionType<string>>>((resolve) => {\n          setTimeout(() => {\n            let currencies: OptionsType<OptionType<string>> = [{label: "LKR", value: "Rs. "}, {label: "USD", value: "$"}, {label: "EURO", value: "\u20ac"}];\n            resolve(currencies.filter(({label}) => !text || label.toLowerCase().startsWith(text.toLowerCase())));\n          }, 1000)\n        })\n      }}\n    />\n  </div>\n}\n'},l.a.createElement(j,null))),l.a.createElement("section",{id:"multi-value-support-usage"},l.a.createElement(p,{title:"Multi Value Support",description:T,code:'\nimport React from "react";\nimport {AssociativeSelect} from "react-associative-select";\nimport {JSONSchema7} from "json-schema";\n\ninterface CurrencySelection {\n  supportedCurrencies: string[]\n}\n\nconst schema: JSONSchema7 = {\n  type: "object",\n  title: "",\n  properties: {\n    "supportedCurrencies": {type: "array", title: "Currency", items: {type: "string"}, enum: ["USD", "LKR", "EURO"]}\n  }\n}\n\nexport function MultiValueSupport() {\n\n  function onQueryChange(e: Partial<CurrencySelection>) {\n    console.log(e)\n  }\n\n  return <div>\n    <AssociativeSelect\n      schema={schema}\n      onChange={onQueryChange}\n    />\n  </div>\n}\n'},l.a.createElement(w,null))),l.a.createElement("section",{id:"arbitrary-value-support-usage"},l.a.createElement(p,{title:"Arbitrary Support",description:A,code:'\nimport React from "react";\nimport {AssociativeSelect, OptionType} from "react-associative-select";\nimport {JSONSchema7} from "json-schema";\nimport {OptionsType} from "react-select";\n\ninterface CurrencySelection {\n  currencyCode: string\n}\n\nconst schema: JSONSchema7 = {\n  type: "object",\n  title: "",\n  properties: {\n    "currencyCode": {type: "string", title: "Currency", additionalItems: false}\n  }\n}\n\nexport function ArbitraryValueExample() {\n\n  function onQueryChange(e: Partial<CurrencySelection>) {\n    console.log(e)\n  }\n\n  return <div>\n    <AssociativeSelect\n      schema={schema}\n      onChange={onQueryChange}\n      optionMapping={{\n        currencyCode: (text: string | undefined) => new Promise<OptionsType<OptionType<string>>>((resolve) => {\n          setTimeout(() => {\n            let currencies: OptionsType<OptionType<string>> = [{label: "LKR", value: "Rs. "}, {label: "USD", value: "$"}, {label: "EURO", value: "\u20ac"}];\n            resolve(currencies.filter(({label}) => !text || label.toLowerCase().startsWith(text.toLowerCase())));\n          }, 1000)\n        })\n      }}\n    />\n  </div>\n}'},l.a.createElement(V,null))),l.a.createElement("section",{id:"validations"},l.a.createElement("div",{className:"mt-5"},l.a.createElement("h5",null,"Validations"),l.a.createElement("p",null,"Additional validations for the arbitrary values can be implemented based on the data type."),l.a.createElement("table",{className:"table table-bordered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Data Type"),l.a.createElement("th",null,"Property"),l.a.createElement("th",null,"Behavior"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"string"),l.a.createElement("td",null,"pattern"),l.a.createElement("td",null,"A regular expression to validate the input value. ",l.a.createElement("code",null,"eg: ","{..., pattern: '^[a-zA-Z ]+$'}"))),l.a.createElement("tr",null,l.a.createElement("td",null,"string"),l.a.createElement("td",null,"minLength"),l.a.createElement("td",null,"The input should be longer than the given value. ",l.a.createElement("code",null,"eg: ","{..., minLength: 4}"))),l.a.createElement("tr",null,l.a.createElement("td",null,"string"),l.a.createElement("td",null,"maxLength"),l.a.createElement("td",null,"The input should be shorter than the given value. ",l.a.createElement("code",null,"eg: ","{..., maxLength: 10}"))),l.a.createElement("tr",null,l.a.createElement("td",null,"string"),l.a.createElement("td",null,"format"),l.a.createElement("td",null,"TODO")),l.a.createElement("tr",null,l.a.createElement("td",null,"number or integer"),l.a.createElement("td",null,"minimum"),l.a.createElement("td",null,"The minimum inclusive value that the input should confirm to ",l.a.createElement("code",null,"eg: ","{..., minimum: 18}"))),l.a.createElement("tr",null,l.a.createElement("td",null,"number or integer"),l.a.createElement("td",null,"maximum"),l.a.createElement("td",null,"The maximum inclusive value that the input should confirm to ",l.a.createElement("code",null,"eg: ","{..., maximum: 60}"))),l.a.createElement("tr",null,l.a.createElement("td",null,"number or integer"),l.a.createElement("td",null,"multipleOf"),l.a.createElement("td",null,"The value is valid if its a multiply of the given value. ",l.a.createElement("code",null,"eg: ","{..., multipleOf: 1}"))),l.a.createElement("tr",null,l.a.createElement("td",null,"array"),l.a.createElement("td",null,"..."),l.a.createElement("td",null,"TODO")))))),l.a.createElement("section",{id:"json-schema-features"},l.a.createElement("div",{className:"mt-5"},l.a.createElement("h5",null,"Json schema features"),l.a.createElement("h6",{className:"mt-3"},"Schema Composition"),l.a.createElement("p",null,"Schema compositon is not yet supported and we are working on it."),l.a.createElement("h6",null,"References"),l.a.createElement("p",null,"References are not yet supported."))),l.a.createElement("section",{id:"styling"},l.a.createElement("div",{className:"mt-5"},l.a.createElement("h5",null,"Styling and other select properties."),l.a.createElement("p",null,l.a.createElement("code",null,"react-associative-select")," is based on the ",l.a.createElement("code",null,"react-select")," and all the additional properties in ",l.a.createElement("code",null,"react-select")," is supported in ",l.a.createElement("code",null,"react-associative-select"),". Please refer ",l.a.createElement("code",null,"react-select")," documentation for the basic information."))),l.a.createElement("section",{id:"limitations"},l.a.createElement("div",{className:"mt-5"},l.a.createElement("h5",null,"Limitations."),l.a.createElement("p",null,"JSONSchema7 is a comprehensive specification. But the whole specification features are not necessary in selection domain. For time being, only the simple objects are supported. The object may contain simple data types or array of simple data types."),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",{style:{textDecoration:"line-through"}},"primitive type : (Unsupported)"),l.a.createElement(c.a,{language:"typescript"},'const schema = {\n  "type": "string"\n}')),l.a.createElement("li",null,l.a.createElement("p",null,"object : (Supported)"),l.a.createElement(c.a,{language:"typescript"},'const schema = {\n  "type": "object",\n  "properties": {\n    ...\n  }\n}')),l.a.createElement("li",null,l.a.createElement("p",{style:{textDecoration:"line-through"}},"arrays : (Unsupported)"),l.a.createElement(c.a,{language:"typescript"},'const schema = {\n  "type": "array",\n  "items": {\n    "type": "object"\n  }\n}')),l.a.createElement("li",null,l.a.createElement("p",null,"arrays as object properties : (Supported)"),l.a.createElement(c.a,{language:"typescript"},'const schema = {\n  "type": "object",\n  "properties": {\n    "arrProp": {\n      "type": "array",\n      "items": {\n        "type": "string"\n      }\n    }\n  }\n}')),l.a.createElement("li",null,l.a.createElement("p",{style:{textDecoration:"line-through"}},"nested objects : (Unsupported)"),l.a.createElement(c.a,{language:"typescript"},'const schema = {\n  "type": "object",\n  "properties": {\n    "arrProp": {\n      "type": "object",\n      "properties": {\n        "a": {\n          "type": "string"\n        }\n      }\n    }\n  }\n}'))))))),l.a.createElement("footer",{className:"d-flex justify-content-around align-items-center m-2",style:{color:"grey"}},l.a.createElement("small",null,"MIT Licensed. Copyright (c) ",l.a.createElement("a",{href:"https://github.com/tiranuom"},"tiranuom")," 2021"),l.a.createElement("small",null,"Thanks to ",l.a.createElement("a",{href:"https://www.hsenidmobile.com/"},"hSenid Mobile Solutions")," for supporting this project ")))};n(276);i.a.render(l.a.createElement(M,null),document.getElementById("root"))},33:function(e,t,n){e.exports=n(277)},34:function(e,t,n){}},[[33,1,2]]]);
//# sourceMappingURL=main.48218179.chunk.js.map