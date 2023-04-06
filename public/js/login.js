const sendLoginRequest = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.getElementById("email-field").value.trim();
  const password = document.getElementById("password-field").value.trim();

  if (email && password) {
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while sending login request. Please try again later.");
    }
  }
};

document
  .getElementById("login-form")
  .addEventListener("submit", sendLoginRequest);