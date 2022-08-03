const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const sideNav = document.querySelector('.side-nav');
const textEl = document.querySelector('.introduce__text');
const circleEl = document.querySelector('.hero__circle');
const text = 'BARTOSZ KOZŁOWSKI';
let speed = 100;
let idx = 0;

// Show/hide side bar menu

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  sideNav.classList.toggle('active');
  toggle.style.zIndex = '9999';
});

// Set autotext on introduce myslef

const writeText = function () {
  textEl.innerText = text.slice(0, idx);

  idx++;
  const myTimeout = setTimeout(writeText, speed);

  if (idx === text.length + 1) {
    clearTimeout(myTimeout);
  }
};
writeText();

// Slider

const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}%`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = direction => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === 'down') {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'up') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
