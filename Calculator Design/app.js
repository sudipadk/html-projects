const type = document.getElementById("type");
const buttons = document.querySelectorAll("button");

// Input string to hold the current expression
let typeValue = "";

// Iterate through all buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.innerText;

    console.log("Button clicked:", buttonText);

    switch (buttonText) {
      case "x":
        typeValue += "*";
        break;

      case "=":
        try {
          // Evaluate the input expression safely
          const result = eval(typeValue);
          typeValue = result.toString();
        } catch (err) {
          typeValue = "Error";
        }
        break;

      case "AC":
        // Clear the input
        typeValue = "";
        break;

      case "DEL":
        // Remove the last character
        typeValue = typeValue.slice(0, -1);
        break;

      default:
        // Append the clicked value
        typeValue += buttonText;
        break;
    }

    // Update the input field
    type.value = typeValue;
  });
});
