var headerHTML = `
      <header>
        <div class="header-bar">
          <div class="header-logo">
            <a href="index.html">
              <img class="logo" src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div class="header-buttons">
            <a href="publish.html">
              <button class="publish">SUBMIT MANUSCRIPT</button>
            </a>
            <a href="about.html">
              <button class="about">ABOUT US</button>
            </a>
          </div>
          <div class="vl"></div>
          <div class="search-bar">
            <form class="content-form">
              <input
                type="search"
                name="input"
                id="searchInput"
                class="input search-input"
                onkeypress="handleKeyPress(event)"
              />
              <button
                type="reset"
                class="search search-btn"
                onclick="searchPapers()"
              ></button>
            </form>
          </div>
        </div>
        <ul id="searchResults" style="display: none"></ul>
      </header>
    `;
var template = document.createElement("template");
template.innerHTML = headerHTML;

function showContent() {
  let clon = template.content.cloneNode(true);
  document.body.insertBefore(clon, document.body.firstChild);
}

// Call showContent when the window loads
showContent();
