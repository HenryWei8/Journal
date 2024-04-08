document.addEventListener("DOMContentLoaded", function () {
  var consentGiven = localStorage.getItem("performanceCookiesConsent");

  if (consentGiven === null) {
    document.getElementById("banner").style.display = "block";
  } else if (consentGiven === "true") {
    loadPerformanceCookies();
    document.getElementById("banner").style.display = "none";
  }

  document
    .getElementById("acceptCookies")
    .addEventListener("click", function () {
      localStorage.setItem("performanceCookiesConsent", "true");
      document.getElementById("banner").style.display = "none";
      loadPerformanceCookies();
    });

  document
    .getElementById("rejectCookies")
    .addEventListener("click", function () {
      localStorage.setItem("performanceCookiesConsent", "false");
      document.getElementById("banner").style.display = "none";
    });
});

function loadPerformanceCookies() {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-6P7TMGJ42L");
}
