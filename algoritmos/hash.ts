class HashTable<T> {
	private table: { [key: string]: T[] }
	private readonly max: number = 37

	constructor(param?: { max: number }) {
		this.table = {}
		this.max = param?.max ?? 37
	}

	private hash(key: string): string {
		let hashValue = 0
		for (let i = 0; i < key.length; i++) hashValue += key.charCodeAt(i)
		return (hashValue % this.max).toString()
	}

	set(key: string, value: T): void {
		const index = this.hash(key)
		if (!this.table[index]) {
			this.table[index] = []
		}
		this.table[index].push(value)
	}

	get(key: string): T[] | undefined {
		const index = this.hash(key)
		return this.table[index]
	}

	remove(key: string): boolean {
		const index = this.hash(key)
		const inTable = this.table[index]
		if (!inTable) return false
		if (inTable.length <= 1) return delete this.table[index]
		this.table[index].shift()
		return true
	}

	print() {
		const res: string[] = []
		for (const key in this.table) {
			res.push(`${key}: [${this.table[key].join(', ')}]`)
		}
		return res
	}
}

const myDictionary = {
	ailurophile: 'a cat-lover',
	assemblage: 'a gathering',
	bucolic: 'in a lovely rural setting',
	ebullience: 'bubbling enthusiasm',
	evanescent: 'vanishing quickly, lasting a very short time',
	evocative: 'suggestive',
	gossamer: "the finest piece of thread, a spider's silk",
	harbinger: 'messenger with news of the future'
}
const hashTable = new HashTable<number>()

for (const key in myDictionary) {
	hashTable.set(key, myDictionary[key])
}

// hashTable.set('001A', 10)
// hashTable.set('001B', 20)
// hashTable.set('001C', 30)
// hashTable.set('001A', 15)
// hashTable.set('001D', 15)
// hashTable.set('001', 45)
// hashTable.set('00W1', 45)

// console.log(hashTable.get('001A')) // [10, 15]
// console.log(hashTable.get('001B')) // [20]

// // console.log(hashTable.remove('001A'))
// // console.log(hashTable.remove('001A'))

console.log(hashTable.print())

const obj = { x: 5, y: 10, z: 11 }
with (obj) {
	console.log(x, y, z) // 15
}
