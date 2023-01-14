const darkModeToggle = document.querySelector(".dark-mode-toggle");
let darkMode = localStorage.getItem("darkMode");

function enableDarkmode() {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "enabled");
  document.querySelector("nav>img").style.filter = "invert(1)";
  document.querySelector(".footer-section1>img").style.filter = "invert(1)";
}

function disableDarkMode() {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", null);
  document.querySelector("nav>img").style.filter = "invert(0)";
  document.querySelector(".footer-section1>img").style.filter = "invert(0)";
}

if (darkMode === "enabled") enableDarkmode();

darkModeToggle.addEventListener("click", () => {
  if (localStorage.getItem("darkMode") !== "enabled") {
    enableDarkmode();
  } else disableDarkMode();
  console.log("btn clicked");
});
