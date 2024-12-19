let slideIndex = 0;
  let slides = document.querySelector(".slides");
  let totalSlides = document.querySelectorAll(".slide").length;

  function show() {
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  function moveSlide(direction) {
    slideIndex += direction;
    if (slideIndex >= totalSlides) {
      slideIndex = 0; 
    } else if (slideIndex < 0) {
      slideIndex = totalSlides - 1;
    }
    show();
  }

  setInterval(function () {
    moveSlide(1);
  }, 2000);

  show(); 