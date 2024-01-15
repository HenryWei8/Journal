// // searchbar
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");

  const expand = () => {
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
  };

  searchBtn.addEventListener("click", expand);
});

//scroll button
let scrollButton = document.querySelector(".scrollButton");
console.log(scrollButton);
let nextSection = document.querySelector(".journalstats");

scrollButton.addEventListener("click", function () {
  console.log("pressed");
  nextSection.scrollIntoView({ behavior: "smooth" });
});
