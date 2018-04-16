$(loaded);

let windowBottom;
let userScroll = 0;

function loaded() {
  getWindowHeight();
  demo.init();

  window.addEventListener('resize', demo.resize);
  window.addEventListener('scroll', getWindowHeight);
  window.addEventListener('resize', getWindowHeight);

  $('.burger').on('click', handleBurgerClick);

  $('.quote-carousel').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 10000,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
}

function handleBurgerClick() {
  $(this).toggleClass('open');
  $('.side-menu').toggleClass('show-side-menu');
  $('.shader').toggleClass('dim');
  $('body').toggleClass('disable-scroll');
}

function getWindowHeight() {
  userScroll = $(window).scrollTop();
  windowBottom = $(window).scrollTop() + $(window).height() - 50;

  animateNavbar();
  animateSection('portfolio');
  animateSection('experience');
}

function animateNavbar() {
  const landingHeight = $('.landing').height();

  userScroll > landingHeight ? $('nav').addClass('nav-small') : $('nav').removeClass('nav-small');
}

function animateSection(element) {
  const elementTop = $(`.${element}`).offset().top;
  const elemementBottom = elementTop + $(`.${element}`).height();

  if(elemementBottom <= windowBottom) {
    $(`.${element} .left, .${element} h4`)
      .removeClass('hidden')
      .addClass('animated fadeInLeft');

    $(`.${element} .right`)
      .removeClass('hidden')
      .addClass('animated fadeInRight');
  }
}