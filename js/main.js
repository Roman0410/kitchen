$(window).scroll(function () {
  let header = $(".header");
  let scrollPosition = $(window).scrollTop();
  if (scrollPosition > 100) {
    header.addClass("header-scroll");
  } else {
    header.removeClass("header-scroll");
  }
});
$(".header-burger").click(function (event) {
  $(".header-nav").toggleClass("active");
  $("body").toggleClass("lock");
});
$(".close-menu").click(function (event) {
  $(".header-nav").toggleClass("active");
  $("body").toggleClass("lock");
});
$(".faq-item").click(function (event) {
  var parentListItem = $(this).closest("li");
  var isPlusOpen = parentListItem.find(".plus").hasClass("open");
  $(".plus").removeClass("open");
  $(".answer").removeClass("open");
  if (isPlusOpen) {
    parentListItem.find(".answer").removeClass("open");
  } else {
    parentListItem.find(".answer").addClass("open");
    parentListItem.find(".plus").addClass("open");
  }
});

$(".read").click(function (event) {
  $(this).closest("div").find(".text").toggleClass("open");
});

$("[data-filter]").on("click", function () {
  let filterItem = $(this).data("filter");
  let $filterContainer = $(this).closest(".wiki");
  $filterContainer.find("[data-serv]").each(function () {
    let serviceInfo = $(this).data("serv");

    if (serviceInfo !== filterItem) {
      $(this).addClass("hide");
    } else {
      $(this).removeClass("hide");
    }
  });
});

Fancybox.bind("[data-fancybox]", {});

AOS.init();
