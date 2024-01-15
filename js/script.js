$(document).ready(function () {
  var owl = $("#slider");
  owl.owlCarousel({
    margin: 12,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
});
