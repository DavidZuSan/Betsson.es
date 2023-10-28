$(document).ready(function () {
  $(".menu-icon").click(function (event) {
    var menu = $("#menu");
    if (menu.css("left") === "-290px") {
      menu.css("left", "0px");
    } else {
      menu.css("left", "-290px");
    }
    event.stopPropagation();
  });

  $(".close-icon").click(function (event) {
    $("#menu").css("left", "-290px");
    event.stopPropagation();
  });
});
