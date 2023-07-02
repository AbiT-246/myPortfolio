function redirect() {
  const tempInput = document.createElement("input");
  tempInput.value = "Abitibebu123@gmail.com";

  document.body.appendChild(tempInput);

  tempInput.select();
  tempInput.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(tempInput);

  alert("Email address copied to clipboard: " + "Abitibebu123@gmail.com");
}
