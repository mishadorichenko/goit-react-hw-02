import { useState, useEffect } from 'react';
import css from './App.module.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

function App() {
  const [values, setValues] = useState(() => {
    const savedFeedback = window.localStorage.getItem('saved-feedback');
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-feedback', JSON.stringify(values));
  }, [values]);

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setValues({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    } else {
      setValues({
        ...values,
        [feedbackType]: values[feedbackType] + 1,
      });
    }
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <div className={css.options}>
        <Options updateFeedback={updateFeedback} feedbackType={'good'}>
          Good
        </Options>
        <Options updateFeedback={updateFeedback} feedbackType={'neutral'}>
          Neutral
        </Options>
        <Options updateFeedback={updateFeedback} feedbackType={'bad'}>
          Bad
        </Options>
        {totalFeedback > 0 && (
          <Options updateFeedback={updateFeedback} feedbackType={'reset'}>
            Reset
          </Options>
        )}
      </div>
      {totalFeedback ? (
        <>
          <Feedback
            good={values.good}
            neutral={values.neutral}
            bad={values.bad}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
