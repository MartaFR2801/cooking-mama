const game = new Game('canvas-test');
const startBtn = document.getElementById('start-btn');
const startImg = document.querySelector('.start-img');
const canvasPage = document.querySelector('.canvas');
const introPage = document.querySelector('.pepe-intro');
const pepeTaliking = document.querySelector('.pepe-text');
const instrucciones = document.querySelector('.instrucciones');

let step = 0;

document.addEventListener('click', () => {
	if (step === 0) {
		introPage.classList.add('hidden');
		pepeTaliking.classList.remove('hidden');
		step += 1;
	} else if (step === 1) {
		pepeTaliking.classList.add('hidden');
		instrucciones.classList.remove('hidden');
		step += 1;
	} else if (step === 2) {
		step += 1;
	}
})

startBtn.addEventListener('click', () => {
	instrucciones.remove();
	canvasPage.classList.remove('hidden');
	pepeTaliking.remove();
	game.start();
});
// tryAgaintBtn.addEventListener('click', () => {
// 	game.tryAgain();
// });

document.addEventListener('keydown', function(event) {
	game.chef.onKeyEvent(event);
});

document.addEventListener('keyup', function(event) {
	game.chef.onKeyEvent(event);
});
 
