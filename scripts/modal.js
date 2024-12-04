const modal = document.querySelector('#modal')
const modalContainer = modal.querySelector('#modal-container')
const closeButton = modal.querySelector('button#modal-close')

function loadImageEvents() {
	if (!modal || !modalContainer) return
	modal.addEventListener('click', (e) => {
		const closeButton = e.target.closest('#modal-close')
		if (e.target === modal || closeButton) closeModal()
	})

	document.body.addEventListener('click', (e) => {
		const imageElement = e.target.closest('img')
		if (!imageElement || !!modalContainer.innerHTML) return
		setModal(e)
	})
}

function setModal(e) {
	const newScrImage = e.target.src
	modalContainer.innerHTML = `<img src="${newScrImage}" class="fade" id="modal-image" alt="modal image"/>`
	modal.classList.add('active')
}

function closeModal() {
	modal.classList.remove('active')
	modalContainer.classList.add('removing')
	setTimeout(() => (modalContainer.innerHTML = ''), 200)
}

function openModal(html) {
	if (!modal || !modalContainer) return
	modal.classList.add('active')
	modalContainer.innerHTML = html
}

loadImageEvents()
