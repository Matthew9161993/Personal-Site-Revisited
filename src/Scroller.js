import React from 'react';
import './App.css';

class Scroller extends React.Component {
	render() {
		return (
			<div className= "Scroll-container">
			  <div> {this.props.first} </div>
			  <div> {this.props.second} </div>
			  <div> {this.props.third} </div>
			</div>
		);
	}
}

export default Scroller;