"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[447],{4020:function(e){var t="%[a-f0-9]{2}",r=new RegExp("("+t+")|([^%]+?)","gi"),n=new RegExp("("+t+")+","gi");function a(e,t){try{return[decodeURIComponent(e.join(""))]}catch(o){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r)||[],n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},a=n.exec(e);a;){try{r[a[0]]=decodeURIComponent(a[0])}catch(t){var s=o(a[0]);s!==a[0]&&(r[a[0]]=s)}a=n.exec(e)}r["%C2"]="�";for(var i=Object.keys(r),c=0;c<i.length;c++){var l=i[c];e=e.replace(new RegExp(l,"g"),r[l])}return e}(e)}}},2806:function(e){e.exports=function(e,t){for(var r={},n=Object.keys(e),a=Array.isArray(t),o=0;o<n.length;o++){var s=n[o],i=e[s];(a?-1!==t.indexOf(s):t(s,i,e))&&(r[s]=i)}return r}},5646:function(e,t,r){r.r(t);var n=r(5785),a=r(7326),o=r(4578),s=r(7294),i=r.n(s),c=r(4854),l=r(7563);let u=function(e){function t(t){var r;r=e.call(this,t)||this;const{data:n,location:o}=r.props,s=n.allSitePage.nodes.map((e=>e.path)),i=l.parse(o.search),c=i.filter?i.filter:"";return r.state={hasMounted:!1,showCustom404:{}.GATSBY_DISABLE_CUSTOM_404||!1,initPagePaths:s,pagePathSearchTerms:c,pagePaths:r.getFilteredPagePaths(s,c)},r.showCustom404=r.showCustom404.bind((0,a.Z)(r)),r.handlePagePathSearch=r.handlePagePathSearch.bind((0,a.Z)(r)),r.handleSearchTermChange=r.handleSearchTermChange.bind((0,a.Z)(r)),r}(0,o.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.setState({hasMounted:!0})},r.showCustom404=function(){this.setState({showCustom404:!0})},r.handleSearchTermChange=function(e){const t=e.target.value;this.setSearchUrl(t),this.setState({pagePathSearchTerms:t})},r.handlePagePathSearch=function(e){e.preventDefault();const t=(0,n.Z)(this.state.initPagePaths);this.setState({pagePaths:this.getFilteredPagePaths(t,this.state.pagePathSearchTerms)})},r.getFilteredPagePaths=function(e,t){const r=new RegExp(""+t);return e.filter((e=>r.test(e)))},r.setSearchUrl=function(e){const{location:{pathname:t,search:r}}=this.props,n=l.parse(r);n.filter=e;const a=l.stringify(n);r!=="?"+a&&(0,c.navigate)(t+"?"+a,{replace:!0})},r.render=function(){if(!this.state.hasMounted)return null;const{pathname:e}=this.props.location;let t,r;return"/"===e?t="src/pages/index.js":"/api"===e.slice(0,4)?r="src"+e+".js":t="/"===e.slice(-1)?"src/pages"+e.slice(0,-1)+".js":"src/pages"+e+".js",this.state.showCustom404?this.props.custom404:i().createElement("div",null,i().createElement("h1",null,"Gatsby.js development 404 page"),i().createElement("p",null,"There's not a page or function yet at"," ",i().createElement("code",null,e)),this.props.custom404?i().createElement("p",null,i().createElement("button",{onClick:this.showCustom404},"Preview custom 404 page")):i().createElement("p",null,"A custom 404 page wasn't detected - if you would like to add one, create a component in your site directory at ",i().createElement("code",null,"src/pages/404.js"),"."),t&&i().createElement("div",null,i().createElement("h2",null,"Create a page at this url"),i().createElement("p",null,"Create a React.js component like the following in your site directory at"," ",'"',i().createElement("code",null,t),'"'," ","and then refresh to show the new page component you created."),i().createElement("pre",{style:{border:"1px solid lightgray",padding:"8px",maxWidth:"80ch",background:"#f3f3f3"}},i().createElement("code",{dangerouslySetInnerHTML:{__html:'import * as React from "react"\n\nexport default function Component () {\n  return "Hello world"\n}'}}))),r&&i().createElement("div",null,i().createElement("h2",null,"Create an API function at this url"),i().createElement("p",null,"Create a javascript file like the following in your site directory at"," ",'"',i().createElement("code",null,r),'"'," ","and refresh to execute the new API function you created."),i().createElement("pre",{style:{border:"1px solid lightgray",padding:"8px",maxWidth:"80ch",background:"#f3f3f3"}},i().createElement("code",{dangerouslySetInnerHTML:{__html:'\nexport default function API (req, res) {\n  res.json({ hello: "world" })\n}'}}))),this.state.initPagePaths.length>0&&i().createElement("div",null,i().createElement("hr",null),i().createElement("p",null,"If you were trying to reach another page or function, perhaps you can find it below."),i().createElement("h2",null,"Functions (",this.props.data.allSiteFunction.nodes.length,")"),i().createElement("ul",null,this.props.data.allSiteFunction.nodes.map((e=>{const t="/api/"+e.functionRoute;return i().createElement("li",{key:t},i().createElement("a",{href:t},t))}))),i().createElement("h2",null,"Pages (",this.state.pagePaths.length!=this.state.initPagePaths.length?this.state.pagePaths.length+"/"+this.state.initPagePaths.length:this.state.initPagePaths.length,")"),i().createElement("form",{onSubmit:this.handlePagePathSearch},i().createElement("label",null,"Search:",i().createElement("input",{type:"text",id:"search",placeholder:"Search pages...",value:this.state.pagePathSearchTerms,onChange:this.handleSearchTermChange})),i().createElement("input",{type:"submit",value:"Submit"})),i().createElement("ul",null,this.state.pagePaths.map(((e,t)=>t<100&&i().createElement("li",{key:e},i().createElement(c.Link,{to:e},e)))),this.state.pagePaths.length>100&&i().createElement("p",{style:{fontWeight:"bold"}},"... and ",this.state.pagePaths.length-100," more."))))},t}(i().Component);t.default=u},7563:function(e,t,r){const n=r(610),a=r(4020),o=r(500),s=r(2806);function i(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function c(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function l(e,t){return t.decode?a(e):e}function u(e){return Array.isArray(e)?e.sort():"object"==typeof e?u(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function p(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function h(e){const t=(e=p(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function d(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function m(e,t){i((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const a="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!a&&l(r,e).includes(e.arrayFormatSeparator);r=o?l(r,e):r;const s=a||o?r.split(e.arrayFormatSeparator).map((t=>l(t,e))):null===r?r:l(r,e);n[t]=s};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const a of e.split("&")){if(""===a)continue;let[e,s]=o(t.decode?a.replace(/\+/g," "):a,"=");s=void 0===s?null:["comma","separator"].includes(t.arrayFormat)?s:l(s,t),r(l(e,t),s,n)}for(const a of Object.keys(n)){const e=n[a];if("object"==typeof e&&null!==e)for(const r of Object.keys(e))e[r]=d(e[r],t);else n[a]=d(e,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=u(r):e[t]=r,e}),Object.create(null))}t.extract=h,t.parse=m,t.stringify=(e,t)=>{if(!e)return"";i((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),"[",a,"]"].join("")]:[...r,[c(t,e),"[",c(a,e),"]=",c(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),"[]"].join("")]:[...r,[c(t,e),"[]=",c(n,e)].join("")];case"comma":case"separator":return t=>(r,n)=>null==n||0===n.length?r:0===r.length?[[c(t,e),"=",c(n,e)].join("")]:[[r,c(n,e)].join(e.arrayFormatSeparator)];default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,c(t,e)]:[...r,[c(t,e),"=",c(n,e)].join("")]}}(t),a={};for(const s of Object.keys(e))r(s)||(a[s]=e[s]);const o=Object.keys(a);return!1!==t.sort&&o.sort(t.sort),o.map((r=>{const a=e[r];return void 0===a?"":null===a?c(r,t):Array.isArray(a)?a.reduce(n(r),[]).join("&"):c(r,t)+"="+c(a,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=o(e,"#");return Object.assign({url:r.split("?")[0]||"",query:m(h(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:l(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0},r);const n=p(e.url).split("?")[0]||"",a=t.extract(e.url),o=t.parse(a,{sort:!1}),s=Object.assign(o,e.query);let i=t.stringify(s,r);i&&(i=`?${i}`);let l=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(l=`#${c(e.fragmentIdentifier,r)}`),`${n}${i}${l}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0},n);const{url:a,query:o,fragmentIdentifier:i}=t.parseUrl(e,n);return t.stringifyUrl({url:a,query:s(o,r),fragmentIdentifier:i},n)},t.exclude=(e,r,n)=>{const a=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,a,n)}},500:function(e){e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},610:function(e){e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}}]);
//# sourceMappingURL=component---cache-dev-404-page-js-aa7a9666830a7212b7a2.js.map