const sections = {
  wealth: {
    logo: "wealth1.png",
    links: [
      { text: "Home", file: "home.html" },
      { text: "Services", file: "home.html" },
      { text: "About Us", file: "about.html" },
      { text: "Contact Us", file: "contact.html" },
    ],
  },
  indexing: {
    logo: "index.jpg",
    links: [
      { text: "Home", file: "homeindex.html" },
      { text: "Strategy", file: "homeindex.html" },
      { text: "About us", file: "about.html" },
      { text: "Contact", file: "contact.html" },
    ],
  },
  ethical: {
    logo: "ethical.jpg",
    links: [
      { text: "Home", file: "ethical.html" },
      { text: "Investment", file: "about.html" },
      { text: "About us", file: "about.html" },
      { text: "Contact us", file: "contact.html" },
    ],
  },
  super: {
    logo: "super.jpg",
    links: [
      { text: "Super Plans", file: "super.html" },
      { text: "Retirement", file: "super.html" },
      { text: "About us", file: "about.html" },
      { text: "Contact us", file: "contact.html" },
    ],
  },
};

function showPage(event, sectionId) {
  if (event) event.preventDefault();
  document.getElementById("logo").src = sections[sectionId].logo;

  // Remove active class from all primary nav links
  document
    .querySelectorAll(".top-nav .nav-link")
    .forEach((link) => link.classList.remove("active"));

  // Add active class to the selected primary nav link
  const activePrimary = document.querySelector(
    `[data-section="${sectionId}"]`
  );
  if (activePrimary) {
    activePrimary.classList.add("active");
  }

  // Update secondary navigation
  const secondaryNav = document.getElementById("secondary-nav");
  secondaryNav.innerHTML = "";

  sections[sectionId].links.forEach((link, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#" class="nav-link ${
      index === 0 ? "active" : ""
    }" onclick="loadContent(event, '${link.file}', this)">${
      link.text
    }</a>`;
    secondaryNav.appendChild(li);
  });

  // Set the first link as active
  document
    .querySelector("#secondary-nav .nav-link")
    .classList.add("active");

  // Load first page of selected section
  document.getElementById("content-frame").src =
    sections[sectionId].links[0].file;
}

function loadContent(event, page, element) {
  event.preventDefault();
  document.getElementById("content-frame").src = page;

  // Remove active class from all secondary nav links
  document
    .querySelectorAll("#secondary-nav .nav-link")
    .forEach((link) => link.classList.remove("active"));

  // Add active class to the clicked link
  if (element) {
    element.classList.add("active");
  }
}

function toggleDropdown(id) {
  document.getElementById(id).classList.toggle("hidden");
}

document.getElementById("menu-toggle").addEventListener("click", () => {
  document
    .getElementById("sidebar")
    .classList.remove("-translate-x-full");
});

document.getElementById("close-menu").addEventListener("click", () => {
  document.getElementById("sidebar").classList.add("-translate-x-full");
});

document.addEventListener("DOMContentLoaded", () => {
  showPage(null, "wealth"); // Default active section

  Object.keys(sections).forEach((section) => {
    const dropdown = document.getElementById(`${section}-dropdown`);
    sections[section].links.forEach((link) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="#" onclick="loadContent(event, '${link.file}', this)">${link.text}</a>`;
      dropdown.appendChild(li);
    });
  });

  const menuItems = document.querySelectorAll("#sidebar-menu a");
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      menuItems.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  });
});