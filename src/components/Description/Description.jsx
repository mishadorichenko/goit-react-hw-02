import css from './Description.module.css';

function Description() {
  return (
    <header className={css.header}>
      <h1 className={css.headerTitle}>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </header>
  );
}

export default Description;
