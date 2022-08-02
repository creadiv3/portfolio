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
