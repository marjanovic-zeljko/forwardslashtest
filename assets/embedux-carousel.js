 var func = function () {
   let majSvajper = document.querySelector('#mySwiper')
  let element = majSvajper.getAttribute('data-cardNumber'); 
  let autoPlej = majSvajper.getAttribute('data-autoPlay');
   let brzinaAutoPleja = majSvajper.getAttribute('data-speed')*1000;
   let razmakIzmedjuSlajdova = majSvajper.getAttribute('data-card-space');
   let autoPlejBool = Boolean(autoPlej);
   let swiperSlides = document.querySelectorAll('.swiper-slide');
   let neogranicenSkrol = majSvajper.getAttribute('data-swiper-infinitee');

   let nextButton = document.querySelector('.nxt');
   
console.log(autoPlej + "autoplej");
   
        if (window.innerWidth < 768) {
          var slidesPerView = 1;
        } else {
          var slidesPerView = Number(element);
        }
        var swiper = new Swiper(".mySwiper", {
          slidesPerView: Number(slidesPerView),
          spaceBetween: Number(razmakIzmedjuSlajdova),
          slidesPerGroup: 2,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          autoplay: undefined,
          centeredInsufficientSlides: true
          
        });
     if (autoPlej === "true") {
       swiperSlides.forEach(swiperSlide => {
    swiperSlide.setAttribute("data-swiper-autoplay", Number(brzinaAutoPleja));
       });
    swiper.autoplay.start();
  }
 var infiniteScroll = ()=>{
   if(neogranicenSkrol === "true"){
  var firstSlide = swiper.slides[0].cloneNode(true);
var lastSlide = swiper.slides[swiper.slides.length - 1].cloneNode(true);
    console.log(lastSlide)
  }
swiper.prependSlide(lastSlide);
swiper.appendSlide(firstSlide);
 };
  infiniteScroll();
  
 
        window.addEventListener("resize", function() {
          // Destroy the existing Swiper instance
          swiper.destroy();
          if (window.innerWidth < 768) {
            var slidesPerView = 1;
          } else {
            var slidesPerView = Number(element);
          }
          swiper = new Swiper('.mySwiper', {
            slidesPerView: Number(slidesPerView)
          });
        });
      }

         
if(document.querySelector('#mySwiper'))
{   
  console.log("1");
  func();
  
}

  jQuery(document).on('shopify:section:load', function(){
   if(document.querySelector('#mySwiper'))
{   
  
  console.log("2");
  func();
 
}

    
  });   


console.log(nextButton);
console.log(swiper.autoplay.start);