// headerのMenuボタン押下時の処理
$(function () {
  $(".c-button--menu.js-button").click(function () {
    $(".l-sidebar__main").scrollTop(0);
    $(".wrapper.u-background--overlay").toggleClass("js-height");
    $(".l-sidebar").css({
      transition: "0.5s",
    });
    $(".side-wrapper").css({ "z-index": "4", left: "0", transition: "0.5s" });
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
    $(".l-sidebar").css({
      "transition-property": "width",
      "transition-duration": "0.5s",
    });
    $(".side-wrapper").css({ "z-index": "-1", left: "100%" });
    $(".wrapper").css({ position: "static" });
    $("body").css({ position: "static", overflow: "inherit" });
    $(".l-sidebar__main").css({
      width: "0",
      "transition-property": "width",
      "transition-duration": "0.5s",
    });
  });
});
