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
    var existingUsers = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    if (existingUsers.includes(username)) {
      alert("Username already exists. Please enter a different username.");
      document.getElementById("submitBtn").disabled = true;
    } else {
      existingUsers.push(username);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      alert("Information saved!");
      document.getElementById("popup").style.display = "none";
    }
  } else {
    alert("Please fill in both fields.");
  }
});

document.getElementById("username").addEventListener("input", function () {
  var username = document.getElementById("username").value;
  var existingUsers = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (existingUsers.includes(username)) {
    document.getElementById("submitBtn").disabled = true;
  } else {
    document.getElementById("submitBtn").disabled = false;
  }
});
