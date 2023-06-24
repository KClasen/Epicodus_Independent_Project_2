function handleSelector(event) {
  event.preventDefault();
  // const num1 = parseInt(document.querySelector("input#input1").value);
  const num2 = parseInt(document.querySelector("input#input2").value);
  const num3 = parseInt(document.querySelector("input#input3").value);
  const num4 = parseInt(document.querySelector("input#input4").value);
  const num5 = parseInt(document.querySelector("input#input5").value);
  const num1 = document.getElementById("input#input1").value;
   

  // let result1;
  //   if (num1 > 10 || num2 > 10 || num3 > 10) {
  //       result1 = "Please enter a number between 1 and 10";
  //   } else if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  //     result1 = "Please enter a number between 1 and 10";
  //   } else if (num1 <= num2 || num1 === num2) {
  //     result1 = "Ruby";
  //   } else if (num1 >= num3 || num1 === num3) {
  //     result1 = "C#";
  //   }

  // let result2;
  //   if (num2 > 10 || num3 > 10 || num4 > 10) {
  //       result2 = "Please enter a number between 1 and 10";
  //   } else if (isNaN(num2) || isNaN(num3) || isNaN(num4)) {
  //       result2 = "Please enter a number between 1 and 10";
  //   } else if (num2 <= num3 || num2 === num3) {
  //     result2 = "JavaScript";
  //   } else if (num2 >= num4 || num2 === num4) {
  //     result2 = "Python";
  //   } 

  // let result3;
  //   if (num3 > 10 || num4 > 10 || num5 > 10) {
  //       result3 = "Please enter a number between 1 and 10";
  //   } else if (isNaN(num3) || isNaN(num4) || isNaN(num5)) {
  //       result3 = "Please enter a number between 1 and 10";
  //   } else if (num3 <= num4 || num3 === num4) {
  //     result3 = "Swift";
  //   } else if (num3 >= num5 || num3 === num5) {
  //     result3 = "Rust";
  //   } 

    if (num1 < 5 && num2 < 5){
      result = "Javascript"
      document.getElementById("output1").innerText = result;
    } else if (num3 < 5 && num4 < 5) {
      result = "Python"
      document.getElementById("output1").innerText = result;
    } else if (num4 < 5 && num5 < 5) {
      result = "Swift"
      document.getElementById("output1").innerText = result;
    }


  document.getElementById("output1").innerText = result;
  // document.getElementById("output2").innerText = result2;
  // document.getElementById("output3").innerText = result3; 
}
  
window.addEventListener("load", function() {
  const form = document.getElementById("questions")
  form.addEventListener("submit", handleSelector);
  const resetBtn = document.getElementById("reset");
    
  form.addEventListener("submit", function() {
    resetBtn.removeAttribute("class");
    });

  resetBtn.addEventListener("click", function() {
    document.querySelector("input#input1").value = null;
    document.querySelector("input#input2").value = null;
    document.querySelector("input#input3").value = null;
    document.querySelector("input#input4").value = null;
    document.querySelector("input#input5").value = null;
    document.getElementById("output1").innerText = null;
    // document.getElementById("output2").innerText = null;
    // document.getElementById("output3").innerText = null;
    });
});