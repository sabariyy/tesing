'use strict';



/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

document.getElementById('newsletterForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Simulate form submission (e.g., sending data to a server)
  setTimeout(function () {
    // Hide the form inputs and button
   
    document.querySelector('.btn-primary').style.display = 'none';

    // Show the success message
    document.getElementById('successMessage').style.display = 'block';
  // Hide the success message after 5 seconds
  setTimeout(function () {
    document.getElementById('successMessage').style.display = 'none';
  }, 5000); // 5000 milliseconds = 5 seconds
}, 500); // Simulate a delay for form processing
});