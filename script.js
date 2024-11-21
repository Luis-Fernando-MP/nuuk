const texts = [
	'NUUK',
	'LIMA',
	'PERÚ',
	'CAFE',
	'POSTRE',
	'FOOD',
	'FRÍO',
	'ICE',
	'SABOR',
	'DULCE',
	'VERANO',
	'COOL',
	'FRESH',
	'RICO'
]

lucide.createIcons()
const titleElement = document.querySelector('h1.tit')
let textIndex = 0
let charIndex = 0

function type() {
	if (charIndex < texts[textIndex].length) {
		titleElement.textContent += texts[textIndex].charAt(charIndex)
		charIndex++
		return setTimeout(type, 100)
	}
	setTimeout(erase, 1000)
}

function erase() {
	if (charIndex > 0) {
		titleElement.textContent = titleElement.textContent.slice(0, -1)
		charIndex--
		return setTimeout(erase, 100)
	}
	textIndex = (textIndex + 1) % texts.length
	setTimeout(type, 500)
}

type()

document.querySelector('button#form-submit')?.addEventListener('click', () => {
	alert('En breve te contactaremos')
	confetti({
		angle: randomInRange(55, 125),
		spread: randomInRange(50, 70),
		particleCount: randomInRange(50, 100),
		origin: { y: 0.6 }
	})
})
