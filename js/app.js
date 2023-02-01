$(loaded);

function loaded() {
  setTimeout(() => demo.init(), 1000);

  window.addEventListener("resize", demo.resize);

  $(".recomendations-wrapper").slick({
    dots: true,
    arrows: false,
  });

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    console.log(prevScrollpos, currentScrollPos);

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-93px";
    }
    prevScrollpos = currentScrollPos;
  };
}
