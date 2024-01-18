const papers = [
  {
    title:
      "Investigating Renewable Energy in the Context of Global Economic and Social Wellbeing",
    author: "Henry Wei",
  },
  // Add more paper data here
];

function searchPapers() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const searchResults = [];

  for (const paper of papers) {
    const title = paper.title.toLowerCase();
    const author = paper.author.toLowerCase();

    if (title.includes(query) || author.includes(query)) {
      searchResults.push(paper);
    }
  }

  displayResults(searchResults);
}
function displayResults(results) {
  const searchResultsList = document.getElementById("searchResults");
  searchResultsList.innerHTML = "";

  if (results.length === 0) {
    searchResultsList.innerHTML = "No results found.";
  } else {
    for (const result of results) {
      const listItem = document.createElement("li");
      listItem.textContent = `Title: ${result.title}, Author: ${result.author}`;
      searchResultsList.appendChild(listItem);
    }
  }
}
