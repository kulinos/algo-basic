class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
		}

	push(data) {
		this.size++;
		const newNode = new Node(data);
		if(!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let temp = this.first;
			
			this.first = newNode;
			this.first.next = temp;
		}
		return this.first.data;
	}

	insertLast(data) {
		const newNode = new Node(data);
		if(!this.first && !this.last) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.size++;
		}
		return this.last.data;
	}

insertIndexOf(data,index) {
	if(index < 0 || index > this.size -1  ) { console.log("Error! Out of Bound...."); return;}
	const newNode = new Node(data);

	let pointer = this.first;
	let counter = 1;
	while(pointer.next!==null) {
		pointer = pointer.next;
		counter++;
			if(counter>=index) break;
		}
		newNode.next = pointer.next;
		pointer.next = newNode;
		this.size++;
	}
} 

const ll = new LinkedList();

ll.push(10);
ll.push(20);
ll.push(30);
// insert here!
ll.push(40);
ll.push(50);
ll.push(60);

ll.insertIndexOf(99,3);

console.log(ll);
