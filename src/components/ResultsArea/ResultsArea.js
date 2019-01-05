import React from 'react';
import PropTypes from 'prop-types';
import './ResultsArea.css';

export const ResultsArea = ({answer, activity, pic}) => {
    return (
      <section className="ResultsArea" aria-label="results-section" role="presentation">
        <h3 id="answer" tabIndex="0">{answer}</h3>
        <p id="results" tabIndex="0">{activity}</p>
        <div>{pic}</div>
      </section>
    )
  }

ResultsArea.propTypes = {
  answer: PropTypes.string.isRequired,
	activity: PropTypes.string.isRequired,
  pic: PropTypes.string
}
