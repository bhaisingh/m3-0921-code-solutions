import React from 'react';
import { FaRegCircle, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageId: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.timerID = setInterval(
      () => this.tick(),
      3000
    );
  }

  handleClick(id) {
    switch (true) {
      case (event.target.className === 'left-arrow'):
        clearInterval(this.timerID);
        if (this.state.imageId === 0) {
          this.setState({ imageId: this.props.pokeList.length - 1 });
        } else {
          this.setState({ imageId: this.state.imageId - 1 });
        }
        break;
      case (event.target.className === 'right-arrow'):
        clearInterval(this.timerID);
        if (this.state.imageId === this.props.pokeList.length - 1) {
          this.setState({ imageId: 0 });
        } else {
          this.setState({ imageId: parseInt(this.state.imageId) + 1 });
        }
        break;
      case (event.target.className === 'dots'):
        clearInterval(this.timerID);
        this.setState({ imageId: event.target.id });
        break;
    }
    this.timerID = setInterval(
      () => this.tick(),
      3000
    );

  }

  tick() {
    if (this.state.imageId >= this.props.pokeList.length - 1) {
      this.setState({ imageId: 0 });
    } else {
      this.setState({ imageId: parseInt(this.state.imageId) + 1 });
    }
  }

  render() {
    const prop = this.props.pokeList;
    return (
        <div className="carousal-container">
            <div className="carousel">
                <div className="left-arrow" onClick={this.handleClick}><FaAngleLeft /></div>
                <div className="images">
                    <img src={prop[this.state.imageId].imageLink}></img>
                </div>
                <div className="right-arrow" onClick={this.handleClick}><FaAngleRight /></div>
            </div>
            <div className="dots-container">
                {
                    prop.map(item => {
                      return (
                            <div className="dots" key={item.id} id={item.id} onClick={this.handleClick}><FaRegCircle /></div>
                      );
                    }
                    )
                }
            </div>
        </div>

    );
  }
}

export default Carousel;
