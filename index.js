// let currentIndex = 0;

// function moveSlide(direction) {
//     const sliderContainer = document.querySelector('.slider-container');
//     const totalSlides = document.querySelectorAll('.image-item').length;

//     currentIndex += direction;

//     // Ensure that index stays within bounds
//     if (currentIndex < 0) currentIndex = totalSlides - 1;
//     if (currentIndex >= totalSlides) currentIndex = 0;

//     // Move the slider to the new index
//     const newTransformValue = -currentIndex * 100 / 3; // 3 images visible at a time
//     sliderContainer.style.transform = `translateX(${newTransformValue}%)`;
// }
