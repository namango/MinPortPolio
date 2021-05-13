"use stric";

// Button for navbar__menu
const navbarMenu = document.querySelector(".navbar__menu");
const toogleBtn = document.querySelector(".navbar__toggle-btn");
toogleBtn.addEventListener("click", () => {
  if (window.innerWidth > 768) {
    return;
  }
  navbarMenu.classList.toggle("open");
});

navbarMenu.addEventListener("click", (e) => {
  const link = e.target.dataset.link;
  const value = document.querySelector(link);
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  value.scrollIntoView({ behavior: "smooth", block: "start" });
});

const contactBtn = document.querySelector(".contact-btn");
contactBtn.addEventListener("click", () => {
  const contact = document.querySelector("#contact");
  contact.scrollIntoView({ behavior: "smooth", block: "start" });
});

const majors = document.querySelector(".majors");
majors.addEventListener("mouseover", (e) => {
  const iconName = e.target.dataset.iconname;
  const value = document.querySelector(iconName);
  if (value == null) {
    return;
  }
  switch (iconName) {
    case ".fa-html5":
      value.style.color = "green";
      break;
    case ".fa-css3-alt":
      value.style.color = "orange";
      break;
    case ".fa-js":
      value.style.color = "yellow";
      break;
    case ".fa-glasses":
      value.style.color = "red";
      break;
    case ".fa-grin-stars":
      value.style.color = "brown";
      break;
    case ".fa-comments":
      value.style.color = "navy";
  }
});
