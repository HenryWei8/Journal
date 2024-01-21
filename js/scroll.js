console.log("Script is running.");
document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.querySelector(".scrollButton");
  const journalstatsSection = document.querySelector(".background2");

  scrollButton.addEventListener("click", function () {
    console.log("Button clicked.");
    journalstatsSection.scrollIntoView({ behavior: "smooth" });
  });
});
