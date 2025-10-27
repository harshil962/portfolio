

// Typed.js
var typed = new Typed('#element', {
  strings: ['Python-Developer...'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
});



var typed = new Typed('#skills', {
  strings: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Bootstrap-AI', 'Data Science (Learning)'],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

// current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Optional: simple form submit handler to show a friendly message on successful submit (browser-side)
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    // If you're using formspree or another endpoint this is handled server-side.
    // Here we show an inline message and allow the form to submit normally.
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = "Sending...";
    // After a short delay, re-enable (if submission doesn't happen)
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = "Send Message";
    }, 3000);
  });
}
