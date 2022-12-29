import React, { Component } from 'react';
import { Box } from 'components/Box/Box';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

export class App extends Component {
  state = {
    good: 6,
    neutral: 50,
    bad: 4,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (totalFeedback, feedback) => totalFeedback + feedback
    );
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  onClick = event => {
    const buttonClicked = event.target.textContent;
    this.setState(prevState => ({
      [buttonClicked]: prevState[buttonClicked] + 1,
    }));
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
        }}
      >
        <Box
          p={30}
          bg="secondary"
          border="2px solid"
          borderColor="border"
          borderRadius={8}
        >
          <Section title="Please, leave feedback">
            <FeedbackOptions options={options} onLeaveFeedback={this.onClick} />
            {total && (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              ></Statistics>
            )}
          </Section>
        </Box>
      </div>
    );
  }
}
