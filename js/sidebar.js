var sidebarHTML = `
<div id="mySidebar" class="sidebar" onmouseover="toggleSidebar()" onmouseout="toggleSidebar()">
<a href="index.html"><span><i class="material-icons">Home</i><span class="icon-text"></span>&nbsp;&nbsp;&nbsp;&nbsp;home</a><br>
<a href="https://docs.google.com/document/d/1rlpN8s7TBbchMQgKTx7ZSXBJJbRmq3w1UGj9ncqOm9c/edit?usp=sharing"><i class="material-icons">spa</i><span class="icon-text"></span>&nbsp;&nbsp;&nbsp;&nbsp;Guidelines</span></a><br>
<a href="papers/consenttopublish.pdf"><i class="material-icons">description</i><span class="icon-text"></span>&nbsp;&nbsp;&nbsp;&nbsp;Agreement Form</span></a><br>
<a href="mailto: fiatluxjournal@gmail.com"><i class="material-icons">email</i><span class="icon-text"></span>&nbsp;&nbsp;&nbsp;&nbsp;Contact<span></a>
</div>
    `;
var template = document.createElement("template");
template.innerHTML = sidebarHTML;

function showContent() {
  let clon = template.content.cloneNode(true);
  document.body.insertBefore(clon, document.body.firstChild);
}

showContent();
