import React from 'react';
import './App.css';

class GenericText extends React.Component {
	render() {
		return (
			<div className="Generic-text">
			  <p>{this.props.text}</p>
			</div>
		);
	}
}

export default GenericText;