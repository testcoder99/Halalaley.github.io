$(function(){
	$('.header__body-slider').slick({
	prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
	nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/arrow-next.svg" alt=""></button>',
	arrows:true,
	fade:true,
	});
	$(".header__top-nav,.header__mobile").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 2000);
	});
	
	$('.menu__btn').on('click', function(){
		$('.header__mobile').addClass('active');
	});
	$('.close-btn').on('click', function(){
		$('.header__mobile').removeClass('active');
	});
	
	if ( $(window).width() < 1367 ) {
		$('.performances__body').slick({
		slidesToShow:3.2,
		slidesToScroll:1,
		infinite: false,
		arrows:false,
		responsive:[
		{
			breakpoint: 1231,
			settings:{
				slidesToShow:3.1,
			}
		},
		{	
			breakpoint: 991,
			settings:{
				slidesToShow:1.7,
			}
		},
		{	
			breakpoint: 771,
			settings:{
				slidesToShow:1.6,
			}
		},	
		{	
			breakpoint: 576,
			settings:{
				slidesToShow:1.3,
			}
		},	
	]
	})
  	}
	
});