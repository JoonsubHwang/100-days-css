document.querySelectorAll('.preview')
	.forEach(preview => {
		preview.addEventListener('click', event => {
			event.currentTarget.classList.toggle('more');
		});
});
