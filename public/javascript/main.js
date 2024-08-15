// create variable for calculate bmi
let genderSelected = "";

// function bmi formula
const bmiFormula = (weight, height) => {
  return weight / Math.pow(height / 100, 2);
};

// function select gender
function selectGender(gender) {
  document.getElementById(gender).checked = true;
  genderSelected = gender;
  genderImage(gender);
}

// function gender-image show
function genderImage(gender) {
  const genderImage = document.getElementById("gender-image");
  if (gender == "") {
    // hidden image
    genderImage.src = "";
    genderImage.alt = "gender";
    genderImage.hidden = true;
  }
  if (gender == "male") {
    genderImage.src = "./public/image/men.png";
    genderImage.alt = "men";
    genderImage.hidden = false;
  }
  if (gender == "female") {
    genderImage.src = "./public/image/women.png";
    genderImage.alt = "men";
    genderImage.hidden = false;
  }
}

// function on input weight slider
function updateWeightInput(value) {
  document.getElementById("weight-input").value = value;
}

// function on input numer weight
function updateWeightSlider(value) {
  value = Math.max(0, value);
  document.getElementById("weight-slider").value = value;
}

// function convert height to meter
function convertHeightToMeter(value) {
  const height = value / 100;
  height % 1 === 0 ? height.toFixed(0) : height.toFixed(2);
  document.getElementById("convert-m").innerHTML = height;
}

// function on input height slider
function updateHeightInput(value) {
  document.getElementById("height-input").value = value;
  convertHeightToMeter(value);
}

// function on input numer height
function updateHeightSlider(value) {
  value = Math.max(0, value);
  document.getElementById("height-slider").value = value;
  convertHeightToMeter(value);
}

// validate input
function validateInput() {
  let errors = [];
  const weight = document.getElementById("weight-input").value;
  const height = document.getElementById("height-input").value;
  if (genderSelected === "") {
    errors.push("Gender");
  }
  if (weight == 0) {
    errors.push("Weight");
  }
  if (height == 0) {
    errors.push("Height");
  }
  console.log(errors);
  if (errors.length > 0) {
    // sweet alert
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${errors.join(", ")} cannot be empty!`,
    });
  } else {
    calculateBmi(weight, height);
  }
}

// function calculate bmi
function calculateBmi(weight, height) {
  const bmi = bmiFormula(weight, height);
  let bmiStatus = "";
  let bmiClass = "";
  if (bmi < 18.5) {
    bmiStatus = "Underweight";
    bmiClass = "text-warning";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiStatus = "Normal";
    bmiClass = "text-success";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiStatus = "Overweight";
    bmiClass = "text-warning";
  } else {
    bmiStatus = "Obese";
    bmiClass = "text-danger";
  }
  document.getElementById("bmi-value").innerHTML = bmi.toFixed(2);
  document.getElementById("bmi-category").innerHTML = bmiStatus;
  //   document.getElementById("bmi-status").className = bmiClass;
}

// function reset
function reset() {
  genderSelected = "";
  document.getElementById("weight-input").value = "";
  document.getElementById("weight-slider").value = 0;
  document.getElementById("height-input").value = "";
  document.getElementById("height-slider").value = 0;
  document.getElementById("convert-m").innerHTML = 0;
  document.getElementById("bmi-value").innerHTML = 0;
  document.getElementById("bmi-category").innerHTML = "";
  //   document.getElementById("bmi-status").className = "";
}
