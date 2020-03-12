$(document).ready(function(){
  $(".slider_1").owlCarousel({
  	items: 1,
  	loop: true,
  	animateOut: 'fadeOut',
  	mouseDrag: false,
    nav: true,
    navText: ["<img src='images/slider-1_left.png'>", 
    		"<img src='images/slider-1_right.png'>"]
  });
});

$(document).ready(function(){
  $(".slider_2").owlCarousel({
  	
  	loop: true,
  	margin: 20,  	
  	responsiveClass:true,
  	autoWidth: true,
    responsive:{
        0:{
            items:1,
        },
        640:{
            items:2,
        },
        1024:{
            items:4,
        }
     }    
  });
});

$('.controls-next').click(function() {
    $('.slider_2').trigger('next.owl.carousel');
})

$('.controls-prev').click(function() {
    $('.slider_2').trigger('prev.owl.carousel');
})