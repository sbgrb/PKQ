parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K4Xi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n="\n.skin *{margin: 0;padding: 0;box-sizing: border-box;}\n.skin *::before{box-sizing: border-box;}\n.skin *::after{box-sizing: border-box;}\n\n.skin{\n    background: #ffe600;\n    min-height: 100vh;\n    position: relative;\n}\n\n.nose{\n    border: 10px solid black;\n    border-color: black transparent transparent;\n    border-bottom: none;\n    height: 10px;\n    width: 10px;\n    position: relative;\n    left: 50%;\n    top: 160px;\n    margin-left: -10px;\n}\n.yuan{\n    position: absolute;\n    height: 10px;\n    width: 20px;\n    top: -20px;\n    left: -10px;\n    border-radius: 14px 14px 0 0;\n    background: black;\n}\n@keyframes wave{\n    0%{\n        transform: rotate(0deg);\n    }\n    33%{\n        transform: rotate(5deg);\n    }\n    66%{\n        transform: rotate(-5deg);\n    }\n    100%{\n        transform: rotate(0deg);\n    }\n}\n.nose:hover{\n    transform-origin: center bottom;\n    animation: wave 300ms infinite linear;\n}\n.eye{\n    border: 2px solid black;\n    position: absolute;\n    height: 64px;\n    width: 64px;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    background: #2e2e2e;\n    border-radius: 50%;\n}\n.eye::before{\n    content: '';\n    border: 3px solid black;\n    display: block;\n    border-radius: 50%;\n    height: 32px;\n    width: 32px;\n    background: #fff;\n    margin-left: 8px;\n}\n\n.eye.left{\n    transform: translateX(-100px);\n}\n\n.eye.right{\n    transform: translateX(100px);\n}\n\n.mouth{\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 180px;\n    margin-left: -100px;\n}\n\n.mouth .up .lip.left{\n    border: 3px solid black;\n    height: 30px;\n    width: 100px;\n    border-radius:  0 0 0 50px;\n    border-top: transparent;\n    border-right: transparent;\n    transform: rotate(-16deg);\n    position: absolute;\n    left: 50%;\n    margin-left: -50%;\n    z-index: 2;\n    background: #ffe600;\n}\n.mouth .up .lip.right{\n    border: 3px solid black;\n    height: 30px;\n    width: 100px;\n    border-radius:  0 0 50px 0;\n    border-top: transparent;\n    border-left: transparent;\n    transform: rotate(16deg) translateX(98px) translateY(-28px);\n    position: absolute;\n    z-index: 2;\n    background: #ffe600;\n}\n\n.mouth .down{\n    /* border: 3px solid red; */\n    width: 100%;\n    height: 160px;\n    position: absolute;\n    overflow: hidden;\n    top: 16px;\n}\n\n.mouth .down .yuan1{\n    border: 3px solid black;\n    height: 1000px;\n    width: 150px;\n    bottom: 0;\n    left: 50%;\n    margin-left: -75px;\n    position: absolute;\n    border-radius: 75px / 300px;\n    background-color: #9b000a;\n    overflow: hidden;\n}\n\n.mouth .down .yuan1 .yuan2{\n    height: 300px;\n    width: 200px;\n    position: absolute;\n    bottom: -170px;\n    left: 50%;\n    margin-left: -100px;\n    background: #ff485f;\n    border-radius: 100px;\n}\n\n.face{\n    position: absolute;\n    width: 88px;\n    height: 88px;\n    left: 50%;\n    border: 3px solid black;\n    top: 240px;\n    margin-left: -44px;\n    z-index: 3;\n}\n\n.face.left{\n    transform: translateX(-180px);\n    background: red;\n    border-radius: 50%;\n}\n.face.right{\n    transform: translateX(180px);\n    background: red;\n    border-radius: 50%;\n}",r=n;exports.default=r;
},{}],"AI3t":[function(require,module,exports) {
"use strict";var e=n(require("./css"));function n(e){return e&&e.__esModule?e:{default:e}}var t={id:void 0,n:1,time:100,ui:{demo:document.querySelector("#demo"),demo2:document.querySelector("#demo2")},init:function(){t.ui.demo.innerHTML=e.default.substr(0,t.n),t.ui.demo2.innerText=e.default.substr(0,t.n),t.play(),t.bindEvents()},events:{"#btnPause":"pause","#btnPlay":"play","#btnSlow":"slow","#btnNormal":"normal","#btnFast":"fast"},bindEvents:function(){for(var e in t.events)if(t.events.hasOwnProperty(e)){var n=t.events[e];document.querySelector(e).onclick=t[n]}},run:function(){t.n+=1,t.n>e.default.length?window.clearInterval(t.id):(t.ui.demo.innerHTML=e.default.substr(0,t.n),t.ui.demo2.innerText=e.default.substr(0,t.n),t.ui.demo2.scrollTop=t.ui.demo2.scrollHeight)},play:function(){t.id=setInterval(t.run,t.time)},pause:function(){window.clearInterval(t.id)},slow:function(){t.pause(),t.time=300,t.play()},normal:function(){t.pause(),t.time=100,t.play()},fast:function(){t.pause(),t.time=0,t.play()}};t.init();
},{"./css":"K4Xi"}]},{},["AI3t"], null)
//# sourceMappingURL=text.fc498a5f.js.map