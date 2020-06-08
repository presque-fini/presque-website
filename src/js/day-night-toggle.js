const colorToggle = document.querySelector(".color-toggle");

colorToggle.addEventListener("click", (event) => {
  colorToggle.classList.toggle("night");
  document.querySelector("body").classList.toggle("night");
});

matchMedia("(prefers-color-scheme: dark)").addListener((event) => {
  console.log("Theme change detected");
  if (event.matches && !colorToggle.classList.contains("night")) {
    console.log("Auto dark theme on!");
    colorToggle.click();
  } else if (!event.matches && colorToggle.classList.contains("night")) {
    console.log("Auto light theme on!");
    colorToggle.click();
  } else {
    console.log("Theme is already manually set.");
  }
});

if (matchMedia("(prefers-color-scheme: dark)").matches) {
  colorToggle.click();
}
