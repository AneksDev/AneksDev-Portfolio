// lucide.createIcons();

// MOBILE MENU

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// DARK / LIGHT MODE

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {

  document.body.classList.toggle('dark');

  if(document.body.classList.contains('dark')){
    themeToggle.innerHTML = '☀️';
  } else {
    themeToggle.innerHTML = '🌙';
  }

});

// TYPING EFFECT

const typing = document.getElementById('typing');

const words = [
  'Programmer | Web Developer | UI/UX Designer | Brand & Graphics Designer'
];

let wordIndex = 0;
let charIndex = 0;

function typeEffect(){

  if(charIndex < words[wordIndex].length){

    typing.textContent += words[wordIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 100);

  } else {

    setTimeout(eraseEffect, 1500);

  }

}

function eraseEffect(){

  if(charIndex > 0){

    typing.textContent = words[wordIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseEffect, 50);

  } else {

    wordIndex++;

    if(wordIndex >= words.length){
      wordIndex = 0;
    }

    setTimeout(typeEffect, 500);

  }

}

typeEffect();

// ACTIVE NAVIGATION

const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

  let current = '';

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if(pageYOffset >= sectionTop - 200){
      current = section.getAttribute('id');
    }

  });

  navItems.forEach(link => {

    link.classList.remove('active');

    if(link.getAttribute('href') === `#${current}`){
      link.classList.add('active');
    }

  });

});

// PROJECT FILTER

const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {

  btn.addEventListener('click', () => {

    filterBtns.forEach(button => {
      button.classList.remove('active');
    });

    btn.classList.add('active');

    const filter = btn.dataset.filter;

    projects.forEach(project => {

      if(filter === 'all'){
        project.style.display = 'grid';
      }

      else if(project.classList.contains(filter)){
        project.style.display = 'grid';
      }

      else{
        project.style.display = 'none';
      }

    });

  });

});

// SCROLL REVEAL

const reveals = document.querySelectorAll('.reveal');

function revealSection(){

  reveals.forEach(reveal => {

    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){
      reveal.classList.add('active');
    }

  });

}

window.addEventListener('scroll', revealSection);

revealSection();