import css from './App.module.css';
import { Component } from 'react';
import Statistics from 'components/statistics';
import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions';
import Section from 'components/sections/Section';
import PropTypes from 'prop-types';

class App extends Component {
  // static defaultProps = {
  //   initialValue: 0,
  // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const positivePercentage = Math.round(
      (good * 100) / (good + bad + neutral)
    );

    return positivePercentage;
  }

  onClickBtn = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={css['app-container']}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onClickBtn}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <p>There is no feedback</p>
          )}
        </Section>
      </div>
    );
  }
}

export default App;

FeedbackOptions.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
