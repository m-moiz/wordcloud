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
				<section style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
			    <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
				<p style={{ color: "#efefef", fontSize: "2rem"}}>Enter text that you want to generate a word cloud for </p>
				<textarea
					onChange={handleChange}
					style={{
						height: '50vh',
						width: '95%',
						padding: '1rem',
						marginBottom: '.65rem'
					}}
					placeholder="Place text here..."
				/>
				<button 
				    style={{
						padding: '.5rem',
						backgroundColor: 'black',
						color: 'rgb(201, 201, 201)',
						width: "50%", 
						alignSelf: "center"
					}}
				    type="submit">
						Generate
				</button>
			</form>
			</section>
			<WordCloud wordCloud={wordCloud} />
		</div>
	);
}

export default App;
