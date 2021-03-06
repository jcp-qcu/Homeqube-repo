$(function(){
    
    $('.slider').slick({
      
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        dots: false,
        ease: true,
        prevArrow: '<span class="prev_arrow"><i class="fa-solid fa-arrow-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fa-solid fa-arrow-right"></i></span>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              prevArrow: false,
              nextArrow: false,
              dots: false,
              centerMode: true

            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              // prevArrow: false,
              // nextArrow: false,
              // arrows: false,
              

            }
          },
          {
            breakpoint: 375,
            settings: {
            
              slidesToShow: 1,
              slidesToScroll: 1,
              unslick: true,
              dots: false,
              // prevArrow: false,
              // nextArrow: false,
              // adaptiveHeight: true,
            },
           
          }
          
         
        ]
      });

    
      
});