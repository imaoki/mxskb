/*! © 2020 imaoki | MIT License | https://github.com/imaoki */
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

  // タイトル用の見出し
  var firstH1 = document.querySelector(".post.main > h1:first-of-type");
  var firstH2 = document.querySelector(".post.main > h2:first-of-type");

  var headTitleContent = "Title"
  if (firstH1) headTitleContent = firstH1.textContent;
  if (firstH2) headTitleContent += " " + firstH2.textContent;

  // ヘッダタイトル
  var headTitle = document.querySelector("head > title");
  if (headTitle) {
    // headTitle.textContent = firstH1.textContent;
    headTitle.textContent = headTitleContent;
  }

  // ページタイトル
  var pageTitleA = document.querySelector(".page.title > a");
  if (firstH1 && pageTitleA) {
    pageTitleA.textContent = firstH1.textContent;
    // pageTitleA.innerHTML = firstH1.innerHTML;

    // ページタイトルのリンク
    var firstH1A = document.querySelector(".post.main > h1:first-of-type > a");
    if (firstH1A) {
      pageTitleA.setAttribute("href", firstH1A.getAttribute("href"));
    }
  }

  // ポストタイトル
  var postTitleA = document.querySelector(".post.title > a");
  if (firstH2 && postTitleA) {
    postTitleA.textContent = firstH2.textContent;
  }

  // 不要になった見出しを削除
  if (firstH1) firstH1.parentNode.removeChild(firstH1);
  if (firstH2) firstH2.parentNode.removeChild(firstH2);

  var dateUpdate = document.querySelector(".icon.date.updated");
  var admTitle = document.querySelector(".admonition-title");
  if(admTitle && admTitle.textContent === "update") {
    dateUpdate.textContent = admTitle.nextElementSibling.textContent
    admTitle.parentNode.parentNode.removeChild(admTitle.parentNode);
  }

  // 空の段落を削除
  mxskb.each(document.querySelectorAll("p"), function(el, i) {
    if(el.childNodes.length === 0) {
      el.parentNode.removeChild(el);
    }
  });
});
