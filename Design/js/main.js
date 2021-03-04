$(function(){
	$('.header__body-slider').slick({
		arrows:false,
		autoplay:true,
	})

});


document.querySelector('.menu__btn').addEventListener('click',function(){
	document.querySelector('.menu-mobile').classList.add('menu-mobile--active')
});
document.querySelector('.menu-mobile__close').addEventListener('click',function(){
	document.querySelector('.menu-mobile').classList.remove('menu-mobile--active')
});
// 	document.querySelector('.da').addEventListener('click',function(){
//    this.classList.toggle('net');
// });