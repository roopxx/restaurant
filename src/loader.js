import renderHome from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";

function createHeader() {
  const backgroundHeader = document.createElement("div");
  backgroundHeader.classList.add("background_header");

  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant_name");
  restaurantName.textContent = "Taste Of Traditions";

  backgroundHeader.appendChild(header);
  header.appendChild(restaurantName);
  header.appendChild(navBarGeneration());

  return backgroundHeader;
}

function navBarGeneration() {
  const content = document.querySelector("#content");
  const nav = document.createElement("nav");

  const homeNavBtn = document.createElement("button");
  homeNavBtn.classList.add("nav_bar");
  homeNavBtn.textContent = "Home";
  homeNavBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("on")) return;
    navOnButton(homeNavBtn);
    content.style.backgroundImage = "url('../src/images/food_bg.jpg')";
    renderHome();
  });

  const menuNavBtn = document.createElement("button");
  menuNavBtn.classList.add("nav_bar");
  menuNavBtn.textContent = "Menu";
  menuNavBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("on")) return;
    navOnButton(menuNavBtn);
    content.style.backgroundImage = "url('../src/images/food_bg2.jpg')";
    renderMenu();
  });

  const contactNavBtn = document.createElement("button");
  contactNavBtn.classList.add("nav_bar");
  contactNavBtn.textContent = "Contact";
  contactNavBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("on")) return;
    navOnButton(contactNavBtn);
    content.style.backgroundImage = "url('../src/images/food_bg3.jpg')";
    renderContact();
  });

  nav.appendChild(homeNavBtn);
  nav.appendChild(menuNavBtn);
  nav.appendChild(contactNavBtn);

  return nav;
}

function navOnButton(button) {
  const buttons = document.querySelectorAll(".nav_bar");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("on");
    }
  });

  button.classList.add("on");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = `Copyright © ${new Date().getFullYear()} roopxx`;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/roopxx";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fab");
  githubIcon.classList.add("fa-github");

  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  navOnButton(document.querySelector(".nav_bar"));
  content.style.backgroundImage = "url('../src/images/food_bg.jpg')";
  renderHome();
}

export default initializeWebsite;
