$(function(){
	$(".menu__btn").on("click", function(event){
		event.preventDefault();//Убирает стандратное поведение кнопки
		$(".header__menu-list").toggleClass("active")

	});
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();
		var	$this = $(this), 
			blockId = $this.data("scroll"),
			blockOffset = $(blockId).offset().top;
		$("html, body").animate({
			scrollTop: blockOffset
		}, 1500);
	});
	$('.header__slider').slick({
		dots:true,
		prevArrow:'<button class="slick-btn slick-prev"><img src="images/prev-arrow.svg"></button>',
		nextArrow:'<button class="slick-btn slick-next"><img src="images/next-arrow.svg"></button>',
		fade:true,
		infinite: false,
	});
	$('.clients__slider').slick({
		dots:true,
		prevArrow:'<button class="slick-btn slick-prev"><img src="images/prev-arrow.svg"></button>',
		nextArrow:'<button class="slick-btn slick-next"><img src="images/next-arrow.svg"></button>',
		infinite:false,
		slidesToShow:4,
		slidesToScroll:4,
		responsive:[
			{
				breakpoint: 771,
				settings:{
					slidesToShow:3,
					slidesToScroll:3,
				}
			}
		]
	});
	$('.reviews__slider').slick({
		dots:true,
		prevArrow:'<button class="slick-btn slick-prev"><img src="images/prev-arrow.svg"></button>',
		nextArrow:'<button class="slick-btn slick-next"><img src="images/next-arrow.svg"></button>',
		infinite:false,
	})
})