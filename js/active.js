$(document).ready(function(){
    $('.slider-act').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        autoplay:true,
        speed:500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    // Counter 

    $('.count-num').counterUp({
        delay: 10,
        time: 1000
    });




    // Team 
   


    // Management 
    $('.management-slider-active').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        autoplay:true,
        speed:500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })   





    // footer -logo 
    $('.logo-slider-active').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        speed:500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
  
})