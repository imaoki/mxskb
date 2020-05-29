/*! © 2020 imaoki | MIT License | https://github.com/imaoki */
if (window.mxskb) {
  mxskb.addInitHandler(function() {
    // TOCで生成される見出しのアンカーを削除
    mxskb.each(document.querySelectorAll("a[for*='toc-anchor']"), function(el, i) {
      el.nextElementSibling.id = el.id;
      el.parentNode.removeChild(el);
    });

    // TOCを移動
    var toc = document.querySelector(".table-of-contents");
    var postMain = document.querySelector(".post.main");
    if (toc && postMain) {
      postMain.parentNode.insertBefore(toc, postMain);
    }
  });
}
