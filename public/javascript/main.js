// create variable for calculate bmi
let genderSelected = "";

// function bmi formula
const bmiFormula = (weight, height) => {
  return weight / Math.pow(height / 100, 2);
};

// getstarted href
function getStarted() {
  // go to section 2
  document
    .getElementById("bmi-calculation")
    .scrollIntoView({ behavior: "smooth" });
}

// toggle navbar
function toggleNavbar() {
  const menu = document.querySelector(".navbar-menu");
  menu.classList.toggle("active");
}

function menuCLick(listItem) {
  const menu = document.querySelector(".navbar-menu");
  menu.classList.remove("active");
  // go to href in a tag child
  const link = listItem.querySelector("a");

  // Dapatkan nilai href dari elemen <a>
  const href = link.getAttribute("href");
  // Gulir ke elemen tersebut
  document.getElementById(href).scrollIntoView({ behavior: "smooth" });
}

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
  if (errors.length > 0) {
    // sweet alert
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${errors.join(", ")} cannot be empty!`,
    });
  } else {
    calculateBmi(weight, height);
    // detail bmi hidden false
    document.getElementById("btn-detail").hidden = false;
    // hide detail bmi
    document.getElementById("detail-container").style.display = "none";
    document.getElementById("detail-container").hidden = true;
  }
}

// function show detail bmi
function showDetail() {
  const value = document.getElementById("bmi-category").innerHTML;
  let textDetail = [];
  if (value === "Underweight") {
    textDetail = [
      {
        subtitle: "Activity Suggestions",
        content: `
          <ul>
            <li>Focus on strength training exercises like weightlifting to build muscle mass.</li>
            <li>Avoid excessive cardiovascular activities that might hinder weight gain.</li>
          </ul>
        `,
      },
      {
        subtitle: "Dietary Recommendations",
        content: `
          <ul>
            <li>Consume high-calorie, nutrient-dense foods such as nuts, avocados, and lean meats.</li>
            <li>Increase protein intake to support muscle growth.</li>
            <li>Eat more frequently, including healthy snacks between main meals.</li>
          </ul>
        `,
      },
      {
        subtitle: "Lifestyle Tips",
        content: `
          <ul>
            <li>Ensure adequate rest and sleep to support recovery and muscle growth.</li>
            <li>Avoid stress, as it can affect appetite and metabolism.</li>
          </ul>
        `,
      },
    ];
  }
  if (value === "Normal") {
    textDetail = [
      {
        subtitle: "Activity Suggestions",
        content: `
          <ul>
            <li>Combine cardiovascular and strength training exercises to maintain fitness.</li>
            <li>Stay active daily with activities like walking, jogging, or any other preferred exercise.</li>
          </ul>
        `,
      },
      {
        subtitle: "Dietary Recommendations",
        content: `
          <ul>
            <li>Maintain a balanced diet that includes vegetables, fruits, proteins, and whole grains.</li>
            <li>Limit the intake of sugar and saturated fats to manage your weight.</li>
          </ul>
        `,
      },
      {
        subtitle: "Lifestyle Tips",
        content: `
          <ul>
            <li>Continue following a regular sleep pattern.</li>
            <li>Avoid a sedentary lifestyle and try to move more throughout the day.</li>
          </ul>
        `,
      },
    ];
  }
  if (value === "Overweight") {
    textDetail = [
      {
        subtitle: "Activity Suggestions",
        content: `
          <ul>
            <li>Increase physical activity with cardiovascular exercises like cycling, swimming, or running.</li>
            <li>Start strength training to boost metabolism and burn more calories.</li>
          </ul>
        `,
      },
      {
        subtitle: "Dietary Recommendations",
        content: `
          <ul>
            <li>Reduce calorie intake by avoiding high-fat and sugary foods.</li>
            <li>Choose high-fiber foods such as vegetables, fruits, and whole grains to stay fuller for longer.</li>
            <li>Watch portion sizes and avoid overeating.</li>
          </ul>
        `,
      },
      {
        subtitle: "Lifestyle Tips",
        content: `
          <ul>
            <li>Try to lose weight gradually by setting realistic goals.</li>
            <li>Manage stress and maintain a healthy sleep pattern to support your weight loss journey.</li>
          </ul>
        `,
      },
    ];
  }
  if (value === "Obese") {
    textDetail = [
      {
        subtitle: "Activity Suggestions",
        content: `
          <ul>
            <li>Start with low-impact physical activities like walking, swimming, or yoga.</li>
            <li>Gradually increase the intensity and duration of your workouts as your fitness improves.</li>
          </ul>
        `,
      },
      {
        subtitle: "Dietary Recommendations",
        content: `
          <ul>
            <li>Create a low-calorie, nutrient-dense meal plan that includes plenty of vegetables, fruits, and lean proteins.</li>
            <li>Avoid processed foods, fast foods, and sugary drinks.</li>
            <li>Consider consulting a nutritionist to plan a diet that suits your needs.</li>
          </ul>
        `,
      },
      {
        subtitle: "Lifestyle Tips",
        content: `
          <ul>
            <li>Focus on long-term lifestyle changes rather than short-term diets.</li>
            <li>Support from family, friends, or support groups can help maintain motivation.</li>
            <li>Pay attention to mental health and manage stress effectively.</li>
          </ul>
        `,
      },
    ];
  }

  document.getElementById("value-bmi").innerHTML = value;

  const bmiDetailsContainer = document.getElementById("bmi-details");
  bmiDetailsContainer.innerHTML = "";

  // Loop through each detail object and append to the container
  textDetail.forEach((detail) => {
    const subtitleElement = document.createElement("h2");
    subtitleElement.textContent = detail.subtitle;

    const textElement = document.createElement("div");
    textElement.innerHTML = detail.content;

    bmiDetailsContainer.appendChild(subtitleElement);
    bmiDetailsContainer.appendChild(textElement);
  });

  // Show the detail container
  const detailContainer = document.getElementById("detail-container");
  detailContainer.style.display = "block";
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
  document.getElementById("bmi-category").className = bmiClass;
  return bmiStatus;
}

// function reset
function reset() {
  genderSelected = "";
  document.getElementById("weight-input").value = 0;
  document.getElementById("weight-slider").value = 0;
  document.getElementById("height-input").value = 0;
  document.getElementById("height-slider").value = 0;
  document.getElementById("convert-m").innerHTML = 0;
  document.getElementById("bmi-value").innerHTML = 0;
  document.getElementById("bmi-category").innerHTML = "Not Calculated";
  document.getElementById("bmi-category").className = "";
  document.getElementById("btn-detail").hidden = true;
  document.getElementById("detail-container").style.display = "none";
  genderImage("");
}
