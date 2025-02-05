// script pour le menu hamberger

const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".navlink");


burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("open")
  navLinks.classList.toggle("mobile-menu");
  // console.log(navLinks);
  
});


// action pour le form

document.getElementById("contact-Form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("click");

  const name = document.getElementById("name").value;
  const email = document.getElementById("e-mail").value;
  const message = document.getElementById("message").value;

  const mailtoLink = `mailto:yannabessolo98@gmail.com?subject=Contact&body=Nom: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

  window.location.href = mailtoLink;

  event.target.reset();
});
