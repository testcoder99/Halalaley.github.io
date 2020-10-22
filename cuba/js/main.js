$(function(){
	$('.photo__slider').slick({
	prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
	nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/arrow-right.svg" alt=""></button>',
	arrows:true,
	autoplay:true,
	});

	$('.menu__btn').on('click', function(){
		$('.menu__list').slideToggle();
	});

});