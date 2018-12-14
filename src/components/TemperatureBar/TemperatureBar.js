import React from 'react';
import PropTypes from 'prop-types';
import './TemperatureBar.css';

// TemperatureBar receives convertTemp method for onChange handler to set state of Kelvin
// and props for onClick event
class TemperatureBar extends React.Component {
  state = {
    k_number: null
  }

  convert = () => {
    this.props.convert(this.state.k_number);
  }

  handleInputEvent = (event) => {
      this.setState({
        k_number: event.target.value
      });
  }

  render() {
    return (
      <section id="TempBar" className="TempBar">
        <input type="text" placeholder="Enter a Kelvin temperature." onChange={this.handleInputEvent} />
        <button id="konvertBtn" onClick={this.convert}>Konvert</button>
      </section>
    );
  }
}

TemperatureBar.PropTypes = {
  convert: PropTypes.func.isRequired
}

export default TemperatureBar;
