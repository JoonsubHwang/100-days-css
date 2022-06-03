let input = document.querySelector('.searchbar > input');
let suggestions = document.querySelector('.suggestions');

input.addEventListener('input', () => {
	if (input.value.length === 0)
		suggestions.classList.add('hidden')
	else {
		let query = `<span style='font-weight:700'>${input.value}</span>`;
		suggestions.classList.remove('hidden')
		suggestions.childNodes[1].innerHTML = `how to ${query}`;
		suggestions.childNodes[3].innerHTML = `should i ${query}`;
		suggestions.childNodes[5].innerHTML = `${query} tips`;
		if (input.value.length < 6) {
			suggestions.childNodes[7].classList.remove('hidden')
			suggestions.childNodes[9].classList.remove('hidden')
			suggestions.childNodes[11].classList.remove('hidden')
			suggestions.childNodes[13].classList.remove('hidden')
			suggestions.childNodes[15].classList.remove('hidden')
			suggestions.childNodes[7].innerHTML = `is ${query} good`;
			suggestions.childNodes[9].innerHTML = `what is ${query}`;
			suggestions.childNodes[11].innerHTML = `where to find ${query}`;
			suggestions.childNodes[13].innerHTML = `${query} price`;
			suggestions.childNodes[15].innerHTML = `${query} places`;
		}
		else {
			suggestions.childNodes[7].classList.add('hidden')
			suggestions.childNodes[9].classList.add('hidden')
			suggestions.childNodes[11].classList.add('hidden')
			suggestions.childNodes[13].classList.add('hidden')
			suggestions.childNodes[15].classList.add('hidden')
		}
	}
})
