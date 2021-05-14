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

const projectBtn = document.querySelector(".mywork__side__menu");
const projects = document.querySelectorAll(".project");

projectBtn.addEventListener("click", (e) => {
  const pname = e.target.dataset.pname || e.target.parentNode.dataset.pname;

  if (pname == null) {
    return;
  }
  projects.forEach((project) => {
    const pdescription = project.querySelector(".project__active");
    if (pname === "*") {
      project_list();
    } else if (pname == project.dataset.pcontent) {
      project.classList.remove("invisible");
      if (pdescription == null) {
        return;
      } else {
        pdescription.classList.remove("project__active");
      }
    } else {
      project.classList.add("invisible");
    }
  });

  function project_list() {
    projects.forEach((project) => {
      const pdescription = project.querySelector(".project-description");
      project.classList.remove("invisible");
      if (pdescription != null) {
        pdescription.classList.add("project__active");
      }
    });
  }
});

// Button for project description
const about = document.querySelector("#about");
const aboutHeight = about.getBoundingClientRect().height;
const projectAlertContainer = document.querySelector(".project-alert");
const projectAlert = document.querySelector(".project-alert_btn");
let count = 0;

document.addEventListener("scroll", () => {
  if (window.scrollY > aboutHeight) {
    if (count > 0) return;
    projectAlertContainer.classList.add("visible");
  } else {
    projectAlertContainer.classList.remove("visible");
  }
});

projectAlert.addEventListener("click", () => {
  projectAlertContainer.classList.remove("visible");
  count++;
});
