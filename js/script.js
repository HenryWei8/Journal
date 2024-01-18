// // searchbar
const papers = [
  {
    title:
      "Investigating Renewable Energy in the Context of Global Economic and Social Wellbeing",
    author: "Henry Wei",
    link: "article1.html",
  },
  {
    title: "Climate Change and Sustainable Solutions",
    author: "Sarah Johnson",
  },
  // Add more paper data here
];

function handleKeyPress(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission
    searchPapers();
    console.log("hi");
  }
}

function searchPapers() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  const searchResults = []; // Initialize searchResults as an empty array

  for (const paper of papers) {
    const title = paper.title.toLowerCase();
    const author = paper.author.toLowerCase();

    if ((title.includes(query) || author.includes(query)) && query != "") {
      searchResults.push(paper);
    }
  }

  displayResults(searchResults);
}
function displayResults(results) {
  const searchResultsList = document.getElementById("searchResults");

  // Clear any existing search results
  searchResultsList.innerHTML = "";

  if (results.length === 0 && query != "") {
    searchResultsList.innerHTML = "No results found.";
  } else {
    for (const result of results) {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.textContent = `Title: ${result.title}, Author: ${result.author}`;
      link.href = result.link; // Set the link's href attribute
      listItem.appendChild(link); // Add the link to the list item
      searchResultsList.appendChild(listItem);
    }
  }

  // Show the search results
  searchResultsList.style.display = "block";
}

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
    btn.addEventListener("click", function (event) {
      // Prevent the default behavior of the button click
      event.preventDefault();
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

//form
const { body, validationResult } = require("express-validator");
