import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TemperatureBar.css';

// TemperatureBar receives convertTemp method for onChange handler to set state of Kelvin
// and props for button onClick event
class TemperatureBar extends Component {

  state = {
    kelvin_temp: null
  }

  handleInputEvent = (event) => {
      this.setState({
        kelvin_temp: event.target.value
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const { kelvin_temp } = this.state;
    const { convert } = this.props;
    return (
      <section id="TempBar" className="TempBar">
        <form onSubmit={this.handleSubmit}>
          <input type="number"
                placeholder="Enter a Kelvin temperature."
                onChange={this.handleInputEvent}
                autoFocus="true" />
          <button id="konvertBtn" onClick={() => convert(kelvin_temp)}>Konvert</button>
        </form>
      </section>
    );
  }
}

TemperatureBar.PropTypes = {
  convert: PropTypes.func.isRequired,
  handleInputEvent: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default TemperatureBar;
