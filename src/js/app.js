const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const sideNav = document.querySelector('.side-nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  sideNav.classList.toggle('active');
  toggle.style.zIndex = '4';
});
