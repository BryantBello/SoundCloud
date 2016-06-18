import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';

const tracks = [
	{
	  title: 'Some track here'
	},
	{
	  title: 'Some other track here'
	}
];

ReactDOM.render(
	<Stream tracks={tracks} />,
	document.getElementById('app')
	);