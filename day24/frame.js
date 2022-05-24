let button = document.querySelector('.button');
let svg = document.querySelector('svg');

button.addEventListener('click', () => {
	button.classList.add('processing');
	svg.classList.add('processing');
	setTimeout(() => {
		button.classList.remove('processing');
		svg.classList.remove('processing');
	}, 3000);
});
