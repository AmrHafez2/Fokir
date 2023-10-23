/**********************************nav bar animation effect**************************************************** */
let navBar = document.getElementById('nav');
$(window).bind('mousewheel', function(event) {
  if (event.originalEvent.wheelDelta >= 0) {
      $("nav").removeClass('hide-nav');
      $("nav").addClass('show-nav');
  }
  else {
      $("nav").removeClass('show-nav');
      $("nav").addClass('hide-nav');

      
  }
  });

/*******************************typing animation**************************************** */
var typed = new Typed('#dynamic-text', {
    strings: ['Developer', 'Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop:true,
    loopCount: Infinity,
  });
 
  /**************************facts********************************* */
let counterDisplays = document.querySelectorAll('.counter');
let interval = 5000;
counterDisplays.forEach(counterDisplay => {
  let startValue = 0;
  let endValue = parseInt(counterDisplay.getAttribute('max-data'));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    counterDisplay.textContent = startValue;
    if(startValue === endValue) {
      clearInterval(counter);
    }
  }, duration)
})

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    enter:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    autoplaySpeed:400

  });
});


/*****************************fancy box**************************************/ 
  Fancybox.bind("[data-fancybox='gallery1']", {

    Carousel: {
      transition: "slide",
      
    },
    Images: {
      zoom: true,
    },
    showClass: "f-fadeIn",
});  
  Fancybox.bind("[data-fancybox='gallery2']", {

    Carousel: {
      transition: "slide",
    },
    Images: {
      zoom: true,
    },
    showClass: "f-fadeIn",
});  
  Fancybox.bind("[data-fancybox='gallery3']", {

    Carousel: {
      transition: "slide",
    },
    Images: {
      zoom: true,
    },
    showClass: "f-fadeIn",
});  


  Fancybox.bind("[data-fancybox='gallery4']", {

    Carousel: {
      transition: "slide",
    },
    Images: {
      zoom: true,
    },
    showClass: "f-fadeIn",
});  






