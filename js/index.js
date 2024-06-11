//* HTML Elements
var signinEmail = document.querySelector("#signin-email");
var signinPassword = document.querySelector("#signin-password");
var loginBtn = document.querySelector(".login");
var inputs = document.querySelectorAll("input");
var myModal = document.querySelector(".my-modal");
var closeBtn = document.querySelector("#closeBtn");
//////////////////////////////////////////////////////
var signupName = document.querySelector("#signup-name");
var signupEmail = document.querySelector("#signup-email");
var signupPassword = document.querySelector("#signup-password");
var signupBtn = document.querySelector(".signup-btn");
////////////////////////////////////////////////////////////
var signedUser = document.querySelector(".signed-user");
var exitBtn = document.querySelector(".log-out");

//* App variable
var users = JSON.parse(localStorage.getItem("users")) || [];
var actualUser = localStorage.getItem("username") || "";
var nameRegex = /^[A-Z]?[a-z]{3,}$/;
var emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

//* Functions
function login() {
  if (
    validate(emailRegex, signinEmail) &&
    validate(passwordRegex, signinPassword)
  ) {
    for (i = 0; i < inputs.length; i++) {
      if (
        users[i].email == signinEmail.value &&
        users[i].password == signinPassword.value
      ) {
        console.log("you are user");
        actualUser = localStorage.setItem("username", users[i].name);
        console.log(localStorage.getItem("username"));

        location.replace("welcome.html");
        clearInputs();
      } else {
        displayModal();
      }
    }
  } else {
    displayModal();
  }
}
function signup() {
  if (
    validate(nameRegex, signupName) &&
    validate(emailRegex, signupEmail) &&
    validate(passwordRegex, signupPassword)
  ) {
    var user = {
      name: signupName.value,
      email: signupEmail.value,
      password: signupPassword.value,
    };

    users.push(user);
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));
    clearInputs();
    location.replace("index.html");
  } else {
    displayModal();
  }
}

function clearInputs() {
  for (i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
    inputs[i].classList.remove("is-valid");
  }
}

function validate(regex, element) {
  if (regex.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.add("d-none");
    return true;
  } else {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    element.nextElementSibling.classList.remove("d-none");
    return false;
  }
}
function hideModal() {
  myModal.classList.add("d-none");
  for (i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("is-invalid");
  }
}
function displayModal() {
  myModal.classList.remove("d-none");
}

//* Events
closeBtn.addEventListener("click", hideModal);
myModal.addEventListener("click", function (e) {
  if (e.target == myModal) {
    hideModal();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.code == "Escape") {
    hideModal();
  }
});
