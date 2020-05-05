import React from 'react';
import './App.css';

class Scroller extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = {
	  	initialFocus: true
	  }
	  // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		setTimeout(() => {this.setState({initialFocus: false})}, 3000);
	}

	handleClick(index) {

		if (this.props.position[index] === undefined) {
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

		return (
			<div className={`Scroll-container ${this.state.initialFocus ? "Initializing" : ""}`}>
			  {(this.props.icons || []).map((item, index) => (
					<div className= "Scroll-segment" key={index} onClick={(e) => this.handleClick(index, e)}>{item}</div>
				))}
			</div>
		);

	}
}

export default Scroller;