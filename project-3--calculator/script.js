let display = document.getElementById('display');
let current = '';
let operator = '';
let resetNext = false;

function appendNumber(num){
	if(resetNext){
		current = '';
		resetNext = false;
	}
	if(num === '.' && current.includes('.')) return;
	current += num;
	display.textContent = current;
}

