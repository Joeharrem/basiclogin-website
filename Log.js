function login() {
  // get values from inputs
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // simple validation
  if (username === "" || password === "") {
    alert("Please fill in all fields");
    return;
  }

  // sample correct credentials
  let correctUsername = "Jackniall Damir";
  let correctPassword = "12345678Joerobs08";

  if (username === correctUsername && password === correctPassword) {
    alert("Login successful!");
    // redirect example
    // window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password");
  }
}
