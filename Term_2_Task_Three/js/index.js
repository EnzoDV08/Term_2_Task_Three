function calculate() {
  var number1 = document.getElementById("number1").value;
  var operator = document.getElementById("math").value;
  var number2 = document.getElementById("number2").value;
  
  if (number1 === "" || operator === "" || number2 === "") {
    alert("Please do your math!.");
    return;
  }
  
  number1 = parseFloat(number1);
  number2 = parseFloat(number2);
  
  var result;
  
  switch(operator) {
    case "add":
      result = number1 + number2;
      break;
    case "subtract":
      result = number1 - number2;
      break;
    case "multiply":
      result = number1 * number2;
      break;
    case "divide":
      if (number2 === 0) {
        alert("Cannot divide by zero.");
        return;
      }
      result = number1 / number2;
      break;
    default:
      alert("Invalid operator selected.");
      return;
  }
  
  alert("Result: " + result);
}