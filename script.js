const homeButton = document.getElementById('home');
const personalButton = document.getElementById('personal');
const knowledgeButton = document.getElementById('knowledge');
const studiesButton = document.getElementById('studies');

const homeScreen = document.getElementById('home-screen');
const personalScreen = document.getElementById('personal-screen');
const knowledgeScreen = document.getElementById('knowledge-screen');
const studiesScreen = document.getElementById('studies-screen');

const littleBarText = document.getElementById('little-bar');

const buttons = [homeButton, personalButton, knowledgeButton, studiesButton];

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

function enableDisplay(event) {

	const button = event.target;
	var previousButton;

	for (let button in buttons) {
		if (buttons[button].classList.contains('selected')) {
			previousButton = buttons[button];
		};
	};
	
	if (button.id == previousButton.id) {
		previousButton.enabled = false;

	} else if (button.id == 'personal') {
		previousButton.classList.remove('selected');
		personalScreen.classList.remove('non-visible');
		personalButton.classList.add('selected');
		littleBarText.innerHTML = '<p> C: > Users > dsebastiansr > desktop > portfolio > personal.html </p>'
		disableDisplay(previousButton)
		
	} else if (button.id == 'knowledge') {
		previousButton.classList.remove('selected');
		knowledgeScreen.classList.remove('non-visible');
		knowledgeButton.classList.add('selected');
		littleBarText.innerHTML = '<p> C: > Users > dsebastiansr > desktop > portfolio > knowledge.html </p>'
		disableDisplay(previousButton);

	} else if (button.id == 'studies') {
		previousButton.classList.remove('selected');
		studiesScreen.classList.remove('non-visible');
		studiesButton.classList.add('selected');
		littleBarText.innerHTML = '<p> C: > Users > dsebastiansr > desktop > portfolio > studies.html </p>'
		disableDisplay(previousButton);


	} else if (button.id == 'home') {
		previousButton.classList.remove('selected');
		homeScreen.classList.remove('non-visible');
		homeButton.classList.add('selected');
		littleBarText.innerHTML = '<p> C: > Users > dsebastiansr > desktop > portfolio > home.html </p>'
		disableDisplay(previousButton);

	};
};

function disableDisplay(button) {
	if (button.id == 'personal') {
		personalScreen.classList.add('non-visible');

	} else if (button.id == 'knowledge') {
		knowledgeScreen.classList.add('non-visible');
		
	} else if (button.id == 'studies') {
		studiesScreen.classList.add('non-visible');

	} else if (button.id == 'home') {
		homeScreen.classList.add('non-visible');
	};
};