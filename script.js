// script.js — handles greeting and form feedback

document.addEventListener('DOMContentLoaded', function() {
  // ----- greeting button -----
  const greetButton = document.getElementById('greetButton');
  const greetMessage = document.getElementById('greetMessage');

  if (greetButton && greetMessage) {
    greetButton.addEventListener('click', function() {
      // no emojis, just a warm textual message
      greetMessage.textContent = 'Hello — thanks for stopping by. Let’s make something thoughtful.';
    });
  }

  // ----- contact form simple validation (no emojis) -----
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('emailInput');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // prevent page reload

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();

      // reset feedback
      formFeedback.textContent = '';

      // simple validation
      if (name === '' || email === '') {
        formFeedback.textContent = 'Please fill in both name and email.';
        formFeedback.style.color = '#b34a4a';
        return;
      }

      if (!email.includes('@') || !email.includes('.')) {
        formFeedback.textContent = 'Please enter a valid email address (e.g., name@domain.com).';
        formFeedback.style.color = '#b34a4a';
        return;
      }

      // success (no emojis)
      formFeedback.textContent = 'Thank you, ' + name + '. Your message has been noted (demo only).';
      formFeedback.style.color = '#2b4a70';

      // clear fields (optional)
      nameInput.value = '';
      emailInput.value = '';
    });
  }

  // optional smooth scroll for nav links (not required but nice)
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
