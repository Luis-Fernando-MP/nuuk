class ListNode {
	key: string
	value: string
	next: ListNode | null

	constructor(key: string, value: string, next: ListNode | null = null) {
		this.key = key
		this.value = value
		this.next = next
	}
}

class LinkedList {
	private head: ListNode | null = null

	insert({ key, value }: { key: string; value: string }) {
		const newNode = new ListNode(key, value)
		if (!this.head) return (this.head = newNode)
		let current = this.head

		while (current.next) current = current.next
		return (current.next = newNode)
	}

	insertAt(keyNode: string, { key, value }: { key: string; value: string }) {
		const newNode = new ListNode(key, value)
		let current = this.head
		if (!current) return null
		while (current) {
			if (current?.key === keyNode) {
				newNode.next = current.next
				current.next = newNode
				return
			}
			current = current.next
		}
		return null
	}

	search(keyNode: string) {
		let current = this.head
		if (!current) return null
		while (current) {
			if (current?.key === keyNode) return current
			current = current?.next
		}
		return null
	}

	update({ key, value }: { key: string; value: string }): void {
		let current = this.head
		while (current) {
			if (current.key === key) {
				current.value = value
				return
			}
			current = current.next
		}
		throw new Error(`Nodo con key "${key}" no encontrado`)
	}

	removeAt(keyNode: string) {
		let current = this.head
		let prev: ListNode | null = null
		if (!current) return null
		if (current.key === keyNode) {
			this.head = current.next
			return
		}
		while (current && current.key !== keyNode) {
			prev = current
			current = current.next
		}

		if (!current) return null
		if (prev) prev.next = current.next
	}

	// Imprimir lista
	printList() {
		let current = this.head
		const result: string[] = []
		while (current) {
			const { key, next, value } = current
			result.push(`${value}: ${key}`)
			current = next
		}
		return result
	}
}

// Ejemplo de uso
const ll = new LinkedList()

// Inserciones
ll.insert({ key: '0016', value: '2' })
ll.insert({ key: '0011', value: '7' })
ll.insert({ key: '0014', value: '8' })
ll.insert({ key: '001A', value: '10' })
ll.insert({ key: '001C', value: '13' })
ll.insert({ key: '0012', value: '14' })
ll.insert({ key: '001D', value: '17' })

console.log(ll.printList())

ll.insertAt('001A', { key: '001B', value: '12' })
console.log(ll.printList())

ll.insertAt('0011', { key: '0013', value: '7' })
console.log(ll.printList())

ll.insertAt('001D', { key: '001E', value: '17' })
console.log(ll.printList())

ll.insertAt('0016', { key: '0017', value: '2' })
console.log(ll.printList())

ll.removeAt('0017')
console.log(ll.printList())
