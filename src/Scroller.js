import React from 'react';
import './App.css';

class Scroller extends React.Component {

	constructor(props) {
	  super(props);
	  this.myFirstRef = React.createRef();
	  // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		console.log(this.myFirstRef);
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

		return (
			<div className= "Scroll-container" ref={this.myRef}>
			  {(this.props.icons || []).map((item, index) => (
					<div className= "Scroll-segment" key={index} onClick={(e) => this.handleClick(index, e)}>{item}</div>
				))}
			</div>
		);

	}
}

export default Scroller;