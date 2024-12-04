lucide.createIcons()
let data = null

;(async () => {
	data = await loadData()
	drawInTable(data)

	const flavorInput = document.querySelector('#flavor')
	flavorInput.addEventListener(
		'input',
		debounce((e) => filterFlavors(e, data), 300)
	)
})()

function createRow(flavor, index) {
	const row = document.createElement('tr')
	row.style.animationDelay = `${index * 0.2}s`
	row.innerHTML = `
        <td><img src="${flavor.imagen}" alt="${flavor.sabor}" /></td>
        <td><h4>${flavor.sabor}</h4></td>
        <td><p><b>${flavor.precio}</b></p></td>
        <td><p>${flavor.descripcion}</p></td>
				<td><button id="table-select" data-flavor="${flavor.sabor}">Descripción</button></td>`
	row.addEventListener('click', (e) => {
		const descriptionButton = e.target.closest('#table-select')
		if (descriptionButton) {
			const flavor = descriptionButton.getAttribute('data-flavor')
			return openModalFlavor(flavor)
		}
		selectFlavor(flavor, row)
	})
	return row
}

function openModalFlavor(flavorName) {
	const search = flavorName.trim().toLowerCase()
	const flavor = data.find((d) => d.sabor.toLowerCase() == search)
	console.log(flavor)

	const html = `<div class="modal-box fade" id="modal-box">
		<h2 class="sub-title">Helados de <b>${flavor.sabor}</b></h2>
		<img src="${flavor.imagen}" alt="${flavor.sabor}" />
		<h3>A solo <b>${flavor.precio}</b></h3>
		<p>${flavor.descripcion}</p>
	</div>`
	openModal(html)
}

function selectFlavor(flavor, row) {
	const flavorInput = document.querySelector('#flavor')
	flavorInput.value = flavor.sabor
	clearActiveRows()
	row.classList.add('active')
	toastr.success(`Escogiste: ${flavor.sabor}`, '', {
		timeOut: 1500,
		positionClass: 'toast-top-center',
		preventDuplicates: true,
		progressBar: true
	})
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
