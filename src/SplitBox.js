import React from 'react';
import './App.css';

class SplitBox extends React.Component {
	render() {
		return (
			<div className="Split-box">
				{this.props.text}{this.props.pic}
			</div>
		);
	}
}

export default SplitBox;