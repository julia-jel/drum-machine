import React from 'react';

//function to toggle the info button:

const toggleInfo = function(i) {
  return (i === " ") ? "Adjust the tempo, then hold the key on the keyboard." : " "
}

//button to show the user manual: 

class Manual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      manual: " "
    };
    this.handleInfoClick = this.handleInfoClick.bind(this)
  };
  
  handleInfoClick() {
    this.setState({
      manual: toggleInfo(this.state.manual)
    })
  }
  
  render() {
    return (
      <div id="header-section">
        <h3 id="machine-header">80s Drum Machine</h3>
        <i className="fas fa-info" onClick={this.handleInfoClick}></i>
        <div id="manual-info">
          {this.state.manual}
        </div>
      </div>
    )
  }
};

module.exports = Manual;
