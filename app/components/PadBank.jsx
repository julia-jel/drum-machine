import React from 'react';

//import components: 
import DrumPad from './DrumPad';

//sounds data base:

const sounds = [
  {title: "Cowbell",
   keyCode: 81,
   keyName: "Q",
   url: "https://s3.eu-central-1.amazonaws.com/80sdrums/80s-COWBELL1.mp3"},
  
  {title: "Crash",
   keyCode: 87,
   keyName: "W",
   url: "https://s3.eu-central-1.amazonaws.com/80sdrums/80s-CRASH1.mp3"},
  
  {title: "Hi-Hat Close",
   keyCode: 69,
   keyName: "E",
   url: "https://s3.eu-central-1.amazonaws.com/80sdrums/80s-HHCLOSE1.mp3"},
  
  {title: "Hi-Hat Open",
  keyCode: 65,
  keyName: "A",
  url: "https://s3.eu-central-1.amazonaws.com/80sdrums/80s-HHOPEN2.mp3"},
  
  {title: "Clap",
  keyCode: 83,
  keyName: "S",
  url: "https://s3.eu-central-1.amazonaws.com/80sdrums/808-clap1.mp3"}, 
  
  {title: "Kick",
  keyCode: 68,
  keyName: "D",
  url: "https://s3.eu-central-1.amazonaws.com/80sdrums/909-Kick-T3A0D3.mp3"},
  
  {title: "Snare",
  keyCode: 90,
  keyName: "Z",
  url: "https://s3.eu-central-1.amazonaws.com/80sdrums/80s-SNARE1.mp3"},
  
  {title: "Tambourin",
  keyCode: 88,
  keyName: "X",
  url: "https://s3.eu-central-1.amazonaws.com/80sdrums/80s-TAMB1.mp3"},
  
  {title: "Tom",
  keyCode: 67,
  keyName: "C",
  url: "https://s3.eu-central-1.amazonaws.com/80sdrums/80s-TOM5.mp3"}
];

//render pads and map props depending on the drum machine power state:

class PadBank extends React.Component {
  constructor(props) {
    super(props);
  };
  
  render() {
    let pads;
    if (this.props.power === "On") {
      pads = sounds.map((soundObj) => {
        return (
        <DrumPad title={soundObj.title} key={soundObj.keyName} keyName={soundObj.keyName} keyCode={soundObj.keyCode} url={soundObj.url} updateDisplay={this.props.updateDisplay} className="drum-pad drum-pad-on" bpm={this.props.bpm} />
        )
      })
    } else if (this.props.power === "Off") {
      pads = sounds.map((soundObj) => {
        return (
        <DrumPad key={soundObj.keyName} keyName={soundObj.keyName} url="#" className="drum-pad drum-pad-off" bpm="" />
        )
      })
    };
    
    return (
     <div id="pad-bank">
      {pads}
     </div>
    )
  }
};

module.exports = PadBank;
