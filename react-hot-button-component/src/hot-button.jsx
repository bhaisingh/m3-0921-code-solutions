import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { click: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.click > 18) {
      this.setState({ click: 0 });
    } else {
      this.setState({ click: this.state.click + 1 });
    }
  }

  render() {
    let backgroundColor = 'darkblue';
    let color = 'white';
    const noOfClicks = this.state.click;

    switch (true) {
      case (noOfClicks >= 3 && noOfClicks < 6):
        backgroundColor = 'purple';
        break;
      case (noOfClicks >= 6 && noOfClicks < 9):
        backgroundColor = 'lightblue';
        break;
      case (noOfClicks >= 9 && noOfClicks < 12):
        backgroundColor = 'coral';
        break;
      case (noOfClicks >= 12 && noOfClicks < 15):
        backgroundColor = 'orange';
        color = 'black';
        break;
      case (noOfClicks >= 15 && noOfClicks < 18):
        backgroundColor = 'yellow';
        color = 'black';
        break;
      case (noOfClicks === 18):
        backgroundColor = 'white';
        color = 'black';
        break;
      default:
        break;
    }

    return (
        <button style={{ color: color, backgroundColor: backgroundColor }} onClick={this.handleClick}>Hot Button</button>
    );
  }
}

export default HotButton;
