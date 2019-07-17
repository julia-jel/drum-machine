import React from 'react';
import '../styles.css';

//import components:

import Manual from './Manual';
import PadBank from './PadBank';

//function to toggle the argument:

const toggle = function(s) {
  return (s === "On") ? "Off" : "On" 
}

//handle controllers and display:

class DrumMachineBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: "On",
      display: "",
      bpm: 100
    };
    this.displayInstrumentName = this.displayInstrumentName.bind(this);
    this.powerControl = this.powerControl.bind(this);
    this.adjustBpm = this.adjustBpm.bind(this)
  };
  
  powerControl() {
      this.setState ({
        power: toggle(this.state.power),
        display: "",
        bpm: 100
      })
  };
  
  displayInstrumentName(name) {
    if (this.state.power === "On") {
      this.setState ({
        display: name
      }) 
    }
  };
  
  adjustBpm(e) {
    if (this.state.power === "On") {
      let bpm = Math.round(e.target.value);
      this.setState ({
        bpm: bpm,
        display: "Tempo: "+ bpm
      })
    }
  }
   
  render() {
    let classSuffix = (this.state.power).toLowerCase();
    console.log("ready to render");
    return (
      <div id="drum-machine" className="container-fluid">
      
         <Manual />
        
         <div id="display">
          {this.state.display}
         </div>
       
         <div id="tempo-control">
            <p>Tempo</p>
            <input type="range" min="40" max="200" step="1" value={this.state.bpm} onChange={this.adjustBpm} />
         </div>
       
         <PadBank updateDisplay={this.displayInstrumentName} power={this.state.power} bpm={this.state.bpm} />
        
         <div id="power-control">
           <p>Power</p>
           <div id="power-select" onClick={this.powerControl}>
             <div id="power-slider" className={"slider-" + classSuffix}>{this.state.power}</div>
           </div>
         </div>
        
    </div>
    )
  }
};

module.exports = DrumMachineBox;
