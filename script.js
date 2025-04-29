const slides = document.querySelectorAll('.slide');
let current = 0;

function updateNav() {
  document.getElementById('prevBtn').disabled = current === 0;
  document.getElementById('nextBtn').disabled = current === slides.length - 1;
}

function changeSlide(step) {
  slides[current].classList.remove('active');
  current += step;
  slides[current].classList.add('active');
  updateNav();
}

updateNav();
