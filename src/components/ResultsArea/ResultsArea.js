import React from 'react';
import PropTypes from 'prop-types';
import './ResultsArea.css';

/*
ResultsArea functional component accepts properties for
the temperature answer, activity sentence and
a corresponding background picture.
*/

export const ResultsArea = ({answer, activity, pic}) => {
    return (
      <section className="ResultsArea">
        <h3>{answer}</h3>
        <p id="results">{activity}</p>
        <div>{pic}</div>
      </section>
    );
  }

ResultsArea.propTypes = {
  answer: PropTypes.string.isRequired,
	activity: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired
}
