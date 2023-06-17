// Business Logic
//function add(num1, num2) {
  //  return num1 + num2;
 // }
  
  //function subtract(num1, num2) {
    //return num1 - num2;
 // }
  
 // function multiply(num1, num2) {
  //  return num1 * num2;
  //}
  
  //function divide(num1, num2) {
  //  return num1 / num2;
  //}
  
  // User Interface Logic
  function handleTriangle(event) {
    event.preventDefault();
    const num1 = parseInt(document.querySelector("input#input1").value);
    const num2 = parseInt(document.querySelector("input#input2").value);
    const num3 = parseInt(document.querySelector("input#input2").value);
    //const operator = document.querySelector("input[name='operator']:checked").value;
  
    let result;
    if (num1 === num2 && num1 === num3) {
      result = "Equilateral";
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
      result = "Isosceles";
    } else if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
      result = "Scalene";
    } else if (num1 + num2 <= num3 || num2 + num3 <= num1 || num3 + num1 <= num2) {
      result = "NOT a triangle";
    }
  
    document.getElementById("output").innerText = result;
  }
  
  window.addEventListener("load", function() {
    const form = document.getElementById("triangle")
    form.addEventListener("submit", handleTriangle);
  });