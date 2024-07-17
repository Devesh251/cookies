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
      // Write the HTML for the iframe into the new window
      secureWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Secure Window</title>
            <style>
              body, html { margin: 0; padding: 0;  }
              iframe { width: 500px; height: 400px; border: none; }
            </style>
          </head>
          <body>
            <iframe src="${url}"></iframe>
          </body>
        </html>
      `);

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
    }
  });
});
