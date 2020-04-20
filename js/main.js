//При клике добавляем класс
$(document).ready(function() {
	$('.main__btn-menu').click(function(event) {
		$('.main__btn-menu, .main__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


function ibg(){
$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}
ibg();


// Слайдер
$(document).ready(function(){
	$('.slider').slick({
		slidesToShow:4,
		arrows:false,
		autoplay: true,
		autoplayspeed: 1000,
		pouseOnHover:true,
		variableWidth: true,
		centerMode: false,
		touchThreshold:100,
		slideToScroll:5,
		swipeToSlide: true,
	});
});


// Медиа запрос
function myFunction(x) {
  if (x.matches) { // If media query matches
    $("#news__move>div").insertAfter("#news__move");
    $('.news__content').addClass('news__item');
    $('.news__item').removeClass('news__content');

  } else {
   $("#news__move-2 ").appendTo("#news__move");
   $('#news__move-2').addClass('news__content');
   $('#news__move-2').removeClass('news__item');
  }
}
var x = window.matchMedia("(max-width: 960px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

