import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switchStatus: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.switchStatus) {
      this.setState({ switchStatus: false });
    } else {
      this.setState({ switchStatus: true });
    }
  }

  render() {
    let switchCaption = '';
    let backgroundColor = '';
    let switchBorder1 = '';
    let switchBorder2 = '';
    let width1 = null;
    let width2 = null;
    let switchBackgroundcolor1 = '';
    let switchBackgroundcolor2 = '';

    if (this.state.switchStatus) {
      switchCaption = 'ON';
      backgroundColor = 'green';
      switchBorder1 = '0px';
      switchBorder2 = '2px solid black';
      width1 = 75;
      width2 = 25;
      switchBackgroundcolor2 = 'white';
      switchBackgroundcolor1 = 'green';
    } else {
      switchCaption = 'OFF';
      backgroundColor = 'gray';
      switchBorder2 = '0px';
      switchBorder1 = '2px solid black';
      width1 = 25;
      width2 = 75;
      switchBackgroundcolor2 = 'gray';
      switchBackgroundcolor1 = 'white';
    }
    return (
      <div className="display-container">
        <div className="switch-container" style={{ backgroundColor: backgroundColor }} onClick={this.handleClick}>
          <div className="switch-left" style={{ border: switchBorder1, width: width1 + '%', backgroundColor: switchBackgroundcolor1 }}></div>
          <div className="switch-right" style={{ border: switchBorder2, width: width2 + '%', backgroundColor: switchBackgroundcolor2 }}></div>
        </div>
        <div className="caption-container">{switchCaption}</div>
      </div>
    );

  }
}

export default ToggleSwitch;
