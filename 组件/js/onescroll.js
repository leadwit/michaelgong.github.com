// Zepto 1.1.6 (generated with Zepto Builder) - zepto event ajax detect - zeptojs.com/license
var Zepto=function(){function t(t){return null==t?String(t):X[U.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return A.call(t,function(t){return null!=t})}function c(t){return t.length>0?T.fn.concat.apply([],t):t}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in $?$[t]:$[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||D[u(t)]?e:e+"px"}function h(t){var e,n;return L[t]||(e=k.createElement(t),k.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),L[t]=n),L[t]}function p(t){return"children"in t?M.call(t.children):T.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function m(t,e,n){for(S in e)n&&(o(e[S])||Q(e[S]))?(o(e[S])&&!o(t[S])&&(t[S]={}),Q(e[S])&&!Q(t[S])&&(t[S]=[]),m(t[S],e[S],n)):e[S]!==E&&(t[S]=e[S])}function v(t,e){return null==e?T(t):T(t).filter(e)}function g(t,n,r,i){return e(n)?n.call(t,r,i):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function b(t,e){var n=t.className||"",r=n&&n.baseVal!==E;return e===E?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function x(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?T.parseJSON(t):t):t}catch(e){return t}}function w(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)w(t.childNodes[n],e)}var E,S,T,j,O,C,P=[],N=P.concat,A=P.filter,M=P.slice,k=window.document,L={},$={},D={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},Z=/^\s*<(\w+|!)[^>]*>/,_=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,F=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,R=/^(?:body|html)$/i,B=/([A-Z])/g,q=["val","css","html","text","data","width","height","offset"],V=["after","prepend","before","append"],z=k.createElement("table"),H=k.createElement("tr"),I={tr:k.createElement("tbody"),tbody:z,thead:z,tfoot:z,td:H,th:H,"*":k.createElement("div")},W=/complete|loaded|interactive/,J=/^[\w-]*$/,X={},U=X.toString,K={},Y=k.createElement("div"),G={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Q=Array.isArray||function(t){return t instanceof Array};return K.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=Y).appendChild(t),r=~K.qsa(i,e).indexOf(t),o&&Y.removeChild(t),r},O=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(t){return A.call(t,function(e,n){return t.indexOf(e)==n})},K.fragment=function(t,e,n){var r,i,a;return _.test(t)&&(r=T(k.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(F,"<$1></$2>")),e===E&&(e=Z.test(t)&&RegExp.$1),e in I||(e="*"),a=I[e],a.innerHTML=""+t,r=T.each(M.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(i=T(r),T.each(n,function(t,e){q.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},K.Z=function(t,e){return new d(t,e)},K.isZ=function(t){return t instanceof K.Z},K.init=function(t,n){var r;if(!t)return K.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&Z.test(t))r=K.fragment(t,RegExp.$1,n),t=null;else{if(n!==E)return T(n).find(t);r=K.qsa(k,t)}else{if(e(t))return T(k).ready(t);if(K.isZ(t))return t;if(Q(t))r=s(t);else if(i(t))r=[t],t=null;else if(Z.test(t))r=K.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==E)return T(n).find(t);r=K.qsa(k,t)}}return K.Z(r,t)},T=function(t,e){return K.init(t,e)},T.extend=function(t){var e,n=M.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){m(t,n,e)}),t},K.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,a=J.test(o);return t.getElementById&&a&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:M.call(a&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},T.contains=k.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},T.type=t,T.isFunction=e,T.isWindow=n,T.isArray=Q,T.isPlainObject=o,T.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},T.inArray=function(t,e,n){return P.indexOf.call(e,t,n)},T.camelCase=O,T.trim=function(t){return null==t?"":String.prototype.trim.call(t)},T.uuid=0,T.support={},T.expr={},T.noop=function(){},T.map=function(t,e){var n,r,i,o=[];if(a(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&o.push(n);else for(i in t)n=e(t[i],i),null!=n&&o.push(n);return c(o)},T.each=function(t,e){var n,r;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},T.grep=function(t,e){return A.call(t,e)},window.JSON&&(T.parseJSON=JSON.parse),T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){X["[object "+e+"]"]=e.toLowerCase()}),T.fn={constructor:K.Z,length:0,forEach:P.forEach,reduce:P.reduce,push:P.push,sort:P.sort,splice:P.splice,indexOf:P.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=K.isZ(e)?e.toArray():e;return N.apply(K.isZ(this)?this.toArray():this,n)},map:function(t){return T(T.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return T(M.apply(this,arguments))},ready:function(t){return W.test(k.readyState)&&k.body?t(T):k.addEventListener("DOMContentLoaded",function(){t(T)},!1),this},get:function(t){return t===E?M.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return P.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):T(A.call(this,function(e){return K.matches(e,t)}))},add:function(t,e){return T(C(this.concat(T(t,e))))},is:function(t){return this.length>0&&K.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==E)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):a(t)&&e(t.item)?M.call(t):T(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return T(n)},has:function(t){return this.filter(function(){return i(t)?T.contains(this,t):T(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:T(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:T(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?T(t).filter(function(){var t=this;return P.some.call(n,function(e){return T.contains(e,t)})}):1==this.length?T(K.qsa(this[0],t)):this.map(function(){return K.qsa(this,t)}):T()},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=T(t));n&&!(i?i.indexOf(n)>=0:K.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return T(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=T.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return v(e,t)},parent:function(t){return v(C(this.pluck("parentNode")),t)},children:function(t){return v(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||M.call(this.childNodes)})},siblings:function(t){return v(this.map(function(t,e){return A.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return T.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=T(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){T(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){T(this[0]).before(t=T(t));for(var e;(e=t.children()).length;)t=e.first();T(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=T(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){T(this).replaceWith(T(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=T(this);(t===E?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return T(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return T(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;T(this).empty().append(g(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=g(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(i(t))for(S in t)y(this,S,t[S]);else y(this,t,g(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:E},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){y(this,t)},this)})},prop:function(t,e){return t=G[t]||t,1 in arguments?this.each(function(n){this[t]=g(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(B,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?x(r):E},val:function(t){return 0 in arguments?this.each(function(e){this.value=g(this,t,e,this.value)}):this[0]&&(this[0].multiple?T(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=T(this),r=g(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;if(!T.contains(k.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r,i=this[0];if(!i)return;if(r=getComputedStyle(i,""),"string"==typeof e)return i.style[O(e)]||r.getPropertyValue(e);if(Q(e)){var o={};return T.each(e,function(t,e){o[e]=i.style[O(e)]||r.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=u(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(u(e))});else for(S in e)e[S]||0===e[S]?a+=u(S)+":"+f(S,e[S])+";":this.each(function(){this.style.removeProperty(u(S))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(T(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?P.some.call(this,function(t){return this.test(b(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){j=[];var n=b(this),r=g(this,t,e,n);r.split(/\s+/g).forEach(function(t){T(this).hasClass(t)||j.push(t)},this),j.length&&b(this,n+(n?" ":"")+j.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===E)return b(this,"");j=b(this),g(this,t,e,j).split(/\s+/g).forEach(function(t){j=j.replace(l(t)," ")}),b(this,j.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=T(this),i=g(this,t,n,b(this));i.split(/\s+/g).forEach(function(t){(e===E?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===E?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===E?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=R.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(T(t).css("margin-top"))||0,n.left-=parseFloat(T(t).css("margin-left"))||0,r.top+=parseFloat(T(e[0]).css("border-top-width"))||0,r.left+=parseFloat(T(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||k.body;t&&!R.test(t.nodeName)&&"static"==T(t).css("position");)t=t.offsetParent;return t})}},T.fn.detach=T.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});T.fn[t]=function(i){var o,a=this[0];return i===E?n(a)?a["inner"+e]:r(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=T(this),a.css(t,g(this,i,e,a[t]()))})}}),V.forEach(function(e,n){var r=n%2;T.fn[e]=function(){var e,i,o=T.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:K.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=T.contains(k.documentElement,i);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!i)return T(t).remove();i.insertBefore(t,e),s&&w(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},T.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return T(t)[e](this),this}}),K.Z.prototype=d.prototype=T.fn,K.uniq=C,K.deserializeValue=x,T.zepto=K,T}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function n(t,n,r,i){return t.global?e(n||y,r,i):void 0}function r(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;return e.beforeSend.call(r,t,e)===!1||n(e,r,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,r,"ajaxSend",[t,e])}function a(t,e,r,i){var o=r.context,a="success";r.success.call(o,t,a,e),i&&i.resolveWith(o,[t,a,e]),n(r,o,"ajaxSuccess",[e,r,t]),c(a,e,r)}function s(t,e,r,i,o){var a=i.context;i.error.call(a,r,e,t),o&&o.rejectWith(a,[r,e,t]),n(i,a,"ajaxError",[r,i,t||e]),c(e,r,i)}function c(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==S?"html":t==E?"json":x.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}function d(e,n,r,i){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,c){o=t.type(c),i&&(n=r?i:i+"["+(s||"object"==o||"array"==o?n:"")+"]"),!i&&a?e.add(c.name,c.value):"array"==o||!r&&"object"==o?d(e,c,r,n):e.add(n,c)})}var m,v,g=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,E="application/json",S="text/html",T=/^\s*$/,j=y.createElement("a");j.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var r,i,c=e.jsonpCallback,u=(t.isFunction(c)?c():c)||"jsonp"+ ++g,l=y.createElement("script"),f=window[u],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,c){clearTimeout(i),t(l).off().remove(),"error"!=o.type&&r?a(r[0],p,e,n):s(null,c||"error",p,e,n),window[u]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}),o(p,e)===!1?(h("abort"),p):(window[u]=function(){r=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+u),y.head.appendChild(l),e.timeout>0&&(i=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:S,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,i,c=t.extend({},e||{}),p=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===c[m]&&(c[m]=t.ajaxSettings[m]);r(c),c.crossDomain||(n=y.createElement("a"),n.href=c.url,n.href=n.href,c.crossDomain=j.protocol+"//"+j.host!=n.protocol+"//"+n.host),c.url||(c.url=window.location.toString()),(i=c.url.indexOf("#"))>-1&&(c.url=c.url.slice(0,i)),h(c);var d=c.dataType,g=/\?.+=\?/.test(c.url);if(g&&(d="jsonp"),c.cache!==!1&&(e&&e.cache===!0||"script"!=d&&"jsonp"!=d)||(c.url=f(c.url,"_="+Date.now())),"jsonp"==d)return g||(c.url=f(c.url,c.jsonp?c.jsonp+"=?":c.jsonp===!1?"":"callback=?")),t.ajaxJSONP(c,p);var b,x=c.accepts[d],w={},E=function(t,e){w[t.toLowerCase()]=[t,e]},S=/^([\w-]+:)\/\//.test(c.url)?RegExp.$1:window.location.protocol,O=c.xhr(),C=O.setRequestHeader;if(p&&p.promise(O),c.crossDomain||E("X-Requested-With","XMLHttpRequest"),E("Accept",x||"*/*"),(x=c.mimeType||x)&&(x.indexOf(",")>-1&&(x=x.split(",",2)[0]),O.overrideMimeType&&O.overrideMimeType(x)),(c.contentType||c.contentType!==!1&&c.data&&"GET"!=c.type.toUpperCase())&&E("Content-Type",c.contentType||"application/x-www-form-urlencoded"),c.headers)for(v in c.headers)E(v,c.headers[v]);if(O.setRequestHeader=E,O.onreadystatechange=function(){if(4==O.readyState){O.onreadystatechange=u,clearTimeout(b);var e,n=!1;if(O.status>=200&&O.status<300||304==O.status||0==O.status&&"file:"==S){d=d||l(c.mimeType||O.getResponseHeader("content-type")),e=O.responseText;try{"script"==d?(1,eval)(e):"xml"==d?e=O.responseXML:"json"==d&&(e=T.test(e)?null:t.parseJSON(e))}catch(r){n=r}n?s(n,"parsererror",O,c,p):a(e,O,c,p)}else s(O.statusText||null,O.status?"error":"abort",O,c,p)}},o(O,c)===!1)return O.abort(),s(null,"abort",O,c,p),O;if(c.xhrFields)for(v in c.xhrFields)O[v]=c.xhrFields[v];var P="async"in c?c.async:!0;O.open(c.type,c.url,P,c.username,c.password);for(v in w)C.apply(O,w[v]);return c.timeout>0&&(b=setTimeout(function(){O.onreadystatechange=u,O.abort(),s(null,"timeout",O,c,p)},c.timeout)),O.send(c.data?c.data:null),O},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,a=e.split(/\s/),s=p(e,n,r),c=s.success;return a.length>1&&(s.url=a[0],i=a[1]),s.success=function(e){o.html(i?t("<div>").html(e.replace(b,"")).find(i):e),c&&c.apply(o,arguments)},t.ajax(s),this};var O=encodeURIComponent;t.param=function(e,n){var r=[];return r.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(O(e)+"="+O(n))},d(r,e,n),r.join("&").replace(/%20/g,"+")}}(Zepto),function(t){function e(t,e){var n=this.os={},r=this.browser={},i=t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),o=t.match(/(Android);?[\s\/]+([\d.]+)?/),a=!!t.match(/\(Macintosh\; Intel /),s=t.match(/(iPad).*OS\s([\d_]+)/),c=t.match(/(iPod)(.*OS\s([\d_]+))?/),u=!s&&t.match(/(iPhone\sOS)\s([\d_]+)/),l=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),f=/Win\d{2}|Windows/.test(e),h=t.match(/Windows Phone ([\d.]+)/),p=l&&t.match(/TouchPad/),d=t.match(/Kindle\/([\d.]+)/),m=t.match(/Silk\/([\d._]+)/),v=t.match(/(BlackBerry).*Version\/([\d.]+)/),g=t.match(/(BB10).*Version\/([\d.]+)/),y=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),b=t.match(/PlayBook/),x=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),w=t.match(/Firefox\/([\d.]+)/),E=t.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),S=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),T=!x&&t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),j=T||t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);(r.webkit=!!i)&&(r.version=i[1]),o&&(n.android=!0,n.version=o[2]),u&&!c&&(n.ios=n.iphone=!0,n.version=u[2].replace(/_/g,".")),s&&(n.ios=n.ipad=!0,n.version=s[2].replace(/_/g,".")),c&&(n.ios=n.ipod=!0,n.version=c[3]?c[3].replace(/_/g,"."):null),h&&(n.wp=!0,n.version=h[1]),l&&(n.webos=!0,n.version=l[2]),p&&(n.touchpad=!0),v&&(n.blackberry=!0,n.version=v[2]),g&&(n.bb10=!0,n.version=g[2]),y&&(n.rimtabletos=!0,n.version=y[2]),b&&(r.playbook=!0),d&&(n.kindle=!0,n.version=d[1]),m&&(r.silk=!0,r.version=m[1]),!m&&n.android&&t.match(/Kindle Fire/)&&(r.silk=!0),x&&(r.chrome=!0,r.version=x[1]),w&&(r.firefox=!0,r.version=w[1]),E&&(n.firefoxos=!0,n.version=E[1]),S&&(r.ie=!0,r.version=S[1]),j&&(a||n.ios||f)&&(r.safari=!0,n.ios||(r.version=j[1])),T&&(r.webview=!0),n.tablet=!!(s||b||o&&!t.match(/Mobile/)||w&&t.match(/Tablet/)||S&&!t.match(/Phone/)&&t.match(/Touch/)),n.phone=!(n.tablet||n.ipod||!(o||u||l||v||g||x&&t.match(/Android/)||x&&t.match(/CriOS\/([\d.]+)/)||w&&t.match(/Mobile/)||S&&t.match(/Touch/)))}e.call(t,navigator.userAgent,navigator.platform),t.__detect=e}(Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=r(n),n.ns)var s=i(n.ns);return(v[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||o&&e(t.fn)!==e(o)||a&&t.sel!=a)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in b||!!e}function a(t){return x[t]||y&&b[t]||t}function s(n,i,s,c,l,h,p){var d=e(n),m=v[d]||(v[d]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var i=r(e);i.fn=s,i.sel=l,i.e in x&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?i.fn.apply(this,arguments):void 0}),i.del=h;var d=h||s;i.proxy=function(t){if(t=u(t),!t.isImmediatePropagationStopped()){t.data=c;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},i.i=m.length,m.push(i),"addEventListener"in n&&n.addEventListener(a(i.e),i.proxy,o(i,p))})}function c(t,r,i,s,c){var u=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,s).forEach(function(e){delete v[u][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,c))})})}function u(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(T,function(t,r){var i=n[t];e[t]=function(){return this[r]=w,i&&i.apply(n,arguments)},e[r]=E}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function l(t){var e,n={originalEvent:t};for(e in t)S.test(e)||t[e]===f||(n[e]=t[e]);return u(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,b={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:s,remove:c},t.proxy=function(n,r){var i=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(r,i?i.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(r))return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var w=function(){return!0},E=function(){return!1},S=/^([A-Z]|returnValue$|layer[XY]$)/,T={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,o){var a,u,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,r,e,o)}),h):(m(n)||d(i)||i===!1||(i=r,r=n,n=f),(i===f||r===!1)&&(i=r,r=f),i===!1&&(i=E),h.each(function(f,h){o&&(a=function(t){return c(h,t.type,i),i.apply(this,arguments)}),n&&(u=function(e){var r,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(r=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||i).apply(o,[r].concat(p.call(arguments,1)))):void 0}),s(h,e,i,r,n,u||a)}))},t.fn.off=function(e,n,r){var i=this;return e&&!m(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(m(n)||d(r)||r===!1||(r=n,n=f),r===!1&&(r=E),i.each(function(){c(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):u(e),e._args=n,this.each(function(){e.type in b&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(a,s){i=l(m(e)?t.Event(e):e),i._args=r,i.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),u(n)}}(Zepto);
/**
 * tap.js
 */
(function( window ) {
    var Tap = {};

    var utils = {};

    utils.attachEvent = function(element, eventName, callback) {
        if ('addEventListener' in window) {
            return element.addEventListener(eventName, callback, false);
        }
    };

    utils.fireFakeEvent = function(e, eventName) {
        if (document.createEvent) {
            return e.target.dispatchEvent(utils.createEvent(eventName));
        }
    };

    utils.createEvent = function(name) {
        if (document.createEvent) {
            var evnt = window.document.createEvent('HTMLEvents');

            evnt.initEvent(name, true, true);
            evnt.eventName = name;

            return evnt;
        }
    };

    utils.getRealEvent = function(e) {
        if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length) {
            return e.originalEvent.touches[0];
        } else if (e.touches && e.touches.length) {
            return e.touches[0];
        }

        return e;
    };

    var eventMatrix = [{
        // Touchable devices
        test: ('propertyIsEnumerable' in window || 'hasOwnProperty' in document) && (window.propertyIsEnumerable('ontouchstart') || document.hasOwnProperty('ontouchstart')),
        events: {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend'
        }
    }, {
        // IE10
        test: window.navigator.msPointerEnabled,
        events: {
            start: 'MSPointerDown',
            move: 'MSPointerMove',
            end: 'MSPointerUp'
        }
    }, {
        // Modern device agnostic web
        test: window.navigator.pointerEnabled,
        events: {
            start: 'pointerdown',
            move: 'pointermove',
            end: 'pointerup'
        }
    }];

    Tap.options = {
        eventName: 'tap',
        fingerMaxOffset: 11
    };

    var attachDeviceEvent, init, handlers, deviceEvents,
        coords = {};

    attachDeviceEvent = function(eventName) {
        return utils.attachEvent(document.documentElement, deviceEvents[eventName], handlers[eventName]);
    };

    handlers = {
        start: function(e) {
            e = utils.getRealEvent(e);

            coords.start = [e.pageX, e.pageY];
            coords.offset = [0, 0];
        },

        move: function(e) {
            if (!coords.start && !coords.move) {
                return false;
            }

            e = utils.getRealEvent(e);

            coords.move = [e.pageX, e.pageY];
            coords.offset = [
                Math.abs(coords.move[0] - coords.start[0]),
                Math.abs(coords.move[1] - coords.start[1])
            ];
        },

        end: function(e) {
            e = utils.getRealEvent(e);

            if (coords.offset[0] < Tap.options.fingerMaxOffset && coords.offset[1] < Tap.options.fingerMaxOffset && !utils.fireFakeEvent(e, Tap.options.eventName)) {
                // Windows Phone 8.0 trigger `click` after `pointerup` firing
                // #16 https://github.com/pukhalski/tap/issues/16
                if (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) {
                    var preventDefault = function(clickEvent) {
                        clickEvent.preventDefault();
                        e.target.removeEventListener('click', preventDefault);
                    };

                    e.target.addEventListener('click', preventDefault, false);
                }

                e.preventDefault();
            }

            coords = {};
        },

        click: function(e) {
            if (!utils.fireFakeEvent(e, Tap.options.eventName)) {
                return e.preventDefault();
            }
        },

        emulatedTap: function( e ) {
            if ( coords.offset ) {
                utils.fireFakeEvent( e, Tap.options.eventName );
            }

            return e.preventDefault();
        }
    };

    init = function() {
        var i = 0;

        for (; i < eventMatrix.length; i++) {
            if (eventMatrix[i].test) {
                deviceEvents = eventMatrix[i].events;

                attachDeviceEvent('start');
                attachDeviceEvent('move');
                attachDeviceEvent('end');
                utils.attachEvent(document.documentElement, 'click', handlers['emulatedTap']);

                return false;
            }
        }

        return utils.attachEvent(document.documentElement, 'click', handlers.click);
    };

    utils.attachEvent(window, 'load', init);

    if (typeof define === 'function' && define.amd) {
        define(function() {
            init();

            return Tap;
        });
    } else {
        window.Tap = Tap;
    }

})( window );

/*!art-template - Template Engine | http://aui.github.com/artTemplate/*/
!function(){function a(a){return a.replace(t,"").replace(u,",").replace(v,"").replace(w,"").replace(x,"").split(y)}function b(a){return"'"+a.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function c(c,d){function e(a){return m+=a.split(/\n/).length-1,k&&(a=a.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")),a&&(a=s[1]+b(a)+s[2]+"\n"),a}function f(b){var c=m;if(j?b=j(b,d):g&&(b=b.replace(/\n/g,function(){return m++,"$line="+m+";"})),0===b.indexOf("=")){var e=l&&!/^=[=#]/.test(b);if(b=b.replace(/^=[=#]?|[\s;]*$/g,""),e){var f=b.replace(/\s*\([^\)]+\)/,"");n[f]||/^(include|print)$/.test(f)||(b="$escape("+b+")")}else b="$string("+b+")";b=s[1]+b+s[2]}return g&&(b="$line="+c+";"+b),r(a(b),function(a){if(a&&!p[a]){var b;b="print"===a?u:"include"===a?v:n[a]?"$utils."+a:o[a]?"$helpers."+a:"$data."+a,w+=a+"="+b+",",p[a]=!0}}),b+"\n"}var g=d.debug,h=d.openTag,i=d.closeTag,j=d.parser,k=d.compress,l=d.escape,m=1,p={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},q="".trim,s=q?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],t=q?"$out+=text;return $out;":"$out.push(text);",u="function(){var text=''.concat.apply('',arguments);"+t+"}",v="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+t+"}",w="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(g?"$line=0,":""),x=s[0],y="return new String("+s[3]+");";r(c.split(h),function(a){a=a.split(i);var b=a[0],c=a[1];1===a.length?x+=e(b):(x+=f(b),c&&(x+=e(c)))});var z=w+x+y;g&&(z="try{"+z+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+b(c)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{var A=new Function("$data","$filename",z);return A.prototype=n,A}catch(B){throw B.temp="function anonymous($data,$filename) {"+z+"}",B}}var d=function(a,b){return"string"==typeof b?q(b,{filename:a}):g(a,b)};d.version="3.0.0",d.config=function(a,b){e[a]=b};var e=d.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},f=d.cache={};d.render=function(a,b){return q(a,b)};var g=d.renderFile=function(a,b){var c=d.get(a)||p({filename:a,name:"Render Error",message:"Template not found"});return b?c(b):c};d.get=function(a){var b;if(f[a])b=f[a];else if("object"==typeof document){var c=document.getElementById(a);if(c){var d=(c.value||c.innerHTML).replace(/^\s*|\s*$/g,"");b=q(d,{filename:a})}}return b};var h=function(a,b){return"string"!=typeof a&&(b=typeof a,"number"===b?a+="":a="function"===b?h(a.call(a)):""),a},i={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},j=function(a){return i[a]},k=function(a){return h(a).replace(/&(?![\w#]+;)|[<>"']/g,j)},l=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},m=function(a,b){var c,d;if(l(a))for(c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)},n=d.utils={$helpers:{},$include:g,$string:h,$escape:k,$each:m};d.helper=function(a,b){o[a]=b};var o=d.helpers=n.$helpers;d.onerror=function(a){var b="Template Error\n\n";for(var c in a)b+="<"+c+">\n"+a[c]+"\n\n";"object"==typeof console&&console.error(b)};var p=function(a){return d.onerror(a),function(){return"{Template Error}"}},q=d.compile=function(a,b){function d(c){try{return new i(c,h)+""}catch(d){return b.debug?p(d)():(b.debug=!0,q(a,b)(c))}}b=b||{};for(var g in e)void 0===b[g]&&(b[g]=e[g]);var h=b.filename;try{var i=c(a,b)}catch(j){return j.filename=h||"anonymous",j.name="Syntax Error",p(j)}return d.prototype=i.prototype,d.toString=function(){return i.toString()},h&&b.cache&&(f[h]=d),d},r=n.$each,s="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",t=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,u=/[^\w$]+/g,v=new RegExp(["\\b"+s.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),w=/^\d[^,]*|,\d[^,]*/g,x=/^,+|,+$/g,y=/^$|,+/;"function"==typeof define?define(function(){return d}):"undefined"!=typeof exports?module.exports=d:this.template=d}();

/* scroll-probe.js*/
!function(t,i,s){function e(t,s){this.wrapper="string"==typeof t?i.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0};for(var e in s)this.options[e]=s[e];this.translateZ=this.options.HWCompositing&&h.hasPerspective?" translateZ(0)":"",this.options.useTransition=h.hasTransition&&this.options.useTransition,this.options.useTransform=h.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"==this.options.eventPassthrough?!1:this.options.scrollY,this.options.scrollX="horizontal"==this.options.eventPassthrough?!1:this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?h.ease[this.options.bounceEasing]||h.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,3==this.options.probeType&&(this.options.useTransition=!1),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function o(t,s,e){var o=i.createElement("div"),n=i.createElement("div");return e===!0&&(o.style.cssText="position:absolute;z-index:9999",n.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),n.className="iScrollIndicator","h"==t?(e===!0&&(o.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",n.style.height="100%"),o.className="iScrollHorizontalScrollbar"):(e===!0&&(o.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",n.style.width="100%"),o.className="iScrollVerticalScrollbar"),o.style.cssText+=";overflow:hidden",s||(o.style.pointerEvents="none"),o.appendChild(n),o}function n(s,e){this.wrapper="string"==typeof e.el?i.querySelector(e.el):e.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=s,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0};for(var o in e)this.options[o]=e[o];this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(h.addEvent(this.indicator,"touchstart",this),h.addEvent(t,"touchend",this)),this.options.disablePointer||(h.addEvent(this.indicator,h.prefixPointerEvent("pointerdown"),this),h.addEvent(t,h.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(h.addEvent(this.indicator,"mousedown",this),h.addEvent(t,"mouseup",this))),this.options.fade&&(this.wrapperStyle[h.style.transform]=this.scroller.translateZ,this.wrapperStyle[h.style.transitionDuration]=h.isBadAndroid?"0.001s":"0ms",this.wrapperStyle.opacity="0")}var r=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(i){t.setTimeout(i,1e3/60)},h=function(){function e(t){return r===!1?!1:""===r?t:r+t.charAt(0).toUpperCase()+t.substr(1)}var o={},n=i.createElement("div").style,r=function(){for(var t,i=["t","webkitT","MozT","msT","OT"],s=0,e=i.length;e>s;s++)if(t=i[s]+"ransform",t in n)return i[s].substr(0,i[s].length-1);return!1}();o.getTime=Date.now||function(){return(new Date).getTime()},o.extend=function(t,i){for(var s in i)t[s]=i[s]},o.addEvent=function(t,i,s,e){t.addEventListener(i,s,!!e)},o.removeEvent=function(t,i,s,e){t.removeEventListener(i,s,!!e)},o.prefixPointerEvent=function(i){return t.MSPointerEvent?"MSPointer"+i.charAt(9).toUpperCase()+i.substr(10):i},o.momentum=function(t,i,e,o,n,r){var h,a,l=t-i,c=s.abs(l)/e;return r=void 0===r?6e-4:r,h=t+c*c/(2*r)*(0>l?-1:1),a=c/r,o>h?(h=n?o-n/2.5*(c/8):o,l=s.abs(h-t),a=l/c):h>0&&(h=n?n/2.5*(c/8):0,l=s.abs(t)+h,a=l/c),{destination:s.round(h),duration:a}};var h=e("transform");return o.extend(o,{hasTransform:h!==!1,hasPerspective:e("perspective")in n,hasTouch:"ontouchstart"in t,hasPointer:t.PointerEvent||t.MSPointerEvent,hasTransition:e("transition")in n}),o.isBadAndroid=/Android /.test(t.navigator.appVersion)&&!/Chrome\/\d/.test(t.navigator.appVersion),o.extend(o.style={},{transform:h,transitionTimingFunction:e("transitionTimingFunction"),transitionDuration:e("transitionDuration"),transitionDelay:e("transitionDelay"),transformOrigin:e("transformOrigin")}),o.hasClass=function(t,i){var s=new RegExp("(^|\\s)"+i+"(\\s|$)");return s.test(t.className)},o.addClass=function(t,i){if(!o.hasClass(t,i)){var s=t.className.split(" ");s.push(i),t.className=s.join(" ")}},o.removeClass=function(t,i){if(o.hasClass(t,i)){var s=new RegExp("(^|\\s)"+i+"(\\s|$)","g");t.className=t.className.replace(s," ")}},o.offset=function(t){for(var i=-t.offsetLeft,s=-t.offsetTop;t=t.offsetParent;)i-=t.offsetLeft,s-=t.offsetTop;return{left:i,top:s}},o.preventDefaultException=function(t,i){for(var s in i)if(i[s].test(t[s]))return!0;return!1},o.extend(o.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),o.extend(o.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return s.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){var i=4;return(t-=1)*t*((i+1)*t+i)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){var i=.22,e=.4;return 0===t?0:1==t?1:e*s.pow(2,-10*t)*s.sin(2*(t-i/4)*s.PI/i)+1}}}),o.tap=function(t,s){var e=i.createEvent("Event");e.initEvent(s,!0,!0),e.pageX=t.pageX,e.pageY=t.pageY,t.target.dispatchEvent(e)},o.click=function(t){var s,e=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(e.tagName)||(s=i.createEvent("MouseEvents"),s.initMouseEvent("click",!0,!0,t.view,1,e.screenX,e.screenY,e.clientX,e.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),s._constructed=!0,e.dispatchEvent(s))},o}();e.prototype={version:"5.1.3",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if(!(1!=h.eventType[t.type]&&0!==t.button||!this.enabled||this.initiated&&h.eventType[t.type]!==this.initiated)){!this.options.preventDefault||h.isBadAndroid||h.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var i,e=t.touches?t.touches[0]:t;this.initiated=h.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=h.getTime(),this.options.useTransition&&this.isInTransition?(this.isInTransition=!1,i=this.getComputedPosition(),this._translate(s.round(i.x),s.round(i.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=e.pageX,this.pointY=e.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&h.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i,e,o,n,r=t.touches?t.touches[0]:t,a=r.pageX-this.pointX,l=r.pageY-this.pointY,c=h.getTime();if(this.pointX=r.pageX,this.pointY=r.pageY,this.distX+=a,this.distY+=l,o=s.abs(this.distX),n=s.abs(this.distY),!(c-this.endTime>300&&10>o&&10>n)){if(this.directionLocked||this.options.freeScroll||(this.directionLocked=o>n+this.options.directionLockThreshold?"h":n>=o+this.options.directionLockThreshold?"v":"n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);l=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);a=0}a=this.hasHorizontalScroll?a:0,l=this.hasVerticalScroll?l:0,i=this.x+a,e=this.y+l,(i>0||i<this.maxScrollX)&&(i=this.options.bounce?this.x+a/3:i>0?0:this.maxScrollX),(e>0||e<this.maxScrollY)&&(e=this.options.bounce?this.y+l/3:e>0?0:this.maxScrollY),this.directionX=a>0?-1:0>a?1:0,this.directionY=l>0?-1:0>l?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(i,e),c-this.startTime>300&&(this.startTime=c,this.startX=this.x,this.startY=this.y,1==this.options.probeType&&this._execEvent("scroll")),this.options.probeType>1&&this._execEvent("scroll")}}},_end:function(t){if(this.enabled&&h.eventType[t.type]===this.initiated){this.options.preventDefault&&!h.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();var i,e,o=(t.changedTouches?t.changedTouches[0]:t,h.getTime()-this.startTime),n=s.round(this.x),r=s.round(this.y),a=s.abs(n-this.startX),l=s.abs(r-this.startY),c=0,p="";if(this.isInTransition=0,this.initiated=0,this.endTime=h.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(n,r),!this.moved)return this.options.tap&&h.tap(t,this.options.tap),this.options.click&&h.click(t),void this._execEvent("scrollCancel");if(this._events.flick&&200>o&&100>a&&100>l)return void this._execEvent("flick");if(this.options.momentum&&300>o&&(i=this.hasHorizontalScroll?h.momentum(this.x,this.startX,o,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:n,duration:0},e=this.hasVerticalScroll?h.momentum(this.y,this.startY,o,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:r,duration:0},n=i.destination,r=e.destination,c=s.max(i.duration,e.duration),this.isInTransition=1),this.options.snap){var d=this._nearestSnap(n,r);this.currentPage=d,c=this.options.snapSpeed||s.max(s.max(s.min(s.abs(n-d.x),1e3),s.min(s.abs(r-d.y),1e3)),300),n=d.x,r=d.y,this.directionX=0,this.directionY=0,p=this.options.bounceEasing}return n!=this.x||r!=this.y?((n>0||n<this.maxScrollX||r>0||r<this.maxScrollY)&&(p=h.ease.quadratic),void this.scrollTo(n,r,c,p)):void this._execEvent("scrollEnd")}}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var i=this.x,s=this.y;return t=t||0,!this.hasHorizontalScroll||this.x>0?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||this.y>0?s=0:this.y<this.maxScrollY&&(s=this.maxScrollY),i==this.x&&s==this.y?!1:(this.scrollTo(i,s,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=h.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,i){this._events[t]||(this._events[t]=[]),this._events[t].push(i)},off:function(t,i){if(this._events[t]){var s=this._events[t].indexOf(i);s>-1&&this._events[t].splice(s,1)}},_execEvent:function(t){if(this._events[t]){var i=0,s=this._events[t].length;if(s)for(;s>i;i++)this._events[t][i].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,i,s,e){t=this.x+t,i=this.y+i,s=s||0,this.scrollTo(t,i,s,e)},scrollTo:function(t,i,s,e){e=e||h.ease.circular,this.isInTransition=this.options.useTransition&&s>0,!s||this.options.useTransition&&e.style?(this._transitionTimingFunction(e.style),this._transitionTime(s),this._translate(t,i)):this._animate(t,i,s,e.fn)},scrollToElement:function(t,i,e,o,n){if(t=t.nodeType?t:this.scroller.querySelector(t)){var r=h.offset(t);r.left-=this.wrapperOffset.left,r.top-=this.wrapperOffset.top,e===!0&&(e=s.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),o===!0&&(o=s.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),r.left-=e||0,r.top-=o||0,r.left=r.left>0?0:r.left<this.maxScrollX?this.maxScrollX:r.left,r.top=r.top>0?0:r.top<this.maxScrollY?this.maxScrollY:r.top,i=void 0===i||null===i||"auto"===i?s.max(s.abs(this.x-r.left),s.abs(this.y-r.top)):i,this.scrollTo(r.left,r.top,i,n)}},_transitionTime:function(t){if(t=t||0,this.scrollerStyle[h.style.transitionDuration]=t+"ms",!t&&h.isBadAndroid&&(this.scrollerStyle[h.style.transitionDuration]="0.001s"),this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].transitionTime(t)},_transitionTimingFunction:function(t){if(this.scrollerStyle[h.style.transitionTimingFunction]=t,this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].transitionTimingFunction(t)},_translate:function(t,i){if(this.options.useTransform?this.scrollerStyle[h.style.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=s.round(t),i=s.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.x=t,this.y=i,this.indicators)for(var e=this.indicators.length;e--;)this.indicators[e].updatePosition()},_initEvents:function(i){var s=i?h.removeEvent:h.addEvent,e=this.options.bindToWrapper?this.wrapper:t;s(t,"orientationchange",this),s(t,"resize",this),this.options.click&&s(this.wrapper,"click",this,!0),this.options.disableMouse||(s(this.wrapper,"mousedown",this),s(e,"mousemove",this),s(e,"mousecancel",this),s(e,"mouseup",this)),h.hasPointer&&!this.options.disablePointer&&(s(this.wrapper,h.prefixPointerEvent("pointerdown"),this),s(e,h.prefixPointerEvent("pointermove"),this),s(e,h.prefixPointerEvent("pointercancel"),this),s(e,h.prefixPointerEvent("pointerup"),this)),h.hasTouch&&!this.options.disableTouch&&(s(this.wrapper,"touchstart",this),s(e,"touchmove",this),s(e,"touchcancel",this),s(e,"touchend",this)),s(this.scroller,"transitionend",this),s(this.scroller,"webkitTransitionEnd",this),s(this.scroller,"oTransitionEnd",this),s(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var i,s,e=t.getComputedStyle(this.scroller,null);return this.options.useTransform?(e=e[h.style.transform].split(")")[0].split(", "),i=+(e[12]||e[4]),s=+(e[13]||e[5])):(i=+e.left.replace(/[^-\d.]/g,""),s=+e.top.replace(/[^-\d.]/g,"")),{x:i,y:s}},_initIndicators:function(){function t(t){for(var i=h.indicators.length;i--;)t.call(h.indicators[i])}var i,s=this.options.interactiveScrollbars,e="string"!=typeof this.options.scrollbars,r=[],h=this;this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(i={el:o("v",s,this.options.scrollbars),interactive:s,defaultScrollbars:!0,customStyle:e,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(i.el),r.push(i)),this.options.scrollX&&(i={el:o("h",s,this.options.scrollbars),interactive:s,defaultScrollbars:!0,customStyle:e,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(i.el),r.push(i))),this.options.indicators&&(r=r.concat(this.options.indicators));for(var a=r.length;a--;)this.indicators.push(new n(this,r[a]));this.options.fadeScrollbars&&(this.on("scrollEnd",function(){t(function(){this.fade()})}),this.on("scrollCancel",function(){t(function(){this.fade()})}),this.on("scrollStart",function(){t(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){t(function(){this.fade(1,!0)})})),this.on("refresh",function(){t(function(){this.refresh()})}),this.on("destroy",function(){t(function(){this.destroy()}),delete this.indicators})},_initWheel:function(){h.addEvent(this.wrapper,"wheel",this),h.addEvent(this.wrapper,"mousewheel",this),h.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){h.removeEvent(this.wrapper,"wheel",this),h.removeEvent(this.wrapper,"mousewheel",this),h.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(t){if(this.enabled){t.preventDefault(),t.stopPropagation();var i,e,o,n,r=this;if(void 0===this.wheelTimeout&&r._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){r._execEvent("scrollEnd"),r.wheelTimeout=void 0},400),"deltaX"in t)1===t.deltaMode?(i=-t.deltaX*this.options.mouseWheelSpeed,e=-t.deltaY*this.options.mouseWheelSpeed):(i=-t.deltaX,e=-t.deltaY);else if("wheelDeltaX"in t)i=t.wheelDeltaX/120*this.options.mouseWheelSpeed,e=t.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in t)i=e=t.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in t))return;i=e=-t.detail/3*this.options.mouseWheelSpeed}if(i*=this.options.invertWheelDirection,e*=this.options.invertWheelDirection,this.hasVerticalScroll||(i=e,e=0),this.options.snap)return o=this.currentPage.pageX,n=this.currentPage.pageY,i>0?o--:0>i&&o++,e>0?n--:0>e&&n++,void this.goToPage(o,n);o=this.x+s.round(this.hasHorizontalScroll?i:0),n=this.y+s.round(this.hasVerticalScroll?e:0),o>0?o=0:o<this.maxScrollX&&(o=this.maxScrollX),n>0?n=0:n<this.maxScrollY&&(n=this.maxScrollY),this.scrollTo(o,n,0),this.options.probeType>1&&this._execEvent("scroll")}},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var t,i,e,o,n,r,h=0,a=0,l=0,c=this.options.snapStepX||this.wrapperWidth,p=this.options.snapStepY||this.wrapperHeight;if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(this.options.snap===!0)for(e=s.round(c/2),o=s.round(p/2);l>-this.scrollerWidth;){for(this.pages[h]=[],t=0,n=0;n>-this.scrollerHeight;)this.pages[h][t]={x:s.max(l,this.maxScrollX),y:s.max(n,this.maxScrollY),width:c,height:p,cx:l-e,cy:n-o},n-=p,t++;l-=c,h++}else for(r=this.options.snap,t=r.length,i=-1;t>h;h++)(0===h||r[h].offsetLeft<=r[h-1].offsetLeft)&&(a=0,i++),this.pages[a]||(this.pages[a]=[]),l=s.max(-r[h].offsetLeft,this.maxScrollX),n=s.max(-r[h].offsetTop,this.maxScrollY),e=l-s.round(r[h].offsetWidth/2),o=n-s.round(r[h].offsetHeight/2),this.pages[a][i]={x:l,y:n,width:r[h].offsetWidth,height:r[h].offsetHeight,cx:e,cy:o},l>this.maxScrollX&&a++;this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1===0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}}),this.on("flick",function(){var t=this.options.snapSpeed||s.max(s.max(s.min(s.abs(this.x-this.startX),1e3),s.min(s.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,t)})},_nearestSnap:function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var e=0,o=this.pages.length,n=0;if(s.abs(t-this.absStartX)<this.snapThresholdX&&s.abs(i-this.absStartY)<this.snapThresholdY)return this.currentPage;for(t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),i>0?i=0:i<this.maxScrollY&&(i=this.maxScrollY);o>e;e++)if(t>=this.pages[e][0].cx){t=this.pages[e][0].x;break}for(o=this.pages[e].length;o>n;n++)if(i>=this.pages[0][n].cy){i=this.pages[0][n].y;break}return e==this.currentPage.pageX&&(e+=this.directionX,0>e?e=0:e>=this.pages.length&&(e=this.pages.length-1),t=this.pages[e][0].x),n==this.currentPage.pageY&&(n+=this.directionY,0>n?n=0:n>=this.pages[0].length&&(n=this.pages[0].length-1),i=this.pages[0][n].y),{x:t,y:i,pageX:e,pageY:n}},goToPage:function(t,i,e,o){o=o||this.options.bounceEasing,t>=this.pages.length?t=this.pages.length-1:0>t&&(t=0),i>=this.pages[t].length?i=this.pages[t].length-1:0>i&&(i=0);var n=this.pages[t][i].x,r=this.pages[t][i].y;e=void 0===e?this.options.snapSpeed||s.max(s.max(s.min(s.abs(n-this.x),1e3),s.min(s.abs(r-this.y),1e3)),300):e,this.currentPage={x:n,y:r,pageX:t,pageY:i},this.scrollTo(n,r,e,o)},next:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;s++,s>=this.pages.length&&this.hasVerticalScroll&&(s=0,e++),this.goToPage(s,e,t,i)},prev:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;s--,0>s&&this.hasVerticalScroll&&(s=0,e--),this.goToPage(s,e,t,i)},_initKeys:function(){var i,s={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};if("object"==typeof this.options.keyBindings)for(i in this.options.keyBindings)"string"==typeof this.options.keyBindings[i]&&(this.options.keyBindings[i]=this.options.keyBindings[i].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(i in s)this.options.keyBindings[i]=this.options.keyBindings[i]||s[i];h.addEvent(t,"keydown",this),this.on("destroy",function(){h.removeEvent(t,"keydown",this)})},_key:function(t){if(this.enabled){var i,e=this.options.snap,o=e?this.currentPage.pageX:this.x,n=e?this.currentPage.pageY:this.y,r=h.getTime(),a=this.keyTime||0,l=.25;switch(this.options.useTransition&&this.isInTransition&&(i=this.getComputedPosition(),this._translate(s.round(i.x),s.round(i.y)),this.isInTransition=!1),this.keyAcceleration=200>r-a?s.min(this.keyAcceleration+l,50):0,t.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?o+=e?1:this.wrapperWidth:n+=e?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?o-=e?1:this.wrapperWidth:n-=e?1:this.wrapperHeight;break;case this.options.keyBindings.end:o=e?this.pages.length-1:this.maxScrollX,n=e?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:o=0,n=0;break;case this.options.keyBindings.left:o+=e?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:n+=e?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:o-=e?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:n-=e?1:5+this.keyAcceleration>>0;break;default:return}if(e)return void this.goToPage(o,n);o>0?(o=0,this.keyAcceleration=0):o<this.maxScrollX&&(o=this.maxScrollX,this.keyAcceleration=0),n>0?(n=0,this.keyAcceleration=0):n<this.maxScrollY&&(n=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(o,n,0),this.keyTime=r}},_animate:function(t,i,s,e){function o(){var d,u,m,f=h.getTime();return f>=p?(n.isAnimating=!1,n._translate(t,i),void(n.resetPosition(n.options.bounceTime)||n._execEvent("scrollEnd"))):(f=(f-c)/s,m=e(f),d=(t-a)*m+a,u=(i-l)*m+l,n._translate(d,u),n.isAnimating&&r(o),void(3==n.options.probeType&&n._execEvent("scroll")))}var n=this,a=this.x,l=this.y,c=h.getTime(),p=c+s;this.isAnimating=!0,o()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":t._constructed||(t.preventDefault(),t.stopPropagation())}}},n.prototype={handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t)}},destroy:function(){this.options.interactive&&(h.removeEvent(this.indicator,"touchstart",this),h.removeEvent(this.indicator,h.prefixPointerEvent("pointerdown"),this),h.removeEvent(this.indicator,"mousedown",this),h.removeEvent(t,"touchmove",this),h.removeEvent(t,h.prefixPointerEvent("pointermove"),this),h.removeEvent(t,"mousemove",this),h.removeEvent(t,"touchend",this),h.removeEvent(t,h.prefixPointerEvent("pointerup"),this),h.removeEvent(t,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(i){var s=i.touches?i.touches[0]:i;i.preventDefault(),i.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=s.pageX,this.lastPointY=s.pageY,this.startTime=h.getTime(),this.options.disableTouch||h.addEvent(t,"touchmove",this),this.options.disablePointer||h.addEvent(t,h.prefixPointerEvent("pointermove"),this),this.options.disableMouse||h.addEvent(t,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(t){var i,s,e,o,n=t.touches?t.touches[0]:t,r=h.getTime();this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,i=n.pageX-this.lastPointX,this.lastPointX=n.pageX,s=n.pageY-this.lastPointY,this.lastPointY=n.pageY,e=this.x+i,o=this.y+s,this._pos(e,o),1==this.scroller.options.probeType&&r-this.startTime>300?(this.startTime=r,this.scroller._execEvent("scroll")):this.scroller.options.probeType>1&&this.scroller._execEvent("scroll"),t.preventDefault(),t.stopPropagation()},_end:function(i){if(this.initiated){if(this.initiated=!1,i.preventDefault(),i.stopPropagation(),h.removeEvent(t,"touchmove",this),h.removeEvent(t,h.prefixPointerEvent("pointermove"),this),h.removeEvent(t,"mousemove",this),this.scroller.options.snap){var e=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),o=this.options.snapSpeed||s.max(s.max(s.min(s.abs(this.scroller.x-e.x),1e3),s.min(s.abs(this.scroller.y-e.y),1e3)),300);(this.scroller.x!=e.x||this.scroller.y!=e.y)&&(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=e,this.scroller.scrollTo(e.x,e.y,o,this.scroller.options.bounceEasing))}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(t){t=t||0,this.indicatorStyle[h.style.transitionDuration]=t+"ms",!t&&h.isBadAndroid&&(this.indicatorStyle[h.style.transitionDuration]="0.001s")},transitionTimingFunction:function(t){this.indicatorStyle[h.style.transitionTimingFunction]=t},refresh:function(){this.transitionTime(),this.indicatorStyle.display=this.options.listenX&&!this.options.listenY?this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.scroller.hasVerticalScroll?"block":"none":this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(h.addClass(this.wrapper,"iScrollBothScrollbars"),h.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(h.removeClass(this.wrapper,"iScrollBothScrollbars"),h.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px"));this.wrapper.offsetHeight;this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=s.max(s.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=-this.indicatorWidth+8,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=s.max(s.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=-this.indicatorHeight+8,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var t=this.options.listenX&&s.round(this.sizeRatioX*this.scroller.x)||0,i=this.options.listenY&&s.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(t<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=s.max(this.indicatorWidth+t,8),this.indicatorStyle.width=this.width+"px"),t=this.minBoundaryX):t>this.maxBoundaryX?"scale"==this.options.shrink?(this.width=s.max(this.indicatorWidth-(t-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",t=this.maxPosX+this.indicatorWidth-this.width):t=this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),i<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=s.max(this.indicatorHeight+3*i,8),this.indicatorStyle.height=this.height+"px"),i=this.minBoundaryY):i>this.maxBoundaryY?"scale"==this.options.shrink?(this.height=s.max(this.indicatorHeight-3*(i-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",i=this.maxPosY+this.indicatorHeight-this.height):i=this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=t,this.y=i,this.scroller.options.useTransform?this.indicatorStyle[h.style.transform]="translate("+t+"px,"+i+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=t+"px",this.indicatorStyle.top=i+"px")},_pos:function(t,i){0>t?t=0:t>this.maxPosX&&(t=this.maxPosX),0>i?i=0:i>this.maxPosY&&(i=this.maxPosY),t=this.options.listenX?s.round(t/this.sizeRatioX):this.scroller.x,i=this.options.listenY?s.round(i/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(t,i)},fade:function(t,i){if(!i||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null;
    var s=t?250:500,e=t?0:300;t=t?"1":"0",this.wrapperStyle[h.style.transitionDuration]=s+"ms",this.fadeTimeout=setTimeout(function(t){this.wrapperStyle.opacity=t,this.visible=+t}.bind(this,t),e)}}},e.utils=h,"undefined"!=typeof module&&module.exports?module.exports=e:t.IScroll=e}(window,document,Math);

/*
 RequireJS 2.1.20 Copyright (c) 2010-2015, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
 */
var requirejs,require,define;
(function(ba){function G(b){return"[object Function]"===K.call(b)}function H(b){return"[object Array]"===K.call(b)}function v(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function T(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function t(b,c){return fa.call(b,c)}function n(b,c){return t(b,c)&&b[c]}function A(b,c){for(var d in b)if(t(b,d)&&c(b[d],d))break}function U(b,c,d,e){c&&A(c,function(c,i){if(d||!t(b,i))e&&"object"===typeof c&&c&&!H(c)&&!G(c)&&!(c instanceof
RegExp)?(b[i]||(b[i]={}),U(b[i],c,d,e)):b[i]=c});return b}function u(b,c){return function(){return c.apply(b,arguments)}}function ca(b){throw b;}function da(b){if(!b)return b;var c=ba;v(b.split("."),function(b){c=c[b]});return c}function B(b,c,d,e){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=e;d&&(c.originalError=d);return c}function ga(b){function c(a,j,b){var f,l,c,d,h,e,g,i,j=j&&j.split("/"),p=k.map,m=p&&p["*"];if(a){a=a.split("/");l=a.length-1;k.nodeIdCompat&&
Q.test(a[l])&&(a[l]=a[l].replace(Q,""));"."===a[0].charAt(0)&&j&&(l=j.slice(0,j.length-1),a=l.concat(a));l=a;for(c=0;c<l.length;c++)if(d=l[c],"."===d)l.splice(c,1),c-=1;else if(".."===d&&!(0===c||1===c&&".."===l[2]||".."===l[c-1])&&0<c)l.splice(c-1,2),c-=2;a=a.join("/")}if(b&&p&&(j||m)){l=a.split("/");c=l.length;a:for(;0<c;c-=1){h=l.slice(0,c).join("/");if(j)for(d=j.length;0<d;d-=1)if(b=n(p,j.slice(0,d).join("/")))if(b=n(b,h)){f=b;e=c;break a}!g&&(m&&n(m,h))&&(g=n(m,h),i=c)}!f&&g&&(f=g,e=i);f&&(l.splice(0,
    e,f),a=l.join("/"))}return(f=n(k.pkgs,a))?f:a}function d(a){z&&v(document.getElementsByTagName("script"),function(j){if(j.getAttribute("data-requiremodule")===a&&j.getAttribute("data-requirecontext")===h.contextName)return j.parentNode.removeChild(j),!0})}function p(a){var j=n(k.paths,a);if(j&&H(j)&&1<j.length)return j.shift(),h.require.undef(a),h.makeRequire(null,{skipMap:!0})([a]),!0}function g(a){var j,c=a?a.indexOf("!"):-1;-1<c&&(j=a.substring(0,c),a=a.substring(c+1,a.length));return[j,a]}function i(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 j,b,f){var l,d,e=null,i=j?j.name:null,k=a,p=!0,m="";a||(p=!1,a="_@r"+(K+=1));a=g(a);e=a[0];a=a[1];e&&(e=c(e,i,f),d=n(q,e));a&&(e?m=d&&d.normalize?d.normalize(a,function(a){return c(a,i,f)}):-1===a.indexOf("!")?c(a,i,f):a:(m=c(a,i,f),a=g(m),e=a[0],m=a[1],b=!0,l=h.nameToUrl(m)));b=e&&!d&&!b?"_unnormalized"+(O+=1):"";return{prefix:e,name:m,parentMap:j,unnormalized:!!b,url:l,originalName:k,isDefine:p,id:(e?e+"!"+m:m)+b}}function r(a){var j=a.id,b=n(m,j);b||(b=m[j]=new h.Module(a));return b}function s(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       j,b){var f=a.id,c=n(m,f);if(t(q,f)&&(!c||c.defineEmitComplete))"defined"===j&&b(q[f]);else if(c=r(a),c.error&&"error"===j)b(c.error);else c.on(j,b)}function w(a,b){var c=a.requireModules,f=!1;if(b)b(a);else if(v(c,function(b){if(b=n(m,b))b.error=a,b.events.error&&(f=!0,b.emit("error",a))}),!f)e.onError(a)}function x(){R.length&&(v(R,function(a){var b=a[0];"string"===typeof b&&(h.defQueueMap[b]=!0);C.push(a)}),R=[])}function y(a){delete m[a];delete V[a]}function F(a,b,c){var f=a.map.id;a.error?a.emit("error",
    a.error):(b[f]=!0,v(a.depMaps,function(f,d){var e=f.id,h=n(m,e);h&&(!a.depMatched[d]&&!c[e])&&(n(b,e)?(a.defineDep(d,q[e]),a.check()):F(h,b,c))}),c[f]=!0)}function D(){var a,b,c=(a=1E3*k.waitSeconds)&&h.startTime+a<(new Date).getTime(),f=[],l=[],e=!1,i=!0;if(!W){W=!0;A(V,function(a){var h=a.map,g=h.id;if(a.enabled&&(h.isDefine||l.push(a),!a.error))if(!a.inited&&c)p(g)?e=b=!0:(f.push(g),d(g));else if(!a.inited&&(a.fetched&&h.isDefine)&&(e=!0,!h.prefix))return i=!1});if(c&&f.length)return a=B("timeout",
    "Load timeout for modules: "+f,null,f),a.contextName=h.contextName,w(a);i&&v(l,function(a){F(a,{},{})});if((!c||b)&&e)if((z||ea)&&!X)X=setTimeout(function(){X=0;D()},50);W=!1}}function E(a){t(q,a[0])||r(i(a[0],null,!0)).init(a[1],a[2])}function I(a){var a=a.currentTarget||a.srcElement,b=h.onScriptLoad;a.detachEvent&&!Y?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=h.onScriptError;(!a.detachEvent||Y)&&a.removeEventListener("error",b,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}
    function J(){var a;for(x();C.length;){a=C.shift();if(null===a[0])return w(B("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));E(a)}h.defQueueMap={}}var W,Z,h,L,X,k={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},m={},V={},$={},C=[],q={},S={},aa={},K=1,O=1;L={require:function(a){return a.require?a.require:a.require=h.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?q[a.map.id]=a.exports:a.exports=q[a.map.id]={}},
        module:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return n(k.config,a.map.id)||{}},exports:a.exports||(a.exports={})}}};Z=function(a){this.events=n($,a.id)||{};this.map=a;this.shim=n(k.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};Z.prototype={init:function(a,b,c,f){f=f||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&&(c=u(this,function(a){this.emit("error",a)}));
        this.depMaps=a&&a.slice(0);this.errback=c;this.inited=!0;this.ignore=f.ignore;f.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;h.startTime=(new Date).getTime();var a=this.map;if(this.shim)h.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],u(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?
        this.callPlugin():this.load()}},load:function(){var a=this.map.url;S[a]||(S[a]=!0,h.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var f=this.exports,l=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(G(l)){if(this.events.error&&this.map.isDefine||e.onError!==ca)try{f=h.execCb(c,l,b,f)}catch(d){a=d}else f=h.execCb(c,l,b,f);this.map.isDefine&&
    void 0===f&&((b=this.module)?f=b.exports:this.usingExports&&(f=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",w(this.error=a)}else f=l;this.exports=f;if(this.map.isDefine&&!this.ignore&&(q[c]=f,e.onResourceLoad))e.onResourceLoad(h,this.map,this.depMaps);y(c);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=
        !0)}}else t(h.defQueueMap,c)||this.fetch()}},callPlugin:function(){var a=this.map,b=a.id,d=i(a.prefix);this.depMaps.push(d);s(d,"defined",u(this,function(f){var l,d;d=n(aa,this.map.id);var g=this.map.name,P=this.map.parentMap?this.map.parentMap.name:null,p=h.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(f.normalize&&(g=f.normalize(g,function(a){return c(a,P,!0)})||""),f=i(a.prefix+"!"+g,this.map.parentMap),s(f,"defined",u(this,function(a){this.init([],function(){return a},
            null,{enabled:!0,ignore:!0})})),d=n(m,f.id)){this.depMaps.push(f);if(this.events.error)d.on("error",u(this,function(a){this.emit("error",a)}));d.enable()}}else d?(this.map.url=h.nameToUrl(d),this.load()):(l=u(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),l.error=u(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];A(m,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&y(a.map.id)});w(a)}),l.fromText=u(this,function(f,c){var d=a.name,g=i(d),P=M;c&&(f=c);P&&
    (M=!1);r(g);t(k.config,b)&&(k.config[d]=k.config[b]);try{e.exec(f)}catch(m){return w(B("fromtexteval","fromText eval for "+b+" failed: "+m,m,[b]))}P&&(M=!0);this.depMaps.push(g);h.completeLoad(d);p([d],l)}),f.load(a.name,p,l,k))}));h.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){V[this.map.id]=this;this.enabling=this.enabled=!0;v(this.depMaps,u(this,function(a,b){var c,f;if("string"===typeof a){a=i(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=
            n(L,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;s(a,"defined",u(this,function(a){this.undefed||(this.defineDep(b,a),this.check())}));this.errback?s(a,"error",u(this,this.errback)):this.events.error&&s(a,"error",u(this,function(a){this.emit("error",a)}))}c=a.id;f=m[c];!t(L,c)&&(f&&!f.enabled)&&h.enable(a,this)}));A(this.pluginMaps,u(this,function(a){var b=n(m,a.id);b&&!b.enabled&&h.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=
        []);c.push(b)},emit:function(a,b){v(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};h={config:k,contextName:b,registry:m,defined:q,urlFetched:S,defQueue:C,defQueueMap:{},Module:Z,makeModuleMap:i,nextTick:e.nextTick,onError:w,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=k.shim,c={paths:!0,bundles:!0,config:!0,map:!0};A(a,function(a,b){c[b]?(k[b]||(k[b]={}),U(k[b],a,!0,!0)):k[b]=a});a.bundles&&A(a.bundles,function(a,b){v(a,
        function(a){a!==b&&(aa[a]=b)})});a.shim&&(A(a.shim,function(a,c){H(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=h.makeShimExports(a);b[c]=a}),k.shim=b);a.packages&&v(a.packages,function(a){var b,a="string"===typeof a?{name:a}:a;b=a.name;a.location&&(k.paths[b]=a.location);k.pkgs[b]=a.name+"/"+(a.main||"main").replace(ha,"").replace(Q,"")});A(m,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=i(b,null,!0))});if(a.deps||a.callback)h.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;
        a.init&&(b=a.init.apply(ba,arguments));return b||a.exports&&da(a.exports)}},makeRequire:function(a,j){function g(c,d,p){var k,n;j.enableBuildCallback&&(d&&G(d))&&(d.__requireJsBuild=!0);if("string"===typeof c){if(G(d))return w(B("requireargs","Invalid require call"),p);if(a&&t(L,c))return L[c](m[a.id]);if(e.get)return e.get(h,c,a,g);k=i(c,a,!1,!0);k=k.id;return!t(q,k)?w(B("notloaded",'Module name "'+k+'" has not been loaded yet for context: '+b+(a?"":". Use require([])"))):q[k]}J();h.nextTick(function(){J();
        n=r(i(null,a));n.skipMap=j.skipMap;n.init(c,d,p,{enabled:!0});D()});return g}j=j||{};U(g,{isBrowser:z,toUrl:function(b){var d,e=b.lastIndexOf("."),j=b.split("/")[0];if(-1!==e&&(!("."===j||".."===j)||1<e))d=b.substring(e,b.length),b=b.substring(0,e);return h.nameToUrl(c(b,a&&a.id,!0),d,!0)},defined:function(b){return t(q,i(b,a,!1,!0).id)},specified:function(b){b=i(b,a,!1,!0).id;return t(q,b)||t(m,b)}});a||(g.undef=function(b){x();var c=i(b,a,!0),e=n(m,b);e.undefed=!0;d(b);delete q[b];delete S[c.url];
        delete $[b];T(C,function(a,c){a[0]===b&&C.splice(c,1)});delete h.defQueueMap[b];e&&(e.events.defined&&($[b]=e.events),y(b))});return g},enable:function(a){n(m,a.id)&&r(a).enable()},completeLoad:function(a){var b,c,d=n(k.shim,a)||{},e=d.exports;for(x();C.length;){c=C.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);E(c)}h.defQueueMap={};c=n(m,a);if(!b&&!t(q,a)&&c&&!c.inited){if(k.enforceDefine&&(!e||!da(e)))return p(a)?void 0:w(B("nodefine","No define call for "+a,null,[a]));E([a,
        d.deps||[],d.exportsFn])}D()},nameToUrl:function(a,b,c){var d,g,i;(d=n(k.pkgs,a))&&(a=d);if(d=n(aa,a))return h.nameToUrl(d,b,c);if(e.jsExtRegExp.test(a))d=a+(b||"");else{d=k.paths;a=a.split("/");for(g=a.length;0<g;g-=1)if(i=a.slice(0,g).join("/"),i=n(d,i)){H(i)&&(i=i[0]);a.splice(0,g,i);break}d=a.join("/");d+=b||(/^data\:|\?/.test(d)||c?"":".js");d=("/"===d.charAt(0)||d.match(/^[\w\+\.\-]+:/)?"":k.baseUrl)+d}return k.urlArgs?d+((-1===d.indexOf("?")?"?":"&")+k.urlArgs):d},load:function(a,b){e.load(h,
        a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||ia.test((a.currentTarget||a.srcElement).readyState))N=null,a=I(a),h.completeLoad(a.id)},onScriptError:function(a){var b=I(a);if(!p(b.id))return w(B("scripterror","Script error for: "+b.id,a,[b.id]))}};h.require=h.makeRequire();return h}var e,x,y,D,I,E,N,J,r,O,ja=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ka=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,Q=/\.js$/,ha=/^\.\//;x=Object.prototype;var K=
    x.toString,fa=x.hasOwnProperty,z=!!("undefined"!==typeof window&&"undefined"!==typeof navigator&&window.document),ea=!z&&"undefined"!==typeof importScripts,ia=z&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,Y="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),F={},s={},R=[],M=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(G(requirejs))return;s=requirejs;requirejs=void 0}"undefined"!==typeof require&&!G(require)&&(s=require,require=
    void 0);e=requirejs=function(b,c,d,p){var g,i="_";!H(b)&&"string"!==typeof b&&(g=b,H(c)?(b=c,c=d,d=p):b=[]);g&&g.context&&(i=g.context);(p=n(F,i))||(p=F[i]=e.s.newContext(i));g&&p.configure(g);return p.require(b,c,d)};e.config=function(b){return e(b)};e.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=e);e.version="2.1.20";e.jsExtRegExp=/^\/|:|\?|\.js$/;e.isBrowser=z;x=e.s={contexts:F,newContext:ga};e({});v(["toUrl","undef","defined","specified"],
    function(b){e[b]=function(){var c=F._;return c.require[b].apply(c,arguments)}});if(z&&(y=x.head=document.getElementsByTagName("head")[0],D=document.getElementsByTagName("base")[0]))y=x.head=D.parentNode;e.onError=ca;e.createNode=function(b){var c=b.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");c.type=b.scriptType||"text/javascript";c.charset="utf-8";c.async=!0;return c};e.load=function(b,c,d){var p=b&&b.config||{},g;if(z){g=e.createNode(p,
    c,d);if(p.onNodeCreated)p.onNodeCreated(g,p,c,d);g.setAttribute("data-requirecontext",b.contextName);g.setAttribute("data-requiremodule",c);g.attachEvent&&!(g.attachEvent.toString&&0>g.attachEvent.toString().indexOf("[native code"))&&!Y?(M=!0,g.attachEvent("onreadystatechange",b.onScriptLoad)):(g.addEventListener("load",b.onScriptLoad,!1),g.addEventListener("error",b.onScriptError,!1));g.src=d;J=g;D?y.insertBefore(g,D):y.appendChild(g);J=null;return g}if(ea)try{importScripts(d),b.completeLoad(c)}catch(i){b.onError(B("importscripts",
    "importScripts failed for "+c+" at "+d,i,[c]))}};z&&!s.skipDataMain&&T(document.getElementsByTagName("script"),function(b){y||(y=b.parentNode);if(I=b.getAttribute("data-main"))return r=I,s.baseUrl||(E=r.split("/"),r=E.pop(),O=E.length?E.join("/")+"/":"./",s.baseUrl=O),r=r.replace(Q,""),e.jsExtRegExp.test(r)&&(r=I),s.deps=s.deps?s.deps.concat(r):[r],!0});define=function(b,c,d){var e,g;"string"!==typeof b&&(d=c,c=b,b=null);H(c)||(d=c,c=null);!c&&G(d)&&(c=[],d.length&&(d.toString().replace(ja,"").replace(ka,
    function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));if(M){if(!(e=J))N&&"interactive"===N.readyState||T(document.getElementsByTagName("script"),function(b){if("interactive"===b.readyState)return N=b}),e=N;e&&(b||(b=e.getAttribute("data-requiremodule")),g=F[e.getAttribute("data-requirecontext")])}g?(g.defQueue.push([b,c,d]),g.defQueueMap[b]=!0):R.push([b,c,d])};define.amd={jQuery:!0};e.exec=function(b){return eval(b)};e(s)}})(this);

/**
 * M - util
 * Created by GH on 2015/7/29.
 */
(function(){
    /**
     * 全局M对象，声明了版本
     * @constructor
     */
    var M =(function(){
        var _M = function(){
            this.version = '0.1';
            this.v = this.version;
            this.touch = ('ontouchstart' in window)?'touchend':'click';
            this.loadingID = 'M-loading';
            this.APIBASE = 'http://lppz.letwx.com/api/jsapi';
            /**
             * 获取当前系统和版本
             * android格式:{android: true, version: "4.4.4", tablet: false, phone: true}
             * ios格式：{iphone: true, ios: true, version: "7.0", tablet: false, phone: true}
             */
            this.detect = function(ua, platform){
                var os = {}, browser = this.browser = {},
                    webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
                    android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
                    osx = !!ua.match(/\(Macintosh\; Intel /),
                    ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
                    ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
                    iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
                    webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                    win = /Win\d{2}|Windows/.test(platform),
                    wp = ua.match(/Windows Phone ([\d.]+)/),
                    touchpad = webos && ua.match(/TouchPad/),
                    kindle = ua.match(/Kindle\/([\d.]+)/),
                    silk = ua.match(/Silk\/([\d._]+)/),
                    blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
                    bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
                    rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
                    playbook = ua.match(/PlayBook/),
                    chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
                    firefox = ua.match(/Firefox\/([\d.]+)/),
                    firefoxos = ua.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
                    ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
                    webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
                    safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/)

                if (browser.webkit = !!webkit) browser.version = webkit[1]

                if (android) os.android = true, os.version = android[2]
                if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.')
                if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.')
                if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null
                if (wp) os.wp = true, os.version = wp[1]
                if (webos) os.webos = true, os.version = webos[2]
                if (touchpad) os.touchpad = true
                if (blackberry) os.blackberry = true, os.version = blackberry[2]
                if (bb10) os.bb10 = true, os.version = bb10[2]
                if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2]
                if (playbook) browser.playbook = true
                if (kindle) os.kindle = true, os.version = kindle[1]
                if (silk) browser.silk = true, browser.version = silk[1]
                if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true
                if (chrome) browser.chrome = true, browser.version = chrome[1]
                if (firefox) browser.firefox = true, browser.version = firefox[1]
                if (firefoxos) os.firefoxos = true, os.version = firefoxos[1]
                if (ie) browser.ie = true, browser.version = ie[1]
                if (safari && (osx || os.ios || win)) {
                    browser.safari = true
                    if (!os.ios) browser.version = safari[1]
                }
                if (webview) browser.webview = true

                os.tablet = !!(ipad || playbook || (android && !ua.match(/Mobile/)) ||
                (firefox && ua.match(/Tablet/)) || (ie && !ua.match(/Phone/) && ua.match(/Touch/)))
                os.phone  = !!(!os.tablet && !os.ipod && (android || iphone || webos || blackberry || bb10 ||
                (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) ||
                (firefox && ua.match(/Mobile/)) || (ie && ua.match(/Touch/))));

                return os;
            };

            this.os = this.detect(navigator.userAgent, navigator.platform);
            /**
             * 判断是否是android手机
             * @returns {number}
             */
            this.isAndroid = function(){
                return this.os.android;
            };
            /**
             * 判断是否是iphone手机
             * @returns {number}
             */
            this.isIphone = function(){
                return this.os.iphone;
            };
            /**
             * 判断是否是ios系统
             */
            this.isIos = function(){
                return this.os.ios;
            };
            /**
             * 返回当前系统的字符串
             * @returns {*}
             */
            this.checkOS = function(){
                if(this.isAndroid()) return 'android';
                else if(this.isIphone()) return 'iphone';
                else if(this.isIos()) return 'ios';
                else if(this.os.tablet) return 'tablet';
                else if(this.os.phone) return 'phone';
                else return 'not phone';
            };
            /**
             * 产生随机数，例如：生成0-9之间的数（包括0，包括9） random(0,9)
             * @param min
             * @param max
             * @returns {number}
             */
            this.random = function(min,max){
                return Math.floor(min + Math.random() * (max - min + 1));
            };
        };

        _M.prototype.register = function(key,obj){
            this[key] = obj;
        };

        return new _M();
    })();
    //loading
    (function(){
        var _tmp = {};
        /**
         * loading组件
         */
        _tmp.loading = function(){
            var str = '<section id="'+M.loadingID+'" class="M-loading-pop wh-100">' +
                '<div class="mpop">' +
                '<div class="box box-center box-v wh-100">' +
                '<div class="ball-clip-rotate-multiple">' +
                '<div></div>' +
                '<div></div>' +
                '</div>' +
                '<div class="m-t-15 c-fff loading-font">正在加载数据...</div>' +
                '</div>' +
                '</div>' +
                '</section>';
            var $dom = $('#'+ M.loadingID);
            $dom[0] ? $dom.show() : $('body').append(str);
            $dom = null;
            $('#'+M.loadingID).on('touchstart',function(e){
                e.preventDefault();
            });
        };
        /**
         * 隐藏loading
         */
        _tmp.loadingHide = function(){
            $('#'+ M.loadingID).hide();
        };
        for(var k in _tmp){
            if(_tmp.hasOwnProperty(k)) M.register(k,_tmp[k]);
        }
    })();
    //alert组件
    (function(){
        var alertId = 0;//弹出框的 id的索引
        var toastTempArr = [];//存放toast实例
        var aniMationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        /**
         * 真正生成alert的方法
         * @param title 标题
         * @param content 内容
         * @param cb 确定的回调
         * @constructor
         */
        var Alert = function(title,content,cb){
            this.id = alertId++;
            this.cb = cb;
            var alertHtml='<div id="m-popup-'+(this.id)+'" class="M-pop wh-100">'+
                '<div class="M-popup center">'+
                '<div class="M-title">'+title+'</div>'+
                '<div class="M-content">'+content+'</div>'+
                '<div class="M-handler box"><span class="M-handler-ok box-f1">确定</span></div>'+
                '</div>'+
                '</div>';
            this.alertDom = $(alertHtml).appendTo('body');
        };
        Alert.prototype.show = function(){
            var Mpopup = this.alertDom.find('.M-popup').show();
            Mpopup.css('margin-top',-(Mpopup.height()/2+20)).addClass('ani zoomIn').one(aniMationEnd,function(){
                Mpopup.removeClass('ani zoomIn');
                Mpopup.unbind(aniMationEnd);
            });
            return this;
        };
        Alert.prototype.on = function(cb){
            var me = this;
            this.alertDom.find('.M-handler-ok').on(M.touch,function(e){
                if(cb) cb && cb.call(me);
                else me.hide();
                e.preventDefault();
            });
            this.alertDom.on(M.touch,function(e){
                var target = $(e.target);
                if(target.closest('.M-popup').length==0){
                    me.hide();
                }
                e.preventDefault();
            });
            return this;
        };
        Alert.prototype.hide = function(){
            var me = this;
            this.alertDom.find('.M-popup').addClass('ani zoomOut').one(aniMationEnd,function(){
                me.alertDom.remove();
            });
            return this;
        };
        /**
         * 生成confirm对象的方法
         * @param title 标题
         * @param content 内容
         * @param okCb 确定的回调
         * @param cancelCb 取消的回调
         * @constructor
         */
        var Confirm = function(title,content,okCb,cancelCb){
            this.id = alertId++;
            this.okCb = okCb;
            this.cancelCb = cancelCb;
            var confirmHtml='<div id="m-popup-'+(this.id)+'" class="M-pop wh-100">'+
                '<div class="M-popup center">'+
                '<div class="M-title">'+title+'</div>'+
                '<div class="M-content">'+content+'</div>'+
                '<div class="M-handler box">'+
                '<span class="M-handler-cancel box-f1">取消</span>'+
                '<span class="M-handler-ok box-f1">确定</span>'+
                '</div>'+
                '</div>'+
                '</div>';
            this.confirmDom = $(confirmHtml).appendTo('body');
        };
        Confirm.prototype.show = function(){
            var Mpopup = this.confirmDom.find('.M-popup').show();
            Mpopup.css('margin-top',-(Mpopup.height()/2+20)).addClass('ani zoomIn').one(aniMationEnd,function(){
                Mpopup.removeClass('ani zoomIn');
                Mpopup.unbind(aniMationEnd);
            });
            return this;
        };
        Confirm.prototype.on = function(okCb,cancelCb){
            var me = this;
            this.confirmDom.find('.M-handler-ok').on(M.touch,function(e){
                if(okCb) okCb && okCb.call(me);
                else me.hide();
                e.preventDefault();
            });
            this.confirmDom.find('.M-handler-cancel').on(M.touch,function(e){
                if(cancelCb) cancelCb && cancelCb.call(me);
                else me.hide();
                e.preventDefault();
            });
            this.confirmDom.on(M.touch,function(e){
                var target = $(e.target);
                if(target.closest('.M-popup').length==0){
                    me.hide();
                }
                e.preventDefault();
            });
            return this;
        };
        Confirm.prototype.hide = function(){
            var me = this;
            this.confirmDom.find('.M-popup').addClass('ani zoomOut').one(aniMationEnd,function(){
                me.confirmDom.remove();
            });
            return this;
        };
        /**
         * 生成toast实例的对象
         * @param options toast对应的参数
         * @constructor
         */
        var Toast = function(options){
            this.id = alertId++;
            this.options = options;
            if(!options.duration){
                this.options.duration = 2000;
            }
            var toastHtml = '<div id="m-popup-'+this.id+'" class="M-toast"><span>'+this.options.text+'</span></div>';
            this.toastDom = $(toastHtml).appendTo('body');
        };
        Toast.prototype.show = function(){
            var me = this;
            this.toastDom.addClass('ani zoomIn').show().one(aniMationEnd,function(){
                me.toastDom.removeClass('ani zoomIn');
                me.toastDom.unbind(aniMationEnd);
                if(me.options.isControl){
                    toastTempArr.push(me);
                    return me;
                }
                setTimeout(function(){
                    me.hide();
                },me.options.duration);
            });
            return this;
        };
        Toast.prototype.hide = function(){
            var me = this;
            this.toastDom.addClass('ani zoomOut').one(aniMationEnd,function(){
                me.toastDom.remove();
            });
            return this;
        };

        var ActionSheet = function(options){
            this.id = alertId++;
            this.options = options;
            var asHtml ='<div id="m-popup-'+this.id+'" class="M-pop"><div class="M-popup bottom" style="background: transparent;"><div class="actionsheet"><div class="actionsheet-group">';
            for(var i=0;i<this.options.items.length;i++){
                asHtml += '<button class="actionsheet-item">'+options.items[i].text+'</button>';
            }
            asHtml += '</div><button class="actionsheet-cancel">取消</button></div</div></div>';
            this.actionSheetDom = $(asHtml).appendTo('body');
        };

        ActionSheet.prototype.show = function(){
            var me = this;
            this.actionSheetDom.find('.M-popup').addClass('ani slideInUp').show().one(aniMationEnd,function(){
                me.actionSheetDom.find('.M-popup').removeClass('ani slideInUp');
                me.actionSheetDom.find('.M-popup').unbind(aniMationEnd);
            });
            return this;
        };
        ActionSheet.prototype.on = function(){
            var me = this;
            this.actionSheetDom.find('.actionsheet-item').each(function(i,elem){
                $(elem).on(M.touch,function(e){
                    if(me.options.items[i].handler) me.options.items[i].handler && me.options.items[i].handler.call(me);
                    e.preventDefault();
                });
            });
            this.actionSheetDom.find('.actionsheet-cancel').on(M.touch,function(e){
                if(me.options.cancelCb) me.options.cancelCb && me.options.cancelCb.call(me);
                else me.hide();
                e.preventDefault();
            });
            this.actionSheetDom.on(M.touch,function(e){
                var target = $(e.target);
                if(target.closest('.M-popup').length==0){
                    me.hide();
                }
                e.preventDefault();
            });
            return this;
        };
        ActionSheet.prototype.hide = function(){
            var me = this;
            this.actionSheetDom.find('.M-popup').addClass('ani slideOutDown').one(aniMationEnd,function(){
                me.actionSheetDom.remove();
            });
            return this;
        };


        var _tmp = {};
        /**
         * alert组件
         * @param title 标题
         * @param content 内容
         * @param cb 点击确定后的回调函数
         */
        _tmp.alert = function(title,content,cb){
            if(!content){ //只传了一个参数,第一个参数当做content处理
                content = title;
                title = '提示';
            }else if(typeof content === 'function'){//传了2个参数，相当于传了content 和 cb
                cb = content;
                content = title;
                title = '提示';
            }
            return new Alert(title,content).on(cb).show();
        };
        /**
         * confirm组件
         * @param title 标题
         * @param content 内容
         * @param okCb 确定的回调函数
         * @param cancelCb 取消的回调函数
         */
        _tmp.confirm = function(title,content,okCb,cancelCb){
            if(typeof content === 'function'){ //没有传入title
                cancelCb = okCb;
                okCb = content;
                content = title;
                title = '提示';
            }
            return new Confirm(title,content,okCb,cancelCb).on(okCb,cancelCb).show();
        };
        /**
         * 类似于Android的toast的功能，具有自动消失的功能
         * @param text 需要展示的内容
         * @param duration toast持续时间 ,默认为2s
         * @param isControl 布尔值，默认为false，如果为true，则需要手动调用hide方法将其关闭
         */
        _tmp.showToast = function(text,duration,isControl){
            return new Toast({
                text:text,
                duration:duration,
                isControl:isControl
            }).show();
        };
        _tmp.hideToast = function(){
            var tmp = toastTempArr.shift();
            if(tmp) tmp.hide();
            else console.warn('你所想关闭的toast不存在！');
            return tmp;
        };
        /**
         * 生成actionsheet
         * @param arr actionsheet对应的数组 {text:'',handler:function}
         * @param cancleCb 取消按钮的回调函数
         * @returns {*}
         */
        _tmp.actionSheet = function(arr,cancelCb){
            var options = {};
            options.items = arr;
            options.cancelCb = cancelCb;
            return new ActionSheet(options).on().show();
        };

        for(var k in _tmp){
            if(_tmp.hasOwnProperty(k)) M.register(k,_tmp[k]);
        }
    })();
    //图片预加载组件
    (function(){
        var _tmp = {};
        /**
         *  图片预加载
         */
        var imgReady = (function () {
            var list = [], intervalId = null,
            // 用来执行队列
                tick = function () {
                    var i = 0;
                    for (; i < list.length; i++) {
                        list[i].end ? list.splice(i--, 1) : list[i]();
                    }
                    !list.length && stop();
                },
            // 停止所有定时器队列
                stop = function () {
                    clearInterval(intervalId);
                    intervalId = null;
                };
            return function (url, ready, load, error) {
                var onready, width, height, newWidth, newHeight,
                    img = new Image();
                img.src = url;
                // 如果图片被缓存，则直接返回缓存数据
                if (img.complete) {
                    ready.call(img);
                    load && load.call(img);
                    return;
                }
                width = img.width;
                height = img.height;
                // 加载错误后的事件
                img.onerror = function () {
                    error && error.call(img);
                    onready.end = true;
                    img = img.onload = img.onerror = null;
                };
                // 图片尺寸就绪
                onready = function () {
                    newWidth = img.width;
                    newHeight = img.height;
                    if (newWidth !== width || newHeight !== height ||
                            // 如果图片已经在其他地方加载可使用面积检测
                        newWidth * newHeight > 1024
                    ) {
                        ready && ready.call(img);
                        onready.end = true;
                    }
                };
                onready();
                // 完全加载完毕的事件
                img.onload = function () {
                    // onload在定时器时间差范围内可能比onready快
                    // 这里进行检查并保证onready优先执行
                    !onready.end && onready();

                    load && load.call(img);

                    // IE gif动画会循环执行onload，置空onload即可
                    img = img.onload = img.onerror = null;
                };
                // 加入队列中定期执行
                if (!onready.end) {
                    list.push(onready);
                    // 无论何时只允许出现一个定时器，减少浏览器性能损耗
                    if (intervalId === null) intervalId = setInterval(tick, 40);
                }
            };
        })();

        /**
         * 图片预加载
         * @param imgs 数组，需要预加载的图片数组
         * @param onComplete 图片加载完成后的回调，带两个参数count：成功加载图片数量 imgs：原图片数组
         * @param onReady  每张图片加载完成后都会执行的回调
         */
        _tmp.imgpreload = function(imgs,onComplete,onReady) {
            var onComplete = onComplete || function(count,imgs){};
            var onReady = onReady || function(i,img){};

            var loaded = 0;
            var error = 0;
            for(var i = 0; i < imgs.length; i++){
                (function(n){
                    var n = n;
                    imgReady(imgs[n],function(){
                        ++loaded;
                        onReady && onReady(n,imgs[n]);
                        if(loaded + error >= imgs.length){
                            onComplete && onComplete(loaded,imgs);
                        }
                    },null,function(){
                        ++ error;
                        if(error + loaded >= imgs.length) {
                            onComplete && onComplete(loaded,imgs);
                        }
                    });
                })(i);
            }
        };
        for(var k in _tmp){
            if(_tmp.hasOwnProperty(k)) M.register(k,_tmp[k]);
        }
    })();
    //post请求
    (function(){
        var _tmp = {};
        _tmp.ajax = function(action,params,appid,callback,apiopenid,apitoken,debug) {
            if(!action) {
                M.showToast("action不能为空");
                return false;
            }

            if(!appid) {
                M.showToast("appid不能为空");
                return false;
            }

            this.httpid = this.httpid || 0;
            this.httpid ++;

            var postdata = {};
            postdata.action = action;
            postdata.params = (typeof params == "string" ? params:(JSON.stringify(params) || ""));
            postdata.letwxid = appid;
            postdata.apiopenid = apiopenid || "testopenid";
            postdata.apitoken = apitoken || "testopenid";
            if(debug) {
                postdata.debug = debug;
            }

            if(M.APIBASE.indexOf(window.location.host) < 0) { //接口地址和当前地址不在一个域，则以跨域的方式调用
                var cbkey = 'httpcb'+this.httpid;
                var ngapi = window.ngapi = ngapi || {};
                ngapi[cbkey] = function(data) {
                    callback && callback(data);
                    delete ngapi[cbkey]; //消除对象
                    $("#"+cbkey).remove(); //消除无用的script
                };

                postdata.callback = "ngapi."+cbkey;

                var query = [];
                for(var p in postdata) {
                    if(postdata.hasOwnProperty(p)) {
                        if(typeof postdata[p] == "object") {
                            query.push(p+"="+encodeURIComponent(JSON.stringify(postdata[p])));
                        }
                        else query.push(p+"="+encodeURIComponent(postdata[p]));
                    }
                }
                var url = M.APIBASE+"?"+query.join("&");
                var script = document.createElement('script');
                script.src = url;
                script.id = cbkey;//直接append会导致script无法触发
                $("head").append(script);
            }
            else {
                $.post(M.APIBASE, postdata, function(json) {
                    try {
                        callback && callback(json);
                    } catch (e) {
                        //TODO错误处理
                        M.showToast('AJAX请求处理错误', 'error');
                    }
                }, "json");
            }
        };
        for(var k in _tmp){
            if(_tmp.hasOwnProperty(k)) M.register(k,_tmp[k]);
        }
    })();

    //一些基础的工具
    (function(){
        var _tmp = {};
        _tmp.getUrlParam = function(url){
            var str = url;
            var jinghao = 0; //存放'#'的位置
            var jinghaoyu = null; //存放'#'后面第一个'&'的位置
            if (!str) str = window.location.href;
            str = str.replace('#rd','');
            while(str.indexOf('#') > -1){ //以防url中出现多个'#'
                jinghao = str.indexOf('#',jinghao + 1);
                var jinghaostr = str.substr(jinghao);
                if(jinghaostr.indexOf('&') > -1){
                    jinghaoyu = jinghaostr.indexOf('&');
                }else{
                    jinghaoyu = jinghaostr.length;
                }
                str = str.replace(str.substr(jinghao,jinghaoyu),'');
            }
            var obj = new Object();
            if (str.indexOf('?') > -1) {
                var string = str.substr(str.indexOf('?') + 1);
                var strs = string.split('&');
                for (var i = 0; i < strs.length; i++) {
                    var tempArr = strs[i].split('=');
                    obj[tempArr[0]] = tempArr[1];
                }
            }
            return obj;
        };
        _tmp.setCookie = function(name, value, expire_days) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + expire_days);
            document.cookie = name + '=' + escape(value) + ((expire_days == null) ? '' : ';expires=' + exdate.toGMTString());
        };
        _tmp.getCookie = function(name) {
            var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        };
        _tmp.delCookie = function(name) {
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval = this.getCookie(name);
            if (cval != null)
                document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
        };

        for(var k in _tmp){
            if(_tmp.hasOwnProperty(k)) M.register(k,_tmp[k]);
        }
    })();
    if(typeof window !== 'undefined'){
        window.M = M;
    }
})();

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
    };
}());