// Load header component
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

// Load tile components
const tilePromises = [];
for (let i = 0; i < 10; i++) {
  tilePromises.push(fetch("tile.html").then((response) => response.text()));
}

Promise.all(tilePromises).then((tiles) => {
  document.getElementById("tiles").innerHTML = tiles.join("");
});
