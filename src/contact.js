function contactCreation() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const contactUs = document.createElement("h2");
  contactUs.textContent = "Reach out to us.";

  const contactNumber = document.createElement("p");
  contactNumber.textContent = "📞 (+91) 9876 543 210";

  const address = document.createElement("p");
  address.textContent =
    "🏠 51-A, MKN Road, Race View Colony, Guindy, TN, India";

  const restaurantLocation = document.createElement("img");
  restaurantLocation.src = "../src/images/location.png";
  restaurantLocation.alt = "Taste of Traditions restaurant location";

  contact.appendChild(contactUs);
  contact.appendChild(contactNumber);
  contact.appendChild(address);
  contact.appendChild(restaurantLocation);

  return contact;
}

function renderContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(contactCreation());
}

export default renderContact;
