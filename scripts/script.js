const slides = document.querySelectorAll('.slide');
var currentSlide = 0;

// Show the first slide immediately
slides[currentSlide].classList.add('active');

function showSlide() {
 slides[currentSlide].classList.remove('active');
 currentSlide = (currentSlide+1)%slides.length;
 slides[currentSlide].classList.add('active');
}

setInterval(showSlide, 3000);