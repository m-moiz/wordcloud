import React, { ReactElement } from 'react';
import WordCount from './word-count.component';
import { WordCloudObject } from '../types/wordcloud';
import './word-cloud.component.css';

interface Props {
	wordCloud: WordCloudObject;
}

export default function WordCloud({ wordCloud }: Props): ReactElement {
	let arrayOfArrays = Object.entries(wordCloud);

	return <ul className="cloud" role="navigation" aria-label="word cloud">{arrayOfArrays.map((word) => <WordCount word={word[0]} wordCount={word[1]} />)}</ul>;
}
