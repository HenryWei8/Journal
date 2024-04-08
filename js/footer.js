var footerHTML = `
<div class="footer-basic">
<footer>

  <ul class="list-inline">
    <li class="list-inline-item"><a href="index.html">Home</a></li>
    <li class="list-inline-item"><a href="about.html">About Us</a></li>
    <li class="list-inline-item"><a href="policies.html">Publication Policies</a></li>
  </ul>
  <div class="social">
    <a href="https://www.linkedin.com/company/fiat-lux-journal/about/?viewAsMember=true"><i class="icon ion-social-linkedin"></i></a
    ><a href="#"><i class="icon ion-social-youtube"></i></a
    ><a href="#"><i class="icon ion-social-twitter"></i></a
    ><a href="#"><i class="icon ion-social-facebook"></i></a>
  </div>
  <p class="copyright">Copyright © 2024 The Fiat Lux Journal</p>
</footer>
    `;
var template = document.createElement("template");
template.innerHTML = footerHTML;

function showContent() {
  let clon = template.content.cloneNode(true);
  document.body.insertBefore(clon, document.body.lastChild);
}

// Call showContent when the window loads
showContent();
