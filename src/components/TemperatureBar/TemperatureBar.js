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
      <section id="TempBar" className="TempBar" aria-label="temperature-input-section" role="main">
        <form onSubmit={this.handleSubmit}>
         <label htmlFor="temp-input" aria-label="temperature-input">
          <input type="number"
                placeholder="Enter a Kelvin temperature."
                onChange={this.handleInputEvent}
                autoFocus="true"
                id="temp-input" />
          </label>
          <label htmlFor="konvertBtn" aria-label="temperature-convert-button">
            <button id="konvertBtn" onClick={() => convert(kelvin_temp)}>Konvert</button>
          </label>
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
