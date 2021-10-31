class Node {
	val: string = '';
	next: Node | null = null;
	prev: Node | null = null;

	constructor(val: string) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

export class LinkedList {
	head: Node | null = null;
	tail: Node | null = null;
	length: number = 0;

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	isEmpty() {
		return this.head === null;
	}

	addNode(val: string) {
		let newNode = new Node(val);

		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return;
		}

		//point the previous node to the new node
		let prevNode = this.tail;
		if (prevNode !== null) {
			prevNode.next = newNode;
			this.tail = newNode;
			this.tail.prev = prevNode;
			this.length++;
		}
	}

	removeNode(node: Node | null) {
		if (this.isEmpty()) {
			return;
		}

		if (this.hasSingleNode()) {
			console.log('h');
			this.head = null;
			this.tail = null;
			return;
		}

		// node is first element
		if (this.head === node && node) {
			node = node.next;
			this.head = node;
			// node is middle element
		} else if (this.head !== node && this.tail !== node && node) {
			let prevNode = node.prev;
			if (prevNode !== null && prevNode.next !== null) {
				prevNode.next = prevNode.next.next;
			}
			//node is last element
		} else {
			if (node !== null) {
				let prevNode = node.prev;
				if (prevNode !== null) {
					prevNode.next = null;
				}
			}
		}
	}

	toArray() {
		let curr = this.head;
		let result = [];
		while (curr && curr.next !== null) {
			result.push(curr.val);
			curr = curr.next;
		}

		if (curr !== null) {
			result.push(curr.val);
		}

		return result;
	}

	hasSingleNode() {
		return this.head === this.tail;
	}
}
