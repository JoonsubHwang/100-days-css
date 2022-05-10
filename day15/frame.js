let dropArea = document.querySelector('.drop-area');
let message = document.querySelector('.drop-area > p');
let fileInput = document.querySelector('.drop-area > input');
let statusIcon = document.querySelector('.drop-area > img');
let uploadBtn = document.querySelector('.upload-btn');
let fileName;

['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, event => {
		event.preventDefault();
		event.stopPropagation();
		dropArea.classList.add('dragged');
	});
});

['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, event => {
		event.preventDefault();
		event.stopPropagation();
		dropArea.classList.add('dragged');
	});
});

fileInput.addEventListener('change', event => {
	fileName = fileInput.files[0].name;
	handleFileInput();
});

dropArea.addEventListener('drop', event => {
	fileName = event.dataTransfer.files[0].name;
	handleFileInput();
});

function handleFileInput() {
	message.innerText = fileName;
	message.classList.add('filled');
	statusIcon.hidden = true;
	uploadBtn.classList.add('active');
}

uploadBtn.addEventListener('click', event => {
		event.preventDefault();
		event.stopPropagation();
		if (uploadBtn.classList.contains('active')) {
			document.querySelector('.gauge').classList.add('fill');
			statusIcon.src = 'https://100dayscss.com/codepen/checkmark.svg';
			setTimeout(() => {
				statusIcon.classList.add('uploaded');
				statusIcon.hidden = false;
			}, 1000);
		}
});
