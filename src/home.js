function homeCreation() {
  const home = document.createElement("div");
  home.classList.add("home");

  const restaurantImage = document.createElement("img");
  restaurantImage.classList.add("hide_bg");
  restaurantImage.src = "images/food_plate2.jpg";

  home.appendChild(addParagraph("Welcome to ToT, Taste of Traditions"));
  home.appendChild(addParagraph("Where Every Bite is a Trip Back in Time."));
  home.appendChild(restaurantImage);
  home.appendChild(addParagraph("We have multiple outlets or order online!"));

  return home;
}

function addParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function renderHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(homeCreation());
}

export default renderHome;
