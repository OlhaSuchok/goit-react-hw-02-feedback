import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  FeedbackOptionsList,
  FeedbackButtonItem,
  FeedbackButton,
} from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackOptionsList>
      <FeedbackButtonItem>
        {options.map(elem => (
          <FeedbackButton
            key={nanoid()}
            type="button"
            onClick={onLeaveFeedback}
          >
            {elem}
          </FeedbackButton>
        ))}
      </FeedbackButtonItem>
    </FeedbackOptionsList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};
