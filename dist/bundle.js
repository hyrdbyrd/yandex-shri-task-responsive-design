!function(n){var e={};function t(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(i,o,function(e){return n[e]}.bind(null,o));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=11)}([function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var o=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(i),r=i.sources.map(function(n){return"/*# sourceURL="+i.sourceRoot+n+" */"});return[t].concat(r).concat([o]).join("\n")}return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&i[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){var i={},o=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),r=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var i=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(n){i=null}e[n]=i}return e[n]}}(),a=null,s=0,l=[],c=t(2);function d(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(m(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(m(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:s}}}}function p(n,e){for(var t=[],i={},o=0;o<n.length;o++){var r=n[o],a=e.base?r[0]+e.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};i[a]?i[a].parts.push(s):t.push(i[a]={id:a,parts:[s]})}return t}function f(n,e){var t=r(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=l[l.length-1];if("top"===n.insertAt)i?i.nextSibling?t.insertBefore(e,i.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),l.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=r(n.insertAt.before,t);t.insertBefore(e,o)}}function u(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=l.indexOf(n);e>=0&&l.splice(e,1)}function b(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var i=function(){0;return t.nc}();i&&(n.attrs.nonce=i)}return x(e,n.attrs),f(n,e),e}function x(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function m(n,e){var t,i,o,r;if(e.transform&&n.css){if(!(r=e.transform(n.css)))return function(){};n.css=r}if(e.singleton){var l=s++;t=a||(a=b(e)),i=g.bind(null,t,l,!1),o=g.bind(null,t,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",x(e,n.attrs),f(n,e),e}(e),i=function(n,e,t){var i=t.css,o=t.sourceMap,r=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||r)&&(i=c(i));o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([i],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),o=function(){u(t),t.href&&URL.revokeObjectURL(t.href)}):(t=b(e),i=function(n,e){var t=e.css,i=e.media;i&&n.setAttribute("media",i);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){u(t)});return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=p(n,e);return d(t,e),function(n){for(var o=[],r=0;r<t.length;r++){var a=t[r];(s=i[a.id]).refs--,o.push(s)}n&&d(p(n,e),e);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var h=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}();function g(n,e,t,i){var o=t?"":i.css;if(n.styleSheet)n.styleSheet.cssText=h(e,o);else{var r=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,i=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?n:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,e,t){var i=t(4);"string"==typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(i,o);i.locals&&(n.exports=i.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"* {\n    -ms-overflow-style: none;\n}\n::-webkit-scrollbar {\n    width: 2px;\n    height: 2px;\n    background: rgba(0, 0, 0, 0);\n}\n::-webkit-scrollbar-thumb {\n    background: rgba(51, 51, 51, .1)    ;\n}\n::-webkit-scrollbar-button {\n    width: 25px;\n    height: 25px;\n}\n.no-overflow {\n    overflow: hidden;\n}\nbody,\n.main {\n    padding: 0;\n    margin: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-height: 100vh;\n    font-family: Arial, sans-serif;\n    font-weight: bold;\n    font-size: 16px;\n    overflow-x: hidden;\n    color: #333333;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    font-size: 16px;\n}\n.graph {\n    width: 100%;\n    border-radius: 20px;\n}\n.copyright {\n    font-size: calc(0.1vw + 1rem);\n    -webkit-box-flex: 2;\n        -ms-flex-positive: 2;\n            flex-grow: 2;\n    text-align: right;\n}\n.transparent {\n    opacity: 0;\n    z-index: -1;\n}\n.container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 94%;\n    margin: 0 auto;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.link {\n    color: #858585;\n    cursor: pointer;\n}\n.link:hover {\n    text-decoration: underline;\n    color: #333333;\n}\n.link_active {\n    color: #333333;\n}\n.media-mobile {\n    display: none;\n}\n@media (max-width: 1099px) {\n    body,\n    .main {\n        overflow-y: auto;\n        max-height: none;\n        height: auto;\n    }\n    ::-webkit-scrollbar-button {\n        width: 10px;\n        height: 10px;\n    }\n}\n@media (max-width: 991px) {\n    .container {\n        width: 90%;\n    }\n    .media-mobile {\n        display: block;\n    }\n}\n@media (max-width: 991px) {\n    .media-desktop {\n        display: none;\n    }\n}\n.header {\n    z-index: 10;\n    width: 100%;\n    background: #fff;\n}\n.header::after {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 1px;\n    background: #f0f0f0;\n}\n.header-container {\n    font-size: calc(0.3vw + 1rem);\n    padding: 36px 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n.header__logo {\n    margin-right: 30px;\n}\n.navigation-list__item_header {\n    margin-right: 26px;\n}\n.burger {\n    padding: 5px;\n    border-radius: 5px;\n    background: #fff;\n    z-index: 10000;\n}\n@media (max-width: 991px) {\n    .header {\n        position: fixed;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        height: 64px;\n    }\n    .header::after {\n        display: none;\n    }\n    .header-container {\n        padding: 0;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n    }\n    .navigation_header {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        width: 100vw;\n        height: 100vh;\n        position: fixed;\n        -webkit-transition: 0.2s all linear;\n        transition: 0.2s all linear;\n        left: 200vw;\n        top: 0;\n        background: rgba(51, 51, 51, .5);\n    }\n        .navigation_header .navigation-list {\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n    }\n    .navigation_header_active {\n        z-index: 1000;\n        left: 0;\n    }\n    .navigation_header-wrapper {\n        background: #fff;\n        padding: 20px;\n        border-radius: 20px;\n    }\n}\n.navigation {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    overflow: hidden;\n}\n.navigation-list {\n    padding: 0;\n    margin: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n.navigation-list__item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    list-style: none;\n}\n@media (max-width: 1099px) {\n    .navigation {\n        width: -webkit-fill-available;\n        width: -moz-available;\n        width: fill;\n        overflow-y: hidden;\n        overflow-x: auto;\n        padding-bottom: 5px;\n    }\n    .navigation-list {\n        height: -webkit-min-content;\n        height: -moz-min-content;\n        height: min-content;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: nowrap;\n            flex-wrap: nowrap;\n    }\n}\n.events {\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    grid-auto-rows: -webkit-min-content;\n    grid-auto-rows: min-content;\n    grid-auto-flow: dense;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    grid-gap: 20px;\n    width: 100%;\n}\n.event {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    -webkit-transition: 0.2s all linear;\n    transition: 0.2s all linear;\n    border-radius: 20px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.event:hover {\n    -webkit-box-shadow: 0 2px 6px 0 rgba(197,186,186,0.50);\n    box-shadow: 0 2px 6px 0 rgba(197,186,186,0.50);\n}\n.event:hover .empty {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n}\n/* darkGray color = #f3f3f3, rgba(243, 243, 243, 1) */\n.event_type_info {\n    background: #fafafa;\n}\n.event_type_info:hover {\n    background: #f3f3f3;\n}\n.event_type_info .event__nav {\n        background: rgba(243, 243, 243, .9999);\n        -webkit-box-shadow: 0 0 40px 20px rgba(243, 243, 243, .9999);\n                box-shadow: 0 0 40px 20px rgba(243, 243, 243, .9999);\n}\n/* red color = #db5341, rgba(219, 83, 65, 1) */\n.event_type_critical {\n    background: #db5341;\n}\n.event_type_critical .event__content {\n        background: #fafafa;\n        border-radius: 20px;\n}\n.event_type_critical .event__header {\n        color: #fff;\n}\n.event_type_critical .event__nav {\n        background: #db5341;\n        -webkit-box-shadow: 0 0 20px 20px #db5341;\n                box-shadow: 0 0 20px 20px #db5341;\n}\n.event_type_critical .slide {\n        -webkit-box-shadow: 0 0 5px 5px rgba(219, 83, 65, .5);\n                box-shadow: 0 0 5px 5px rgba(219, 83, 65, .5);\n        background: rgba(219, 83, 65, .5);\n}\n.empty {\n    display: none;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    float: right;\n    clear: both;\n    height: 0;\n    overflow: visible;\n}\n.event__nav {\n    z-index: 1;\n    position: relative;\n    width: 18px;\n    height: 18px;\n    right: 20px;\n}\n.cross {\n    top: 20px;\n}\n.slide {\n    bottom: 40px;\n    border-radius: 100%;\n}\n.event__header {\n    display: grid;\n    grid-template-columns: repeat(9, 1fr) 16px;\n    grid-auto-rows: -webkit-min-content;\n    grid-auto-rows: min-content;\n    grid-gap: 20px 0;\n    padding: 20px;\n}\n.event-intro {\n    grid-column: span 10;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.event__icon {\n    width: 52px;\n    height: 52px;\n    margin-right: 20px;\n}\n.event__title {\n    font-size: calc(0.505vw + 1rem);\n    width: 100%;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    -o-ellipsis-lastline: 2;\n    overflow-y: hidden;\n    text-overflow: ellipsis;\n}\n.event-desc {\n    font-weight: 100;\n    font-size: 18px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    font-size: calc(0.15vw + 1rem);\n    grid-column: span 10;\n}\n.event__source {\n    margin-right: 20px    ;\n}\n.event__content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    justify-items: stretch;\n    -ms-flex-line-pack: justify;\n        align-content: space-between;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    height: 100%;\n}\n.event__description {\n    padding: 20px;\n    font-size: calc(0.3vw + 1rem);\n    font-weight: 500;\n}\n.event__data {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    padding: 20px;\n    padding-top: 0;\n}\n.event_size_l {\n    grid-column: span 4;\n    grid-row: span 3;\n}\n.event_size_l .event__description {\n        font-size: calc(0.56vw + 1rem);\n}\n.event_size_m {\n    grid-column: span 3;\n    grid-row: span 2;\n}\n.event_size_s {\n    grid-column: span 2;\n    grid-row: span 1;\n}\n.buttons {\n    color: #000000;\n    display: grid;\n    grid-gap: 18px;\n    grid-template-columns: repeat(auto-fit, 132px);\n    grid-auto-rows: 54px;\n    font-size: calc(0.26vw + 1rem);\n}\n.button {\n    border-radius: 8px;\n    height: 54px;\n    width: 132px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.button_type_confirm {\n    background: #ffd93e;\n}\n.button_type_close {\n    background: #e5e5e5;\n}\n.event_closed {\n    grid-column: span 2;\n    grid-row: span 1;\n}\n.event_closed .event__content {\n        display: none;\n}\n@media (max-width: 991px) {\n    .events {\n        grid-template-columns: 1fr;\n        margin-bottom: 20px;\n    }\n    .event_size_l,\n    .event_size_m,\n    .event_size_s {\n        grid-column: span 1;\n        grid-row: span 1;\n    }\n    .event__description, \n    .event_size_l.event__description {\n        font-size: calc(0.5vw + 0.8rem);\n    }\n    .event__icon {\n        width: 36px;\n        height: 36px;\n    }\n    .event-intro {\n        grid-gap: 15px;\n    }\n    .event-desc {\n        font-size: calc(0.1vw + 0.8rem);\n    }\n    .event__title {\n        font-size: calc(0.5vw + 0.8rem);\n    }\n    .button {\n        height: 44px;\n    }\n}\n@media (max-width: 370px) {\n    .buttons {\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n    }\n}\n.state {\n    font-weight: 100;\n    display: grid;\n    font-size: calc(0.07vw + 1rem);\n    grid-template-columns: repeat(2, minmax(120px, 180px));\n}\n@media (max-width: 991px) {\n    .state {\n        font-size: calc(0.1vw + 0.9rem);\n    }\n    /* .humidity\n        text-align: right */\n}\n.music {\n    height: 100%;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: 1fr 1fr;\n    height: -webkit-min-content;\n    height: -moz-min-content;\n    height: min-content;\n    grid-gap: 10px;\n    grid-auto-rows: 21.5px;\n}\n.music__albumcover {\n    width: 100%;\n    border-radius: 10px;\n    grid-row: span 1;\n    grid-column: span 1;\n    min-width: 53px;\n    min-height: 53px;\n}\n.music-track {\n    grid-row: span 1;\n    grid-column: span 9;\n    display: grid;\n    grid-template-column: 1fr 1fr;\n}\n.music__description {\n    white-space: nowrap;\n    overflow: hidden;\n    padding: 5px;\n    text-overflow: ellipsis;\n    font-weight: 100;\n    grid-column: span 1;\n}\n.track {\n    grid-column: span 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.music__track {\n    width: 100%;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    outline: none;\n}\n.music__track::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    border-radius: 5px;\n    background: #d8d8d8;\n    width: 12px;\n    height: 20px;\n}\n.music__track {\n    background: #979797;\n    height: 1px;\n}\n.track__value {\n    margin-left: 15px;\n    font-size: 14px;\n    color: #a1a1a1;\n    font-weight: 100;\n}\n.music-nav {\n    grid-gap: 0 6px;\n    grid-row: span 1;\n    grid-column: span 10;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n.music__prev,\n.music__next {\n    grid-column: span 1;\n}\n.music__prev {\n    margin-right: 20px;\n}\n.volume {\n    grid-column: span 8;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.music__volume {\n    width: 100%;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    outline: none;\n}\n.music__volume::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    border-radius: 100%;\n    background: #605757;\n    width: 16px;\n    height: 16px;\n}\n.music__volume {\n    background: #d3d3d3;\n    height: 1px;\n}\n.volume__value {\n    margin-left: 15px;\n    font-size: 14px;\n    font-weight: 100;\n    color: #a1a1a1;\n}\n.box-image-wrapper {\n    -ms-touch-action: none;\n        touch-action: none;\n    overflow: hidden;\n    background-repeat: repeat-x;\n    width: 100%;\n    background-size: 100% 100%;\n    border-radius: 20px;\n}\n.box__image {\n    width: 100%;\n    visibility: hidden;\n}\n.box-options {\n    display: none;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n.content__container {\n    width: 80%;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.content__title {\n    font-size: calc(1.46vw + 1rem);\n    margin: 30px 0;\n}\n@media (max-width: 991px) {\n    .content-section:last-child {\n        margin-bottom: 5vw;\n    }\n}\n@media (max-width: 991px) {\n    .content__container {\n        width: 90%;\n    }\n    .content__title {\n        margin-top: 80px;\n    }\n}\n.footer {\n    padding: 22px 0;\n}\n.footer-container {\n    color: #858585;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n.navigation_footer {\n    font-size: calc(0.1vw + 1rem);\n    width: 100%;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.navigation-list__item_footer {\n    margin-right: 26px;\n}\n@media(max-width: 1127px) {\n    .navigation_footer,\n    .copyright {\n        font-size: calc(0.1vw + 0.8rem);\n    }\n}",""])},function(n,e){window.addEventListener("DOMContentLoaded",()=>{const n=document.body,e=n.querySelector(".main"),t=e.querySelector(".navigation_header");e.querySelector(".burger").addEventListener("click",()=>{t.classList.toggle("navigation_header_active"),n.classList.toggle("no-overflow"),e.classList.toggle("no-overflow")})})},function(n,e){window.addEventListener("DOMContentLoaded",()=>{document.body.querySelectorAll(".event").forEach(n=>{n.addEventListener("click",function(n){switch(!0){case n.target.classList.contains("cross"):this.classList.add("event_closed");break;case n.target.classList.contains("slide"):this.classList.remove("event_closed")}})})})},function(n,e){!function(){const n=document.createElement("div");void 0!==n.style.webkitLineClamp&&void 0!==n.style.webkitBoxOrient||window.addEventListener("DOMContentLoaded",()=>{const n=document.body,e=n.querySelector(".events").querySelectorAll(".event__title");function t(){e.forEach(e=>{const t=e.getAttribute("data-title"),i=e.cloneNode(!0);i.style.position="absolute",i.style.visibility="hidden",i.style.height="auto",i.style.width="100%",i.style.whiteSpace="pre",i.innerHTML=t,n.appendChild(i);const o=2*i.clientHeight;i.style.whiteSpace="normal",i.style.width=`${e.clientWidth}px`;let r=t.length-1;for(;r>=0&&i.clientHeight>o;--r)i.innerHTML=`${t.substring(0,r)}...`;e.innerHTML=i.innerHTML,n.removeChild(i)})}window.addEventListener("resize",t),t()})}()},,,,function(n,e,t){"use strict";t.r(e);t(3);!function(){const n="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch||navigator.maxTouchPoints>0||window.navigator.msMaxTouchPoints>0;window.addEventListener("DOMContentLoaded",()=>{const e=document.body.querySelector(".events");e&&e.querySelectorAll(".event").forEach(e=>{n&&e.querySelectorAll(".empty").forEach(n=>n.style.display="flex");const t=e.querySelector(".box");if(t){const e=t.querySelector(".box-options");n&&(e.style.display="block"),new class{constructor(n,e,t,i){this.image={wrapper:n,diagonalLength:0},this.rotate={element:i,position:{x:0,y:0}},this.bright={element:e,value:100,rotate:0},this.zoom={element:t,value:100},n.style.backgroundPosition="0px 0px",n.style.backgroundSize=`${this.zoom.value} ${this.zoom.value}`,this.startLine=null,this.isUsed=!1,this.pointers=[],this.zoomTo=null,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onSingleMove=this.onSingleMove.bind(this),this.onMultiMove=this.onMultiMove.bind(this),this.init()}onPointerUp(n){this.pointers=this.pointers.filter(e=>e.id!==n.pointerId),document.removeEventListener("pointerup",this.onPointerUp),document.removeEventListener("pointermove",this.onSingleMove);const e=this.image.wrapper.style.backgroundPosition.split(" ").map(n=>n.slice(0,n.length-2));this.rotate.position={x:e[0],y:e[1]},this.zoom.value=this.image.wrapper.style.backgroundSize.split(" ")[0],this.startLine=null}onPointerDown(n){this.pointers.push({x:this.isUsed?0:n.clientX,y:this.isUsed?0:n.clientY,id:n.pointerId});const e=this.pointers.length>1;document[e?"removeEventListener":"addEventListener"]("pointermove",this.onSingleMove),document[e?"addEventListener":"removeEventListener"]("pointermove",this.onMultiMove),document.addEventListener("pointerup",this.onPointerUp)}slideTo(n,e){const{wrapper:t}=this.image;t.style.backgroundPosition=t.style.backgroundPosition.split(" ").map((t,i)=>{let o;if(0===i){const e=3600;return o=+this.rotate.position.x,(o+=+(n-this.pointers[0].x))>e&&(o=e),o<-e&&(o=-e),this.rotate.element.innerText=`Поворот ${0|o}°`,`${o}px`}if(1===i){const n=100;return o=+this.rotate.position.y,(o+=-1*+(e-this.pointers[0].y)/5)<0&&(o=0),o>n&&(o=100),`${o}%`}return""}).join(" ")}addPointer(){this.pointers.push({id:-1e3,x:480,y:480})}multiGesture(n,e){const{pointers:t}=this;let i,o;i=Math.abs(t[e].x-n.clientX),o=Math.abs(t[e].y-n.clientY);const r=Math.sqrt(i**2+o**2);if(null===this.startLine&&(this.startLine={r:r,x:n.clientX,y:n.clientY}),0===this.image.diagonalLength)this.zoom.value=100,this.image.diagonalLength=r;else{this.image.diagonalLength=r;let n=+this.image.diagonalLength;(n+=this.zoom.value/10)<100&&(n=100),n>350&&(n=350),this.zoom.value=n}const{value:a}=this.zoom;if(this.zoom.element.innerText=`Приближение: ${0|a}%`,this.image.wrapper.style.backgroundSize=`${a}% ${a}%`,null===this.startLine)return;let s=(this.bright.rotate+180*Math.atan(event.clientY/event.clientX)/Math.PI)/1.5;s<50&&(s=50),s>150&&(s=150),this.bright.element.innerText=`Яркость: ${0|s}%`,this.image.wrapper.style.filter=`brightness(${s}%)`,this.bright.rotate=s}onMultiMove(n){const{pointers:e}=this;let t=e.findIndex(e=>e.id===n.pointerId);this.multiGesture(n,0===t?1:0)}onSingleMove(n){this.slideTo(n.clientX,n.clientY)}init(){const{wrapper:n}=this.image;n.addEventListener("pointerdown",this.onPointerDown)}}(t.querySelector(".box-image-wrapper"),e.querySelector(".options__brightness"),e.querySelector(".options__zoom"),e.querySelector(".options__rotate"))}})})}();t(5),t(6),t(7)}]);