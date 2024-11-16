lucide.createIcons()

const modal = document.querySelector('div#modal')
const modalImg = modal.querySelector('img#modal-image')

;(async () => {
	const data = await loadData()
	drawInTable(data)

	const flavorInput = document.querySelector('#flavor')
	flavorInput.addEventListener(
		'input',
		debounce((e) => filterFlavors(e, data), 300)
	)
})()

function createRow(flavor, index) {
	const row = document.createElement('tr')
	row.style.animation = `fadeInUp 0.5s ease `
	row.style.animationDelay = `${index * 0.2}s`
	row.innerHTML = `
        <td><img src="${flavor.imagen}" alt="${flavor.sabor}" /></td>
        <td><h4>${flavor.sabor}</h4></td>
        <td><p><b>${flavor.precio}</b></p></td>
        <td><p>${flavor.descripcion}</p></td>`
	row.addEventListener('click', () => selectFlavor(flavor, row))
	return row
}

function selectFlavor(flavor, row) {
	const flavorInput = document.querySelector('#flavor')
	flavorInput.value = flavor.sabor
	clearActiveRows()
	row.classList.add('active')
}

function clearActiveRows() {
	const rows = document.querySelectorAll('tr.active')
	rows.forEach((row) => row.classList.remove('active'))
}

function debounce(func, delay = 300) {
	let timeout
	return function (...args) {
		clearTimeout(timeout)
		timeout = setTimeout(() => func.apply(this, args), delay)
	}
}

function drawInTable(data) {
	const tableBody = document.getElementById('flavors-body')
	tableBody.innerHTML = ''
	data.forEach((flavor, i) => {
		const row = createRow(flavor, i)
		tableBody.appendChild(row)
	})
	loadImageEvents()
}

async function loadData() {
	const response = await fetch('data.json')
	const data = await response.json()
	return data
}

function filterFlavors(e, data) {
	const search = String(e.target.value).trim().toLowerCase()
	if (!search || search.length < 1) return drawInTable(data)
	const newData = data.filter(
		(d) => d.sabor.toLowerCase().includes(search) || d.descripcion.toLowerCase().includes(search)
	)
	drawInTable(newData)
}

function loadImageEvents() {
	const images = document.querySelectorAll('img')
	const closeButton = modal.querySelector('button#modal-close')

	images.forEach((img) => {
		img.removeEventListener('click', setModal)
		img.addEventListener('click', setModal)
	})

	closeButton.removeEventListener('click', closeModal)
	closeButton.addEventListener('click', closeModal)

	modal.removeEventListener('click', handleModalBackgroundClick)
	modal.addEventListener('click', handleModalBackgroundClick)
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
	setTimeout(() => {
		modalImg.src = '.'
		modalImg.classList.remove('removing')
	}, 200)
}

function handleModalBackgroundClick(e) {
	if (e.target === modal) closeModal()
}
