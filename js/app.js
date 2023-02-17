$(loaded);

function loaded() {
  demo.init();
  window.addEventListener("resize", demo.resize);
  navBarEventListeners();
  const navElement = document.querySelector("nav");

  let prevScrollpos = window.pageYOffset;

  $(".recomendations-wrapper").slick({
    dots: true,
    arrows: false,
  });

  setTimeout(() => {
    document.querySelector("body").style.overflow = "visible";

    navElement.style.top = "0";
    document.querySelector(".floating-email").style.left = "-72px";
    document.querySelector(".floating-links").style.right = "0";

    window.onscroll = () => {
      var currentScrollPos = window.pageYOffset;

      if (currentScrollPos !== 0) {
        navElement.style.backgroundColor = "#fff";
        navElement.style.borderBottom = "1px solid #f2f2f2";
      } else {
        navElement.style.backgroundColor = "transparent";
        navElement.style.border = "none";
      }

      navElement.style.top = prevScrollpos > currentScrollPos ? "0" : "-93px";

      prevScrollpos = currentScrollPos;
    };
  }, 4000);
}

function scrollIntoViewCallback(element) {
  document
    .querySelector(element)
    .scrollIntoView({ behavior: "smooth", block: "center" });
}

function navBarEventListeners() {
  document
    .getElementById("about")
    .addEventListener("click", () => scrollIntoViewCallback(".about"));

  document
    .getElementById("more")
    .addEventListener("click", () => scrollIntoViewCallback(".about"));

  document
    .getElementById("recomendations")
    .addEventListener("click", () => scrollIntoViewCallback(".recomendations"));
}
