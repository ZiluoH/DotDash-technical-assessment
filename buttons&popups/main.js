const cancelBtn = document.getElementById('button-cancel');
const acceptBtn = document.getElementById('button-accept');
const popupThank = document.getElementById('popup-top');
const popupWelcome = document.getElementById('popup-bottom');
const container = document.getElementById('container');

cancelBtn.addEventListener('click', function () {
	popupWelcome.classList.add('show');
	timer(popupWelcome);
});

acceptBtn.addEventListener('click', function () {
	popupThank.classList.add('show');
	timer(popupThank);
});

container.addEventListener('click', function(e) {
	let excludeTargets = [
		'button-cancel',
		'button-accept',
		'popup-top',
		'popup-bottom',
	];

    // if target is not target button nor popups, remove it
	if (!excludeTargets.includes(e.target.id)) {
		popupThank.classList.remove('show');
        popupWelcome.classList.remove('show');
	}
});

// popup remove show class after 8s 
const timer = (element) => {
	setTimeout(() => {
		element.classList.remove('show');
	}, 8000);
};
