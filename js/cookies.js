document.addEventListener("DOMContentLoaded", function () {
  var consentGiven = localStorage.getItem("performanceCookiesConsent");

  if (consentGiven === null) {
    document.getElementById("cookieConsentBanner").style.display = "block";
  } else if (consentGiven === "true") {
    loadPerformanceCookies(); // Load performance cookies immediately if consent already given
  }

  document
    .getElementById("acceptCookies")
    .addEventListener("click", function () {
      localStorage.setItem("performanceCookiesConsent", "true");
      document.getElementById("banner").style.display = "none";
      loadPerformanceCookies(); // Consent given, load performance cookies
    });

  document
    .getElementById("rejectCookies")
    .addEventListener("click", function () {
      localStorage.setItem("performanceCookiesConsent", "false");
      document.getElementById("banner").style.display = "none";
      // Consent not given, do not load performance cookies
    });
});

function loadPerformanceCookies() {
  // Example: Load Google Analytics script
  // Replace 'YOUR_TRACKING_ID' with your actual Google Analytics tracking ID
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-6P7TMGJ42L");
}
