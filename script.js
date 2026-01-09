
/* Google Apps Script URL

https://script.google.com/macros/s/AKfycbxlKOUCgAsc0WX708JYd7k9QF0FXPFIKBu-WpIX1DYxnbgp_w-Mw3q4WUp_

*/



// NAVBAR TOGGLE
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// DROPDOWN
function toggleDropdown() {
  const drop = document.getElementById("dropdown");
  drop.style.display = drop.style.display === "block" ? "none" : "block";
}

// TABS
function showTab(id) {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

// TESTIMONIAL SLIDER
const testimonials = [
  { text: "Great franchise experience!", name: "Aman, Jaipur" },
  { text: "Excellent support team.", name: "Riya, Pune" },
  { text: "Profitable business model.", name: "Rahul, Delhi" }
];

let index = 0;

function next() {
  index = (index + 1) % testimonials.length;
  updateSlider();
}

function prev() {
  index = (index - 1 + testimonials.length) % testimonials.length;
  updateSlider();
}

function updateSlider() {
  document.getElementById("review").innerText = testimonials[index].text;
  document.getElementById("person").innerText = "– " + testimonials[index].name;
}

// FAQ
function toggleFaq(faq) {
  document.querySelectorAll(".faq p").forEach(p => p.classList.add("hidden"));
  faq.querySelector("p").classList.toggle("hidden");
}

// SUCCESS MESSAGE
function showSuccess() {
  setTimeout(() => {
    document.getElementById("successMsg").innerText =
      "Form submitted successfully!";
  }, 500);
}
