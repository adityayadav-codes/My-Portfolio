const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('pref-theme') === 'light') {
  body.classList.add('light');
}

themeToggle.addEventListener('click', () => {
  const isLight = body.classList.toggle('light');
  localStorage.setItem('pref-theme', isLight ? 'light' : 'dark');
});

// Form validation + API
const form = document.getElementById('contactForm');
const resp = document.getElementById('responseMsg');
const btn = document.getElementById('submitBtn');

form.addEventListener('submit', async e => {
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

  try {
    const formData = new FormData(form);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      resp.textContent = "✅ Message sent successfully!";
      resp.className = "success";
      form.reset();
    } else {
      resp.textContent = "❌ Failed to send: " + (result.message || "Unknown error");
      resp.className = "error";
    }
  } catch (error) {
    resp.textContent = "❌ Error: " + error.message;
    resp.className = "error";
  }

  btn.disabled = false;
  btn.textContent = "Send message";
});