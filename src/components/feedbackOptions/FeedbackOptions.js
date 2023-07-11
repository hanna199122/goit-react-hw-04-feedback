import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  console.log(options);

  return (
    <ul className={css.feedbackList}>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onLeaveFeedback(option)}
          className={css.feedbackList__item}
        >
          {option}
        </button>
      ))}
    </ul>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.string,
  options: PropTypes.array,
};
