$(document).ready(function(){
    $('.slider').slick({
       dots: false,
       slidesToShow: 4, 
       variableWidth: false,
       responsive: [{

        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  
    ]   
    });
});

$(document).ready(function(){
    $('.sound__slider').slick({
        dots: false,
        slidesToShow: 1,
        variableWidth:false
    })
})

 