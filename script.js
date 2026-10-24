const subtitles = ['Computer Engineering Student', 'Software Developer', 'AI Enthusiast'];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
function typeEffect() {
  const el = document.getElementById('typedText');
  if (!el) return;
  const current = subtitles[currentWordIndex];
  if (isDeleting) {
    el.textContent = current.substring(0, currentCharIndex - 1);
    currentCharIndex--;
  } else {
    el.textContent = current.substring(0, currentCharIndex + 1);
    currentCharIndex++;
  }
  let speed = isDeleting ? 40 : 80;
  if (!isDeleting && currentCharIndex === current.length) {
    speed = 2200;
    isDeleting = true;
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentWordIndex = (currentWordIndex + 1) % subtitles.length;
    speed = 400;
  }
  setTimeout(typeEffect, speed);
}
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  const open = navLinks.classList.toggle('open');
  document.querySelector('.mobile-menu-btn').setAttribute('aria-expanded', open);
}
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
    document.querySelector('.mobile-menu-btn').setAttribute('aria-expanded', 'false');
  });
});
function toggleTheme() {
  const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) { }
}
function revealSections() {
  document.querySelectorAll('.section').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
}
function updateActiveNav() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < 200) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', () => {
  revealSections();
  updateActiveNav();
});
window.addEventListener('load', () => {
  revealSections();
  const typed = document.getElementById('typedText');
  if (!typed) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    typed.textContent = subtitles[0];
  } else {
    typeEffect();
  }
});
