class Node {
	constructor(data, next = null) {
		this.data = data
		this.next = next
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0
	}

	//insert node at first position
	insertNodeAtFirst(data) {
		this.head = new Node(data, this.head)
		this.size++
	}

	//print list data

	printListData() {
		let current = this.head
		while (current) {
			console.log(current.data)
			current = current.next
		}
	}

	printTotalNodeSize() {
		console.log(this.size)
	}

	insertNodeAtLast(data) {

		const node = new Node(data)
		//if there is no head set it as head
		if (!this.head) {
			this.head = node
			// this.size++
		} else {
			let current = this.head
			while (current.next) {
				current = current.next
			}
			current.next = node
		}
		this.size++
	}

	//insertNodeAtIndex
	insertNodeAtIndex(data, index) {
		if (index < 0 || index > this.size) {
			return;
		}

		if (index === 0) {
			return this.insertNodeAtFirst(data)
		}

		// const node = new Node(data);
		// let current = this.head
		// l
		// let count = 0
		// while (current.next && count !== index) {
		// 	current = current.next
		// 	count++
		// }
		// let temp = current.next
		// node.next = temp
		// current.next = node
		// this.size++

		const node = new Node(data)
		let current, previous;
		//set current to first
		current = this.head;
		let count = 0

		while (count < index) {
			previous = current  //node before index
			count++
			current = current.next // node after index
		}

		node.next = current
		previous.next = node;
		this.size++;

	}

	//getAtIndex
	getDataAtIndex(index) {
		if (index < 0 || index > this.size) {
			return;
		} else {
			let current = this.head
			let count = 0
			while (current) {
				if (count === index) {
					console.log(current.data)
				}
				count++
				current = current.next
			}
		}
	}

	//removeAtIndex
	removeAtindex(index) {
		let current = this.head, previous, count = 0;

		if (index < 0 || index > this.size) {
			return;
		}
		//remove first node 
		else if (index === 0) {
			this.head = current.next
		}
		//else if it is between somewhere or in end
		else {
			while (count < index) {
				previous = current
				current = current.next
				count++
			}
			previous.next = current.next
			this.size--
		}
	}

	clearList() {
		this.head = null
	}
}

const ll = new LinkedList()
ll.insertNodeAtFirst(22)
ll.insertNodeAtFirst({ name: "Sara", age: 22 })
ll.insertNodeAtFirst([11, 'abc'])
ll.insertNodeAtLast(2)
ll.insertNodeAtIndex('aaa', 4)
// console.log(ll)
// ll.printTotalNodeSize()
ll.removeAtindex(3)
// ll.printListData()
ll.clearList()
// ll.getDataAtIndex(4)
ll.printListData()


// console.log(ll)
// console.log(ll)



