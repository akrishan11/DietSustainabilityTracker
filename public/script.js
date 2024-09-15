function openNav() {
  document.getElementById("side_nav").style.width = "250px";
}

function closeNav() {
  document.getElementById("side_nav").style.width = "0";
}

const form = document.querySelector("#food_input");

const input = document.querySelector("#food");

const input2 = document.querySelector("#calories");

const input3 = document.querySelector("select");

const input4 = document.querySelector("#quantity");

const ul = document.querySelector("#food_items");

function returnItem() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = input.value + " -- ";
  const span2 = document.createElement("span");
  span2.textContent = input2.value + " calories, ";
  const span3 = document.createElement("span");
  span3.textContent = input3.value;
  const span4 = document.createElement("span");
  span4.textContent = input4.value;

  li.appendChild(span);
  li.appendChild(span2);
  li.appendChild(span4);
  li.appendChild(span3);

  return li;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const li = returnItem();

  if (input.value === "" || input2.value === "" || input3.value === "" || input4.value === "") {
    alert("Please fill out all areas!");
  } else {
    document.getElementById("food").value = "";
    document.getElementById("calories").value = "";
    document.getElementById("units").value = "";
    document.getElementById("quantity").value = "";
    ul.appendChild(li);
  }
});

var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});

var xValues2 = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues2 = [55, 49, 44, 24, 15];
var barColors2 = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart2", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});