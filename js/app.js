let slideContainer = document.querySelector('.carousel__slides');
let slides = document.querySelectorAll('.slide');
let previousButton = document.getElementById('previousSlide');
let nextButton = document.getElementById('nextSlide');
let leftMostSlideIndex = 0;
let slideGap = 5;

// Setting up previous and next behaviours
previousButton.addEventListener('click', previousSlide);
nextButton.addEventListener('click', nextSlide);

// Hide non visible slides
hideNonVisibleSlides();

function previousSlide() {
  if (leftMostSlideIndex > 0) {
    goToSlide(leftMostSlideIndex - 1);
  } else {
    goToSlide(slides.length - 1);
  }
}

function nextSlide() {
  if (leftMostSlideIndex < slides.length - 1) {
    goToSlide(leftMostSlideIndex + 1);
  } else {
    goToSlide(0);
  }
}

function goToSlide(nextLeftMostSlideIndex) {
  slideContainer.style.transform = `translateX(-${
    (slideContainer.offsetWidth / 3) * nextLeftMostSlideIndex
  }px)`;

  // Update the record of the left-most slide
  leftMostSlideIndex = nextLeftMostSlideIndex;

  // Update each slide so that the ones that are now off-screen are fully hidden.
  hideNonVisibleSlides();
}

function hideNonVisibleSlides() {
  slides.forEach(function (slideItem) {
    slideItem.setAttribute('aria-hidden', true);
    slideItem
      .querySelectorAll('a, button, select, input, textarea, [tabindex="0"]')
      .forEach(function (focusableElement) {
        focusableElement.setAttribute('tabindex', -1);
      });
  });

  if (leftMostSlideIndex < 3) {
    for (var i = leftMostSlideIndex; i < leftMostSlideIndex + 3; i++) {
      slides[i].removeAttribute('aria-hidden');
      slides[i]
        .querySelectorAll('a, button, select, input, textarea, [tabindex="0"]')
        .forEach(function (focusableElement) {
          focusableElement.removeAttribute('tabindex');
        });
    }
  } else {
    for (var i = 3; i < 5; i++) {
      slides[i].removeAttribute('aria-hidden');
      slides[i]
        .querySelectorAll('a, button, select, input, textarea, [tabindex="0"]')
        .forEach(function (focusableElement) {
          focusableElement.removeAttribute('tabindex');
        });
    }
  }
}
