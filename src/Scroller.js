import React from 'react';
import './App.css';


// This class does not support all components yet, but it is allowed!

class Scroller extends React.Component {
	render() {
		return (
			<div className= "Scroll-container">
			  <div className= "Scroll-segment"> {this.props.first} </div>
			  <div className= "Scroll-segment"> {this.props.second} </div>
			  <div className= "Scroll-segment"> {this.props.third} </div>
			</div>
		);
	}
}

export default Scroller;