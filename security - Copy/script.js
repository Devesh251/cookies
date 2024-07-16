document
  .getElementById("secureLink")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let secureWindow = window.open("", "SecureWindow", "width=800,height=600");

    if (secureWindow) {
      // secureWindow.document.write(
      //   '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Embed URL with iframe</title><style>iframe {width: 100%;height: 100vh; /* Full viewport height */border: none;}</style></head><body><iframe src="./school.html"></iframe></body></html>'
      // );
      // Get URL from data-url attribute
      let url = this.getAttribute("data-url");

      // Fetch and write the HTML content
      fetch(url)
        .then((response) => response.text())
        .then((htmlContent) => {
          secureWindow.document.write(htmlContent);
        })
        .catch((error) =>
          console.error("Error fetching the HTML file:", error)
        );

      // Hide URL
      //secureWindow.history.pushState({}, "", "/hidden-url");

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

      // Disable shortcuts
      secureWindow.document.addEventListener("keydown", function (e) {
        if (e.ctrlKey || e.altKey || e.metaKey) {
          e.preventDefault();
        }
      });

      // Focus the new window
      // secureWindow.focus();
    }
  });
