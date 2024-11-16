lucide.createIcons()

const conf = document.querySelectorAll('#pr-conf')
conf.forEach((e) =>
	e.addEventListener('click', () => {
		confetti({
			angle: randomInRange(55, 125),
			spread: randomInRange(50, 70),
			particleCount: randomInRange(50, 100),
			origin: { y: 0.6 }
		})
	})
)

function randomInRange(min, max) {
	return Math.random() * (max - min) + min
}
