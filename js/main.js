$(document).ready(function () {
  const petsSlider = new Swiper(".pets__gallery", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    pagination: ".pag-shoes",
    paginationClickable: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

  const teamSlider = new Swiper(".team__slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".team__button-next",
      prevEl: ".team__button-prev",
    },
  });
});

const questionsButton = document.querySelector(".questions__item-button");
const questionsAnswer = document.querySelector(".questions__answer");
questionsButton.addEventListener("click", showAnswer());

const showAnswer = function() {
  questionsAnswer.classList.toggle("questions__answer--visible");
};