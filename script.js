let temperature =
  document.getElementById("temp");

let inputScale =
  document.getElementById("inputscale");

let outputScale =
  document.getElementById("outputscale");

let btn =
  document.getElementById("convert");

let result =
  document.getElementById("result");

btn.addEventListener("click", function() {
  let temp = temperature.value;
  temp = Number(temp);
  
  let inscale = inputScale.value;
  let outscale = outputScale.value;
  
  if (inscale === "" || outscale === "" || isNaN(temp)) {
    result.textContent = "please, Enter a valid temperature value or select a scale!";
    return;
  }
  
  let celsius;
  if (inscale === "celsius") {
  celsius = temp;
  }
  else if (inscale === "fahrenheit") {
  celsius = ((temp - 32) / 180) * 100;
  }
  else if (inscale === "kelvin") {
  celsius = temp - 273.15;
  }
  else if (inscale === "rankine") {
  celsius = ((temp - 492) / 180) * 100
  }
  else if (inscale === "romer") {
  celsius = (temp / 80) * 100
  }

  let finaltemp;
  if(outscale === "celsius") {
  finaltemp = celsius;
  }
  else if (outscale === "fahrenheit") {
  finaltemp = ((celsius / 100) * 180) + 32;
  }
  else if (outscale === "kelvin") {
  finaltemp = celsius + 273.15;
  }
  else if (outscale === "rankine") {
  finaltemp = ((celsius / 100) * 180) + 492;
  }
  else if (outscale === "romer") {
  finaltemp = (celsius / 100) * 80
  }
  result.textContent = finaltemp.toFixed(2);
});
