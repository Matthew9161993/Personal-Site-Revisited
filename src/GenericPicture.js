import React from 'react';
import './App.css';

class GenericPicture extends React.Component {
	render() {
		return (
			<div className= "Generic-portrait">
				<a href = {this.props.link} target="_blank">
			  	<img className= "Generic-picture" src={this.props.file} alt={this.props.description} />
				</a>
			</div>
		);
	}
}

export default GenericPicture;