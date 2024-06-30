document
  .getElementById("secureLink")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let secureWindow = window.open("", "SecureWindow", "width=800,height=600");

    if (secureWindow) {
      secureWindow.document.write(
        '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Secure Content</title><style>body { font-family: Arial, sans-serif; background-color: #f0f0f0; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; } .content { text-align: center; }</style></head><body><div class="content"><h1>Secure Content</h1><p>This is a secure window. URL is hidden and inspect tools are disabled.</p> </div></body></html>'
      );

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

      // Disable shortcuts
      secureWindow.document.addEventListener("keydown", function (e) {
        if (e.ctrlKey || e.altKey || e.metaKey) {
          e.preventDefault();
        }
      });

      // Focus the new window
      secureWindow.focus();
    }
  });
