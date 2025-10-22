function toggleMode() {
  document.body.classList.toggle('dark-mode');
  const icon = document.querySelector('.mode-toggle i');
  const text = document.querySelector('.mode-toggle span');
  
  if (document.body.classList.contains('dark-mode')) {
    icon.className = 'fa-solid fa-sun';
    text.textContent = 'Light Mode';
  } else {
    icon.className = 'fa-solid fa-moon';
    text.textContent = 'Dark Mode';
  }
}

function toggleLanguage() {
  const lang = document.documentElement.lang;
  if (lang === 'tr') {
    document.documentElement.lang = 'en';
    
    document.querySelector('header p').innerText = 'Computer Engineering Student';
    
    
    document.querySelector('#about h2').innerText = 'About Me';
    document.querySelector('#experience h2').innerText = 'Experience';
    document.querySelector('#education h2').innerText = 'Education';
    document.querySelector('#skills h2').innerText = 'Skills';
    document.querySelector('#certificates h2').innerText = 'Certificates';
    document.querySelector('#references h2').innerText = 'References';
    
    document.querySelector('#about p').innerText = 'Hello! I am a 3rd year Computer Engineering student at Karabük University. I am a passionate student in artificial intelligence and software development. I focus on continuous learning and continue to develop myself in technology.';
    
    document.querySelector('#about .links a:nth-child(3) .link-text').innerText = 'Email';
    
    const experienceItems = document.querySelectorAll('#experience .timeline-item');
    experienceItems[0].querySelector('h3').innerText = 'Google Developer Student Clubs Karabük';
    experienceItems[0].querySelector('p').innerHTML = '<strong>Social Media Coordinator</strong> – I produced and shared technology-focused content, increasing the club\'s digital visibility. I organized community events and developed social media strategies.';
    
    experienceItems[1].querySelector('h3').innerText = 'Google Developer Groups on Campus Karabük';
    experienceItems[1].querySelector('p').innerHTML = '<strong>Social Media Team Manager</strong> – I organized and managed the social media team to coordinate projects and events efficiently. I developed strategic plans for community growth.';
    
    const educationItems = document.querySelectorAll('#education .timeline-item');
    educationItems[0].querySelector('h3').innerText = 'Karabük University';
    educationItems[0].querySelector('p').innerHTML = '<strong>Computer Engineering</strong> – I am actively studying in the undergraduate program. I receive in-depth training in software development, algorithm design and artificial intelligence.';
    
    educationItems[1].querySelector('h3').innerText = 'Fevzi Çakmak Anatolian High School';
    educationItems[1].querySelector('p').innerHTML = '<strong>High School Diploma</strong> – I graduated with first class honors. I built a strong foundation in mathematics and science.';
    
    const skillNames = document.querySelectorAll('#skills .skill-name span:first-child');
    skillNames[0].innerText = 'Python';
    skillNames[1].innerText = 'HTML, CSS, JavaScript';
    skillNames[2].innerText = 'Java & PHP';
    skillNames[3].innerText = 'Git & GitHub';
    skillNames[4].innerText = 'Google Cloud';
    skillNames[5].innerText = 'C#';
    
    const certificateItems = document.querySelectorAll('#certificates .certificate-item');
    certificateItems[0].querySelector('h3').innerText = 'Generative AI Learning Path Program';
    certificateItems[0].querySelector('p').innerText = 'Artificial intelligence learning path certificate given by Google';
    
    certificateItems[1].querySelector('h3').innerText = 'GDSC Core Team Certificate';
    certificateItems[1].querySelector('p').innerText = 'Google Developer Student Clubs core team certificate';
    
    const referenceItems = document.querySelectorAll('#references .reference-item');
    referenceItems[0].querySelector('.reference-name').innerText = 'Ahmet Öztürk';
    referenceItems[0].querySelector('.reference-title').innerText = 'Mechanical Engineer';
    referenceItems[0].querySelector('p').innerHTML = 'Email: <a href="mailto:aoeztuerk@superonline.com">aoeztuerk@superonline.com</a>';
    
    referenceItems[1].querySelector('.reference-name').innerText = 'Bayram Karaağaç';
    referenceItems[1].querySelector('.reference-title').innerText = 'Architect';
    referenceItems[1].querySelector('p').innerHTML = 'Email: <a href="mailto:bkaraagac@karaagac.com">bkaraagac@karaagac.com</a>';
    
    
    
    document.querySelector('footer p').innerText = '© 2025 Berkay Enes Börekci | All Rights Reserved';
    
  } else {
    document.documentElement.lang = 'tr';
    location.reload();
  }
}

function handleScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

window.addEventListener('load', function() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});
