import { useState } from "react";
import Section from "components/Section/Section";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Notification from "components/Notification/Notification";
const options = ['good', 'neutral', 'bad']
export function App() {

  const [reviews, setReviews] = useState({ good: 0, bad: 0, neutral: 0 });
  // const [good, setGood] = useState(0);
  // const [bad, setBad] = useState(0);
  // const [neutral, setNeutral] = useState(0);

  function countTotalFeedback() {
    return reviews.good + reviews.bad + reviews.neutral
  }
  function countPositiveFeedbackPercentage() {
    return reviews.good / (reviews.good + reviews.bad + reviews.neutral) * 100
  }
  const onLeaveFeedback = (option) => {
    setReviews((prev) => {
      let res = { ...prev }
      res[option] += 1
      return res
    })
    // if (option === "good") setGood((prev) => prev + 1)
    // else if (option === "bad") setBad((prev) => prev + 1)
    // else if (option === "neutral") setNeutral((prev) => prev + 1)
  }
  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();
  return (
    <div className="app" >
      <Section
        title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback} />
      </Section>


      <Section
        title="Statistics">
        {total > 0
          ? <Statistics
            good={reviews.good}
            neutral={reviews.neutral}
            bad={reviews.bad}
            total={total}
            positivePercentage={percentage}
          />
          : <Notification message="There is no feedback" />}
      </Section>
    </div >
  )
};
