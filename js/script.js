// headerのMenuボタン押下時の処理
$(function () {
  $(".c-button--menu.js-button").click(function () {
    $(".l-sidebar").show();
    $(".l-sidebar").toggleClass(".is-open");
  });
});

// sidebarのXボタン押下時の処理
$(function () {
  $(".menu-close.js-button").click(function () {
    $(".l-sidebar").hide();
    $(".l-sidebar").removeClass(".is-open");
  });
});
