$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl").owlCarousel();
	
	
	
	$('.owl-carousel-item').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	items:4,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

$('.testimonial-area-item').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
	items:1,
})
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');
	 $('#youtube-video').magnificPopup({
		 type:'iframe',
		 iframe: {
			 patterns: {
				youtube: {
				  index: 'youtube.com/',
				  id: 'v=',
				  src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
				}
			  },

			  srcAction: 'iframe_src', 
			}	 
		 
		});
		$('.skillbar').skillBars({
		
		  // options here
		
		});
		
		// counter number 
				
			$(function () {
				$('.count').each(function () {
				   $(this).prop('Counter',0).animate({
					Counter: $(this).text()
					}, {
					 duration: 7000,
					 easing: 'swing',
					 step: function (now) {
						$(this).text(Math.ceil(now));
					 }
					});
				});
			}); 
// mixitup code
		var mixer = mixitup('.protfolio-contant');
		
		// image popup linke 
		
		 $('.image-link').magnificPopup({type:'image'});
		 

}(jQuery));