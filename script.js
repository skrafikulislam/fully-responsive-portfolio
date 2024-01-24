function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function NewTabLinked() {
  window.open(
    "https://www.linkedin.com/in/srafikulislam/",
    "_blank"
  );
}

function NewTabGithub() {
  window.open("https://github.com/skrafikulislam", "_blank");
}

function MyResume() {
  window.open("./assests/Sk Rafikul Islam ---- Resume.pdf", "_blank");
}
