document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  const ul = document.getElementById("footer-list");

  // Function to check if the ul is empty and remove the border if so
  const checkEmptyList = () => {
    if (ul.children.length === 0) {
      footer.classList.add("no-border");
    } else {
      footer.classList.remove("no-border");
    }
  };

  // Initial check
  checkEmptyList();

  // MutationObserver to watch for changes in the ul
  const observer = new MutationObserver(checkEmptyList);
  observer.observe(ul, { childList: true });

  // Example of adding an item to the list
  // Uncomment the lines below to test adding an item
  setTimeout(() => {
    const li = document.createElement("li");
    li.textContent = "Item 1";
    ul.appendChild(li);
  }, 3000);
});
