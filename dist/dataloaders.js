!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.dataloaders=e()}}(function(){var e;return function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){var n=t[a][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,n,r){(function(o){!function(t){if("object"==typeof r&&"undefined"!=typeof n)n.exports=t();else if("function"==typeof e&&e.amd)e([],t);else{var i;i="undefined"!=typeof window?window:"undefined"!=typeof o?o:"undefined"!=typeof self?self:this,i.localforage=t()}}(function(){return function e(n,r,o){function i(u,c){if(!r[u]){if(!n[u]){var s="function"==typeof t&&t;if(!c&&s)return s(u,!0);if(a)return a(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var l=r[u]={exports:{}};n[u][0].call(l.exports,function(e){var t=n[u][1][e];return i(t?t:e)},l,l.exports,e,n,r,o)}return r[u].exports}for(var a="function"==typeof t&&t,u=0;u<o.length;u++)i(o[u]);return i}({1:[function(e,t,n){"use strict";function r(){}function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=m,this.queue=[],this.outcome=void 0,e!==r&&c(this,e)}function i(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function a(e,t,n){v(function(){var r;try{r=t(n)}catch(t){return y.reject(e,t)}r===e?y.reject(e,new TypeError("Cannot resolve promise with itself")):y.resolve(e,r)})}function u(e){var t=e&&e.then;if(e&&"object"==typeof e&&"function"==typeof t)return function(){t.apply(e,arguments)}}function c(e,t){function n(t){i||(i=!0,y.reject(e,t))}function r(t){i||(i=!0,y.resolve(e,t))}function o(){t(r,n)}var i=!1,a=s(o);"error"===a.status&&n(a.value)}function s(e,t){var n={};try{n.value=e(t),n.status="success"}catch(e){n.status="error",n.value=e}return n}function f(e){return e instanceof this?e:y.resolve(new this(r),e)}function l(e){var t=new this(r);return y.reject(t,e)}function d(e){function t(e,t){function r(e){a[t]=e,++u!==o||i||(i=!0,y.resolve(s,a))}n.resolve(e).then(r,function(e){i||(i=!0,y.reject(s,e))})}var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var a=new Array(o),u=0,c=-1,s=new this(r);++c<o;)t(e[c],c);return s}function h(e){function t(e){n.resolve(e).then(function(e){i||(i=!0,y.resolve(u,e))},function(e){i||(i=!0,y.reject(u,e))})}var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var a=-1,u=new this(r);++a<o;)t(e[a]);return u}var v=e(2),y={},p=["REJECTED"],g=["FULFILLED"],m=["PENDING"];t.exports=n=o,o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===g||"function"!=typeof t&&this.state===p)return this;var n=new this.constructor(r);if(this.state!==m){var o=this.state===g?e:t;a(n,o,this.outcome)}else this.queue.push(new i(n,e,t));return n},i.prototype.callFulfilled=function(e){y.resolve(this.promise,e)},i.prototype.otherCallFulfilled=function(e){a(this.promise,this.onFulfilled,e)},i.prototype.callRejected=function(e){y.reject(this.promise,e)},i.prototype.otherCallRejected=function(e){a(this.promise,this.onRejected,e)},y.resolve=function(e,t){var n=s(u,t);if("error"===n.status)return y.reject(e,n.value);var r=n.value;if(r)c(e,r);else{e.state=g,e.outcome=t;for(var o=-1,i=e.queue.length;++o<i;)e.queue[o].callFulfilled(t)}return e},y.reject=function(e,t){e.state=p,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},n.resolve=f,n.reject=l,n.all=d,n.race=h},{2:2}],2:[function(e,t,n){(function(e){"use strict";function n(){f=!0;for(var e,t,n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}f=!1}function r(e){1!==l.push(e)||f||o()}var o,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var a=0,u=new i(n),c=e.document.createTextNode("");u.observe(c,{characterData:!0}),o=function(){c.data=a=++a%2}}else if(e.setImmediate||"undefined"==typeof e.MessageChannel)o="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){n(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(n,0)};else{var s=new e.MessageChannel;s.port1.onmessage=n,o=function(){s.port2.postMessage(0)}}var f,l=[];t.exports=r}).call(this,"undefined"!=typeof o?o:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(e,t,n){(function(t){"use strict";"function"!=typeof t.Promise&&(t.Promise=e(1))}).call(this,"undefined"!=typeof o?o:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1}],4:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){}}function i(){try{return!!ie&&(!("undefined"!=typeof openDatabase&&"undefined"!=typeof navigator&&navigator.userAgent&&/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent))&&(ie&&"function"==typeof ie.open&&"undefined"!=typeof IDBKeyRange))}catch(e){return!1}}function a(){return"function"==typeof openDatabase}function u(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&localStorage.setItem}catch(e){return!1}}function c(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if("TypeError"!==i.name)throw i;for(var n="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,r=new n,o=0;o<e.length;o+=1)r.append(e[o]);return r.getBlob(t.type)}}function s(e,t){t&&e.then(function(e){t(null,e)},function(e){t(e)})}function f(e,t,n){"function"==typeof t&&e.then(t),"function"==typeof n&&e.catch(n)}function l(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),o=0;o<t;o++)r[o]=e.charCodeAt(o);return n}function d(e){return new ce(function(t){var n=c([""]);e.objectStore(se).put(n,"key"),e.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)},e.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);t(n||!e||parseInt(e[1],10)>=43)}}).catch(function(){return!1})}function h(e){return"boolean"==typeof ae?ce.resolve(ae):d(e).then(function(e){return ae=e})}function v(e){var t=ue[e.name],n={};n.promise=new ce(function(e){n.resolve=e}),t.deferredOperations.push(n),t.dbReady?t.dbReady=t.dbReady.then(function(){return n.promise}):t.dbReady=n.promise}function y(e){var t=ue[e.name],n=t.deferredOperations.pop();n&&n.resolve()}function p(e,t){return new ce(function(n,r){if(e.db){if(!t)return n(e.db);v(e),e.db.close()}var o=[e.name];t&&o.push(e.version);var i=ie.open.apply(ie,o);t&&(i.onupgradeneeded=function(t){var n=i.result;try{n.createObjectStore(e.storeName),t.oldVersion<=1&&n.createObjectStore(se)}catch(n){if("ConstraintError"!==n.name)throw n;console.warn('The database "'+e.name+'" has been upgraded from version '+t.oldVersion+" to version "+t.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),i.onerror=function(){r(i.error)},i.onsuccess=function(){n(i.result),y(e)}})}function g(e){return p(e,!1)}function m(e){return p(e,!0)}function b(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,o=e.version>e.db.version;if(r&&(e.version!==t&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||n){if(n){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function w(e){return new ce(function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(n){var r=btoa(n.target.result||"");t({__local_forage_encoded_blob:!0,data:r,type:e.type})},r.readAsBinaryString(e)})}function S(e){var t=l(atob(e.data));return c([t],{type:e.type})}function _(e){return e&&e.__local_forage_encoded_blob}function E(e){var t=this,n=t._initReady().then(function(){var e=ue[t._dbInfo.name];if(e&&e.dbReady)return e.dbReady});return f(n,e,e),n}function I(e){function t(){return ce.resolve()}var n=this,r={db:null};if(e)for(var o in e)r[o]=e[o];ue||(ue={});var i=ue[r.name];i||(i={forages:[],db:null,dbReady:null,deferredOperations:[]},ue[r.name]=i),i.forages.push(n),n._initReady||(n._initReady=n.ready,n.ready=E);for(var a=[],u=0;u<i.forages.length;u++){var c=i.forages[u];c!==n&&a.push(c._initReady().catch(t))}var s=i.forages.slice(0);return ce.all(a).then(function(){return r.db=i.db,g(r)}).then(function(e){return r.db=e,b(r,n._defaultConfig.version)?m(r):e}).then(function(e){r.db=i.db=e,n._dbInfo=r;for(var t=0;t<s.length;t++){var o=s[t];o!==n&&(o._dbInfo.db=r.db,o._dbInfo.version=r.version)}})}function x(e,t){var n=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var r=new ce(function(t,r){n.ready().then(function(){var o=n._dbInfo,i=o.db.transaction(o.storeName,"readonly").objectStore(o.storeName),a=i.get(e);a.onsuccess=function(){var e=a.result;void 0===e&&(e=null),_(e)&&(e=S(e)),t(e)},a.onerror=function(){r(a.error)}}).catch(r)});return s(r,t),r}function A(e,t){var n=this,r=new ce(function(t,r){n.ready().then(function(){var o=n._dbInfo,i=o.db.transaction(o.storeName,"readonly").objectStore(o.storeName),a=i.openCursor(),u=1;a.onsuccess=function(){var n=a.result;if(n){var r=n.value;_(r)&&(r=S(r));var o=e(r,n.key,u++);void 0!==o?t(o):n.continue()}else t()},a.onerror=function(){r(a.error)}}).catch(r)});return s(r,t),r}function O(e,t,n){var r=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var o=new ce(function(n,o){var i;r.ready().then(function(){return i=r._dbInfo,"[object Blob]"===fe.call(t)?h(i.db).then(function(e){return e?t:w(t)}):t}).then(function(t){var r=i.db.transaction(i.storeName,"readwrite"),a=r.objectStore(i.storeName);null===t&&(t=void 0),r.oncomplete=function(){void 0===t&&(t=null),n(t)},r.onabort=r.onerror=function(){var e=u.error?u.error:u.transaction.error;o(e)};var u=a.put(t,e)}).catch(o)});return s(o,n),o}function k(e,t){var n=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var r=new ce(function(t,r){n.ready().then(function(){var o=n._dbInfo,i=o.db.transaction(o.storeName,"readwrite"),a=i.objectStore(o.storeName),u=a.delete(e);i.oncomplete=function(){t()},i.onerror=function(){r(u.error)},i.onabort=function(){var e=u.error?u.error:u.transaction.error;r(e)}}).catch(r)});return s(r,t),r}function N(e){var t=this,n=new ce(function(e,n){t.ready().then(function(){var r=t._dbInfo,o=r.db.transaction(r.storeName,"readwrite"),i=o.objectStore(r.storeName),a=i.clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=a.error?a.error:a.transaction.error;n(e)}}).catch(n)});return s(n,e),n}function j(e){var t=this,n=new ce(function(e,n){t.ready().then(function(){var r=t._dbInfo,o=r.db.transaction(r.storeName,"readonly").objectStore(r.storeName),i=o.count();i.onsuccess=function(){e(i.result)},i.onerror=function(){n(i.error)}}).catch(n)});return s(n,e),n}function R(e,t){var n=this,r=new ce(function(t,r){return e<0?void t(null):void n.ready().then(function(){var o=n._dbInfo,i=o.db.transaction(o.storeName,"readonly").objectStore(o.storeName),a=!1,u=i.openCursor();u.onsuccess=function(){var n=u.result;return n?void(0===e?t(n.key):a?t(n.key):(a=!0,n.advance(e))):void t(null)},u.onerror=function(){r(u.error)}}).catch(r)});return s(r,t),r}function D(e){var t=this,n=new ce(function(e,n){t.ready().then(function(){var r=t._dbInfo,o=r.db.transaction(r.storeName,"readonly").objectStore(r.storeName),i=o.openCursor(),a=[];i.onsuccess=function(){var t=i.result;return t?(a.push(t.key),void t.continue()):void e(a)},i.onerror=function(){n(i.error)}}).catch(n)});return s(n,e),n}function C(e){var t,n,r,o,i,a=.75*e.length,u=e.length,c=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var s=new ArrayBuffer(a),f=new Uint8Array(s);for(t=0;t<u;t+=4)n=de.indexOf(e[t]),r=de.indexOf(e[t+1]),o=de.indexOf(e[t+2]),i=de.indexOf(e[t+3]),f[c++]=n<<2|r>>4,f[c++]=(15&r)<<4|o>>2,f[c++]=(3&o)<<6|63&i;return s}function B(e){var t,n=new Uint8Array(e),r="";for(t=0;t<n.length;t+=3)r+=de[n[t]>>2],r+=de[(3&n[t])<<4|n[t+1]>>4],r+=de[(15&n[t+1])<<2|n[t+2]>>6],r+=de[63&n[t+2]];return n.length%3===2?r=r.substring(0,r.length-1)+"=":n.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function T(e,t){var n="";if(e&&(n=Ne.call(e)),e&&("[object ArrayBuffer]"===n||e.buffer&&"[object ArrayBuffer]"===Ne.call(e.buffer))){var r,o=ye;e instanceof ArrayBuffer?(r=e,o+=ge):(r=e.buffer,"[object Int8Array]"===n?o+=be:"[object Uint8Array]"===n?o+=we:"[object Uint8ClampedArray]"===n?o+=Se:"[object Int16Array]"===n?o+=_e:"[object Uint16Array]"===n?o+=Ie:"[object Int32Array]"===n?o+=Ee:"[object Uint32Array]"===n?o+=xe:"[object Float32Array]"===n?o+=Ae:"[object Float64Array]"===n?o+=Oe:t(new Error("Failed to get type for BinaryArray"))),t(o+B(r))}else if("[object Blob]"===n){var i=new FileReader;i.onload=function(){var n=he+e.type+"~"+B(this.result);t(ye+me+n)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(n){console.error("Couldn't convert value into a JSON string: ",e),t(null,n)}}function F(e){if(e.substring(0,pe)!==ye)return JSON.parse(e);var t,n=e.substring(ke),r=e.substring(pe,ke);if(r===me&&ve.test(n)){var o=n.match(ve);t=o[1],n=n.substring(o[0].length)}var i=C(n);switch(r){case ge:return i;case me:return c([i],{type:t});case be:return new Int8Array(i);case we:return new Uint8Array(i);case Se:return new Uint8ClampedArray(i);case _e:return new Int16Array(i);case Ie:return new Uint16Array(i);case Ee:return new Int32Array(i);case xe:return new Uint32Array(i);case Ae:return new Float32Array(i);case Oe:return new Float64Array(i);default:throw new Error("Unkown type: "+r)}}function L(e){var t=this,n={db:null};if(e)for(var r in e)n[r]="string"!=typeof e[r]?e[r].toString():e[r];var o=new ce(function(e,r){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(e){return r(e)}n.db.transaction(function(o){o.executeSql("CREATE TABLE IF NOT EXISTS "+n.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],function(){t._dbInfo=n,e()},function(e,t){r(t)})})});return n.serializer=je,o}function q(e,t){var n=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var r=new ce(function(t,r){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(n){n.executeSql("SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[e],function(e,n){var r=n.rows.length?n.rows.item(0).value:null;r&&(r=o.serializer.deserialize(r)),t(r)},function(e,t){r(t)})})}).catch(r)});return s(r,t),r}function M(e,t){var n=this,r=new ce(function(t,r){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(n){n.executeSql("SELECT * FROM "+o.storeName,[],function(n,r){for(var i=r.rows,a=i.length,u=0;u<a;u++){var c=i.item(u),s=c.value;if(s&&(s=o.serializer.deserialize(s)),s=e(s,c.key,u+1),void 0!==s)return void t(s)}t()},function(e,t){r(t)})})}).catch(r)});return s(r,t),r}function P(e,t,n){var r=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var o=new ce(function(n,o){r.ready().then(function(){void 0===t&&(t=null);var i=t,a=r._dbInfo;a.serializer.serialize(t,function(t,r){r?o(r):a.db.transaction(function(r){r.executeSql("INSERT OR REPLACE INTO "+a.storeName+" (key, value) VALUES (?, ?)",[e,t],function(){n(i)},function(e,t){o(t)})},function(e){e.code===e.QUOTA_ERR&&o(e)})})}).catch(o)});return s(o,n),o}function U(e,t){var n=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var r=new ce(function(t,r){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(n){n.executeSql("DELETE FROM "+o.storeName+" WHERE key = ?",[e],function(){t()},function(e,t){r(t)})})}).catch(r)});return s(r,t),r}function z(e){var t=this,n=new ce(function(e,n){t.ready().then(function(){var r=t._dbInfo;r.db.transaction(function(t){t.executeSql("DELETE FROM "+r.storeName,[],function(){e()},function(e,t){n(t)})})}).catch(n)});return s(n,e),n}function W(e){var t=this,n=new ce(function(e,n){t.ready().then(function(){var r=t._dbInfo;r.db.transaction(function(t){t.executeSql("SELECT COUNT(key) as c FROM "+r.storeName,[],function(t,n){var r=n.rows.item(0).c;e(r)},function(e,t){n(t)})})}).catch(n)});return s(n,e),n}function K(e,t){var n=this,r=new ce(function(t,r){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(n){n.executeSql("SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[e+1],function(e,n){var r=n.rows.length?n.rows.item(0).key:null;t(r)},function(e,t){r(t)})})}).catch(r)});return s(r,t),r}function Q(e){var t=this,n=new ce(function(e,n){t.ready().then(function(){var r=t._dbInfo;r.db.transaction(function(t){t.executeSql("SELECT key FROM "+r.storeName,[],function(t,n){for(var r=[],o=0;o<n.rows.length;o++)r.push(n.rows.item(o).key);e(r)},function(e,t){n(t)})})}).catch(n)});return s(n,e),n}function G(e){var t=this,n={};if(e)for(var r in e)n[r]=e[r];return n.keyPrefix=n.name+"/",n.storeName!==t._defaultConfig.storeName&&(n.keyPrefix+=n.storeName+"/"),t._dbInfo=n,n.serializer=je,ce.resolve()}function X(e){var t=this,n=t.ready().then(function(){for(var e=t._dbInfo.keyPrefix,n=localStorage.length-1;n>=0;n--){var r=localStorage.key(n);0===r.indexOf(e)&&localStorage.removeItem(r)}});return s(n,e),n}function V(e,t){var n=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var r=n.ready().then(function(){var t=n._dbInfo,r=localStorage.getItem(t.keyPrefix+e);return r&&(r=t.serializer.deserialize(r)),r});return s(r,t),r}function H(e,t){var n=this,r=n.ready().then(function(){for(var t=n._dbInfo,r=t.keyPrefix,o=r.length,i=localStorage.length,a=1,u=0;u<i;u++){var c=localStorage.key(u);if(0===c.indexOf(r)){var s=localStorage.getItem(c);if(s&&(s=t.serializer.deserialize(s)),s=e(s,c.substring(o),a++),void 0!==s)return s}}});return s(r,t),r}function J(e,t){var n=this,r=n.ready().then(function(){var t,r=n._dbInfo;try{t=localStorage.key(e)}catch(e){t=null}return t&&(t=t.substring(r.keyPrefix.length)),t});return s(r,t),r}function Y(e){var t=this,n=t.ready().then(function(){for(var e=t._dbInfo,n=localStorage.length,r=[],o=0;o<n;o++)0===localStorage.key(o).indexOf(e.keyPrefix)&&r.push(localStorage.key(o).substring(e.keyPrefix.length));return r});return s(n,e),n}function Z(e){var t=this,n=t.keys().then(function(e){return e.length});return s(n,e),n}function $(e,t){var n=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var r=n.ready().then(function(){var t=n._dbInfo;localStorage.removeItem(t.keyPrefix+e)});return s(r,t),r}function ee(e,t,n){var r=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var o=r.ready().then(function(){void 0===t&&(t=null);var n=t;return new ce(function(o,i){var a=r._dbInfo;a.serializer.serialize(t,function(t,r){if(r)i(r);else try{localStorage.setItem(a.keyPrefix+e,t),o(n)}catch(e){"QuotaExceededError"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||i(e),i(e)}})})});return s(o,n),o}function te(e,t){e[t]=function(){var n=arguments;return e.ready().then(function(){return e[t].apply(e,n)})}}function ne(){for(var e=1;e<arguments.length;e++){var t=arguments[e];if(t)for(var n in t)t.hasOwnProperty(n)&&(Me(t[n])?arguments[0][n]=t[n].slice():arguments[0][n]=t[n])}return arguments[0]}function re(e){for(var t in Be)if(Be.hasOwnProperty(t)&&Be[t]===e)return!0;return!1}var oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie=o();"undefined"==typeof Promise&&"undefined"!=typeof e&&e(3);var ae,ue,ce=Promise,se="local-forage-detect-blob-support",fe=Object.prototype.toString,le={_driver:"asyncStorage",_initStorage:I,iterate:A,getItem:x,setItem:O,removeItem:k,clear:N,length:j,key:R,keys:D},de="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",he="~~local_forage_type~",ve=/^~~local_forage_type~([^~]+)~/,ye="__lfsc__:",pe=ye.length,ge="arbf",me="blob",be="si08",we="ui08",Se="uic8",_e="si16",Ee="si32",Ie="ur16",xe="ui32",Ae="fl32",Oe="fl64",ke=pe+ge.length,Ne=Object.prototype.toString,je={serialize:T,deserialize:F,stringToBuffer:C,bufferToString:B},Re={_driver:"webSQLStorage",_initStorage:L,iterate:M,getItem:q,setItem:P,removeItem:U,clear:z,length:W,key:K,keys:Q},De={_driver:"localStorageWrapper",_initStorage:G,iterate:H,getItem:V,setItem:ee,removeItem:$,clear:X,length:Z,key:J,keys:Y},Ce={},Be={INDEXEDDB:"asyncStorage",LOCALSTORAGE:"localStorageWrapper",WEBSQL:"webSQLStorage"},Te=[Be.INDEXEDDB,Be.WEBSQL,Be.LOCALSTORAGE],Fe=["clear","getItem","iterate","key","keys","length","removeItem","setItem"],Le={description:"",driver:Te.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},qe={};qe[Be.INDEXEDDB]=i(),qe[Be.WEBSQL]=a(),qe[Be.LOCALSTORAGE]=u();var Me=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},Pe=function(){function e(t){r(this,e),this.INDEXEDDB=Be.INDEXEDDB,this.LOCALSTORAGE=Be.LOCALSTORAGE,this.WEBSQL=Be.WEBSQL,this._defaultConfig=ne({},Le),this._config=ne({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver)}return e.prototype.config=function(e){if("object"===("undefined"==typeof e?"undefined":oe(e))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var t in e)"storeName"===t&&(e[t]=e[t].replace(/\W/g,"_")),this._config[t]=e[t];return"driver"in e&&e.driver&&this.setDriver(this._config.driver),!0}return"string"==typeof e?this._config[e]:this._config},e.prototype.defineDriver=function(e,t,n){var r=new ce(function(t,n){try{var r=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),i=new Error("Custom driver name already in use: "+e._driver);if(!e._driver)return void n(o);if(re(e._driver))return void n(i);for(var a=Fe.concat("_initStorage"),u=0;u<a.length;u++){var c=a[u];if(!c||!e[c]||"function"!=typeof e[c])return void n(o)}var s=ce.resolve(!0);"_support"in e&&(s=e._support&&"function"==typeof e._support?e._support():ce.resolve(!!e._support)),s.then(function(n){qe[r]=n,Ce[r]=e,t()},n)}catch(e){n(e)}});return f(r,t,n),r},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,t,n){var r=this,o=ce.resolve().then(function(){if(!re(e)){if(Ce[e])return Ce[e];throw new Error("Driver not found.")}switch(e){case r.INDEXEDDB:return le;case r.LOCALSTORAGE:return De;case r.WEBSQL:return Re}});return f(o,t,n),o},e.prototype.getSerializer=function(e){var t=ce.resolve(je);return f(t,e),t},e.prototype.ready=function(e){var t=this,n=t._driverSet.then(function(){return null===t._ready&&(t._ready=t._initDriver()),t._ready});return f(n,e,e),n},e.prototype.setDriver=function(e,t,n){function r(){i._config.driver=i.driver()}function o(e){return function(){function t(){for(;n<e.length;){var o=e[n];return n++,i._dbInfo=null,i._ready=null,i.getDriver(o).then(function(e){return i._extend(e),r(),i._ready=i._initStorage(i._config),i._ready}).catch(t)}r();var a=new Error("No available storage method found.");return i._driverSet=ce.reject(a),i._driverSet}var n=0;return t()}}var i=this;Me(e)||(e=[e]);var a=this._getSupportedDrivers(e),u=null!==this._driverSet?this._driverSet.catch(function(){return ce.resolve()}):ce.resolve();return this._driverSet=u.then(function(){var e=a[0];return i._dbInfo=null,i._ready=null,i.getDriver(e).then(function(e){i._driver=e._driver,r(),i._wrapLibraryMethodsWithReady(),i._initDriver=o(a)})}).catch(function(){r();var e=new Error("No available storage method found.");return i._driverSet=ce.reject(e),i._driverSet}),f(this._driverSet,t,n),this._driverSet},e.prototype.supports=function(e){return!!qe[e]},e.prototype._extend=function(e){ne(this,e)},e.prototype._getSupportedDrivers=function(e){for(var t=[],n=0,r=e.length;n<r;n++){var o=e[n];this.supports(o)&&t.push(o)}return t},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0;e<Fe.length;e++)te(this,Fe[e])},e.prototype.createInstance=function(t){return new e(t)},e}(),Ue=new Pe;t.exports=Ue},{3:3}]},{},[4])(4)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(t,n,r){!function(n,o){if("function"==typeof e&&e.amd)e(["exports","localforage"],o);else if("undefined"!=typeof r)o(r,t("localforage"));else{var i={exports:{}};o(i.exports,n.localforage),n.dataloaders=i.exports}}(this,function(e,t){"use strict";function n(e){for(var t in e)r(e[t]);console.log(I)}function r(e){var n=e,r=t.createInstance({name:n.cacheName||"dataloadersStore",maxEntries:n.maxEntries||null,maxAge:n.maxAge||null,timeoutInSeconds:n.timeoutInSeconds||null,useAsKey:n.useAsKey||null,requestMethod:n.requestMethod||null});I[n.cacheName]=r}function o(e,t,n){return p(t,n).then(function(r){return r?(console.log("cacheFirst: returning from cache: ",r,window.location.pathname),r):y(e,t,n).then(function(e){if(e)return console.log("cacheFirst: returning from network: ",e),e},function(e){console.log("error getting data from both the cache and the network",e)})},function(r){return console.log("error returned form requestFromCache",r),y(e,t,n).then(function(e){if(e)return e},function(e){console.log("error getting data from both the cache and the network",e)})})}function i(e,t,n){var r=void 0,o=I[t],i=new Promise(function(e){r=setTimeout(function(){p(t,n).then(function(t){if(t)return console.log("networkFirst request: returning from Cache: ",t),e(t)})},1e3*o._config.timeoutInSeconds)}),a=y(e,t,n).then(function(e){if(r&&clearTimeout(r),e)return e},function(e){console.log("error returned from requestFromNetwork",e)});return Promise.race([i,a])}function a(e,t,n){return new Promise(function(r,o){var i=!1,a=function(e){return i?o(Error("both cache and network requests failed"),e):(console.log("rejected request",e),void(i=!0))},u=function(e){return e?r(e):void a()};p(t,n).then(u,a),y(e,t,n).then(u,a)})}function u(e,t){return new Promise(function(n,r){return p(e,t).then(function(e){return e?n(e):(console.log("response from cache request was blank"),r("error: the response from cacheOnly request came back blank"))}).catch(function(e){return console.error("Cache Only Error: ",e),r(e)})})}function c(e){return new Promise(function(t){y(e,null,!1).then(function(e){if(e)return t(e)},function(e){console.log("networkOnly request: error returned from requestFromNetwork",e)})})}function s(e){return new Promise(function(t){fetch(e).then(function(e){return e.constructor==Response&&(e=e.json()),e}).then(function(e){return e.constructor!==Array&&(e=[e]),console.log("returning from requestViaServiceWorker",e),t(e)}).catch(function(e){console.log("error in requestViaServiceWorker",e)})})}function f(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=I[t],o=x[r._config.requestMethod],i=e.getAttribute("dataloader-src");i?o(i,t,i).then(function(t){var r=window.URL.createObjectURL(t[0]);n?e.style.background="url("+r+") center / cover":e.setAttribute("src",r)}).catch(function(e){console.log("dataloaders: error processing images in loadImages",e)}):console.log(["dataloader error: loadImage funtion failed: dataloader-src attribute not found on the target element"])}function l(e){y(e,"staticFileStore").then(function(){})}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"staticFileStore";console.log("load css target is: ",e);var n=I.staticFileStore,r=x[n._config.requestMethod],o=e,i=document.createElement("link");i.type="text/css",i.rel="stylesheet",o&&n?(console.log("loading css file from "+t+": "+e),r(t,o).then(function(e){var t=window.URL.createObjectURL(e[0]);i.href=t,console.log("this is the link tag element to be added",i),document.head[0].insertBefore(i,document.head.firstChild)}).catch(function(t){i.href=e,console.log("error retrieving "+e+" from cache. ",t),document.head[0].insertBefore(i,document.head.firstChild)})):console.log(["dataloader error: loadCssFile function failed: href attribute not found on the target element or the storageCache requested does not exist"])}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"StaticFileStore",n=I.staticFileStore,r=x[n._config.requestMethod],o=e;o?!function(){var n=document.createElement("script");n.type="text/javascript",r(o,t,o).then(function(t){var r=window.URL.createObjectURL(t[0]);console.log("returning the script from the cache",e),n.src=r,document.body.appendChild(n)}).catch(function(e){console.log("dataloaders: error processing script in loadScript",e)})}():console.log(["dataloader error: loadScript function failed: dataloader-src attribute not found on the target element"])}function v(e,t){return new Promise(function(n){var o={cacheName:"pageStore",timeoutInSeconds:2,maxEntries:50,maxAge:36e8,useAsKey:"url",requestMethod:"cacheOnly"};I.pageStore||r(o);var i=I.pageStore.setItem(e,t);n(i)})}function y(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return new Promise(function(r,o){var i=new XMLHttpRequest,a="text";"imageStore"!=t&&"staticFileStore"!=t||(a="blob"),i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE&&200===i.status&&200===i.status){var o=void 0;o=i.response instanceof Blob?i.response:JSON.parse(i.response),o.constructor!==Array&&(o=[o]),n&&g(t,o,e),r(o)}},i.onerror=function(){o(Error("There was a network error."))},i.open("GET",e,!0),i.responseType=a,i.send()})}function p(e,t){var n=I[e];return new Promise(function(r,o){function i(e,t){return e.getItem(t).then(function(e){return e&&null!=e&&u.push(e),u.length>0?r(u):r()}).catch(function(e){return o(Error("getItem errored out: "+e))})}function a(e){return e.length(function(t,n){return n>0?void e.iterate(function(e,t,n){u.push(e)}).then(function(){return u.length!=-1?r(u):r()}).catch(function(e){return o(Error("requestFromCache: getAllItems errored out: "+e))}):r()})}var u=[];void 0===("undefined"==typeof e?"undefined":E(e))&&o(Error(e+" is not a valid localforage store")),t?i(n,t):a(n)})}function g(e,t,n){new Promise(function(r){var o=I[e];b(e);for(var i=0;i<t.length;i++){var a=t[i];m(o._config.maxAge,a);var u={};a[o._config.useAsKey]?(u=a[o._config.useAsKey],u=u.toString()):u=n,o.setItem(u,a)}w(e),r()})}function m(e,t){t.dataloaderExpiryTime=Date.now()+e}function b(e){var t=I[e];t.iterate(function(n,r){var o=n;o.dataloaderExpiryTime<Date.now()&&(console.log("removing expired item "+r+" from "+e),t.removeItem(r).catch(function(e){console.log("could not remove item from cache: ",e)}))})}function w(e){var t=I[e];return null===t._config.maxEntries?void console.log("no maxEntries set on this cache",t):void t.length().then(function(e){
var n=e-t._config.maxEntries,r=[];n>0?t.iterate(function(e){r.push(e)}).then(function(){r.sort(function(e,t){return e.dataloaderExpiryTime>t.dataloaderExpiryTime?1:e.dataloaderExpiryTime<t.dataloaderExpiryTime?-1:0}),r=r.slice(0,n),console.log("removing "+r.length+" items from the cache: ",r)}):console.log("entries are less than maxEntries",e,t._config.maxEntries)})}function S(e,t){k.push({selector:e,fn:t}),O||(O=new j(_),O.observe(N.documentElement,{childList:!0,subtree:!0})),_()}function _(){for(var e,t,n=0,r=k.length;n<r;n++){e=k[n],t=N.querySelectorAll(e.selector);for(var o,i=0,a=t.length;i<a;i++)o=t[i],o.ready||(o.ready=!0,e.fn.call(o,o))}}Object.defineProperty(e,"__esModule",{value:!0}),e.setStorageInstances=n,e.cacheFirst=o,e.networkFirst=i,e.fastest=a,e.cacheOnly=u,e.networkOnly=c,e.loadViaServiceWorker=s,e.loadImage=f,e.cacheFile=l,e.loadCssFile=d,e.loadScript=h,e.cachePage=v,e.requestFromNetwork=y,e.detectElementAdded=S;var E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I={},x={networkFirst:i,cacheFirst:o,fastest:a,networkOnly:c,cacheOnly:u},A={staticFileStore:{cacheName:"staticFileStore",timeoutInSeconds:2,maxEntries:50,maxAge:31536e3,useAsKey:"url",requestMethod:"cacheOnly"},pageStore:{cacheName:"pageStore",timeoutInSeconds:3,maxEntries:15,maxAge:12e3,useAsKey:"url",requestMethod:"cacheOnly"}};n(A);var O,k=[],N=window.document,j=window.MutationObserver||window.WebKitMutationObserver})},{localforage:1}]},{},[2])(2)});
//# sourceMappingURL=maps/dataloaders.js.map
