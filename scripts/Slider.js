// Completed
const slides = document.querySelector('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;
function showSlide(direction) {
   const totalSlides = document.querySelectorAll('.slide').length;
   if (direction === 'next') {
       index = (index + 1) % totalSlides;
   } else if (direction === 'prev') {
       index = (index - 1 + totalSlides) % totalSlides;
   }
   slides.style.transform = `translateX(-${index * 30}%)`;
}
prev.addEventListener('click', () => showSlide('prev'));
next.addEventListener('click', () => showSlide('next'));