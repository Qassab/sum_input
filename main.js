const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
let output = document.querySelector("#output");
const btn = document.querySelector(".btn");


function sum(e) {
   e.preventDefault();
  let x = parseInt(num1.value);
  let y = parseInt(num2.value);
  output.value = x + y;
 if (!x  || !y && isNaN(x)||isNaN(y)) {
    output.value = "Error";

  }
  

}

btn.addEventListener("click", sum);
