(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(t,e,r){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t.default:t}r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var o=r("q1tI"),i=n(o),a=n(r("Gytx"));function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,r){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,T=[];function l(){s=t(T.map((function(t){return t.props}))),f.canUseDOM?e(s):r&&(s=r(s))}var f=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=s;return s=void 0,T=[],t};var u=o.prototype;return u.shouldComponentUpdate=function(t){return!a(t,this.props)},u.componentWillMount=function(){T.push(this),l()},u.componentDidUpdate=function(){l()},u.componentWillUnmount=function(){var t=T.indexOf(this);T.splice(t,1),l()},u.render=function(){return i.createElement(n,this.props)},o}(o.Component);return u(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(n)+")"),u(f,"canUseDOM",c),f}}},Gytx:function(t,e,r){r("2Spj"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),t.exports=function(t,e,r,n){var o=r?r.call(n,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(e),c=0;c<i.length;c++){var s=i[c];if(!u(s))return!1;var T=t[s],l=e[s];if(!1===(o=r?r.call(n,T,l,s):void 0)||void 0===o&&T!==l)return!1}return!0}},TJpk:function(t,e,r){r("LK8F"),r("dZ+Y"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("8+KV"),r("/SS/"),r("hHhE"),r("V+eJ"),r("HAE/"),r("91GP"),e.__esModule=!0,e.Helmet=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=l(r("q1tI")),a=l(r("17x9")),u=l(r("8+s/")),c=l(r("bmMU")),s=r("v1p5"),T=r("hFT/");function l(t){return t&&t.__esModule?t:{default:t}}function f(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var d,A,y,S=(0,u.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),h=(d=S,y=A=function(t){function e(){return E(this,e),p(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,c.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case T.TAG_NAMES.SCRIPT:case T.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case T.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,r=t.child,o=t.arrayTypeChildren,i=t.newChildProps,a=t.nestedChildren;return n({},o,((e={})[r.type]=[].concat(o[r.type]||[],[n({},i,this.mapNestedChildrenToProps(r,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,r,o=t.child,i=t.newProps,a=t.newChildProps,u=t.nestedChildren;switch(o.type){case T.TAG_NAMES.TITLE:return n({},i,((e={})[o.type]=u,e.titleAttributes=n({},a),e));case T.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},a)});case T.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},a)})}return n({},i,((r={})[o.type]=n({},a),r))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var r=n({},e);return Object.keys(t).forEach((function(e){var o;r=n({},r,((o={})[e]=t[e],o))})),r},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var r=this,n={};return i.default.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=f(o,["children"]),u=(0,s.convertReactPropstoHtmlAttributes)(a);switch(r.warnOnInvalidChildren(t,i),t.type){case T.TAG_NAMES.LINK:case T.TAG_NAMES.META:case T.TAG_NAMES.NOSCRIPT:case T.TAG_NAMES.SCRIPT:case T.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:t,arrayTypeChildren:n,newChildProps:u,nestedChildren:i});break;default:e=r.mapObjectTypeChildren({child:t,newProps:e,newChildProps:u,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var t=this.props,e=t.children,r=f(t,["children"]),o=n({},r);return e&&(o=this.mapChildrenToProps(e,o)),i.default.createElement(d,o)},o(e,null,[{key:"canUseDOM",set:function(t){d.canUseDOM=t}}]),e}(i.default.Component),A.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},A.defaultProps={defer:!0,encodeSpecialCharacters:!0},A.peek=d.peek,A.rewind=function(){var t=d.rewind();return t||(t=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},y);h.renderStatic=h.rewind,e.Helmet=h,e.default=h},bmMU:function(t,e,r){"use strict";r("f3/d"),r("SRfc"),r("a1Th"),r("h7Nl"),r("Oyvg"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("LK8F");var n=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){var u,c,s,T=n(e),l=n(r);if(T&&l){if((c=e.length)!=r.length)return!1;for(u=c;0!=u--;)if(!t(e[u],r[u]))return!1;return!0}if(T!=l)return!1;var f=e instanceof Date,E=r instanceof Date;if(f!=E)return!1;if(f&&E)return e.getTime()==r.getTime();var p=e instanceof RegExp,d=r instanceof RegExp;if(p!=d)return!1;if(p&&d)return e.toString()==r.toString();var A=o(e);if((c=A.length)!==o(r).length)return!1;for(u=c;0!=u--;)if(!i.call(r,A[u]))return!1;if(a&&e instanceof Element&&r instanceof Element)return e===r;for(u=c;0!=u--;)if(!("_owner"===(s=A[u])&&e.$$typeof||t(e[s],r[s])))return!1;return!0}return e!=e&&r!=r}(t,e)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},"ff/Y":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Shopify Starter","description":"Kick off your next, ecommerce experience with this Gatsby starter. This starter ships with credentials to a shopify demo store so you can try it out immediately.","author":"@alexanderhorl"}}}}')},"hFT/":function(t,e,r){r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx"),e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(e.VALID_TAG_NAMES=Object.keys(n).map((function(t){return n[t]})),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(o).reduce((function(t,e){return t[o[e]]=e,t}),{}),e.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(t,e,r){(function(t){r("dZ+Y"),r("KKXr"),r("eM6i"),r("8+KV"),r("LK8F"),r("V+eJ"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("0l/t"),r("bWfx"),r("DNiP"),r("pIFo"),r("91GP"),r("rE2o"),r("ioFf"),e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=c(r("q1tI")),a=c(r("MgzW")),u=r("hFT/");function c(t){return t&&t.__esModule?t:{default:t}}var s,T=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},l=function(t){var e=A(t,u.TAG_NAMES.TITLE),r=A(t,u.HELMET_PROPS.TITLE_TEMPLATE);if(r&&e)return r.replace(/%s/g,(function(){return e}));var n=A(t,u.HELMET_PROPS.DEFAULT_TITLE);return e||n||void 0},f=function(t){return A(t,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return o({},t,e)}),{})},p=function(t,e){return e.filter((function(t){return void 0!==t[u.TAG_NAMES.BASE]})).map((function(t){return t[u.TAG_NAMES.BASE]})).reverse().reduce((function(e,r){if(!e.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==t.indexOf(i)&&r[i])return e.concat(r)}return e}),[])},d=function(t,e,r){var o={};return r.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&_("Helmet: "+t+' should be of type "Array". Instead found type "'+n(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,r){var n={};r.filter((function(t){for(var r=void 0,i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===e.indexOf(s)||r===u.TAG_PROPERTIES.REL&&"canonical"===t[r].toLowerCase()||s===u.TAG_PROPERTIES.REL&&"stylesheet"===t[s].toLowerCase()||(r=s),-1===e.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(r=c)}if(!r||!t[r])return!1;var T=t[r].toLowerCase();return o[r]||(o[r]={}),n[r]||(n[r]={}),!o[r][T]&&(n[r][T]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(n),c=0;c<i.length;c++){var s=i[c],T=(0,a.default)({},o[s],n[s]);o[s]=T}return t}),[]).reverse()},A=function(t,e){for(var r=t.length-1;r>=0;r--){var n=t[r];if(n.hasOwnProperty(e))return n[e]}return null},y=(s=Date.now(),function(t){var e=Date.now();e-s>16?(s=e,t(e)):setTimeout((function(){y(t)}),0)}),S=function(t){return clearTimeout(t)},h="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:t.requestAnimationFrame||y,m="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||S:t.cancelAnimationFrame||S,_=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},b=null,v=function(t,e){var r=t.baseTag,n=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,s=t.onChangeClientState,T=t.scriptTags,l=t.styleTags,f=t.title,E=t.titleAttributes;O(u.TAG_NAMES.BODY,n),O(u.TAG_NAMES.HTML,o),P(f,E);var p={baseTag:M(u.TAG_NAMES.BASE,r),linkTags:M(u.TAG_NAMES.LINK,i),metaTags:M(u.TAG_NAMES.META,a),noscriptTags:M(u.TAG_NAMES.NOSCRIPT,c),scriptTags:M(u.TAG_NAMES.SCRIPT,T),styleTags:M(u.TAG_NAMES.STYLE,l)},d={},A={};Object.keys(p).forEach((function(t){var e=p[t],r=e.newTags,n=e.oldTags;r.length&&(d[t]=r),n.length&&(A[t]=p[t].oldTags)})),e&&e(),s(t,d,A)},R=function(t){return Array.isArray(t)?t.join(""):t},P=function(t,e){void 0!==t&&document.title!==t&&(document.title=R(t)),O(u.TAG_NAMES.TITLE,e)},O=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute(u.HELMET_ATTRIBUTE),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(e),c=0;c<a.length;c++){var s=a[c],T=e[s]||"";r.getAttribute(s)!==T&&r.setAttribute(s,T),-1===o.indexOf(s)&&o.push(s);var l=i.indexOf(s);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(u.HELMET_ATTRIBUTE):r.getAttribute(u.HELMET_ATTRIBUTE)!==a.join(",")&&r.setAttribute(u.HELMET_ATTRIBUTE,a.join(","))}},M=function(t,e){var r=document.head||document.querySelector(u.TAG_NAMES.HEAD),n=r.querySelectorAll(t+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var r=document.createElement(t);for(var n in e)if(e.hasOwnProperty(n))if(n===u.TAG_PROPERTIES.INNER_HTML)r.innerHTML=e.innerHTML;else if(n===u.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[n]?"":e[n];r.setAttribute(n,c)}r.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some((function(t,e){return a=e,r.isEqualNode(t)}))?o.splice(a,1):i.push(r)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return r.appendChild(t)})),{oldTags:o,newTags:i}},g=function(t){return Object.keys(t).reduce((function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n}),"")},I=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[u.REACT_TAG_MAP[r]||r]=t[r],e}),e)},C=function(t,e,r){switch(t){case u.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,r=e.titleAttributes,(n={key:t})[u.HELMET_ATTRIBUTE]=!0,o=I(r,n),[i.default.createElement(u.TAG_NAMES.TITLE,o,t)];var t,r,n,o},toString:function(){return function(t,e,r,n){var o=g(r),i=R(e);return o?"<"+t+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+T(i,n)+"</"+t+">":"<"+t+" "+u.HELMET_ATTRIBUTE+'="true">'+T(i,n)+"</"+t+">"}(t,e.title,e.titleAttributes,r)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(e)},toString:function(){return g(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,r){var n,o=((n={key:r})[u.HELMET_ATTRIBUTE]=!0,n);return Object.keys(e).forEach((function(t){var r=u.REACT_TAG_MAP[t]||t;if(r===u.TAG_PROPERTIES.INNER_HTML||r===u.TAG_PROPERTIES.CSS_TEXT){var n=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=e[t]})),i.default.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,r){return e.reduce((function(e,n){var o=Object.keys(n).filter((function(t){return!(t===u.TAG_PROPERTIES.INNER_HTML||t===u.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(t,e){var o=void 0===n[e]?e:e+'="'+T(n[e],r)+'"';return t?t+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===u.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,r)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[u.HTML_TAG_MAP[r]||r]=t[r],e}),e)},e.handleClientStateChange=function(t){b&&m(b),t.defer?b=h((function(){v(t,(function(){b=null}))})):(v(t),b=null)},e.mapStateOnServer=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,s=t.scriptTags,T=t.styleTags,l=t.title,f=void 0===l?"":l,E=t.titleAttributes;return{base:C(u.TAG_NAMES.BASE,e,n),bodyAttributes:C(u.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:C(u.ATTRIBUTE_NAMES.HTML,o,n),link:C(u.TAG_NAMES.LINK,i,n),meta:C(u.TAG_NAMES.META,a,n),noscript:C(u.TAG_NAMES.NOSCRIPT,c,n),script:C(u.TAG_NAMES.SCRIPT,s,n),style:C(u.TAG_NAMES.STYLE,T,n),title:C(u.TAG_NAMES.TITLE,{title:f,titleAttributes:E},n)}},e.reducePropsToState=function(t){return{baseTag:p([u.TAG_PROPERTIES.HREF],t),bodyAttributes:E(u.ATTRIBUTE_NAMES.BODY,t),defer:A(t,u.HELMET_PROPS.DEFER),encode:A(t,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(u.ATTRIBUTE_NAMES.HTML,t),linkTags:d(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],t),metaTags:d(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:d(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:f(t),scriptTags:d(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],t),styleTags:d(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],t),title:l(t),titleAttributes:E(u.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=h,e.warn=_}).call(this,r("yLpj"))},vrFN:function(t,e,r){"use strict";var n=r("ff/Y"),o=r("q1tI"),i=r.n(o),a=r("TJpk"),u=r.n(a),c=r("Wbzz");function s(t){var e=t.description,r=t.lang,o=t.meta,a=t.keywords,s=t.title;return i.a.createElement(c.StaticQuery,{query:T,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:r},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(a.length>0?{name:"keywords",content:a.join(", ")}:[]).concat(o)})},data:n})}s.defaultProps={lang:"en",meta:[],keywords:[]},e.a=s;var T="1025518380"}}]);
//# sourceMappingURL=84a0e2cbe485907ec3c510155ff002a476b587bc-c7be170f86f9825b0c75.js.map