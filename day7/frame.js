let menuIcon = document.querySelector('.menu-icon');
let notification = document.querySelector('.notification');
let menus = document.querySelector('.menus');

menuIcon.addEventListener('click', () => {
		notification.classList.toggle('open');
		menus.classList.toggle('open');
});

let searchIcon = document.querySelector('.search-icon');
let searchbar = document.querySelector('.searchbar');
let title = document.querySelector('.header > p');


searchIcon.addEventListener('click', () => {
		searchbar.classList.toggle('visible');
		title.classList.toggle('invisible');
});
