$(function(){
	$('.trucks__selcet').slick({	
		dots: false,
			responsive:[
  		{
  			breakpoint: 1071,
  			settings:{
  				dots: true,
  			}
  		},
  		]
	});
	$('.header__menu-btn').on('click', function(){
		$('.header__menu-nav').slideToggle();
	});

});