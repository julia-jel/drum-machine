import React from 'react';

//render a drum pad button containing an audio file url, onclick and onkey options passed as props

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalID: null
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.playOnce = this.playOnce.bind(this);
    this.playSequence = this.playSequence.bind(this);
  }  
  componentDidMount() {
    addEventListener("keydown", this.handleKeyDown);
    addEventListener("keyup", this.handleKeyUp);
  };
  componentWillUnmount() {
    removeEventListener("keydown", this.handleKeyDown);
    removeEventListener("keyup", this.handleKeyUp)
  }
  
  playOnce() {
    this.sound.currentTime = 0;
    this.sound.play();
    this.props.updateDisplay(this.props.title);
  }
  
  playSequence() {
    if (this.state.intervalID !== null) {
      return
    }
    this.sound.currentTime = 0;
    this.sound.play();
    const interval = 60000 / this.props.bpm;
    let intervalID = setInterval(() =>
      (this.sound.currentTime = 0, this.sound.play()), interval);
    this.setState({
       intervalID: intervalID
    });
    this.props.updateDisplay(this.props.title);
  }
  
  handleKeyDown(event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.keyCode === this.props.keyCode) {
      this.playSequence();
      document.getElementById(this.props.title).classList.add("drum-pad-on-active");
    }
  }
  
  handleKeyUp(event) {
    event.preventDefault();
    if (event.keyCode === this.props.keyCode) {
      document.getElementById(this.props.title).classList.remove("drum-pad-on-active");
      this.sound.pause();
      clearInterval(this.state.intervalID);
      this.setState({
         intervalID: null
      });
    }
  }
  
  render() {
    return (
      <button id={this.props.title} className={this.props.className} onClick={this.playOnce} >
        {this.props.keyName}
        <audio className="clip" id={this.props.keyName} src={this.props.url} ref={(audio) => {this.sound = audio; }}></audio>
      </button>
    )
  }
}

module.exports = DrumPad;
