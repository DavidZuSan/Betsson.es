$(document).ready(function () {
  // Función para abrir y cerrar el menú lateral
  $(".menu-icon").click(function (event) {
    var menu = $("#menu");

    if (menu.css("left") === "-290px") {
      menu.css("left", "0px");
      $("body").addClass("no-scroll");
    } else {
      menu.css("left", "-290px");
      $("body").removeClass("no-scroll");
    }

    event.stopPropagation();
  });

  // Función para cerrar el menú lateral al hacer clic en el ícono de cierre
  $(".close-icon").click(function (event) {
    $("#menu").css("left", "-290px");
    $("body").removeClass("no-scroll");
    event.stopPropagation();
  });

  // Función para cerrar el menú lateral al hacer clic fuera de él
  $(document).click(function (event) {
    if (!$(event.target).closest("#menu, .menu-icon").length) {
      $("#menu").css("left", "-290px");
      $("body").removeClass("no-scroll");
    }
  });

  // Función para manejar el despliegue y ocultamiento del submenú en el ítem "Casino"
  $(".menu-item").click(function (e) {
    e.stopPropagation();

    var submenu = $(this).find(".submenu");
    var triangleIcon = $(this).find(".triangle-icon");

    // Si el submenú está visible, ocultarlo
    if (submenu.is(":visible")) {
      submenu.hide();
      triangleIcon.removeClass("active");
      $(this).removeClass("active");
    }
    // Si el submenú no está visible, mostrarlo y ocultar otros submenús abiertos
    else {
      $(".submenu").hide();
      $(".triangle-icon").removeClass("active");
      $(".menu-item").removeClass("active");

      submenu.show();
      triangleIcon.addClass("active");
      $(this).addClass("active");
    }
  });

  // Función para ocultar el submenú si se hace clic fuera de él
  $(document).click(function () {
    $(".submenu").hide();
    $(".triangle-icon").removeClass("active");
    $(".menu-item").removeClass("active");
  });
});
