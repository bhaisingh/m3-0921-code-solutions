import React from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, buttonStatus: 'play' };
    this.handleClick = this.handleClick.bind(this);
    this.timerID = null;
  }

  handleClick(event) {
    if (event.target.className === 'stopwatch-container') {
      if (this.state.buttonStatus === 'pause') {
        this.setState({ counter: 0, buttonStatus: 'play' });
        clearInterval(this.timerID);
      }
    } else if (this.state.buttonStatus === 'pause') {
      clearInterval(this.timerID);
      this.setState({ buttonStatus: 'play' });
    } else if (this.state.buttonStatus === 'play') {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
      this.setState({ buttonStatus: 'pause' });
    }

  }

  tick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    const secondCounter = this.state.counter;
    let showButton = '';
    if (this.state.buttonStatus === 'play') {
      showButton = 'FaPlay';
    } else {
      showButton = 'FaPause';
    }

    return (
        <div className="display-container">
            <div className="stopwatch-container" onClick={this.handleClick}>{secondCounter}</div>
            <div className="button-container" onClick={this.handleClick}>{showButton === 'FaPlay' ? <FaPlay /> : <FaPause />}</div>
        </div>
    );
  }
}

export default StopWatch;
