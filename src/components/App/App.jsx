import { useState, useEffect } from 'react';
import './App.css';
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
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
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
