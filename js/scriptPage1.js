"use srtict"

// SLIDER
let swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true
  },

  speed: 1000,

  loop: true,

  effect: 'fade',

  fadeEffect: {
    crossFade: true,
  }
});

function showAndHidePopup(){
  const section = document.querySelector('.slider');
  const popupDiv = document.querySelector('.slider__popup');
  let currentElement;
 
  section.addEventListener('click', function(event){
      currentElement = event.target;

      if(popupDiv.classList.contains('--popup-show')){
          document.querySelector('body').classList.remove('--overflow-hidden');
          
          let removeImg = popupDiv.children;
          popupDiv.removeChild(removeImg[0]);

          document.querySelector('.slider__popup').classList.remove('--popup-show');

      }else if(currentElement.src !== undefined){
          let copyImg = document.createElement('img');
          copyImg.src = currentElement.src;

          document.querySelector('.slider__popup').classList.add('--popup-show');
          
          popupDiv.appendChild(copyImg);
          
          document.querySelector('body').classList.add('--overflow-hidden');
      }
      console.log('qwdqwd')
  })
}
setTimeout(showAndHidePopup, 0);

// HEADER MENU
const menuIcon = document.querySelector('#menu-icon');
menuIcon.addEventListener('click', () => {
  const menuBody = document.querySelector('#menu-body');
  const body = document.querySelector('body');
  const logoModificator = document.querySelector('.--menu-logo');
  
  menuIcon.classList.toggle('--pressed');
  menuBody.classList.toggle('--menu-pressed');
  body.classList.toggle('--overflow-hidden');
  logoModificator.classList.toggle('--display-none')
})

function hideAndShowMenuButton() {
  const header = document.querySelector('.header');
  let prevScrollpos = window.pageYOffset;
  window.addEventListener('scroll', function() {
    
    let currentScrollPos = window.pageYOffset;
    
    if (prevScrollpos > currentScrollPos) {
      header.classList.remove('--menu-button-hide');
    } else {
      header.classList.add('--menu-button-hide');
    }

    prevScrollpos = currentScrollPos;
  });  
}
setTimeout(hideAndShowMenuButton,0);


// PLUGS
const links = document.querySelectorAll('a');
for(let index of links){
  index.addEventListener('click', (index) => {
    
    alert('Вы нажали на ссылку');
      index.preventDefault();
  })
}

const buttons = document.querySelectorAll('button');
for(let index of buttons){
  index.addEventListener('click', (index) => {
  
    alert('Вы нажали на кнопку');
    index.preventDefault();
  })
}
