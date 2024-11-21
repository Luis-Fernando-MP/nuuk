class TreeNode {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class Tree {
	constructor() {
		this.root = null
	}

	addValue(value) {
		const insert = (node, value) => {
			if (!node) return new TreeNode(value)

			if (typeof value === 'number') {
				if (value < node.value) {
					node.left = insert(node.left, value)
				} else {
					node.right = insert(node.right, value)
				}
			} else if (typeof value === 'string') {
				if (value.localeCompare(node.value) < 0) {
					node.left = insert(node.left, value)
				} else {
					node.right = insert(node.right, value)
				}
			}

			return node
		}

		this.root = insert(this.root, value)
	}

	buildTree(values) {
		for (const value of values) {
			if (value !== null) {
				this.addValue(value)
			}
		}
	}

	preOrder(node, result = []) {
		if (!node) return
		result.push(node.value)
		this.preOrder(node.left, result)
		this.preOrder(node.right, result)

		return result
	}

	inOrder(node, result = []) {
		if (!node) return
		this.inOrder(node.left, result)
		result.push(node.value)
		this.inOrder(node.right, result)

		return result
	}

	postOrder(node, result = []) {
		if (!node) return
		this.postOrder(node.left, result)
		this.postOrder(node.right, result)
		result.push(node.value)

		return result
	}

	printTree() {
		if (!this.root) return

		const levels = []
		const traverse = (node, depth, position) => {
			if (!node) return
			if (!levels[depth]) levels[depth] = []
			levels[depth].push({ value: node.value, position })
			traverse(node.left, depth + 1, position * 2)
			traverse(node.right, depth + 1, position * 2 + 1)
		}

		traverse(this.root, 0, 1)

		const maxDepth = levels.length
		const width = Math.pow(2, maxDepth) - 1

		levels.forEach((level, depth) => {
			const line = Array(width).fill(' ')
			level.forEach(({ value, position }) => {
				const index = Math.floor((position / Math.pow(2, depth + 1)) * width)
				line[index] = value
			})
			console.log(line.join(' '))
		})
	}
}

const tree = new Tree()

const testData = ['A', 'X', '5', 'Z', 'R', 'T', 'W']
tree.buildTree(testData)
console.log(tree.preOrder(tree.root))
console.log(tree.inOrder(tree.root))
console.log(tree.postOrder(tree.root))

tree.printTree()
