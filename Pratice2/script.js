// // JavaScript for popup functionality

// // Get the button and popup elements
// const openButton = document.querySelector(".nav_contact_button");
// const popup = document.getElementById("contactPopup");
// const closeButton = document.getElementById("closePopup");
// const contactForm = document.getElementById("contactForm");

// // Open the popup when the button is clicked
// openButton.addEventListener("click", function () {
//   popup.style.display = "block";
// });

// // Close the popup when the close button is clicked
// closeButton.addEventListener("click", function () {
//   popup.style.display = "none";
// });

// // Close the popup if the user clicks outside of it
// window.addEventListener("click", function (event) {
//   if (event.target === popup) {
//     popup.style.display = "none";
//   }
// });

// // Handle form submission (you can add your own logic here)
// contactForm.addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent default form submission

//   // Get form values
//   const name = document.getElementById("name").value;
//   const contactNo = document.getElementById("contactNo").value;
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;

//   // For demonstration, log the form values to the console
//   console.log("Name:", name);
//   console.log("Contact Number:", contactNo);
//   console.log("Email:", email);
//   console.log("Message:", message);

//   // You can add your own logic here (e.g., sending data to a server)

//   // Close the popup after submission
//   popup.style.display = "none";
// });

// back end try
document.addEventListener("DOMContentLoaded", () => {
  const contactButton = document.querySelector(".nav_contact_button");
  const popup = document.getElementById("contactPopup");
  const closePopup = document.getElementById("closePopup");
  const contactForm = document.getElementById("contactForm");

  contactButton.addEventListener("click", () => {
    popup.style.display = "block";
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      contactNumber: document.getElementById("contactNo").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    try {
      const response = await fetch("http://localhost:3000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);
      popup.style.display = "none";
      contactForm.reset();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit form");
    }
  });
});
