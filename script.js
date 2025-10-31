// ===== Fade-in effect on page load =====
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
  document.getElementById('year').textContent = new Date().getFullYear();
});

// ===== Scroll reveal animation =====
const fadeSections = document.querySelectorAll('.fade-section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  fadeSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
