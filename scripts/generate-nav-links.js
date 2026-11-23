/** Generates navigation links for the website. */

const navLinks = [
  { text: "Home", href: "../index.html" },
  { text: "About Us", href: "../pages/about.html" },
  { text: "Products", href: "../pages/products.html" },
  { text: "Customize Your own", href: "../pages/customize.html" },
  { text: "AI Generator", href: "../pages/generate.html" },
  { text: "Wishlist", href: "../pages/wishlist.html" },
  { text: "Cart", href: "../pages/cart.html" },
  { text: "Contact", href: "../pages/contact.html" },
];

function GetHeader() {
  const header = document.getElementsByTagName("header")[0];

  // if there is no header, create one and return it, otherwise return null since the header already exists
  return !header ? document.createElement("header") : null;
}

document.addEventListener("DOMContentLoaded", function () {
  const header = GetHeader();
  if (!header) return;

  const image = document.createElement("img");
  image.src = "../assets/images/Crochea Logo.png";
  image.alt = "Crochea Logo";
  image.classList.add("logo");
  header.appendChild(image);

  const navLinksContainer = document.createElement("nav");
  navLinksContainer.id = "nav-links";
  header.appendChild(navLinksContainer);

  navLinks.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    a.classList.add("nav-link");
    navLinksContainer.appendChild(a);
  });

  document.body.prepend(header);
});
