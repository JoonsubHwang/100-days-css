let ring = document.querySelector('.ring');
let circle = document.querySelector('.circle');
let letter = document.querySelector('.letter');
let plane = document.querySelector('.plane');
let button = document.querySelector('.button');

let components = [ ring, circle, letter, button ];

button.addEventListener('click', () => {
	
	for (let comp of components)
		comp.classList.add('send');
	
	setTimeout(() => {
		plane.classList.add('send');
	}, 1500);
	
	setTimeout(() => {
		for (let comp of components)
			comp.classList.remove('send');
		plane.classList.remove('send');
	}, 4000);
	
});
