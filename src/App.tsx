import React, { ReactElement, useState } from 'react';
import WordCloud from './components/word-cloud.component';
import { WordCloudObject } from './types/wordcloud';
import { getWordCount } from './algorithm/getWordCount';
import './App.css';

function App(): ReactElement {
	const [ wordCloud, setWordCloud ] = useState<WordCloudObject>({});
	const [ text, setText ] = useState('');

	const handleSubmit = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault();
		setWordCloud(getWordCount(text));
	};

	const handleChange = (e: React.FormEvent<EventTarget>) => {
		let target = e.target as HTMLInputElement;
		setText(target.value);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<textarea
					onChange={handleChange}
					style={{
						height: '130px',
						width: '100%',
						padding: '1rem'
					}}
					placeholder="Enter text"
				/>
				<button type="submit">Submit</button>
			</form>
			<WordCloud wordCloud={wordCloud} />
		</div>
	);
}

export default App;
