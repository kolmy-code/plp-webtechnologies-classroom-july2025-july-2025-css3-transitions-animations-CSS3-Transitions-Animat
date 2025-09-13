// Part 2: Functions with parameters & return values
function addNumbers(a, b) {
  return a + b;
}

function doubleValue(num) {
  return num * 2;
}

function logScopeExample() {
  let localVar = "I’m local to this function!";
  console.log(localVar);
}

console.log("Sum:", addNumbers(5, 10)); // 15
console.log("Double:", doubleValue(8)); // 16
logScopeExample();

// Part 3: Triggering animations with JS
const animateBox = document.getElementById("animateBox");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
  animateBox.classList.toggle("animate"); // add/remove animation
});

// Modal example
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});
