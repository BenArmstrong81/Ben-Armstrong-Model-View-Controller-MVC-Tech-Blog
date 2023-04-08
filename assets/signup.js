// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const username = document.getElementById("username-signup").value;
//   const email = document.getElementById("email-signup").value;
//   const password = document.getElementById("password-signup").value;

//   if (name && email && password) {
//     const response = await fetch("/api/users/signup", {
//       method: "POST",
//       body: JSON.stringify({ username, email, password }),
//       headers: { "Content-Type": "application/json" },
//     });
//     if (response.ok) {
//       alert("Account created!"); // Display an alert message
//       document.location.replace("/dashboard");
//     } else {
//       const errorData = await response.json();
//       if (errorData.message) {
//         alert(errorData.message);
//       } else {
//         alert(response.statusText);
//       }
//     }
//   }
// };

// document.getElementById("signup-form").addEventListener("submit", signupFormHandler);

//used from Project2 >> debugging test