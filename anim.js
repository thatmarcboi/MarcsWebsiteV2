var $ = jQuery;
const sections = document.querySelectorAll('section');

sections.forEach((section, index) => {
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  const transitionDelay = index * 100; // Adjust this number to control the delay

  if (sectionTop < windowHeight) {
    section.classList.add('fade-down');
    section.style.transitionDelay = `${transitionDelay}ms`;
  }
});

window.addEventListener('scroll', () => {
  sections.forEach((section, index) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const transitionDelay = index * 100; // Adjust this number to control the delay
    
    if (sectionTop < windowHeight) {
      section.classList.add('fade-down');
      section.style.transitionDelay = `${transitionDelay}ms`;
    }
  });
});

const navbar = document.querySelector('nav');
navbar.style.opacity = 0;
navbar.style.transition = 'opacity 1s';

window.onload = function() {
  navbar.style.opacity = 1;
}

