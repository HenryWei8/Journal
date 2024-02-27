function emailSend() {
  var first = document.getElementById("first_name").value;
  var last = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;
  var fileInput = document.getElementById("pdf_file_input");

  var messageBody =
    "Name: " +
    first +
    " " +
    last +
    "<br/> Email: " +
    email +
    "<br/> Comments: " +
    comment;

  // Email data object
  var emailData = {
    Host: "smtp.elasticemail.com",
    Username: "fljsender@gmail.com",
    Password: "4D5D8C4ADDD9E3EC96AA1FBA36CCF21ABE27",
    To: "fiatluxjournal@gmail.com",
    From: "fljsender@gmail.com",
    Subject: "Notification",
    Body: messageBody,
  };

  // Check if a file is selected
  if (fileInput.files.length > 0) {
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      var base64String = e.target.result.split(",")[1];

      // Add attachment to email data
      emailData.Attachments = [
        {
          name: file.name,
          data: base64String,
        },
      ];

      // Send email with attachment
      sendEmail(emailData);
    };

    // Read the file as Base64
    reader.readAsDataURL(file);
  } else {
    // Send email
    sendEmail(emailData);
  }
}

function sendEmail(emailData) {
  Email.send(emailData).then((message) => {
    if (message == "OK") {
      swal(
        "Successful",
        "Thank you! We'll be in touch with you soon.",
        "success"
      );
    } else {
      swal("Error", "Please email us at fiatluxjournal@gmail.com", "error");
    }
  });
}

FormData.addEventListener("submit", (e) => {
  e.preventDefault();
  emailSend();
});
