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
  // .sa 클래스를 가진 NodeList for of loop
  for(const element of saElementList){
    // saTriggerHeight 는 0 으로 init 
    // 윈도우 
    console.log(window.innerHeight);
    // window.innerHeight : 화면 높이값 만큼
    if(window.innerHeight > saTriggerHeight){
      // if문 화면 높이값이 saTriggerHeight 보다 값이 높다면 참 실행
      // let delay = (element.dataset.saDelay) ? element.dataset.Delay : 0;
      // 
      // 삼항연산자 참구문 실행 부분 오타
      let delay = (element.dataset.saDelay) ? element.dataset.saDelay : 0;
      // sa-delay data 속성은 각각 항목마다 다르다.
      setTimeout(function(){
        element.classList.add('show');
        // delay 값은 
      }, delay);
    }
  }
}

// script 태그가 맨 아래에 읽히도록 마크업되었기때문에 일단 주석처리
// window.addEventListener('load' , saFunc);
window.addEventListener('scroll' , saFunc);