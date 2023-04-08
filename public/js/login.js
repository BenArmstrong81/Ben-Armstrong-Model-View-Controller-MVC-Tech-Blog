// Login form handler function
async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#login-email").value.trim();
  const password = document.querySelector("#login-password").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

// Signup form handler function
async function signupFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector("#signup-name").value.trim();
  const email = document.querySelector("#signup-email").value.trim();
  const password = document.querySelector("#signup-password").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success");
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}
$(document).ready(function () {
  $("#show-signup").on("click", function () {
    $("#login-section").fadeOut(300, function () {
      $("#login-section").addClass("d-none");
      $("#signup-section").removeClass("d-none");
    });
    $("#left-section").addClass("order-md-2");
    $("#right-section").addClass("order-md-1");
  });

  $("#show-login").on("click", function () {
    $("#signup-section").addClass("d-none");
    $("#login-section").fadeIn(300).removeClass("d-none");
    $("#left-section").removeClass("order-md-2");
    $("#right-section").removeClass("order-md-1");
  });
});

// Event listener for login form
document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);

// Event listener for signup form
document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);