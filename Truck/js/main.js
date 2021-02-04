$(function(){
	$('.trucks__selcet').slick({	
		dots: false,
			responsive:[
  		{
  			breakpoint: 576,
  			settings:{
  				dots: true,
  			}
  		},
  		]
	});
	$('.header__menu-btn').on('click', function(){
		$('.header__menu-nav').slideToggle();
	});
	$(".menu,.trucks__content").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

});