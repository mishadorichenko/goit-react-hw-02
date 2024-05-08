import css from './Options.module.css';

function Options({ updateFeedback, totalFeedback }) {
  return (
    <div className={css.options}>
      <button
        onClick={() => {
          updateFeedback('good');
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateFeedback('neutral');
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback('bad');
        }}
      >
        Bad
      </button>

      {totalFeedback > 0 && (
        <button
          onClick={() => {
            updateFeedback('reset');
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
