let scrollButton = document.querySelector(".scrollButton");
console.log(scrollButton);
let nextSection = document.querySelector(".journalstats");

scrollButton.addEventListener("click", function () {
  console.log("pressed");
  nextSection.scrollIntoView({ behavior: "smooth" });
});
