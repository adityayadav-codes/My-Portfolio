// Dark/Light mode toggle (optional)
console.log("Portfolio Loaded ✅");
// Theme Toggle Button
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check saved theme in localStorage
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-theme");
  toggleBtn.textContent = "☀️ Change Theme";
}

// Toggle theme on button click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    toggleBtn.textContent = "☀️ Change Theme";
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.textContent = "🌙 Change Theme";
    localStorage.setItem("theme", "dark");
  }
});
// contact us
const themeToggle = document.getElementById('themeToggle');


// Load saved theme
if (localStorage.getItem('pref-theme') === 'light') {
  body.classList.add('light');
}

themeToggle.addEventListener('click', () => {
  const isLight = body.classList.toggle('light');
  localStorage.setItem('pref-theme', isLight ? 'light' : 'dark');
});

// Form validation
const form = document.getElementById('contactForm');
const resp = document.getElementById('responseMsg');
const btn = document.getElementById('submitBtn');

form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name) {
    document.getElementById('errName').style.display = 'block';
    valid = false;
  } else document.getElementById('errName').style.display = 'none';

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById('errEmail').style.display = 'block';
    valid = false;
  } else document.getElementById('errEmail').style.display = 'none';

  if (message.length < 6) {
    document.getElementById('errMessage').style.display = 'block';
    valid = false;
  } else document.getElementById('errMessage').style.display = 'none';

  if (!valid) return;

  btn.disabled = true;
  btn.textContent = "Sending...";

  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = "Send message";
    resp.textContent = "✅ Message sent successfully (simulated)";
    resp.className = "success";
  }, 1000);
});