import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TemperatureBar.css';

// TemperatureBar receives convertTemp method for onChange handler to set state of Kelvin
// and props for onClick event
class TemperatureBar extends Component {

  state = {
    kelvin_temp: null
  }

  handleInputEvent = (event) => {
      this.setState({
        kelvin_temp: event.target.value
      });
  }

  render() {
    const { kelvin_temp } = this.state;
    return (
      <section id="TempBar" className="TempBar">
        <input type="text" placeholder="Enter a Kelvin temperature." onChange={this.handleInputEvent} />
        <button id="konvertBtn" onClick={() => this.props.convert(kelvin_temp)}>Konvert</button>
      </section>
    );
  }
}

TemperatureBar.PropTypes = {
  convert: PropTypes.func.isRequired,
  handleInputEvent: PropTypes.func.isRequired
}

export default TemperatureBar;
