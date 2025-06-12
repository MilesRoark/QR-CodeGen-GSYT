const text = document.getElementById("text");
const codeElement = document.getElementById("code");
const convertBtn = document.getElementById("convert");
const form = document.querySelector(".input");
const message = document.querySelector(".error-txt");

function convertToQrImage(event) {
  event.preventDefault();

  if (text.value.length === 0) {
    message.style.display = "block";
    codeElement.style.display = "none";
  } else {
    message.style.display = "none";
    codeElement.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      text.value
    )}`;
    codeElement.style.display = "block";
    message.style.display = "none";
  }
}

form.addEventListener("submit", convertToQrImage);
