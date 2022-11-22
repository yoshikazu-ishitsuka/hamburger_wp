// headerのMenuボタン押下時の処理
$(function () {
  $(".c-button--menu.js-button").click(function () {
    $(".l-sidebar__main").scrollTop(0);
    $(".wrapper.u-background--overlay").toggleClass("js-height");
    $(".l-sidebar").css({
      transition: "0.5s",
    });
    $(".side-wrapper").css({
      "z-index": "4",
      left: "0",
      transition: "0.5s",
      "transition-property": "left",
    });
    // $(".l-sidebar__main").css({ width: "100vw", display: "block" });
    // $(".l-sidebar__main").css({ width: "100vw", transform: "scaleX(1)" });
    $(".l-sidebar__main").css({ width: "100vw" });
    $("body").css({ position: "fixed", overflow: "scroll" });
    $(".wrapper").css({ position: "sticky", top: "0" });
    $(".l-sidebar").toggleClass("is-open");
    $(".menu-close.js-button").css({ position: "sticky", top: "0" });
  });
});

// sidebarのｘボタン押下時の処理
$(function () {
  $(".menu-close.js-button").click(function () {
    $(".u-background--overlay").toggleClass("js-height");
    $(".l-sidebar").removeClass("is-open");
    $(".side-wrapper").css({ "z-index": "-1", left: "100%" });
    $(".wrapper").css({ position: "static" });
    $("body").css({ position: "static", overflow: "inherit" });
    $(".l-sidebar__main").css({
      width: "19vw", // 問題の箇所 //
    });
  });
});

// $(function () {
//   if (window.matchMedia("(max-width: 600px)").matches) {
//     $(".l-sidebar__main").css({ width: "0" });
//   } else if (
//     window.matchMedia("(max-width: 767px) and (min-width: 601px)").matches
//   ) {
//     $(".l-sidebar__main").css({ width: "0" });
//   } else if (
//     window.matchMedia("(max-width: 1024px) and (min-width: 768px)").matches
//   ) {
//     $(".l-sidebar__main").css({ width: "0" });
//   } else if (window.matchMedia("(min-width: 1025px)").matches) {
//     $(".l-sidebar__main").css({ width: "19vw" });
//   }
// });
