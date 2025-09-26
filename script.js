document.addEventListener("DOMContentLoaded", () => {
  // === Registration ===
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("regName").value;
      const email = document.getElementById("regEmail").value;
      const password = document.getElementById("regPassword").value;

      localStorage.setItem("user", JSON.stringify({ name, email, password }));
      alert("Registration successful!");
      window.location.href = "index.html";
    });
  }

  // === Login ===
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert("Login successful!");
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html";
      } else {
        alert("Invalid email or password.");
      }
    });
  }

  // === Profile Handling ===
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (isLoggedIn === "true" && storedUser) {
    document.getElementById("loginBtn").classList.add("d-none");
    const profileMenu = document.getElementById("profileMenu");
    profileMenu.classList.remove("d-none");
    document.getElementById("profileName").textContent = storedUser.name;
  }

  // === Logout ===
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      window.location.href = "index.html";
    });
  }

  // === Contact Form ===
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Message sent successfully!");
      contactForm.reset();
    });
  }
});
