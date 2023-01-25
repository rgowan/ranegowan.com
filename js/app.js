$(loaded);

function loaded() {
  setTimeout(() => demo.init(), 1000);

  window.addEventListener("resize", demo.resize);

  $(".recomendations-wrapper").slick({
    dots: true,
    arrows: false,
  });
}
