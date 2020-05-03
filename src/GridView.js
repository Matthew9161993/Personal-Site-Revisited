import React from 'react';
import './App.css';

class GridView extends React.Component {

  constructor(props) {
	  super(props);
	  this.state = { 
	  	data: []
	  };
	}

  render() {
    return (
			<div className="Grid-wrapper">
				{(this.props.data || []).map((item, index) => (
					<div key={index}>{item}</div>
				))}
			</div>
		);
  }
}

export default GridView;