document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  const ul = document.getElementById("footer-list");

  // Function to check if the ul is empty and remove the border if so
  const checkEmptyList = () => {
    if (footer.children.length === 0 || ul.children.length === 0) {
      footer.classList.add("no-border");
    }
    // else {
    //   footer.classList.remove("no-border");
    // }
  };

  // Initial check
  checkEmptyList();

  // MutationObserver to watch for changes in the ul
  const observer = new MutationObserver(checkEmptyList);
  observer.observe(footer, { childList: true });
});
