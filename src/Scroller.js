import React from 'react';
import './App.css';

class Scroller extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = { 
	  	icons: [] ,
	  	position: []
	  };

	  // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
	}

	handleClick(index) {

		if (this.props.position[index] == null) {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		}
		else { 
			window.scrollTo({
				top: this.props.position[index],
				left: 0,
				behavior: 'smooth'
			});
		}
		
	}

	render() {
		if (this.props.position != null) {
			console.log(this.props.position[0]);
		} 
		else {
			console.log("position is null");
		}
		return (
			<div className= "Scroll-container">
			  {(this.props.icons || []).map((item, index) => (
					<div className= "Scroll-segment" key={index} onClick={(e) => this.handleClick(index, e)}>{item}</div>
				))}
			</div>
		);
	}
}

export default Scroller;