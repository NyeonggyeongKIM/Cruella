// cruella script

const nav = document.querySelector('nav');
const gnb = document.querySelector('#main');
const mainMenu = document.querySelectorAll('.main-menu');
const sub = document.querySelectorAll('.sub');
const subMenu = document.querySelectorAll('.sub-menu');
const closeBtn = document.querySelector('#close');
const menuBtn = document.querySelector('#menu-btn');
const subBox = document.querySelector('#sub-box');

console.log(nav);
console.log(gnb);
console.log(mainMenu);
console.log(sub);
console.log(subMenu);
console.log(menuBtn);


nav.style.visibility = 'hidden';
subBox.style.visibility = 'hidden';

// nav 나타난다 뿅
menuBtn.addEventListener('click', ()=>{
  nav.style.visibility = 'visible',
  nav.style.zIndex = '10';
});

// sub 나타난다 & nav 색 바뀐다 뿅
for(let i=0; i < mainMenu.length; i++){
  mainMenu[i].addEventListener('mouseover',()=>{
    gnb.style.backgroundColor = 'black',
    gnb.style.color = 'white',
    subBox.style.visibility = 'visible',
    subBox.style.zIndex = '9';
  });
}

// nav 색 원래대로 돌아온다 뿅
// for(let i=0; i < mainMenu.length; i++){
//   mainMenu[i].addEventListener('mouseout',()=>{
//     gnb.style.backgroundColor = 'white',
//     gnb.style.color = 'black';
//   });
// }

// close 누르면 닫힌다 뿅
closeBtn.addEventListener('click', ()=>{
  nav.style.visibility = 'hidden',
  nav.style.zIndex = '0',
  subBox.style.visibility = 'hidden',
  subBox.style.zIndex = '0';
  
});


// scroll event

const saDefaultMargin = 100;
const saElementList = document.querySelectorAll('.sa');
let saTriggerHeight = 0;
let saTriggerMargin = 0;

const saFunc = function(){
  for(const element of saElementList){
    if(window.innerHeight > saTriggerHeight){
      let delay = (element.dataset.saDelay) ? element.dataset.delay : 0;
      setTimeout(function(){
        element.classList.add('show');
      }, delay);
    }
  }
}

window.addEventListener('load' , saFunc);
window.addEventListener('scroll' , saFunc);