const verifyBtn = document.getElementById('check-btn');
const resetBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div');


verifyBtn.addEventListener('click', () => {
	const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
	const inputNumber = document.getElementById('user-input').value;

	if (inputNumber === '') {
		result.innerHTML = `
		<p>Please provide a phone number</p>
		`;
		result.style.color = 'red';
	} else if (regex.test(inputNumber) === true) {
		result.innerHTML = `
		<p>Valid US number: ${inputNumber}</p>
		`;
		result.style.color = 'green';
	} else if (regex.test(inputNumber) === false) {
		result.innerHTML = `
		<p>Invalid US number: ${inputNumber}</p>
		`;
		result.style.color = 'red';
	}
});

resetBtn.addEventListener('click', () => {
	result.innerHTML = '';
	document.getElementById('user-input').value = '';
});