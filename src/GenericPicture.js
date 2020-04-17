import React from 'react';
import './App.css';

class GenericPicture extends React.Component {
	render() {
		return (
			<div className= "Generic-portrait">
			  <img className= "Generic-picture" src={this.props.file} alt={this.props.description} />
			</div>
		);
	}
}

export default GenericPicture;