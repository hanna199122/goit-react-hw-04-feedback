import css from './App.module.css';
import Statistics from 'components/statistics';
import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions';
import Section from 'components/sections/Section';
import PropTypes from 'prop-types';
import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const feedbackOptions = { good, neutral, bad };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round(
      (good * 100) / (good + bad + neutral)
    );

    return positivePercentage;
  };

  return (
    <div className={css['app-container']}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          // onLeaveFeedback={onClickBtn}
          // options={Object.keys(feedbackOptions)}
          good={good}
          setGood={setGood}
          setNeutral={setNeutral}
          setBad={setBad}
          neutral={neutral}
          bad={bad}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <p>There is no feedback</p>
        )}
      </Section>
    </div>
  );
};

export default App;

FeedbackOptions.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
