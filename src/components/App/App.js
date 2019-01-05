import React, { Component } from 'react';
import './App.css';
import TemperatureBar from '../TemperatureBar/TemperatureBar';
import { ResultsArea } from '../ResultsArea/ResultsArea';
import cold from '../ResultsArea/images/Antarctica_Olympics_desktop.jpg';
import cool from '../ResultsArea/images/Willamette_Olympics_desktop.jpg';
import warm from '../ResultsArea/images/cactusJuggling_Desktop.jpg';
import hot from '../ResultsArea/images/Arabian_Olympics_desktop.jpg';

class App extends Component {

    state = {
      fahrenheit: null,
      celsius: null,
      answer: "",
      activity: "",
      picture: ""
    }

  // convertTemp returns F and C temps which then sets state and calls picActivtyResponse func
  convertTemp = (kelvin) => {
    // Celsius is 273 degrees less than Kelvin
    let celsius = kelvin - 273;
    // Solve for Fahrenheit based on Celsius then round down
    let fahrenheit = Math.floor(celsius * (9/5) + 32);
    // Make the answer based on temperatures
    let answer = `${kelvin}°K = ${fahrenheit}°F or ${celsius}°C`;
    // Alert if button is clicked but text input is empty
    if (kelvin === 'undefined' || kelvin === null) {
      alert("I pity the fool who just clicks the button. Enter a Kelvin temperature!");
      return false;
    }

    this.setState({
        celsius,
        fahrenheit,
        answer,
      }, this.picActivtyResponse
    );
  }

  picActivtyResponse = () => {
    let activity;
    let picture;
    // Set the activity and corresponding pic based on temperatures
    if (this.state.fahrenheit < 50) {
      activity = "Prepare for Antartic Winter Olympics!";
      picture = <img tabIndex="0" src={cold} alt="person standing on snowy mountain" />;
    } else if (this.state.fahrenheit < 90) {
      activity = "Time to go kayaking on the Willamette!";
      picture = <img tabIndex="0" src={cool} alt="Front of a kayak on the Willamette River" />;
    } else if (this.state.fahrenheit < 120) {
      activity = "Prepare for Las Vegan Summer Olympics Cactus Juggling event!";
      picture = <img tabIndex="0" src={warm} alt="Man juggling cacti" />;
    } else {
      activity = "Prepare for Saudi Arabian Summer Olympics Dirtboarding event!";
      picture = <img tabIndex="0" src={hot} alt="Two boys dirtboarding in the desert" />;
    }

    this.setState({
      activity,
      picture
    });
  }

  render() {
    const { fahrenheit, celsius, answer, activity, picture } = this.state;
    return (
      <main className="App">
        <header tabIndex="0" className="NavBar" aria-label="site-name" role="banner">
          <h1 tabIndex="0">Kelvin Konverter</h1>
        </header>
        <TemperatureBar convert={this.convertTemp} />
        <ResultsArea
          fahrDegrees={fahrenheit}
          celsDegrees={celsius}
          answer={answer}
          activity={activity}
          pic={picture}
        />
        <footer className="Footer" role="contentinfo">
          <h3>©️ copyright SteveHanlon 2018</h3>
        </footer>
      </main>
    );
  }
}

export default App;
