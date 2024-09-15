function openNav() {
  document.getElementById("side_nav").style.width = "250px";
}

function closeNav() {
  document.getElementById("side_nav").style.width = "0";
}

const form = document.querySelector("#food_input");
const input = document.querySelector("input");
const ul = document.querySelector("#food_items");

function returnItem() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = input.value;

  li.appendChild(span);

  return li;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const li = returnItem();

  if (input.value === "") {
    alert("Enter a food!");
  } else {
    document.getElementById("food").value = "";
    ul.appendChild(li);
  }
});
