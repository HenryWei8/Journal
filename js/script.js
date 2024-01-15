// // searchbar
document.addEventListener("DOMContentLoaded", function () {
  // Select all search inputs and buttons using class selectors
  let inputs = document.querySelectorAll(".search-input");
  let searchBtns = document.querySelectorAll(".search-btn");

  // Define the expand function
  let expand = (input, button) => {
    button.classList.toggle("close");
    input.classList.toggle("square");
  };

  // Add event listeners to each search button
  searchBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      // Assuming the input and button are paired in order
      expand(inputs[index], btn);
    });
  });
});

//scroll button
let scrollButton = document.querySelector(".scrollButton");
console.log(scrollButton);
let nextSection = document.querySelector(".journalstats");

scrollButton.addEventListener("click", function () {
  console.log("pressed");
  nextSection.scrollIntoView({ behavior: "smooth" });
});
