const authModal = document.getElementById("authModal");
const authTitle = document.getElementById("auth-title");
const authForm = document.getElementById("authForm");
const authEmail = document.getElementById("auth-email");
const authPassword = document.getElementById("auth-password");
const authMessage = document.getElementById("auth-message");
const togglePassword = document.getElementById("togglePassword");
const authClose = document.getElementById("auth-close");
const authSubmit = document.getElementById("auth-submit");
const switchMode = document.getElementById("switchMode");

const otpModal = document.getElementById("otpModal");
const otpForm = document.getElementById("otpForm");
const otpClose = document.getElementById("close-otp");

let currentMode = "signup";

// Auto-popup after 10 seconds on first visit
setTimeout(() => {
  if (!localStorage.getItem("authPromptShown")) {
    openAuthModal("signup");
    localStorage.setItem("authPromptShown", "true");
  }
}, 10000);

// Navbar Buttons
document.getElementById("open-login").addEventListener("click", () => openAuthModal("login"));
document.getElementById("open-signup").addEventListener("click", () => openAuthModal("signup"));

authClose.onclick = () => (authModal.style.display = "none");
otpClose.onclick = () => (otpModal.style.display = "none");

window.onclick = function (e) {
  if (e.target == authModal) authModal.style.display = "none";
  if (e.target == otpModal) otpModal.style.display = "none";
};

switchMode.addEventListener("click", () => {
  const next = currentMode === "login" ? "signup" : "login";
  updateForm(next);
});

togglePassword.addEventListener("change", () => {
  const type = togglePassword.checked ? "text" : "password";
  authPassword.type = type;
  const confirm = document.getElementById("auth-confirm");
  if (confirm) confirm.type = type;
});

function openAuthModal(mode) {
  updateForm(mode);
  authModal.style.display = "block";
}

function updateForm(mode) {
  currentMode = mode;
  authTitle.textContent = mode === "signup" ? "Sign Up" : "Login";
  authSubmit.textContent = mode === "signup" ? "Sign Up" : "Login";
  authMessage.textContent = "";

  const confirmInput = document.getElementById("auth-confirm");
  if (mode === "signup" && !confirmInput) {
    const input = document.createElement("input");
    input.type = "password";
    input.placeholder = "Confirm Password";
    input.id = "auth-confirm";
    input.required = true;
    authForm.insertBefore(input, authSubmit);
  } else if (mode === "login" && confirmInput) {
    confirmInput.remove();
  }

  switchMode.innerHTML =
    mode === "login"
      ? `Don't have an account? <a href="#">Sign Up</a>`
      : `Already have an account? <a href="#">Login</a>`;
}

// Handle Auth Form Submit
authForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  authMessage.textContent = "";

  const email = authEmail.value;
  const password = authPassword.value;
  const confirmPassEl = document.getElementById("auth-confirm");

  if (currentMode === "signup") {
    const confirmPassword = confirmPassEl?.value;
    if (password !== confirmPassword) {
      authMessage.textContent = "Passwords do not match!";
      return;
    }
  }

  const endpoint =
    currentMode === "login"
      ? "http://localhost:5001/api/login"
      : "http://localhost:5001/api/signup";

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    authMessage.textContent = data.message;

    if (res.ok) {
      authMessage.style.color = "green";

      if (currentMode === "signup") {
        authModal.style.display = "none";
        otpModal.style.display = "block";
        document.getElementById("otp-email").value = email;
      } else {
        localStorage.setItem("userEmail", email);
        updateNavbar();
        setTimeout(() => {
          authModal.style.display = "none";
          authForm.reset();
        }, 1500);
      }
    } else {
      authMessage.style.color = "red";
    }
  } catch (err) {
    authMessage.textContent = "Something went wrong.";
  }
});

// OTP Submit Handler
otpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("otp-email").value;
  const otp = document.getElementById("otp-input").value;

  const res = await fetch("http://localhost:5001/api/verify-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, otp }),
  });

  const data = await res.json();
  document.getElementById("otp-message").textContent = data.message;

  if (res.status === 200) {
    document.getElementById("otp-message").style.color = "green";
    setTimeout(() => {
      otpModal.style.display = "none";
    }, 1500);
  } else {
    document.getElementById("otp-message").style.color = "red";
  }
});

// Show email in navbar if logged in
function updateNavbar() {
    const email = localStorage.getItem("userEmail");
    const loginBtn = document.getElementById("open-login");
    const signupBtn = document.getElementById("open-signup");
    const userInfo = document.getElementById("user-info");
    const logoutBtn = document.getElementById("logout-btn");
  
    if (email) {
      loginBtn.style.display = "none";
      signupBtn.style.display = "none";
      userInfo.style.display = "inline";
      userInfo.textContent = `Logged in as: ${email}`;
      logoutBtn.style.display = "inline";
    } else {
      loginBtn.style.display = "inline";
      signupBtn.style.display = "inline";
      userInfo.style.display = "none";
      logoutBtn.style.display = "none";
    }
  }
  

function logout() {
    localStorage.removeItem("userEmail");
    updateNavbar();
  }
  

updateNavbar();
