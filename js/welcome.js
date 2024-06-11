window.onload = function () {
  var storedName = localStorage.getItem("username");
  if (storedName) {
    document.querySelector(".signed-user").textContent = storedName;
  } else {
    window.location.href = "index.html";
  }
};
function exit() {
  localStorage.removeItem("username");
  location.replace("index.html");
}
