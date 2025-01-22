let isBinaryToDecimal = true;

function convert() {
  const input = document.getElementById("inputArea").value.trim();
  const outputArea = document.getElementById("outputArea");
  const errorMessage = document.getElementById("errorMessage");

  errorMessage.textContent = "";

  if (isBinaryToDecimal) {
    if (/^[01]+$/.test(input)) {
      const decimal = parseInt(input, 2);
      outputArea.value = decimal;
    } else {
      errorMessage.textContent =
        "Invalid binary number. Please enter only 0s and 1s.";
    }
  } else {
    if (/^\d+$/.test(input)) {
      const binary = parseInt(input, 10).toString(2);
      outputArea.value = binary;
    } else {
      errorMessage.textContent =
        "Invalid decimal number. Please enter a valid number.";
    }
  }
}

function reverseConversion() {
  isBinaryToDecimal = !isBinaryToDecimal;
  const inputArea = document.getElementById("inputArea");
  const outputArea = document.getElementById("outputArea");
  const placeholderText = isBinaryToDecimal ? "Enter binary..." : "Enter decimal...";

  inputArea.placeholder = placeholderText;
  outputArea.placeholder = isBinaryToDecimal ? "Result (decimal)" : "Result (binary)";
  inputArea.value = "";
  outputArea.value = "";
  document.getElementById("errorMessage").textContent = "";
}
