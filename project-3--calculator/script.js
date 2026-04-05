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

function appendOperator(op){
	if(current === '') return;
	if(operator !== '') calculate();
	operator = op;
	current += ' ' + op + ' ';
	display.textContent = current
		.replace('*','×')
		.replace('/','÷');
}

function calculate(){
	try {
		current = eval(current).toString();
		display.textContent = current;
		operator = '';
		resetNext = true;
	} catch {
		display.textContent = 'error';
		current = '';
		operator = '';
	}
}

function clearDisplay(){
	current = '';
	operator = '';
	display.textContent = '0';
}

function toggleSign(){
	if(!current) return;
	if(current.startsWith('-')){
		current = current.slice(1);
	} else{
		current = '-' + current;
	}
	display.textContent = current;
}

function percent(){
	if(current === '') return;
	current = (parseFloat(current)/100).toString();
	display.textContent = current;
}