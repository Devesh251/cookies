document.querySelectorAll(".secureLink").forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();

    // Get the URL from the data-url attribute
    let url = this.getAttribute("data-url");

    // Open a new window
    let secureWindow = window.open("", "SecureWindow", "width=800,height=600");

    if (secureWindow) {
      // Fetch the embed.html content
      fetch("embed.html")
        .then((response) => response.text())
        .then((htmlContent) => {
          // Write the fetched content to the new window
          secureWindow.document.open();
          secureWindow.document.write(htmlContent);
          secureWindow.document.close();

          // Add the iframe with the specified URL
          let iframe = secureWindow.document.createElement("iframe");
          iframe.src = url;
          secureWindow.document.body.appendChild(iframe);

          // Hide URL
          secureWindow.history.pushState({}, "", "/hidden-url");

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
        .catch((error) => console.error("Error fetching embed.html:", error));
    }
  });
});
