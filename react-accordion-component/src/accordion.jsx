import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { newElementId: null, oldElementId: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState({ newElementId: event.target.id, oldElementId: this.state.newElementId });
  }

  render() {
    const prop = this.props.content;
    let state = '';
    if (this.state.newElementId === this.state.oldElementId) {
      state = null;
    } else {
      state = this.state.newElementId;
    }

    const listElement = prop.map(item => {
      return (
            <div key={item.id}>
                <div className='acordion-item' id={item.id} onClick={this.handleClick}>{item.name}</div>
                <div className='acordion-description' id={item.id} onClick={this.handleClick} style={{ display: state === item.id ? 'block' : 'none' }}>{item.description}</div>
            </div>
      );
    });

    return (
        <div className="listContainer">
            {listElement}
        </div>
    );

  }
}

export default Accordion;
