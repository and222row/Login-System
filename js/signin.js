window.onload = function () {
  var storedName = localStorage.getItem("username");
  if (storedName) {
    window.location.href = "welcome.html";
  }
};
