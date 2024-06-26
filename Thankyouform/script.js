document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Show popup
  document.getElementById("popup").style.display = "flex";

  // Hide form
  document.getElementById("myForm").style.display = "none";

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("closePopup").addEventListener("click", closePopup);
document.getElementById("closeBtn").addEventListener("click", closePopup);

function closePopup() {
  document.getElementById("popup").style.display = "none";

  // Reset form fields
  document.getElementById("myForm").reset();

  // Show form again
  document.getElementById("myForm").style.display = "block";
}
