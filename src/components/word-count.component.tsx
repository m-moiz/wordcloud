import React, { ReactElement } from 'react';
import './word-count.component.css';

interface Props {
	word: string;
	wordCount: number;
}

function WordCount({ wordCount, word }: Props): ReactElement {
	return (
		<li className="word" style={{fontSize: `${wordCount * 0.8 + 0.5}rem`}}>{word}</li>
	);
}

export default WordCount;
