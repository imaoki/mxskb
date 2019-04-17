/*! © 2015 imaoki | MIT License | https://github.com/imaoki */
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
    mxskb.addInitHandler(function() {
      if (window.hljs) {
        hljs.configure({languages: []});
        if (window.hljslang) {
          hljs.registerLanguage("css", hljslang.css);
          hljs.registerLanguage("diff", hljslang.diff);
          hljs.registerLanguage("ebnf", hljslang.ebnf);
          hljs.registerLanguage("javascript", hljslang.javascript);
          hljs.registerLanguage("markdown", hljslang.markdown);
          hljs.registerLanguage("maxscript", hljslang.maxscript);
          hljs.registerLanguage("xml", hljslang.xml);
        }
        hljs.initHighlighting();

        mxskb.each(document.querySelectorAll("code[class^='code language-']"), function(el, i) {
          hljs.highlightBlock(el);
        });
      }

      if (SmoothScroll) {
        new SmoothScroll("a[href*='#']", {
          speed: 75,
          easing: "easeOutQuint"
        })
      }

      mxskb.each(document.getElementsByTagName("a"), function(el, i) {
        if (el.getElementsByTagName("img").length) {
          el.classList.add("image");
        }
      });

      mxskb.each(document.getElementsByTagName("pre"), function(el, i) {
        var re = /.*\blanguage-(\w+)\b.*/;
        var elements = el.getElementsByTagName("code");
        if (elements.length) {
          var classValue = elements[0].getAttribute("class");
          var dataType = "text";
          if (classValue.match(re)) {
            dataType = classValue.replace(re, "$1");
          }
          el.setAttribute("data-type", dataType);
        }
      });

      // mxskb.each(document.querySelectorAll("a[class*='reversefootnote'"), function(el, i) {
      //   el.textContent = "";
      // });
      mxskb.each(document.querySelectorAll("a[class*='reversefootnote'"), function(el, i) {
        var parentNode = el.parentNode;
        if (parentNode) {
          parentNode.innerHTML = parentNode.innerHTML.replace("&nbsp;", "");
        }
      });
    });

    document.addEventListener("DOMContentLoaded", function() {
      for (var i = 0, len = mxskb.initHandlers.length; i < len; ++i) {
        mxskb.initHandlers[i]();
      }
    });
  };

  init();

  return mxskb;
}));
