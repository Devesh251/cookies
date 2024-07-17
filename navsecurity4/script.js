document.querySelectorAll(".secureLink").forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();

    // Get the URL from the data-url attribute
    let url = this.getAttribute("data-url");

    // Generate a unique name for the new window
    let windowName = "SecureWindow" + new Date().getTime();

    // Open a new window with a unique name
    let secureWindow = window.open("", windowName, "width=800,height=600");

    if (secureWindow) {
      // Load the content from the external HTML file
      fetch("secureWindowContent.html")
        .then((response) => response.text())
        .then((data) => {
          // Write the content to the new window
          secureWindow.document.open();
          secureWindow.document.write(data.replace("{{URL}}", url));
          secureWindow.document.close();

          // Disable context menu (right-click)
          secureWindow.document.addEventListener("contextmenu", function (e) {
            e.preventDefault();
          });

          // Disable F12, Ctrl+Shift+I, and other developer tools shortcuts
          secureWindow.document.addEventListener("keydown", function (e) {
            if (
              e.key === "F12" ||
              (e.ctrlKey && e.shiftKey && e.key === "I".toUpperCase())
            ) {
              e.preventDefault();
            }
          });

          // Disable other shortcuts
          secureWindow.document.addEventListener("keydown", function (e) {
            if (e.ctrlKey || e.altKey || e.metaKey) {
              e.preventDefault();
            }
          });

          // Focus the new window
          secureWindow.focus();
        })
        .catch((error) => {
          console.error("Error loading secure window content:", error);
        });
    }
  });
});
