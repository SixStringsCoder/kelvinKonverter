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
      picture = <img alt="Antarctica" src={cold} />;
    } else if (this.state.fahrenheit < 90) {
      activity = "Time to go kayaking on the Willamette!";
      picture = <img alt="Willamette" src={cool} />;
    } else if (this.state.fahrenheit < 120) {
      activity = "Prepare for Las Vegan Summer Olympics Cactus Juggling event!";
      picture = <img alt="Cactus Juggling" src={warm} />;
    } else {
      activity = "Prepare for Saudi Arabian Summer Olympics Dirtboarding event!";
      picture = <img alt="Dirtboarding" src={hot} />;
    }

    this.setState({
      activity,
      picture
    });
  }

// Pass states to other components
// TemperatureBar needs to receive convertTemp method for onClick set up there
// ResultsArea needs to receive states to set up props in its render area
  render() {
    const { fahrenheit, celsius, answer, activity, picture } = this.state;
    return (
      <main className="App">
        <header className="NavBar">
          <h1>Kelvin Konverter</h1>
        </header>
        <TemperatureBar convert={this.convertTemp} />
        <ResultsArea
          fahrDegrees={fahrenheit}
          celsDegrees={celsius}
          answer={answer}
          activity={activity}
          pic={picture}
        />
        <footer className="Footer">
          <h3>2018©️SteveHanlon</h3>
        </footer>
      </main>
    );
  }
}

export default App;
