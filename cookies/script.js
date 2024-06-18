document.getElementById("openPopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("submitBtn").disabled = false;
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

document.getElementById("submitBtn").addEventListener("click", function () {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username && password) {
    var existingUsers = getCookie("users")
      ? JSON.parse(getCookie("users"))
      : [];
    if (existingUsers.includes(username)) {
      alert("Username already exists. Please enter a different username.");
      document.getElementById("submitBtn").disabled = true;
    } else {
      existingUsers.push(username);
      setCookie("users", JSON.stringify(existingUsers), 365);
      alert("Information saved!");
      document.getElementById("popup").style.display = "none";
    }
  } else {
    alert("Please fill in both fields.");
  }
});

document.getElementById("username").addEventListener("input", function () {
  var username = document.getElementById("username").value;
  var existingUsers = getCookie("users") ? JSON.parse(getCookie("users")) : [];
  if (existingUsers.includes(username)) {
    document.getElementById("submitBtn").disabled = true;
  } else {
    document.getElementById("submitBtn").disabled = false;
  }
});

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
