let display = document.getElementById("display");
let displayExtra = document.getElementById("display-extra");
let current = "";
let operator = "";
let resetNext = false;
function appendNumber(num) {
  if (resetNext) {
    current = "";
    resetNext = false;
    displayExtra.style.visibility = "hidden";
  }
  if (num === "." && current.includes(".")) return;
  current += num;
  display.textContent = current;
}
function appendOperator(op) {
  if (current === "" && op !== "-") return;
	if(current === "" && op === "-"){
		current = "-";
		display.textContent = current;
		return;
	}
  if (operator !== "") calculate();
  operator = op;
  current += " " + op + " ";
  display.textContent = current;
}
function clearDisplay() {
  current = "";
  operator = "";
  display.textContent = "0";
  displayExtra.style.visibility = "hidden";
}
function deleteOne() {
	if (resetNext) return;
  if (current.length <= 1) {
    current = "";
    display.textContent = "0";
    return;
  }
  current = current.slice(0, -1);
  display.textContent = current;
}
function calculate() {
  try {
    let expression = current;
    current = eval(current).toString();
    display.textContent = current;
    displayExtra.textContent = expression + " =";
    displayExtra.style.visibility = "visible";
    operator = "";
    resetNext = true;
  } catch {
    display.textContent = "Error,try again!";
    current = "";
    operator = "";
  }
}
function toggleSign() {
  if (!current) return;
  if (current.startsWith("-")) {
    current = current.slice(1);
  } else {
    current = "-" + current;
  }
  display.textContent = current;
}
function percent() {
  if (current === "") return;
  current = (parseFloat(current) / 100).toString();
  display.textContent = current;
}
