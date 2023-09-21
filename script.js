window.sr = ScrollReveal()

//animation content

sr.reveal('.title', {
    duration: 2000,
    viewFactor: 0.1,
    origin: 'bottom',
    distance: '100px',
    delay: 300,
    easing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
})
sr.reveal('.subtitle', {
    duration: 2000,
    viewFactor: 0.1,
    origin: 'bottom',
    distance: '100px',
    delay: 400,
    easing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
})
sr.reveal('.paragraph', {
    duration: 2000,
    viewFactor: 0.1,
    origin: 'bottom',
    distance: '100px',
    delay: 500,
    easing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
})
sr.reveal('.button', {
    duration: 2000,
    viewFactor: 0.1,
    origin: 'bottom',
    distance: '100px',
    delay: 600,
    easing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
})
sr.reveal('.img_1', {
    duration: 2000,
    viewFactor: 0.1,
    origin: 'bottom',
    distance: '100px',
    delay: 1300,
    easing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
})
sr.reveal('.img_2', {
    duration: 2000,
    viewFactor: 0.1,
    origin: 'bottom',
    distance: '100px',
    delay: 1500,
    easing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
})

//boton Read More

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".button");
    const hiddenText = document.querySelector(".texto-oculto");

    let isHidden = true; // Variable para rastrear el estado del texto oculto

    button.addEventListener("click", function () {
        if (isHidden) {
            hiddenText.style.display = "inline"; // Mostrar el texto oculto
            button.textContent = "Read Less";
        } else {
            hiddenText.style.display = "none"; // Ocultar el texto oculto
            button.textContent = "Read More";
        }
        isHidden = !isHidden; // Cambiar el estado de la variable
    });
});


const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
let slideNumber = 0;

//slider next button
nextBtn.onclick = () => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)) {
    slideNumber = 0;
  }

  slides[slideNumber].classList.add('active');
}

//slider prev button
prevBtn.onclick = () => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slideNumber--;

  if(slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add('active');
}