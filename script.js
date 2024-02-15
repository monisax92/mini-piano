// play functionality
const pianoKeys = document.querySelectorAll('.piano-keys .key');

const allKeys = [];
//default audio
let audio = new Audio('tunes/a.wav');

const playTune = tune => {
	audio.src = `tunes/${tune}.wav`;
	audio.play();

	const clickedKey = document.querySelector(`[data-note="${tune}"]`);
	clickedKey.classList.add('active');

	//remove active after a while
	setTimeout(() => {
		clickedKey.classList.remove('active');
	}, 200);
};

pianoKeys.forEach(key => {
	key.addEventListener('click', () => {
		playTune(key.dataset.note);
	});
	allKeys.push(key.dataset.note);
});

window.addEventListener('keydown', e => {
	if (allKeys.includes(e.key)) playTune(e.key);
});

// volume adustment

const volumeSlider = document.querySelector('.volume-slider input');

const handleVolumeAdjust = e => {
	audio.volume = e.target.value;
};

volumeSlider.addEventListener('input', handleVolumeAdjust);

// show/hide keys

const keysSwitch = document.querySelector('.keys-switch input');
const showHideText = document.querySelector('.show-hide-text');

const showHideKeys = () => {
	pianoKeys.forEach(key => {
		key.classList.toggle('hide');
		if (showHideText.textContent === 'Show') {
			showHideText.textContent = 'Hide';
		} else {
			showHideText.textContent = 'Show';
		}
	});
};

keysSwitch.addEventListener('click', showHideKeys);
