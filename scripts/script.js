const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

slides[currentSlide].classList.add('active');

function showSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].classList.add('active');
 }

setInterval(showSlide, 4000);

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}


// HAMBURGER MENU
const hamburgerMenu = document.getElementById('hamburger-menu');
const nav = document.getElementsByClassName('page-navigation')[0];

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('show-menu');
  nav.classList.toggle('show-menu');
});

