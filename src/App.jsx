import { Component } from "react";
import Section from "components/Section/Section";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Notification from "components/Notification/Notification";
const options = ['good', 'neutral', 'bad']
export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  countTotalFeedback() {
    return this.state.good + this.state.bad + this.state.neutral
  }
  countPositiveFeedbackPercentage() {
    return this.state.good / (this.state.good + this.state.bad + this.state.neutral) * 100
  }
  onLeaveFeedback = (option) => {
    this.setState(prev => {
      return { [option]: prev[option] + 1 }
    })
  }
  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <div className="app">
        <Section
          title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback} />
        </Section>


        <Section
          title="Statistics">
          {total > 0
            ? <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={percentage}
            />
            : <Notification message="There is no feedback" />}
        </Section>
      </div>)
  };
};
