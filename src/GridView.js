import React from 'react';
import './App.css';

class GridView extends React.Component {

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