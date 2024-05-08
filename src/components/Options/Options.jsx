function Options({ updateFeedback, feedbackType, children }) {
  return (
    <div>
      <button
        onClick={() => {
          updateFeedback(feedbackType);
        }}
      >
        {children}
      </button>
    </div>
  );
}

export default Options;
