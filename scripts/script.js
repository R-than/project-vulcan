const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

slides[currentSlide].classList.add('active');

function showSlide() {
 slides[currentSlide].classList.remove('active');
 currentSlide = (currentSlide+1)%slides.length;
 slides[currentSlide].classList.add('active');
}

setInterval(showSlide, 3000);


const hamburgerMenu = document.getElementById('hamburger-menu');
const nav = document.getElementsByClassName('page-navigation')[0];

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('show-menu');
  nav.classList.toggle('show-menu');
});