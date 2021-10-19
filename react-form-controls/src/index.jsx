import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Email: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ Email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('email: ', this.state.Email);
  }

  render() {
    return (
          <form onSubmit={this.handleSubmit}>
              <label>
                  Email
                  <input type="text" onChange={this.handleChange} />
              </label>
              <button type="submit">Sign Up</button>
          </form>
    );
  }
}

ReactDOM.render(
    <NewsletterForm />,
    document.querySelector('#root')
);
