const modal = document.querySelector('div#modal')
const modalImg = modal.querySelector('img#modal-image')

function loadImageEvents() {
	const images = document.querySelectorAll('img')
	const closeButton = modal.querySelector('button#modal-close')

	images.forEach((img) => img.addEventListener('click', setModal))
	closeButton.addEventListener('click', closeModal)
	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal()
		}
	})
}

function setModal(e) {
	if (!modal || !modalImg) return
	const newScrImage = e.target.src
	if (newScrImage === modalImg.src) return
	modal.classList.add('active')
	modalImg.src = newScrImage
}

function closeModal() {
	if (!modal || !modalImg) return
	modal.classList.remove('active')
	modalImg.classList.add('removing')
	setTimeout(() => (modalImg.src = '.'), 200)
}

loadImageEvents()
