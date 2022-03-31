let menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
	menuIcon.classList.toggle('active');
	menuIcon.classList.remove('initial');
});
