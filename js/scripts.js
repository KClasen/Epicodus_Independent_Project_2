function handleSelector(event) {
  event.preventDefault();
  const num1 = parseInt(document.getElementById("input1").value);
  const num2 = parseInt(document.getElementById("input2").value);
  const num3 = parseInt(document.getElementById("input3").value);
  const num4 = parseInt(document.getElementById("input4").value);
  const num5 = parseInt(document.getElementById("input5").value);
  let total = num1 + num2+ num3 + num4 + num5

  let result; 
    if (total <= 6){
      result = "Javascript"
    } else if (total > 6 && total <= 15) {
      result = "Python"
    } else if (total > 15 && total <= 25) {
      result = "Swift"
    }

  document.querySelector("div#end").removeAttribute("class");
  document.getElementById("output").innerText = result;
}
  
window.addEventListener("load", function() {
  const form = document.getElementById("select-form");
  form.addEventListener("submit", handleSelector);
  const resetBtn = document.getElementById("reset");
  let end = document.getElementById("end");
    
  form.addEventListener("submit", function() {
    resetBtn.removeAttribute("class");
    });

  resetBtn.addEventListener("click", function() {
    end.setAttribute("class", "hidden");
    document.getElementById("select-form").reset();
    document.getElementById("input#input1").reset();
    });
});