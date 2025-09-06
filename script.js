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