function menuCreation() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Naan",
      "Pillars of Flavor: Our Naan bread brings unity to diverse cuisines, telling the story of 'Tastes of Traditions' in every fluffy bite."
    )
  );

  menu.appendChild(
    createMenuItem(
      "Pav Bhaji",
      "Spices Knitting Memories: Our Pav Bhaji resonates with the legacy of 'Tastes of Traditions', blending flavors that transcend generations."
    )
  );

  menu.appendChild(
    createMenuItem(
      "Chana Masala",
      "Culinary Legacy Unleashed: Our aromatic Chana Masala is a symphony of spices that echoes the heart of 'Tastes of Traditions'."
    )
  );

  menu.appendChild(
    createMenuItem(
      "Pani Puri",
      "Bursts of Heritage on your Tongue: Dive into the vibrant 'Tastes of Traditions' with our Pani Puri, a symphony of tangy and spicy."
    )
  );

  menu.appendChild(
    createMenuItem(
      "Chicken Tikka",
      "Spiced Heritage at its Best: Our Chicken Tikka embodies the soul of 'Tastes of Traditions', fusing generations of culinary wisdom."
    )
  );

  menu.appendChild(
    createMenuItem(
      "Chicken Biryani",
      "Time-Honored Elegance: Savor the rich tapestry of spices and tender chicken in our Chicken Biryani, a tribute to age-old 'Tastes of Traditions'."
    )
  );

  menu.appendChild(
    createMenuItem(
      "Dosa",
      "Crisp Chronicles on a Plate: Our Dosa is a canvas of tradition, capturing the essence of 'Tastes of Traditions' in every fold."
    )
  );

  menu.appendChild(
    createMenuItem(
      "Jalebi",
      "Golden Threads of Time: Satisfy your sweet tooth with our Jalebi, a treat steeped in 'Tastes of Traditions'."
    )
  );

  menu.appendChild(
    createMenuItem(
      "Raman",
      "Broth of Time-Honored Comfort: Our Raman warms the heart with each sip, encapsulating the essence of 'Tastes of Traditions'."
    )
  );

  menu.appendChild(
    createMenuItem(
      "Samosa",
      "Triangular Tales of Tradition: Our Samosa is a crispy storyteller, narrating the heritage of 'Tastes of Traditions' in every bite."
    )
  );

  menu.appendChild(
    createMenuItem(
      "Sushi Platter",
      "East Meets Legacy: Our Sushi Platter marries tradition with innovation, a delectable fusion within 'Tastes of Traditions'."
    )
  );

  menu.appendChild(
    createMenuItem(
      "Burger",
      "Classic Fusion Delight: Our timeless burger brings together heritage flavors with a modern twist, embodying 'Tastes of Traditions' in every bite."
    )
  );

  menu.appendChild(
    createMenuItem(
      "Chicken Sizzler",
      "Sizzling Legacy on a Platter: Experience the grandeur of 'Tastes of Traditions' as our Chicken Sizzler dances with flavors and nostalgia."
    )
  );

  menu.appendChild(
    createMenuItem(
      "Pizza",
      "A Global Legacy Reimagined: Our pizza pays homage to 'Tastes of Traditions', harmonizing international cravings with timeless charm."
    )
  );

  menu.appendChild(
    createMenuItem(
      "Special Thali",
      "Our Special Indian Thali: An ensemble of handpicked 'Tastes of Traditions' flavours. Explore a kaleidoscope of curries, spices, and delights, all to create an authentic culinary masterpiece."
    )
  );

  return menu;
}

function createMenuItem(itemName, itemDescription) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu_item");

  const menuItemName = document.createElement("h2");
  menuItemName.textContent = itemName;

  const menuItemImage = document.createElement("img");
  menuItemImage.src = `images/${itemName
    .replace(/\s+/g, "_")
    .toLowerCase()}.jpg`;
  menuItemImage.alt = `${itemName}`;

  const menuItemDescription = document.createElement("p");
  menuItemDescription.textContent = itemDescription;

  menuItem.appendChild(menuItemName);
  menuItem.appendChild(menuItemImage);
  menuItem.appendChild(menuItemDescription);

  return menuItem;
}

function renderMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(menuCreation());
}

export default renderMenu;
