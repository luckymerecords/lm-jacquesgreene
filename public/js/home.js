!function e(t,r,o){function s(i,c){if(!r[i]){if(!t[i]){var a="function"==typeof require&&require;if(!c&&a)return a(i,!0);if(n)return n(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[i]={exports:{}};t[i][0].call(l.exports,function(e){var r=t[i][1][e];return s(r?r:e)},l,l.exports,e,t,r,o)}return r[i].exports}for(var n="function"==typeof require&&require,i=0;i<o.length;i++)s(o[i]);return s}({"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/@artcommacode/q/index.js":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=function(e){return[].slice.call(e)},s=function(e){return e[0]},n=function(e){throw new Error('"'+e+"\" does't exist in the document")},i=function(e){return e?document.body.contains(e)?e:n(e):document},c=r.query=function(e,t){var r=i(t);return o(r.querySelectorAll(e))};r.queryOne=function(e,t){return s(c(e,t))}},{}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/index.js":[function(e,t,r){t.exports=e("./lib/axios")},{"./lib/axios":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/axios.js"}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/adapters/xhr.js":[function(e,t,r){(function(r){"use strict";var o=e("./../utils"),s=e("./../core/settle"),n=e("./../helpers/buildURL"),i=e("./../helpers/parseHeaders"),c=e("./../helpers/isURLSameOrigin"),a=e("../core/createError"),u="undefined"!=typeof window&&window.btoa||e("./../helpers/btoa");t.exports=function(t){return new Promise(function(l,f){var p=t.data,d=t.headers;o.isFormData(p)&&delete d["Content-Type"];var m=new XMLHttpRequest,h="onreadystatechange",y=!1;if("test"===r.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in m||c(t.url)||(m=new window.XDomainRequest,h="onload",y=!0,m.onprogress=function(){},m.ontimeout=function(){}),t.auth){var b=t.auth.username||"",v=t.auth.password||"";d.Authorization="Basic "+u(b+":"+v)}if(m.open(t.method.toUpperCase(),n(t.url,t.params,t.paramsSerializer),!0),m.timeout=t.timeout,m[h]=function(){if(m&&(4===m.readyState||y)&&0!==m.status){var e="getAllResponseHeaders"in m?i(m.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?m.response:m.responseText,o={data:r,status:1223===m.status?204:m.status,statusText:1223===m.status?"No Content":m.statusText,headers:e,config:t,request:m};s(l,f,o),m=null}},m.onerror=function(){f(a("Network Error",t)),m=null},m.ontimeout=function(){f(a("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED")),m=null},o.isStandardBrowserEnv()){var g=e("./../helpers/cookies"),x=(t.withCredentials||c(t.url))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;x&&(d[t.xsrfHeaderName]=x)}if("setRequestHeader"in m&&o.forEach(d,function(e,t){"undefined"==typeof p&&"content-type"===t.toLowerCase()?delete d[t]:m.setRequestHeader(t,e)}),t.withCredentials&&(m.withCredentials=!0),t.responseType)try{m.responseType=t.responseType}catch(e){if("json"!==m.responseType)throw e}"function"==typeof t.onDownloadProgress&&m.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",t.onUploadProgress),void 0===p&&(p=null),m.send(p)})}}).call(this,e("_process"))},{"../core/createError":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/core/createError.js","./../core/settle":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/core/settle.js","./../helpers/btoa":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/btoa.js","./../helpers/buildURL":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/buildURL.js","./../helpers/cookies":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/cookies.js","./../helpers/isURLSameOrigin":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/isURLSameOrigin.js","./../helpers/parseHeaders":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/parseHeaders.js","./../utils":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/utils.js",_process:"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/process/browser.js"}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/axios.js":[function(e,t,r){"use strict";function o(e){var t=new i(e),r=n(i.prototype.request,t);return s.extend(r,i.prototype,t),s.extend(r,t),r}var s=e("./utils"),n=e("./helpers/bind"),i=e("./core/Axios"),c=o();c.Axios=i,c.create=function(e){return o(e)},c.all=function(e){return Promise.all(e)},c.spread=e("./helpers/spread"),t.exports=c,t.exports.default=c},{"./core/Axios":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/core/Axios.js","./helpers/bind":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/bind.js","./helpers/spread":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/spread.js","./utils":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/utils.js"}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/core/Axios.js":[function(e,t,r){"use strict";function o(e){this.defaults=n.merge(s,e),this.interceptors={request:new i,response:new i}}var s=e("./../defaults"),n=e("./../utils"),i=e("./InterceptorManager"),c=e("./dispatchRequest"),a=e("./../helpers/isAbsoluteURL"),u=e("./../helpers/combineURLs");o.prototype.request=function(e){"string"==typeof e&&(e=n.merge({url:arguments[0]},arguments[1])),e=n.merge(s,this.defaults,{method:"get"},e),e.baseURL&&!a(e.url)&&(e.url=u(e.baseURL,e.url));var t=[c,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},n.forEach(["delete","get","head"],function(e){o.prototype[e]=function(t,r){return this.request(n.merge(r||{},{method:e,url:t}))}}),n.forEach(["post","put","patch"],function(e){o.prototype[e]=function(t,r,o){return this.request(n.merge(o||{},{method:e,url:t,data:r}))}}),t.exports=o},{"./../defaults":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/defaults.js","./../helpers/combineURLs":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/combineURLs.js","./../helpers/isAbsoluteURL":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/isAbsoluteURL.js","./../utils":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/utils.js","./InterceptorManager":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/core/InterceptorManager.js","./dispatchRequest":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/core/dispatchRequest.js"}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/core/InterceptorManager.js":[function(e,t,r){"use strict";function o(){this.handlers=[]}var s=e("./../utils");o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){s.forEach(this.handlers,function(t){null!==t&&e(t)})},t.exports=o},{"./../utils":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/utils.js"}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/core/createError.js":[function(e,t,r){"use strict";var o=e("./enhanceError");t.exports=function(e,t,r,s){var n=new Error(e);return o(n,t,r,s)}},{"./enhanceError":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/core/enhanceError.js"}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/core/dispatchRequest.js":[function(e,t,r){(function(r){"use strict";var o=e("./../utils"),s=e("./transformData");t.exports=function(t){t.headers=t.headers||{},t.data=s(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]});var n;return"function"==typeof t.adapter?n=t.adapter:"undefined"!=typeof XMLHttpRequest?n=e("../adapters/xhr"):"undefined"!=typeof r&&(n=e("../adapters/http")),Promise.resolve(t).then(n).then(function(e){return e.data=s(e.data,e.headers,t.transformResponse),e},function(e){return e&&e.response&&(e.response.data=s(e.response.data,e.response.headers,t.transformResponse)),Promise.reject(e)})}}).call(this,e("_process"))},{"../adapters/http":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/adapters/xhr.js","../adapters/xhr":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/adapters/xhr.js","./../utils":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/utils.js","./transformData":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/core/transformData.js",_process:"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/process/browser.js"}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/core/enhanceError.js":[function(e,t,r){"use strict";t.exports=function(e,t,r,o){return e.config=t,r&&(e.code=r),e.response=o,e}},{}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/core/settle.js":[function(e,t,r){"use strict";var o=e("./createError");t.exports=function(e,t,r){var s=r.config.validateStatus;r.status&&s&&!s(r.status)?t(o("Request failed with status code "+r.status,r.config,null,r)):e(r)}},{"./createError":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/core/createError.js"}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/core/transformData.js":[function(e,t,r){"use strict";var o=e("./../utils");t.exports=function(e,t,r){return o.forEach(r,function(r){e=r(e,t)}),e}},{"./../utils":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/utils.js"}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/defaults.js":[function(e,t,r){"use strict";function o(e,t){!s.isUndefined(e)&&s.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s=e("./utils"),n=e("./helpers/normalizeHeaderName"),i=/^\)\]\}',?\n/,c={"Content-Type":"application/x-www-form-urlencoded"};t.exports={transformRequest:[function(e,t){return n(t,"Content-Type"),s.isFormData(e)||s.isArrayBuffer(e)||s.isStream(e)||s.isFile(e)||s.isBlob(e)?e:s.isArrayBufferView(e)?e.buffer:s.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):s.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(i,"");try{e=JSON.parse(e)}catch(e){}}return e}],headers:{common:{Accept:"application/json, text/plain, */*"},patch:s.merge(c),post:s.merge(c),put:s.merge(c)},timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}}},{"./helpers/normalizeHeaderName":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/normalizeHeaderName.js","./utils":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/utils.js"}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/bind.js":[function(e,t,r){"use strict";t.exports=function(e,t){return function(){for(var r=new Array(arguments.length),o=0;o<r.length;o++)r[o]=arguments[o];return e.apply(t,r)}}},{}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/btoa.js":[function(e,t,r){"use strict";function o(){this.message="String contains an invalid character"}function s(e){for(var t,r,s=String(e),i="",c=0,a=n;s.charAt(0|c)||(a="=",c%1);i+=a.charAt(63&t>>8-c%1*8)){if(r=s.charCodeAt(c+=.75),r>255)throw new o;t=t<<8|r}return i}var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",t.exports=s},{}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/buildURL.js":[function(e,t,r){"use strict";function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var s=e("./../utils");t.exports=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(s.isURLSearchParams(t))n=t.toString();else{var i=[];s.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(s.isArray(e)&&(t+="[]"),s.isArray(e)||(e=[e]),s.forEach(e,function(e){s.isDate(e)?e=e.toISOString():s.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))}))}),n=i.join("&")}return n&&(e+=(e.indexOf("?")===-1?"?":"&")+n),e}},{"./../utils":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/utils.js"}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/combineURLs.js":[function(e,t,r){"use strict";t.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},{}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/cookies.js":[function(e,t,r){"use strict";var o=e("./../utils");t.exports=o.isStandardBrowserEnv()?function(){return{write:function(e,t,r,s,n,i){var c=[];c.push(e+"="+encodeURIComponent(t)),o.isNumber(r)&&c.push("expires="+new Date(r).toGMTString()),o.isString(s)&&c.push("path="+s),o.isString(n)&&c.push("domain="+n),i===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},{"./../utils":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/utils.js"}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/isAbsoluteURL.js":[function(e,t,r){"use strict";t.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},{}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/isURLSameOrigin.js":[function(e,t,r){"use strict";var o=e("./../utils");t.exports=o.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(s.setAttribute("href",t),t=s.href),s.setAttribute("href",t),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:"/"===s.pathname.charAt(0)?s.pathname:"/"+s.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a");return t=e(window.location.href),function(r){var s=o.isString(r)?e(r):r;return s.protocol===t.protocol&&s.host===t.host}}():function(){return function(){return!0}}()},{"./../utils":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/utils.js"}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/normalizeHeaderName.js":[function(e,t,r){"use strict";var o=e("../utils");t.exports=function(e,t){o.forEach(e,function(r,o){o!==t&&o.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[o])})}},{"../utils":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/utils.js"}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/parseHeaders.js":[function(e,t,r){"use strict";var o=e("./../utils");t.exports=function(e){var t,r,s,n={};return e?(o.forEach(e.split("\n"),function(e){s=e.indexOf(":"),t=o.trim(e.substr(0,s)).toLowerCase(),r=o.trim(e.substr(s+1)),t&&(n[t]=n[t]?n[t]+", "+r:r)}),n):n}},{"./../utils":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/utils.js"}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/spread.js":[function(e,t,r){"use strict";t.exports=function(e){return function(t){return e.apply(null,t)}}},{}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/utils.js":[function(e,t,r){"use strict";function o(e){return"[object Array]"===S.call(e)}function s(e){return"[object ArrayBuffer]"===S.call(e)}function n(e){return"undefined"!=typeof FormData&&e instanceof FormData}function i(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function c(e){return"string"==typeof e}function a(e){return"number"==typeof e}function u(e){return"undefined"==typeof e}function l(e){return null!==e&&"object"==typeof e}function f(e){return"[object Date]"===S.call(e)}function p(e){return"[object File]"===S.call(e)}function d(e){return"[object Blob]"===S.call(e)}function m(e){return"[object Function]"===S.call(e)}function h(e){return l(e)&&m(e.pipe)}function y(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function b(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function g(e,t){if(null!==e&&"undefined"!=typeof e)if("object"==typeof e||o(e)||(e=[e]),o(e))for(var r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else for(var n in e)e.hasOwnProperty(n)&&t.call(null,e[n],n,e)}function x(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=x(t[r],e):t[r]=e}for(var t={},r=0,o=arguments.length;r<o;r++)g(arguments[r],e);return t}function j(e,t,r){return g(t,function(t,o){r&&"function"==typeof t?e[o]=w(t,r):e[o]=t}),e}var w=e("./helpers/bind"),S=Object.prototype.toString;t.exports={isArray:o,isArrayBuffer:s,isFormData:n,isArrayBufferView:i,isString:c,isNumber:a,isObject:l,isUndefined:u,isDate:f,isFile:p,isBlob:d,isFunction:m,isStream:h,isURLSearchParams:y,isStandardBrowserEnv:v,forEach:g,merge:x,extend:j,trim:b}},{"./helpers/bind":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/lib/helpers/bind.js"}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/process/browser.js":[function(e,t,r){function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function n(e){if(f===setTimeout)return setTimeout(e,0);if((f===o||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(p===clearTimeout)return clearTimeout(e);if((p===s||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function c(){y&&m&&(y=!1,m.length?h=m.concat(h):b=-1,h.length&&a())}function a(){if(!y){var e=n(c);y=!0;for(var t=h.length;t;){for(m=h,h=[];++b<t;)m&&m[b].run();b=-1,t=h.length}m=null,y=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function l(){}var f,p,d=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:o}catch(e){f=o}try{p="function"==typeof clearTimeout?clearTimeout:s}catch(e){p=s}}();var m,h=[],y=!1,b=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];h.push(new u(e,t)),1!==h.length||y||n(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},{}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/umbrellajs/umbrella.min.js":[function(e,t,r){function o(e,t,r,o){r=r||function(){},t=t||{},t.body=t.body||{},t.method=(t.method||"GET").toUpperCase(),t.headers=t.headers||{},t.headers["X-Requested-With"]=t.headers["X-Requested-With"]||"XMLHttpRequest","undefined"!=typeof window.FormData&&t.body instanceof window.FormData||(t.headers["Content-Type"]=t.headers["Content-Type"]||"application/x-www-form-urlencoded"),/json/.test(t.headers["Content-Type"])&&(t.body=JSON.stringify(t.body)),"object"!=typeof t.body||t.body instanceof window.FormData||(t.body=n().param(t.body));var i=new window.XMLHttpRequest;n(i).on("error timeout abort",function(){r(new Error,null,i)}).on("load",function(){var e=/^(4|5)/.test(i.status)?new Error(i.status):null,t=s(i.response)||i.response;return r(e,t,i)}),console.log(t,t.method,e),i.open(t.method,e);for(var c in t.headers)i.setRequestHeader(c,t.headers[c]);return o&&o(i),i.send(t.body),i}function s(e){try{var t=JSON.parse(e);if(t&&"object"==typeof t)return t}catch(e){}return!1}var n=function(e,t){return this instanceof n?e instanceof n?e:("string"==typeof e&&(e=this.select(e,t)),e&&e.nodeName&&(e=[e]),void(this.nodes=this.slice(e))):new n(e,t)};n.prototype={get length(){return this.nodes.length}},n.prototype.nodes=[],n.prototype.addClass=function(){return this.eacharg(arguments,function(e,t){e.classList.add(t)})},n.prototype.adjacent=function(e,t,r){return"number"==typeof t&&(t=0===t?[]:new Array(t).join().split(",").map(Number.call,Number)),this.each(function(o,s){var i=document.createDocumentFragment();n(t||{}).map(function(t,r){var i="function"==typeof e?e.call(this,t,r,o,s):e;return"string"==typeof i?this.generate(i):n(i)}).each(function(e){this.isInPage(e)?i.appendChild(n(e).clone().first()):i.appendChild(e)}),r.call(this,o,i)})},n.prototype.after=function(e,t){return this.adjacent(e,t,function(e,t){e.parentNode.insertBefore(t,e.nextSibling)})},n.prototype.ajax=function(e,t){return this.handle("submit",function(r){o(n(this).attr("action"),{body:n(this).serialize(),method:n(this).attr("method")},e&&e.bind(this),t&&t.bind(this))})},n.prototype.append=function(e,t){return this.adjacent(e,t,function(e,t){e.appendChild(t)})},n.prototype.args=function(e,t,r){return"function"==typeof e&&(e=e(t,r)),"string"!=typeof e&&(e=this.slice(e).map(this.str(t,r))),e.toString().split(/[\s,]+/).filter(function(e){return e.length})},n.prototype.array=function(e){e=e;var t=this;return this.nodes.reduce(function(r,o,s){var i;return e?(i=e.call(t,o,s),i||(i=!1),"string"==typeof i&&(i=n(i)),i instanceof n&&(i=i.nodes)):i=o.innerHTML,r.concat(i!==!1?i:[])},[])},n.prototype.attr=function(e,t,r){if(r=r?"data-":"",void 0!==t){var o=e;e={},e[o]=t}return"object"==typeof e?this.each(function(t){for(var o in e)t.setAttribute(r+o,e[o])}):this.length?this.first().getAttribute(r+e):""},n.prototype.before=function(e,t){return this.adjacent(e,t,function(e,t){e.parentNode.insertBefore(t,e)})},n.prototype.children=function(e){return this.map(function(e){return this.slice(e.children)}).filter(e)},n.prototype.clone=function(){return this.map(function(e,t){var r=e.cloneNode(!0),o=this.getAll(r);return this.getAll(e).each(function(e,t){for(var r in this.mirror)this.mirror[r](e,o.nodes[t])}),r})},n.prototype.getAll=function(e){return n([e].concat(n("*",e).nodes))},n.prototype.mirror={},n.prototype.mirror.events=function(e,t){if(e._e)for(var r in e._e)e._e[r].forEach(function(e){n(t).on(r,e)})},n.prototype.mirror.select=function(e,t){n(e).is("select")&&(t.value=e.value)},n.prototype.mirror.textarea=function(e,t){n(e).is("textarea")&&(t.value=e.value)},n.prototype.closest=function(e){return this.map(function(t){do if(n(t).is(e))return t;while((t=t.parentNode)&&t!==document)})},n.prototype.data=function(e,t){return this.attr(e,t,!0)},n.prototype.each=function(e){return this.nodes.forEach(e.bind(this)),this},n.prototype.eacharg=function(e,t){return this.each(function(r,o){this.args(e,r,o).forEach(function(e){t.call(this,r,e)},this)})},n.prototype.filter=function(e){var t=function(t){return t.matches=t.matches||t.msMatchesSelector||t.webkitMatchesSelector,t.matches(e||"*")};return"function"==typeof e&&(t=e),e instanceof n&&(t=function(t){return-1!==e.nodes.indexOf(t)}),n(this.nodes.filter(t))},n.prototype.find=function(e){return this.map(function(t){return n(e||"*",t)})},n.prototype.first=function(){return this.nodes[0]||!1},n.prototype.generate=function(e){return/^\s*<t(h|r|d)/.test(e)?n(document.createElement("table")).html(e).children().nodes:/^\s*</.test(e)?n(document.createElement("div")).html(e).children().nodes:document.createTextNode(e)},n.prototype.handle=function(){var e=this.slice(arguments).map(function(e){return"function"==typeof e?function(t){t.preventDefault(),e.apply(this,arguments)}:e},this);return this.on.apply(this,e)},n.prototype.hasClass=function(){return this.is("."+this.args(arguments).join("."))},n.prototype.html=function(e){return void 0===e?this.first().innerHTML||"":this.each(function(t){t.innerHTML=e})},n.prototype.is=function(e){return this.filter(e).length>0},n.prototype.isInPage=function(e){return e!==document.body&&document.body.contains(e)},n.prototype.last=function(){return this.nodes[this.length-1]||!1},n.prototype.map=function(e){return e?n(this.array(e)).unique():this},n.prototype.not=function(e){return this.filter(function(t){return!n(t).is(e||!0)})},n.prototype.off=function(e){return this.eacharg(e,function(e,t){n(e._e?e._e[t]:[]).each(function(r){e.removeEventListener(t,r)})})},n.prototype.on=function(e,t,r){if("string"==typeof t){var o=t;t=function(e){var t=arguments;n(e.currentTarget).find(o).each(function(o){(o===e.target||o.contains(e.target))&&(Object.defineProperty(e,"currentTarget",{get:function(){return o}}),r.apply(o,t))})}}var s=function(e){return t.apply(this,[e].concat(e.detail||[]))};return this.eacharg(e,function(e,t){e.addEventListener(t,s),e._e=e._e||{},e._e[t]=e._e[t]||[],e._e[t].push(s)})},n.prototype.param=function(e){return Object.keys(e).map(function(t){return this.uri(t)+"="+this.uri(e[t])}.bind(this)).join("&")},n.prototype.parent=function(e){return this.map(function(e){return e.parentNode}).filter(e)},n.prototype.prepend=function(e,t){return this.adjacent(e,t,function(e,t){e.insertBefore(t,e.firstChild)})},n.prototype.remove=function(){return this.each(function(e){e.parentNode.removeChild(e)})},n.prototype.removeClass=function(){return this.eacharg(arguments,function(e,t){e.classList.remove(t)})},n.prototype.replace=function(e,t){var r=[];return this.adjacent(e,t,function(e,t){r=r.concat(this.slice(t.children)),e.parentNode.replaceChild(t,e)}),n(r)},n.prototype.scroll=function(){return this.first().scrollIntoView({behavior:"smooth"}),this},n.prototype.select=function(e,t){if(e=e.replace(/^\s*/,"").replace(/\s*$/,""),t)return this.select.byCss(e,t);for(var r in this.selectors)if(t=r.split("/"),new RegExp(t[1],t[2]).test(e))return this.selectors[r](e);return this.select.byCss(e)},n.prototype.select.byCss=function(e,t){return(t||document).querySelectorAll(e)},n.prototype.selectors={},n.prototype.selectors[/^\.[\w\-]+$/]=function(e){return document.getElementsByClassName(e.substring(1))},n.prototype.selectors[/^\w+$/]=function(e){return document.getElementsByTagName(e)},n.prototype.selectors[/^\#[\w\-]+$/]=function(e){return document.getElementById(e.substring(1))},n.prototype.selectors[/^</]=function(e){return n().generate(e)},n.prototype.serialize=function(){var e=this;return this.slice(this.first().elements).reduce(function(t,r){return!r.name||r.disabled||"file"===r.type?t:/(checkbox|radio)/.test(r.type)&&!r.checked?t:"select-multiple"===r.type?(n(r.options).each(function(o){o.selected&&(t+="&"+e.uri(r.name)+"="+e.uri(o.value))}),t):t+"&"+e.uri(r.name)+"="+e.uri(r.value)},"").slice(1)},n.prototype.siblings=function(e){return this.parent().children(e).not(this)},n.prototype.size=function(){return this.first().getBoundingClientRect()},n.prototype.slice=function(e){return e&&0!==e.length&&"string"!=typeof e&&"[object Function]"!==e.toString()?e.length?[].slice.call(e.nodes||e):[e]:[]},n.prototype.str=function(e,t){return function(r){return"function"==typeof r?r.call(this,e,t):r.toString()}},n.prototype.text=function(e){return void 0===e?this.first().textContent||"":this.each(function(t){t.textContent=e})},n.prototype.toggleClass=function(e,t){return!!t===t?this[t?"addClass":"removeClass"](e):this.eacharg(e,function(e,t){e.classList.toggle(t)})},n.prototype.trigger=function(e){var t=this.slice(arguments).slice(1);return this.eacharg(e,function(e,r){var o,s={bubbles:!0,cancelable:!0,detail:t};try{o=new window.CustomEvent(r,s)}catch(e){o=document.createEvent("CustomEvent"),o.initCustomEvent(r,!0,!0,t)}e.dispatchEvent(o)})},n.prototype.unique=function(){return n(this.nodes.reduce(function(e,t){var r=null!==t&&void 0!==t&&t!==!1;return r&&-1===e.indexOf(t)?e.concat(t):e},[]))},n.prototype.uri=function(e){return encodeURIComponent(e).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")},n.prototype.wrap=function(e){function t(e){for(;e.firstElementChild;)e=e.firstElementChild;return n(e)}return this.map(function(r){return n(e).each(function(e){t(e).append(r.cloneNode(!0)),r.parentNode.replaceChild(e,r)})})},"object"==typeof t&&t.exports&&(t.exports={u:n,ajax:o})},{}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/src/js/components/Embeds.js":[function(e,t,r){"use strict";var o=e("@artcommacode/q"),s=e("umbrellajs"),n={embeds:[],init:function(){var e=this.embeds;(0,o.query)(".embed-placeholder").map(function(t){var r={};r.element=(0,s.u)(t),r.container=(0,s.u)(t.parentNode),r.src=r.element.attr("data-src"),e.push(r)}),this.bindPlaceholders()},bindPlaceholders:function(){for(var e=this,t=function(t){var r=e.embeds[t];r.element.on("click",function(){return e.swapEmbed(r)})},r=0;r<this.embeds.length;r++)t(r)},swapEmbed:function(e){e.element.off("click");var t=e.src;t+="?"===t.charAt(t.length)?"":"?",t+=t.match("&autoplay=1")?"":"&autoplay=1",t+=t.match("&controls=0")?"":"&controls=0",t+=t.match("&rel=0")?"":"&rel=0";var r=(0,s.u)("<iframe>").attr({src:t,frameborder:0,class:"swapped-embed",width:650});e.element.addClass("loading"),setTimeout(function(){e.element.addClass("loaded")},900),e.container.append(r)}};window.addEventListener("load",n.init())},{"@artcommacode/q":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/@artcommacode/q/index.js",umbrellajs:"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/umbrellajs/umbrella.min.js"}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/src/js/components/Fade.js":[function(e,t,r){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var s=e("./Helpers.js"),n=o(s),i=e("@artcommacode/q"),c={elements:[],init:function(){var e=this;(0,i.query)(".scrollfade").map(function(t,r){var o={};o.index=r,o.element=t,o.visible=!1,o.delay=Math.floor(300*Math.random())+50,e.elements.push(o)})},watch:function(){function e(){var t=c.elements.filter(function(e){return e.visible});t.length===c.elements.length&&window.addEventListener("scroll",e);var r=!0,o=!1,s=void 0;try{for(var i,a=function(){var e=i.value;n.isInView(e.element,.25)&&(setTimeout(function(){e.element.classList.add("fade-in")},e.delay),e.visible=!0)},u=c.elements[Symbol.iterator]();!(r=(i=u.next()).done);r=!0)a()}catch(e){o=!0,s=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw s}}}e(),window.addEventListener("scroll",e)}};document.addEventListener("DOMContentLoaded",c.init()),window.onload=c.watch()},{"./Helpers.js":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/src/js/components/Helpers.js","@artcommacode/q":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/@artcommacode/q/index.js"}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/src/js/components/Geo.js":[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var s=e("axios"),n=o(s),i=e("@artcommacode/q");n.default.get("http://ipinfo.io/").then(function(e){
var t="US"===e.data.country?"geo-us":"geo-eu";(0,i.queryOne)("body").classList.add(t)})},{"@artcommacode/q":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/@artcommacode/q/index.js",axios:"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/axios/index.js"}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/src/js/components/Helpers.js":[function(e,t,r){"use strict";function o(e){var t=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=e,o=e.top?e.top:r.getBoundingClientRect().top,s=e.bottom?e.bottom:o+r.offsetHeight,n=r.offsetHeight*t,i=window.innerHeight,c=document.documentElement.scrollTop;return!(c>s-n||c+i<o+n)}Object.defineProperty(r,"__esModule",{value:!0}),r.isInView=o},{}],"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/src/js/home.js":[function(e,t,r){"use strict";var o=e("@artcommacode/q");e("./components/Embeds.js"),e("./components/Fade.js"),e("./components/Geo.js");var s=(0,o.queryOne)("body");window.addEventListener("load",setTimeout(function(){return s.classList.add("loaded")},1e3))},{"./components/Embeds.js":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/src/js/components/Embeds.js","./components/Fade.js":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/src/js/components/Fade.js","./components/Geo.js":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/src/js/components/Geo.js","@artcommacode/q":"/Users/Joseph/Sites/luckyme/eclairfifi.com/html/node_modules/@artcommacode/q/index.js"}]},{},["/Users/Joseph/Sites/luckyme/eclairfifi.com/html/src/js/home.js"]);
//# sourceMappingURL=home.js.map
