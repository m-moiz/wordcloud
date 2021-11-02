import { filteredWords } from './filteredWords';
import { removePunctuation } from './removePunctuation';

// in -> hello hello there is a there
// out -> {hello: 2, there: 2, is: 1, a: 1}
// O(7n) -> time
// O(2n) -> space
export function getWordCount(str: string) {
	if (str.length === 0) {
		return {};
	}

	str = removePunctuation(str); //0(5n)

	str = str.toLowerCase();

	let set = new Set();
	let result: { [key: string]: number } = {};
	let words = str.split(' ');

	for (let word of words) {
		if (word === filteredWords[word]) {
		} else if (set.has(word)) {
			//do nothing
			result[word]++;
		} else {
			result[word] = 1;
			set.add(word);
		}
	}

	return result;
}
