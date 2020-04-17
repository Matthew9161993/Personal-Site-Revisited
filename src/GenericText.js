import React from 'react';
import './App.css';

class GenericText extends React.Component {
	render() {
		return (
			<div className="Generic-text">
			  <p>OH! {this.props.text}</p>
			</div>
		);
	}
}

export default GenericText;