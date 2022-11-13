// headerのMenuボタン押下時の処理
$(function () {
  $(".c-button--menu.js-button").click(function () {
    // $(".l-sidebar").show();
    $(".l-sidebar").css({
      visibility: "visible",
      left: "0",
      transition: "0.5s",
      // position: "fixed",
      // position: "sticky",
      // top: 0,
    });
    $(".l-sidebar").toggleClass(".is-open");
    // $(".l-sidebar.js-trigger.is-open").css({ position: "sticky", top: "0" });
  });
});

// $(function () {
//   $(".c-button--menu.js-button").click(function () {
//     // $("l-sidebar.js-trigger.is-open").css({ position: "sticky", top: "0" });
//     $("l-sidebar").css({ position: "sticky", top: "0" });
//   });
// });

// sidebarのXボタン押下時の処理
$(function () {
  $(".menu-close.js-button").click(function () {
    // $(".l-sidebar").hide();
    $(".l-sidebar").removeClass(".is-open");
    $(".l-sidebar").css({
      // visibility: "hidden",
      left: "23.4375rem",
      transition: "0.5s",
    });
  });
});
