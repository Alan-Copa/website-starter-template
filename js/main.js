import { showAlert } from './modules/ui.js';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('actionBtn');
  if (button) {
    button.addEventListener('click', showAlert);
  }

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Form submitted successfully!');
    });
  }
});
