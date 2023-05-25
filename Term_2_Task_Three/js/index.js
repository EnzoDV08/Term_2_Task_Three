function calculate() {
  var number1 = parseInt(document.getElementById("number1").value);
  var number2 = parseInt(document.getElementById("number2").value);
  var operation = document.getElementById("math").value;
  var result;

  if (operation === "add") {
    result = number1 + number2;
  } else if (operation === "subtract") {
    result = number1 - number2;
  } else if (operation === "multiply") {
    result = number1 * number2;
  } else if (operation === "divide") {
    result = number1 / number2;
  }

  alert(result);
}

