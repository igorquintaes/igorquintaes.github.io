(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});
    
    $('.work-image-website').click(function(){
        $('.expander img').attr("src", $(this).attr("src"));
        $('.expander img').attr("alt", $(this).attr("alt"));
        $('.expander h3').text($(this).attr("site-name"));
        $('.expander p').text($(this).attr("site-description"));
        $('.expander a').attr("href", $(this).attr("site-link"));
        $('.expander').fadeIn(400);
        $('.expander-fade').fadeIn();
    });
    
    $('.close-expander').click(function(){
        $('.expander').fadeOut(300);
        $('.expander-fade').fadeOut();
    });
    

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

})(jQuery);
