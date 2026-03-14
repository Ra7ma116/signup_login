// Select Elements
const fNameInp = document.getElementById("fName");
const lNameInp = document.getElementById("lName");
const emailPhoneInp = document.getElementById("emailPhone");
const passInp = document.getElementById("pass");
const maleBtn = document.getElementById("male");
const femaleBtn = document.getElementById("female");
const regForm = document.getElementById("regForm");

// Error Elements
const fNameError = document.getElementById("fNameError");
const genderErrorIcon = document.getElementById("genderErrorIcon");
const dateErrorIcon = document.getElementById("dateErrorIcon");

// Date Selectors
const daySelect = document.getElementById("day");
const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");

// Populate Dates
function populateDates() {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  // Days
  for (let i = 1; i <= 31; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // Months
  months.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = month;
    monthSelect.appendChild(option);
  });

  // Years
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= 1905; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
  }

  // Default values
  const today = new Date();
  daySelect.value = today.getDate();
  monthSelect.value = today.getMonth() + 1;
  yearSelect.value = currentYear;
}

populateDates();

// Form Validation
regForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  resetErrors();

  // First Name
  if (fNameInp.value.trim() === "") {
    showError(fNameInp, true);
    isValid = false;
  }

  // Last Name
  if (lNameInp.value.trim() === "") {
    showError(lNameInp);
    isValid = false;
  }

  // Email or Phone
  const epVal = emailPhoneInp.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10,15}$/;

  if (epVal === "" || (!emailRegex.test(epVal) && !phoneRegex.test(epVal))) {
    showError(emailPhoneInp);
    isValid = false;
  }

  // Password
  if (passInp.value.length < 6) {
    showError(passInp);
    isValid = false;
  }

  // Date Validation
  if (!daySelect.value || !monthSelect.value || !yearSelect.value) {
    dateErrorIcon.classList.remove("d-none");
    isValid = false;
  }

  // Gender Validation
  if (!maleBtn.checked && !femaleBtn.checked) {
    genderErrorIcon.classList.remove("d-none");
    isValid = false;
  }

  // If Valid
  if (isValid) {
    const userData = {
      firstName: fNameInp.value.trim(),
      lastName: lNameInp.value.trim(),
      contact: emailPhoneInp.value.trim(),
      password: passInp.value,
      birthDate: `${yearSelect.value}-${monthSelect.value}-${daySelect.value}`,
      gender: document.querySelector('input[name="gender"]:checked').value
    };

    console.log("User Registered:", userData);
    alert(`Welcome, ${userData.firstName}! Registration Successful.`);
    window.location.href = "login.html";
  }
});

// Show Error
function showError(input, showTooltip = false) {
  input.classList.add("is-invalid");

  if (showTooltip && input.id === "fName") {
    fNameError.classList.remove("d-none");
    input.focus();
  }
}

// Reset Errors
function resetErrors() {
  const inputs = [fNameInp, lNameInp, emailPhoneInp, passInp];

  inputs.forEach(input => input.classList.remove("is-invalid"));

  fNameError.classList.add("d-none");
  genderErrorIcon.classList.add("d-none");
  dateErrorIcon.classList.add("d-none");
}