!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.dataloaders=e()}}(function(){return function e(n,t,r){function o(s,c){if(!t[s]){if(!n[s]){var i="function"==typeof require&&require;if(!c&&i)return i(s,!0);if(u)return u(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var f=t[s]={exports:{}};n[s][0].call(f.exports,function(e){var t=n[s][1][e];return o(t?t:e)},f,f.exports,e,n,t,r)}return t[s].exports}for(var u="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,n,t){"use strict";function r(e){q=e,console.log("storageInstances are: ",q)}function o(e){var n=u(e.request.url);n?(console.info("handleFetchRequest starting for: ",e.request.url),e.respondWith(s(e,n).then(function(n){return console.log("handleFetchEvent successfully resolved",e.request.url),n}).catch(function(n){throw console.log("handleFetchEvent failed to resolve successfully",n,e.request.url),n}))):console.debug("no cache matches found for "+e.request.url+". Proceeding with regular fetch.")}function u(e){for(var n in q){var t=q[n],r=!1;if(t.url.filter(function(n){if("string"==typeof n&&(n="^"+n+"$"),e.match(n))return void(r=!0)}),r)return t}}function s(e,n){return new Promise(function(t,r){var o=g[n.requestMethod];o(e,n).then(function(n){if("object"!=("undefined"==typeof n?"undefined":m(n))&&console.info("swProcessRequest is returning a: ","undefined"==typeof n?"undefined":m(n),e.request.url),n)return console.info("swProcessRequest resolving: ",n),t(c(o,n));throw console.warn("swProcessRequest did not resolve. throwing error now",e.request.url),Error}).catch(function(n){return console.info("swProcessRequest rejecting",e.request.url),r(n)})})}function c(e,n){var t={status:200,statusText:"OK",headers:{"Content-Type":"text/plain"}};return n.constructor==Response?(console.debug("formatResponse: object is response object",n),n):(console.debug(n.text,"undefined"==typeof n?"undefined":m(n),n),n.text().then(function(e){var n=new Response(e,t);return n}))}function i(e,n){return new Promise(function(t,r){caches.match(e.request.url).then(function(o){if(o)return console.info(e.request.url+" returning from the cache",o),t(o);console.info("swCacheFirst starting network request",e.request.url);var u=new Promise(function(e){var t=1e3*n.maxAge||2e3;setTimeout(e,t,"network request failed to respond")}),s=new Promise(function(t,r){return h(e,n).then(function(n){return console.info(e.request.url+" returning from the network directly from swRequestFromNetwork"),t(n)}).catch(function(n){return console.info("swCacheFirst: network request error being caught",e.request.url),r(n)})});Promise.race([u,s]).then(function(n){return console.info("swCacheFirst: "+e.request.url+" returning from the network via Promise.race"),t(n)}).catch(function(n){return console.info("swCacheFirst request rejected because timeout triggered",n,e.request.url),r(n)})}).catch(function(n){console.error("error in swCacheFirst request",n,e.request.url),r(n)})})}function a(e,n){return new Promise(function(n,t){caches.match(e.request).then(function(e){return e?n(e):t()})})}function f(e,n){var t=void 0,r=new Promise(function(n,r){t=setTimeout(function(){caches.match(e.request).then(function(e){return e?(console.log("returning swNetworkFirst request from the Cache","undefined"==typeof e?"undefined":m(e),e),n(e)):(console.warn("no response to resolve to in swNetworkFirst"),r())})},1500)}),o=new Promise(function(r,o){return h(e,n).then(function(n){return t&&clearTimeout(t),console.log("returning swNetworkFirst request from the Network",e.request,e.request.url),caches.match(e.request).then(function(e){console.log("matching cache is:",e)}),n?r(n):(console.warn("swNetworkFirst: Bad Response From networkRequest"),o())}).catch(function(n){return console.log("swNetworkFirst: error returned from requestFromNetwork",n,e.request.url),t&&clearTimeout(t),caches.match(e.request).then(function(e){return e?(console.log("returning swNetworkFirst request from the Cache","undefined"==typeof e?"undefined":m(e),e),r(e)):(console.warn("no response to resolve to in swNetworkFirst"),o())})})});return Promise.race([r,o]).then(function(e){return e})}function l(e,n){return new Promise(function(t,r){h(e,n,!1).then(function(e){return e?t(e):(console.log("swNetworkOnly Request did not succeed. The response was: "+e),t)}).catch(function(e){console.debug("swNetworkOnly request failed"),r(Error(e))})})}function d(e,n){return new Promise(function(t,r){var o=!1,u=function(e){o?r(Error("both cache and network requests failed"),e):(console.log("rejected request"),o=!0)},s=function(e){return e?t(e):void u()};a(e,n).then(s,u),h(e,n).then(s,u)})}function h(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return new Promise(function(r,o){fetch(e.request).then(function(o){console.debug("swRequestFromNetwork: network request responded with: ",e.request.url,o.headers,o.headers.get("Content-Type")),caches.open(n.cacheName).then(function(u){return t&&"GET"===e.request.method&&u.add(e.request.url).then(function(){console.debug("swRequestFromNetwork: network item added to cache",e.request.url),w(n,u,e.request.url)}).catch(function(n){console.error("swRequestFromNetwork: error when adding item to the cache",e.request.url,n)}),r(o)})}).catch(function(n){return console.error("error in swRequestFromNetwork: ",n,e.request.url),o(n)})})}function w(e,n,t){console.log("offline status",navigator.offline);var r=Date.now();p.openDb(e.cacheName).then(function(e){return p.setTimestampForUrl(e,t,r)}).then(function(n){return p.expireEntries(n,e.maxEntries,e.maxAge,r)}).then(function(t){var r=t.map(function(t){return console.log("deleting cache: ",t,e.maxAge),n.delete(t)});return Promise.all(r).then(function(){console.log("Done with cache cleanup.")})}).catch(function(e){console.log("error in cache clean up: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.setStorageInstances=r,t.handleFetchEvent=o;var p=e("./utils/dataloader-cache-expiration"),q={},g={networkFirst:f,cacheFirst:i,fastest:d,networkOnly:l,cacheOnly:a};caches.keys().then(function(e){console.log("current caches are: ",e)})},{"./utils/dataloader-cache-expiration":2}],2:[function(e,n,t){"use strict";function r(e){return new Promise(function(n,t){var r=indexedDB.open(i+e,a);r.onupgradeneeded=function(){console.log("onupgradeneeded called");var e=r.result.createObjectStore(f,{keyPath:l});e.createIndex(d,d,{unique:!1})},r.onsuccess=function(){n(r.result)},r.onerror=function(){t(r.error)}})}function o(e,n,t){return new Promise(function(r,o){var u=e.transaction(f,"readwrite"),s=u.objectStore(f);s.put({url:n,timestamp:t}),u.oncomplete=function(){r(e)},u.onabort=function(){o(u.error)}})}function u(e,n,t){return n?new Promise(function(r,o){var u=1e3*n,s=[],c=e.transaction(f,"readwrite"),i=c.objectStore(f),a=i.index(d);a.openCursor().onsuccess=function(e){var n=e.target.result,r=t-n.value[d];if(n&&r>u){var o=n.value[l];s.push(o),i.delete(o),n.continue()}},c.oncomplete=function(){r(s)},c.onabort=o}):Promise.resolve([])}function s(e,n){return n?new Promise(function(t,r){var o=[],u=e.transaction(f,"readwrite"),s=u.objectStore(f),c=s.index(d),i=c.count();c.count().onsuccess=function(){var e=i.result;e>n&&(c.openCursor().onsuccess=function(t){var r=t.target.result;if(r){var u=r.value[l];o.push(u),s.delete(u),e-o.length>n&&r.continue()}})},u.oncomplete=function(){t(o)},u.onabort=r}):Promise.resolve([])}function c(e,n,t,r){return u(e,t,r).then(function(t){return s(e,n).then(function(e){return t.concat(e)})})}var i="",a=1,f="dataStore",l="url",d="timestamp";n.exports={openDb:r,setTimestampForUrl:o,expireEntries:c}},{}]},{},[1])(1)});
//# sourceMappingURL=maps/sw-dataloaders.js.map
