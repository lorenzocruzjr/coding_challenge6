document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  const emailInput = document.getElementById("email");
  const errorSpan = document.getElementById("error");
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  if (emailRegex.test(emailInput.value)) {
    // Valid email address
    errorSpan.textContent = "";
    alert("Email submitted successfully!");

    // Clear the form fields
    document.getElementById("emailForm").reset();
  } else {
    // Invalid email address
    errorSpan.textContent = "Please enter a valid email address";
  }
});