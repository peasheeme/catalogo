/* --------------------- Backstretch--------------*/
    $("#intro").backstretch([
      'assets/images/flayer1.jpg',
      'assets/images/flayer4.jpg',
      'assets/images/flayer5.jpg',
      

    ], {
      fade: 750,
      duration: 4000
  });
 

 /* --------------------- otro js--------------*/ 

		$(function() {
  			var link = $(".text a");
  					link.click(function() {
    				link.removeClass('active');
    				$(this).addClass('active');
      });
    });
 /* --------------------- TABSLET--------------*/ 	
		$('.tabs').tabslet();

 /* --------------------- OWL  CARROUSEL --------------*/ 
	
		 var owl = $('.owl-carousel');
		 owl.owlCarousel({
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true,
      responsiveClass:true,
      responsive : {
        0 : { items: 1,
              nav: true 
        },
        600 : { items: 3 ,
                nav: false 
        },
        1000 : { items: 5,
            nav:true,
            loop:false
        }
      }
	   });
		$('.play').on('click',function(){
		    owl.trigger('play.owl.autoplay',[2000])
		})
		$('.stop').on('click',function(){
		    owl.trigger('stop.owl.autoplay')
		})
 /* ---------------------  Popup images -------------

        $(document).ready(function() {
          $('.image-popup-vertical-fit').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass:'mfp-fade',
            gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
            verticalFit: true,
            }
          });
        });*/ 
/* --------------------- Slide Carousel --------------

      	$(document).ready(function() {
    $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});*/ 
/* ---------------------AOS TRANSICIONES--------------*/ 
  
      AOS.init();
   

	