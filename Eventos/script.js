lucide.createIcons()

function openEmail() {
	const emailLink = document.createElement('a')
	emailLink.href =
		'mailto:luigfmp@example.com?subject=Contacto&body=Hola, estoy interesado en más información.'
	emailLink.style.display = 'none'
	document.body.appendChild(emailLink)
	emailLink.click()
	document.body.removeChild(emailLink)
	cnftt()
}

function showLater() {
	const html = `<div class="modal-box fade" id="modal-box">
		<h3>GENIAL!! 🍀</h3>
		<img src="../assets/eventos/contacto.webp" width="100" alt="imagen de contacto" />
		<h4>Pronto nos pondremos en contacto contigo</h4>
	</div>`
	openModal(html)
	openEmail()
}

function openEvent(type) {
	if (type === 'corporativo') showCorpEvent()
	if (type === 'boda') showWeddingEvent()
	if (type === 'cumple') showBirthdayEvent()
}

function showCorpEvent() {
	const html = `
		<div class="modal-box event corporativo fade" id="modal-box">
			<img src="../assets/eventos/corporativo.png" alt="Evento corporativo" />
			<h2>¡Eventos corporativos únicos! 💼</h2>
			<p>
				<b>Refresca tu reunión con estilo.</b><br>
				Disfruta de <b>helados premium</b> para sorprender a tus colaboradores y socios.
			</p>
			<button onclick="openEmail()">Charlar ahora!!</button>
		</div>`
	openModal(html)
}

function showWeddingEvent() {
	const html = `
		<div class="modal-box event boda fade" id="modal-box">
			<img src="../assets/eventos/boda.png" alt="Boda mágica" />
			<h2>¡Boda mágica con Nuuk! 💒</h2>
			<p>
				<b>Haz de tu día especial un dulce cuento.</b><br>
				Nuestros <b>helados gourmet</b> serán el toque perfecto para tu boda soñada.
			</p>
			<button onclick="openEmail()">Charlar ahora!!</button>
		</div>`
	openModal(html)
}

function showBirthdayEvent() {
	const html = `
		<div class="modal-box event cumple fade" id="modal-box">
			<img src="../assets/eventos/cumple.png" alt="Cumpleaños divertido" />
			<h2>¡Cumpleaños inolvidable! 🎉</h2>
			<p>
				<b>¡Celebra en grande!</b><br>
				Disfruta de <b>nuestros deliciosos helados</b> 
				y crea recuerdos dulces y especiales.
			</p>
			<button onclick="openEmail()">Charlar ahora!!</button>
		</div>`
	openModal(html)
}

const conf = document.querySelectorAll('#pr-conf')
conf.forEach((e) =>
	e.addEventListener('click', () => {
		showLater()
	})
)

function cnftt() {
	confetti({
		angle: randomInRange(55, 125),
		spread: randomInRange(50, 70),
		particleCount: randomInRange(50, 100),
		origin: { y: 0.6 }
	})
}

function randomInRange(min, max) {
	return Math.random() * (max - min) + min
}
