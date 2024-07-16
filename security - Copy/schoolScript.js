window.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Disable context menu (right-click)
window.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Disable F12, Ctrl+Shift+I, and other developer tools shortcuts
window.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && e.key === "I".toUpperCase())
  ) {
    e.preventDefault();
  }
});

// Disable shortcuts
window.addEventListener("keydown", function (e) {
  if (e.ctrlKey || e.altKey || e.metaKey) {
    e.preventDefault();
  }
});

// Focus the new window
window.focus();
