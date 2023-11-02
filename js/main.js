$(document).ready(function () {
  // Función para Promos
  let promoHtml = "";
  promos.forEach((promo) => {
    promoHtml += `
    <div class="promo-slide">
    <img src="${promo.image}" alt="${promo.altText}" />
    <div class="promo-container">
        <div class="promo-text">
            <h1>${promo.title}</h1>
            <p>${promo.description}</p>
        </div>
        <div class="promo-button">
            <img src="img/icons/down-icon.svg" alt="Next">
        </div>
    </div>
</div>`;
  });

  $("#promo-section .promo-carousel").html(promoHtml);

  // Funcion para Inscripción
  const steps = [
    { number: "1", text: "Regístrate<br>en Betsson" },
    { number: "2", text: "Verifica tu<br>cuenta" },
    { number: "3", text: "Diviértete<br>con nosotros" },
  ];

  let stepsHtml = "";
  steps.forEach((step) => {
    stepsHtml += `
      <div class="step">
        <div class="step-number">${step.number}</div>
        <p>${step.text}</p>
      </div>`;
  });

  $(".steps-section").html(stepsHtml);

  // Genera el HTML para las promociones de manera dinámica
  let promocionesHtml = "";
  promociones.forEach((promocion) => {
    promocionesHtml += `
        <div class="promocion-card">
            <img src="${promocion.image}" alt="${promocion.altText}" />
            <img class="promocion-logo" src="${promocion.logo}" alt="Logo de la promoción" />
            <p class="promocion-description">${promocion.description}</p>
        </div>`;
  });

  $(".promociones").html(promocionesHtml);

  // Genera el HTML para los destacados de manera dinámica
  let destacadosHtml = "";
  destacados.forEach((destacado) => {
    destacadosHtml += `
      <div class="destacado-card">
          <img src="${destacado.image}" alt="${destacado.altText}" />
          <img class="destacado-logo" src="${destacado.logo}" alt="Logo del destacado" />
          <p class="destacado-description">${destacado.description}</p>
      </div>`;
  });

  $(".destacados").html(destacadosHtml);

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

  var currentIndex = 0;
  var slides = $(".promo-carousel .promo-slide");

  function switchToNext() {
    var nextIndex = (currentIndex + 1) % slides.length;

    $(slides[currentIndex]).css("z-index", 2);
    $(slides[nextIndex]).css("z-index", 1).show();

    $(slides[currentIndex]).fadeOut(1000, function () {
      currentIndex = nextIndex;
    });
  }

  setInterval(switchToNext, 3000);
});
