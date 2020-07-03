$(document).ready(function (){
	$(".nav a").mPageScroll2id();

	$('.animate ').click (function (){
		var element = $(this).attr('href');
		$('html, body').animate({
			'scrollTop':880
		}, 1000);

	});

	// fixed header

	$(function () {
	let header = $(".header-top");
	let intro = $(".header");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	 $(window).on("scroll resize", function () {

		
		checkScroll(scrollPos,introH);
	 });

	 function checkScroll(scrollPos, introH) {
		 	if($(window).scrollTop() > intro.innerHeight() ) {
		 		header.addClass("header-fixed");
		 	} else {
		 		header.removeClass("header-fixed");
		 	}
		 }
	});


	

	$('.burger').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('burger-active');
	$('.nav').toggleClass('show');
		
	});

	$('.team, .header-intro, .agency, .akita, .blog, .two-icons, .akita-second, .contact, .exposure, .footer').on('click', function() {
		$('.nav').removeClass('show');
		$('.burger').removeClass('burger-active')
	});

	return false;
});