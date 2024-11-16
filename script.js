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
