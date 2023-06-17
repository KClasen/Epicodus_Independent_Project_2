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
 // function handleTriangle(event) {
  //  event.preventDefault();
  //  const num1 = parseInt(document.querySelector("input#input1").value);
 //   const num2 = parseInt(document.querySelector("input#input2").value);
  //  const num3 = parseInt(document.querySelector("input#input2").value);
    //const operator = document.querySelector("input[name='operator']:checked").value;
  
  //  let result;
   // if (num1 === num2 && num1 === num3) {
  //    result = "Equilateral";
  //  } else if (num1 === num2 || num1 === num3 || num2 === num3) {
  //    result = "Isosceles";
  //  } else if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
  //    result = "Scalene";
  //  } else if (num1 + num2 <= num3 || num2 + num3 <= num1 || num3 + num1 <= num2) {
    //  result = "NOT a triangle";
  //  }
  
   // document.getElementById("output").innerText = result;
 //}
  
  //window.addEventListener("load", function() {
   // const form = document.getElementById("triangle")
   // form.addEventListener("submit", handleTriangle);
  //});


   // User Interface Logic
   function handleSelector(event) {
    event.preventDefault();
    const num1 = parseInt(document.querySelector("input#input1").value);
    const num2 = parseInt(document.querySelector("input#input2").value);
    const num3 = parseInt(document.querySelector("input#input3").value);
    const num4 = parseInt(document.querySelector("input#input4").value);
    const num5 = parseInt(document.querySelector("input#input5").value);
    //const operator = document.querySelector("input[name='operator']:checked").value;

    // let result;
    // if (typeof num1 !== Number) {
    //     result = "Please enter a number";
    // }; 

    // if (num1 >= 11) {
    //     result = "Please enter a number between 1 and 10";
    // };
  
    let result1;
    if (typeof(num1) !== "number" || typeof(num2) !== "number" || typeof(num3) !== "number") {
        result1 = "Please enter a number between 1 and 10";
    } else if (num1 >= 11 || num2 >= 11 || num3 >= 11) {
        result1 = "Please enter a number between 1 and 10"
    } else if (num1 <= num2) {
      result1 = "Ruby";
    } else if (num1 >= num3) {
      result1 = "C#";
    }

    let result2;
    if (typeof(num2) !== "number" || typeof(num3) !== "number" || typeof(num4) !== "number") {
        result1 = "Please enter a number between 1 and 10";
    } else if (num1 >= 11 || num2 >= 11 || num3 >= 11) {
        result1 = "Please enter a number between 1 and 10"
    } else if (num2 <= num3) {
        result2 = "JavaScript";
    } else if (num2 >= num4) {
        result2 = "Python";
    } 

    let result3;
    if (typeof(num1) !== "number" || typeof(num2) !== "number" || typeof(num3) !== "number") {
        result1 = "Please enter a number between 1 and 10";
    } else if (num1 >= 11 || num2 >= 11 || num3 >= 11) {
        result1 = "Please enter a number between 1 and 10"
    } else if (num3 <= num4) {
        result3 = "Rust";
    } else if (num3 >= num5) {
        result3 = "Swift";
    } 

    // document.getElementById("output").innerText = result;
    document.getElementById("output1").innerText = result1;
    document.getElementById("output2").innerText = result2;
    document.getElementById("output3").innerText = result3;
  }
  
  window.addEventListener("load", function() {
    const form = document.getElementById("questions")
    const resetBtn = document.getElementById("reset");
    form.addEventListener("submit", handleSelector);
    form.addEventListener("submit", function() {
        resetBtn.removeAttribute("class");

  });
  
    
      resetBtn.addEventListener("click", function() {
            questions.setAttribute("class", "hidden");
        document.querySelector("input#input1").value = null;
        document.querySelector("input#input2").value = null;
        document.querySelector("input#input3").value = null;
        document.querySelector("input#input4").value = null;
        document.querySelector("input#input5").value = null;
      });

    });



//   form.addEventListener("submit", function() {
//     resetBtn.removeAttribute("class");
//   }); 

//   resetBtn.addEventListener("click", function() {
//         questions.setAttribute("class", "hidden");
//     document.querySelector("input#input1").value = null;
//     document.querySelector("input#input2").value = null;
//     document.querySelector("input#input3").value = null;
//     document.querySelector("input#input4").value = null;
//     document.querySelector("input#input5").value = null;
//   })
