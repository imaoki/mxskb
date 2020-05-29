/*! © 2020 imaoki | MIT License | https://github.com/imaoki */
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], (function () {
      return factory(root);
    }));
  } else if (typeof exports === "object") {
    module.exports = factory(root);
  } else {
    root.mxskb = factory(root);
  }
})(typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : this, (function (window) {
  "use strict";

  var mxskb = {};

  mxskb.initHandlers = [];

  mxskb.addInitHandler = function(handler) {
    mxskb.initHandlers.push(handler);
  };

  mxskb.each = function(elements, fn) {
    Array.prototype.forEach.call(elements, fn);
  };

  // icon.html用
  // テキストをコピーする
  mxskb.execCopy = function(textValue) {
    var dummy = document.createElement("div");
    dummy.style.position = "fixed";
    dummy.style.right = "200%";

    var pre = document.createElement("pre");
    pre.style.webkitUserSelect = "auto";
    pre.style.userSelect = "auto";

    dummy.appendChild(pre).textContent = textValue;

    document.body.appendChild(dummy);
    document.getSelection().selectAllChildren(dummy);

    var result = document.execCommand("copy");

    document.body.removeChild(dummy);

    return result;
  };

  var init = function() {
    document.addEventListener("DOMContentLoaded", function() {
      for (var i = 0, len = mxskb.initHandlers.length; i < len; ++i) {
        mxskb.initHandlers[i]();
      }
    });
  };

  init();

  return mxskb;
}));
