document
  .getElementById("secure-link")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let newWindow = window.open("", "_blank", "noopener,noreferrer");

    if (newWindow) {
      newWindow.document.write(`
          <html>
              <head>
                  <title>Secure Window</title>
                  <style>
                      body {
                          margin: 0;
                          overflow: hidden;
                      }
                      iframe {
                          border: none;
                          width: 100vw;
                          height: 100vh;
                      }
                  </style>
              </head>
              <body>
                  <iframe src="https://tic-tok-project-by-devesh.netlify.app/" frameborder="0"></iframe>
                  <script>
                      // Disable right-click context menu
                      document.addEventListener('contextmenu', function(e) {
                          e.preventDefault();
                      });
                      // Disable keyboard shortcuts
                      document.addEventListener('keydown', function(e) {
                          if (e.ctrlKey || e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
                              e.preventDefault();
                          }
                      });
                  </script>
              </body>
          </html>
      `);

      newWindow.document.close();
    }
  });
