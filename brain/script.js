/* TYPEWRITER */

const roles = [
  // "Full Stack Developer",
  "Quick Learner",
   "Backend Engineer",
  "Spring Developer",
  "Java Developer",
  "Adapatibility",
  "Problem Solver"
  // "UI/UX Designer",
 
];

const target = document.getElementById("typeTarget");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const currentRole = roles[roleIndex];

  if (!deleting) {
    target.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1800);
      return;
    }
  } else {
    target.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();

/* ROTATING STARS */

document.querySelectorAll(".hero-stars span").forEach((star, index) => {

  let rotation = 0;

  setInterval(() => {
    rotation += 0.2 + (index * 0.05);

    star.style.transform = `rotate(${rotation}deg)`;
  }, 16);

});

// 1. Fade out the dark overlay when the new page finished loading
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('page-loader');
  if (loader) {
    loader.classList.add('fade-out');
  }
});

// 2. Intercept button clicks to fade back in before leaving the page
document.querySelectorAll('.btn-smooth').forEach(button => {
  button.addEventListener('click', function(e) {
    const targetUrl = this.getAttribute('href');
    
    // Only intercept if it's an actual link redirecting elsewhere
    if (targetUrl && !targetUrl.startsWith('#')) {
      e.preventDefault(); // Stop instant jump
      
      const loader = document.getElementById('page-loader');
      loader.classList.remove('fade-out'); // Fade back to solid cover
      
      setTimeout(() => {
        window.location.href = targetUrl; // Redirect after fade animation completes
      }, 500); // Matches the 0.5s CSS transition
    }
  });
});