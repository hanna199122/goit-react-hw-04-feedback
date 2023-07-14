import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({
  onLeaveFeedback,
  good,
  bad,
  neutral,
  setGood,
  setNeutral,
  setBad,
}) => {
  return (
    <div className={css.feedbackList}>
      <button
        type="button"
        className={css.feedbackList__item}
        onClick={() => {
          setGood(good + 1);
        }}
      >
        good
      </button>
      <button
        type="button"
        className={css.feedbackList__item}
        onClick={() => {
          setNeutral(neutral + 1);
        }}
      >
        neutral
      </button>
      <button
        type="button"
        className={css.feedbackList__item}
        onClick={() => {
          setBad(bad + 1);
        }}
      >
        bad
      </button>
    </div>
  );

  // return (
  //   <ul className={css.feedbackList}>
  //     {options.map((option, index) => (
  //       <button
  //         key={index}
  //         onClick={() => onLeaveFeedback(option)}
  //         className={css.feedbackList__item}
  //       >
  //         {option}
  //       </button>
  //     ))}
  //   </ul>
  // );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};
