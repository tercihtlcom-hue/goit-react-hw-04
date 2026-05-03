import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.container}>
      <button className={css.button} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;