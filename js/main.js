
$( document ).ready(function() {
   $('.pop-up-map').mouseover(function(){
    $('.map i').css("color", "red");
   });
   $('.pop-up-map').mouseout(function(){
    $('.map i').css("color", "#fff");
   });
});





 $('.middle').slick({
   autoplay: true,
   slidesToShow: 6,
   slidesToScroll: 1,
   infinite: true,
   nextArrow: '<i class="fa fa-angle-right fa-2x str-1" aria-hidden="true"></i>',
   prevArrow: '<i class="fa fa-angle-left fa-2x str-2" aria-hidden="true"></i>',
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

 $('.middle-logo').slick({
   infinite: false,
   autoplay: true,
   slidesToShow: 6,
   slidesToScroll: 1,
   infinite: true,
   nextArrow: '<i class="fa fa-angle-right fa-2x str-3" aria-hidden="true"></i>',
   prevArrow: '<i class="fa fa-angle-left fa-2x str-4" aria-hidden="true"></i>',
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
      }
    },
    
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


 



