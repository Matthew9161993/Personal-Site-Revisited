import React from 'react';
import './App.css';

class ContactButton extends React.Component {

  constructor(){
    super();
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
    this.state = {
      hover: false,
    };
  }

  hoverOn(){
    this.setState({hover: true});
  }

  hoverOff(){
    this.setState({hover: false});
  }

  render() {
    return(
      <div className = "Contact-button">
        <a href= {this.props.link} target="_blank" rel="noopener noreferrer">
          <img src= { this.state.hover ? this.props.picture : this.props.hoverPicture}
               onMouseEnter= {this.hoverOn}
               onMouseLeave= {this.hoverOff}
               alt= {this.props.text}
          />
        </a>
      </div>
    );
  }
}

export default ContactButton;