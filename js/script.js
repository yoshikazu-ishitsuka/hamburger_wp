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
// $(function () {
//   if (window.matchMedia("(min-width: 768px)").matches) {

//   } else if (window.matchMedia("(min-width: 1025px)").matches) {

//   }
// });

$(function () {
  $(".menu-close.js-button").click(function () {
    $(".u-background--overlay").toggleClass("js-height");
    $(".l-sidebar").removeClass("is-open");
    $(".l-sidebar").css({
      // "transition-property": "width",
      // "transition-duration": "0.5s",
    });
    // $(".side-wrapper").css({ "z-index": "-1" });
    $(".side-wrapper").css({ "z-index": "-1", left: "100%" });
    $(".wrapper").css({ position: "static" });
    $("body").css({ position: "static", overflow: "inherit" });
    // $(".l-sidebar").css({ width: "auto" });
    $(".l-sidebar__main").css({
      width: "100%",
      // display: "inherit",
      // "transition-property": "width",
      // "transition-duration": "0.5s",
    });
  });
});
