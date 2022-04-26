let words = document.querySelectorAll('span.word');

words.forEach(word => {
	word.addEventListener('mouseenter', () => {
		let tooltip = document.querySelector('.tooltip.' + word.innerHTML);
		tooltip.style.transform= 'none';
	});
	word.addEventListener('mouseleave', () => {
		let tooltip = document.querySelector('.tooltip.' + word.innerHTML);
		tooltip.style.transform= 'translate(-90px, 65px) scale(0)';
	})
})
