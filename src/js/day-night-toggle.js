document.querySelector(".color-toggle").addEventListener("click", (event) => {
  document.querySelector(".color-toggle").classList.toggle("night");
  document.querySelector("body").classList.toggle("night");
});
