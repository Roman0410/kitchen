$(".hero-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: "ease-in-out",
  pauseOnHover: false,
});

$(".projects-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  prevArrow: $(".projects .prev"),
  nextArrow: $(".projects .next"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".process-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  fade: true,
  prevArrow: $(".process .prev"),
  nextArrow: $(".process .next"),
});
$(".reviews-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow: $(".reviews .prev"),
  nextArrow: $(".reviews .next"),
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".brands-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  prevArrow: $(".brands .prev"),
  nextArrow: $(".brands .next"),
});

if (window.matchMedia("(max-width: 700px)").matches) {
  $(".gallery-list").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $(".gallery .prev"),
    nextArrow: $(".gallery .next"),
  });
}
if (window.matchMedia("(max-width: 700px)").matches) {
  $(".img-list").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $(".allinclisive .prev"),
    nextArrow: $(".allinclisive .next"),
  });
}
