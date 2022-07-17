$(document).ready(function(){
	// SLICK SLIDER BY BRAND SECTION
	$('.brand-slider').slick({
       dots: true,
       infinite: true,
	   autoplayTimeou: 3000,
	   autoplay: true, 
       speed: 300,
       slidesToShow: 5,
	   prevArrow:".brand-prev-btn",
       nextArrow:".brand-next-btn",
       slidesToScroll: 1,
       responsive: [
      {
      breakpoint: 1025,
      settings: {
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      dots: true
      }
    },
	{
      breakpoint: 790,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
      }
    }
    ]
  }); 

  // PAGE UP SECTION CODE
  $(window).scroll(function(){
	  if($(this).scrollTop() > 40){
		  $('#topBtn').fadeIn();
	  }else{
		  $('#topBtn').fadeOut();
	  }
    });
  
    $("#topBtn").click(function(){
	  $('html,body').animate({scrollTop: 0},900)
   });

   // ANIMATION WOW CODE
   new WOW().init();
  
});

// MOBILE MENU
function openNav(){
	document.getElementById("myNav").style.width = "70%";
}
function closeNav(){
	document.getElementById("myNav").style.width = "0%";
}

// PAGE LOADING SECTION 
$(window).on('load', function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
});

// USER MENU CODE
function menuToggle(){
	  const toggleMenu = document.querySelector('.menu');
	  toggleMenu.classList.toggle('active')
}