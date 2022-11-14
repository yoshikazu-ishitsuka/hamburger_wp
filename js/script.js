// headerのMenuボタン押下時の処理
$(function () {
  $(".c-button--menu.js-button").click(function () {
    $(".l-sidebar").css({
      visibility: "visible",
      transition: "0.5s",
    });
    $(".side-wrapper").css({ "z-index": "4", left: "0", transition: "0.5s" });
    $("body").css({ position: "fixed", overflow: "scroll" });
    $(".l-sidebar").toggleClass(".is-open");
    // $(".l-sidebar.js-trigger.is-open").css({ position: "sticky", top: "0" });
  });
});

// sidebarのXボタン押下時の処理
$(function () {
  $(".menu-close.js-button").click(function () {
    $(".l-sidebar").removeClass(".is-open");
    $(".l-sidebar").css({
      visibility: "hidden",
      transition: "0.5s",
    });
    $(".side-wrapper").css({ "z-index": "-1", width: "auto", left: "100%" });
    $("body").css({ position: "static", overflow: "inherit" });
  });
});
