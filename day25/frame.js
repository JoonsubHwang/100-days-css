let pin = document.querySelector('.pin');
let card = document.querySelector('.card');

pin.addEventListener('click', () => {
	pin.classList.remove('active');
	card.classList.add('active');
});

card.addEventListener('click', () => {
	pin.classList.add('active');
	card.classList.remove('active');
});
