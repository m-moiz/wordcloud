import { LinkedList } from './linkedList';
import { punctuation } from './punctuation';

// 0(5n)
export function removePunctuation(str: string) {
	let chars = str.split(''); //0(n)
	let list = new LinkedList();
	for (let char of chars) {
		list.addNode(char);
	}

	let curr = list.head;

	//removal
	while (curr && curr.next !== null) {
		if (curr.val === punctuation[curr.val]) {
			list.removeNode(curr);
		}
		curr = curr.next;
	}

	if (curr && curr.val === punctuation[curr.val]) {
		list.removeNode(curr);
	}

	let result = list.toArray();

	//to string
	return result.join(''); // O(n)
}
