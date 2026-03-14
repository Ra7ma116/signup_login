// Select elements
const emailInp = document.getElementById("emailInp");
const passInp = document.getElementById("passInp");
const showPass = document.getElementById("show");
const loginForm = document.getElementById("loginForm");

const emailLabel = document.getElementById("emailLabel");
const passLabel = document.getElementById("passLabel");

// Show Password Toggle
showPass.addEventListener("change", function () {
  if (this.checked) {
    passInp.type = "text";
  } else {
    passInp.type = "password";
  }
});

// Form Validation
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Reset Logic
  function resetToDefault() {
    emailLabel.innerHTML = "Email address or phone number";
    emailLabel.style.color = "#0d6efd"; // Bootstrap primary color

    passLabel.innerHTML = "Password";
    passLabel.style.color = "#0d6efd";
  }
  
  resetToDefault();

  const emailVal = emailInp.value.trim();
  const passVal = passInp.value.trim();
  let isValid = true;

  // Email Validation
  if (emailVal === "") {
    emailLabel.innerHTML = "Email address or phone number (Required!)";
    emailLabel.style.setProperty("color", "red", "important");
    isValid = false;
  }

  // Password Validation
  if (passVal === "") {
    passLabel.innerHTML = "Password (Required!)";
    passLabel.style.setProperty("color", "red", "important");
    isValid = false;
  }

  if (isValid) {
    // If valid
    alert("Login Successful!");
    // loginForm.submit(); 
  }
});
