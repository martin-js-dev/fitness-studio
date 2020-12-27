const items = document.querySelectorAll('.slider-item');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
const navItem = document.querySelector('a.toggle-nav');
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
  // Check if working...
  console.log(count);
}

function toggleNavigation(){
  this.nextElementSibling.classList.toggle('active');
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}



// TESTIMONIALS 

(function () {
	'use strict';
	var slides = document.querySelectorAll('.testimonial-item'),
		 button = document.getElementById('button'),
		 arrows = document.querySelectorAll('.lnr'),
		 carouselCount = 0,
		 scrollInterval,
		 interval = 5000;

	arrows[0].addEventListener('click', function (e) {
		e = e || window.event;
		e.preventDefault();
		carouselCount -= 100;
		slider();
		if (e.type !== 'autoClick') {
			clearInterval(scrollInterval);
			scrollInterval = setInterval(autoScroll, interval);
		}
	});
	arrows[1].addEventListener('click', sliderEvent);
	arrows[1].addEventListener('autoClick', sliderEvent);
	
	function sliderEvent(e) {
		e = e || window.event;
		e.preventDefault();
		carouselCount += 100;
		slider();
		if (e.type !== "autoClick") {
			clearInterval(scrollInterval);
			scrollInterval = setInterval(autoScroll, interval);
		}
	}
	
	function slider() {
		switch (carouselCount) {
			case -100:
				carouselCount = 0;
				break;
			case 300:
				carouselCount = 0;
				break;
			default:
				break;
		}
		console.log(carouselCount);
		for (var i = 0; i < slides.length; i += 1) {
			slides[i].setAttribute('style', 'transform:translateX(-' + carouselCount + '%)');
		}
	}
	
	// create new Event to dispatch click for auto scroll
	var autoClick = new Event('autoClick');
	function autoScroll() {
		arrows[1].dispatchEvent(autoClick);
	}
	
	// set timing of dispatch click events
	scrollInterval = setInterval(autoScroll, interval);
	
})();




// VIDEOS

$(document).on('click','.js-videoPoster',function(ev) {
  ev.preventDefault();
  var $poster = $(this);
  var $wrapper = $poster.closest('.js-videoWrapper');
  videoPlay($wrapper);
});


function videoPlay($wrapper) {
  var $iframe = $wrapper.find('.js-videoIframe');
  var src = $iframe.data('src');
 
  $wrapper.addClass('videoWrapperActive');
  
  $iframe.attr('src',src);
}


function videoStop($wrapper) {
  
  if (!$wrapper) {
    var $wrapper = $('.js-videoWrapper');
    var $iframe = $('.js-videoIframe');
  
  } else {
    var $iframe = $wrapper.find('.js-videoIframe');
  }
  
  $wrapper.removeClass('videoWrapperActive');
  
  $iframe.attr('src','');
}
