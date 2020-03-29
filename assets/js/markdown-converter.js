/*! © 2020 imaoki | MIT License | https://github.com/imaoki */
mxskb.addInitHandler(function() {
  mxskb.each(document.querySelectorAll("a[for*='toc-anchor']"), function(el, i) {
    el.nextElementSibling.id = el.id;
    el.parentNode.removeChild(el);
  });

  var toc = document.querySelector(".table-of-contents");
  var postMain = document.querySelector(".post.main");
  postMain.parentNode.insertBefore(toc, postMain);

  var headTitle = document.querySelector("head > title");
  var pageTitleA = document.querySelector(".page.title > a");
  var firstH1 = document.querySelector(".post.main > h1:first-of-type");
  headTitle.textContent = firstH1.textContent;
  pageTitleA.textContent = firstH1.textContent;

  firstH1.parentNode.removeChild(firstH1);

  var dateUpdate = document.querySelector(".icon.date.updated");
  var admTitle = document.querySelector(".admonition-title");
  if(admTitle.textContent === "update") {
    dateUpdate.textContent = admTitle.nextElementSibling.textContent
    admTitle.parentNode.parentNode.removeChild(admTitle.parentNode);
  }

  mxskb.each(document.querySelectorAll("p"), function(el, i) {
    if(el.childNodes.length === 0) {
      el.parentNode.removeChild(el);
    }
  });
});
