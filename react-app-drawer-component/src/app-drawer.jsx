import React from 'react';
import { FaBars } from 'react-icons/fa';
import image from './Shrek.jpg';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drawerStatusClose: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.drawerStatusClose) {
      this.setState({ drawerStatusClose: false });
    } else {
      this.setState({ drawerStatusClose: true });
    }
  }

  render() {
    let displaySwitch = '';
    if (this.state.drawerStatusClose) {
      displaySwitch = 'none';
    } else {
      displaySwitch = 'block';
    }

    return (
      <div className="top-container">
        <div className="menu-symbol" onClick={this.handleClick}><FaBars /></div>
        <div className="background-image">
          <img src={image}></img>
        </div>
        <div className="modal" style={{ display: displaySwitch }}>
          <div className="modal-content" onClick={this.handleClick} >
            <section>
              <h3>Learn About Me</h3>
              <ul className="unord-list">
                <li>Who Am I?</li>
                <li>Where do I live?</li>
                <li>Whats my best friends name?</li>
              </ul>
            </section>
          </div>
        </div>

      </div>
    );

  }
}

export default AppDrawer;
