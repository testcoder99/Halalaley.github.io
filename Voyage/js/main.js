$(function(){
	$('.header__slider').slick({
		prevArrow:'<button class="slick-arrow slick-prev"><img src="images/prev-arrow.png" alt=""></button>',
		nextArrow:'<button class="slick-arrow slick-next"><img src="images/next-arrow.png" alt=""></button>',
		dots:false,
		autoplay:true,
		responsive:[
  		{
  			breakpoint: 741,
  			settings:{
  				dots:true,
  			}
  		},
  		]
	});
	$(".header__menu-nav,.header__search-content").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
	$('.offers__content').slick({
  		slidesToShow:5,
  		slidesToScroll: 1,
  		centerMode: true,
  		focusOnSelect: true,
  		dots:false,
  		arrows:false,
  		responsive:[
  		{
  			breakpoint:1161,
  			settings:{
  				slidesToShow:4,
  			}
  			
  		},
  		{
  			breakpoint:801,
  			settings:{
  				slidesToShow:3,
  			}
  		},
  		{
  			breakpoint:601,
  			settings:{
  				focusOnSelect: false,
  				centerMode: false,
  				slidesToShow:2,
  				
  			}
  		},
  		{
  			breakpoint:431,
  			settings:{
  				focusOnSelect: false,
  				centerMode: false,
  				slidesToShow:1,
  				dots:true,
  				
  			}
  		},
  		]
  		
	});
	$('.reviews-slider').slick({
  		slidesToShow:5,
  		slidesToScroll: 1,
  		centerMode: true,
  		focusOnSelect: true,
  		arrows:false,
  		dots:false,
  		responsive:[
  		{
  			breakpoint:1367,
  			settings:{
  				slidesToShow:3,
  				
  			}
  			
  		},
  		{
  			breakpoint:991,
  			settings:{
  				slidesToShow:2,
  				
  			}
  			
  		},
  		{
  			breakpoint:631,
  			settings:{
  				slidesToShow:2,
  				
  			}
  			
  		},
  		{
  			breakpoint:431,
  			settings:{
  				focusOnSelect: false,
  				centerMode: false,
  				slidesToShow:1,
  				dots:true,
  				
  			}
  		},
  		]
	});
	$('.nav__menu').on('click',function(){
	$('.header__nav-list').slideToggle();
	});
});