// "use strict"

// const isMobile = {
// 	Android: function () {
// 		return navigator.userAgent.match(/Android/i);
// 	},
// 	BlackBerry: function () {
// 		return navigator.userAgent.match(/BlackBerry/i);
// 	},
// 	iOS: function () {
// 		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
// 	},
// 	Opera: function () {
// 		return navigator.userAgent.match(/Opera Mini/i);
// 	},
// 	Windows: function () {
// 		return navigator.userAgent.match(/IEMobile/i);
// 	},
// 	any: function () {
// 		return (
// 			isMobile.Android() ||
// 			isMobile.BlackBerry() ||
// 			isMobile.iOS() ||
// 			isMobile.Opera() ||
// 			isMobile.Windows());
// 	}
// };


// if (isMobile.any()) {
// 	document.body.classList.add('_touch');
// }else{
// 	document.body.classList.add('_pc');
// }

$(function(){
	$('.top-slider').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/prev-arrow.svg" alt="prev arrow"></button>',
  prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/next-arrow.svg" alt="next arrow"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        
      }
    },
    {
      breakpoint: 641,
      settings: {
      	arrows: false
      }
    }
  ]
});
});