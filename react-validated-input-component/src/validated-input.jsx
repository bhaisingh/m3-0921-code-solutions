import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    let showIcon = '';
    let errorMessage = '';
    let fontColor = '';
    switch (true) {
      case this.state.password.length >= 8:
        showIcon = 'FaCheck';
        fontColor = 'green';
        break;
      case this.state.password.length === 0:
        showIcon = 'FaTimes';
        errorMessage = 'A password is required';
        fontColor = 'red';
        break;
      case this.state.password.length < 8:
        showIcon = 'FaTimes';
        errorMessage = 'Your password is too short';
        fontColor = 'red';
        break;
    }

    return (
        <div>
            <label>Password</label>
            <input type="password" value={this.state.passwordStatus} onChange={this.handleChange}/>
            <span style={{ color: fontColor }}> {showIcon === 'FaCheck' ? <FaCheck /> : <FaTimes />} </span>
            <div style={{ color: fontColor }}>{errorMessage}</div>
    </div>
    );
  }
}

export default ValidatedInput;
