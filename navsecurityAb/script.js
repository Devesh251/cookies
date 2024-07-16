// document.querySelectorAll(".secureLink").forEach(function (element) {
//   element.addEventListener("click", function (event) {
//     event.preventDefault();

//     // Get the URL from the data-url attribute
//     let url = this.getAttribute("data-url");

//     // Open a new window with the specified URL
//     let secureWindow = window.open(url, "SecureWindow", "width=800,height=600");

//     if (secureWindow) {
//       // Hide URL
//       secureWindow.history.pushState({}, "", "/hidden-url");

//       // Disable context menu (right-click)
//       secureWindow.document.addEventListener("contextmenu", function (e) {
//         e.preventDefault();
//       });

//       // Disable F12, Ctrl+Shift+I, and other developer tools shortcuts
//       secureWindow.document.addEventListener("keydown", function (e) {
//         if (
//           e.key === "F12" ||
//           (e.ctrlKey && e.shiftKey && e.key === "I".toUpperCase())
//         ) {
//           e.preventDefault();
//         }
//       });

//       // Disable other shortcuts
//       secureWindow.document.addEventListener("keydown", function (e) {
//         if (e.ctrlKey || e.altKey || e.metaKey) {
//           e.preventDefault();
//         }
//       });

//       // Focus the new window
//       secureWindow.focus();
//     }
//   });
// });

document.querySelectorAll(".secureLink").forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();

    // Get the URL from the data-url attribute
    let url = this.getAttribute("data-url");

    // Calculate the width as 60% of the current screen width and full height
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let windowWidth = screenWidth * 0.1;
    let windowHeight = screenHeight;

    // Open a new window with the specified URL and dimensions
    let secureWindow = window.open(
      url,
      "SecureWindow",
      `width=${windowWidth},height=${windowHeight},left=0,top=0`
    );

    if (secureWindow) {
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
    }
  });
});
