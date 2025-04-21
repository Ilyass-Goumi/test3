const swiper = new Swiper('.slider-wrapper', {
   
    loop: true,
    grabCursor:true,
    spaceBetween:30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
      
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0: {
            slidesperview:1
        },

        620: {
            slidesperview:2
        },

        1024: {
            slidesperview:3
        }
    }
  
   
  });

    

  const toggle = document.getElementById('toggledark');
  const body = document.querySelector('body');

  toggle.addEventListener('click' , function(){
   this.classList.toggle('fa-moon');
     if(this.classList.toggle('fa-lightbulb')){
            body.style.background = 'white';
            body.style.color ='black';
            body.style.transition ='2s';

            

     }else{  body.style.background = 'black';
             body.style.color ='white';
             body.style.transition ='2s';

     }

     



  })
  

/* exemple*/
/*
const light = document.getElementById('toggledark');
const  = document.querySelector('body');

  
toggle.addEventListener('click' , function(){
  this.classList.toggle('fa-moon');
      if(this.classList.toggle('fa-lightbulb')){
        body.style.background = 'white';
        body.style.color ='black';
        body.style.transition ='2s';

      }else{ body.style.background = 'black';
        body.style.color ='white';
        body.style.transition ='2s';

      }
})*/

