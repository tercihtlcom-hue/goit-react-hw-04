import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={css.errorContainer}>
      <p className={css.errorText}>Bir şeyler ters gitti, lütfen tekrar deneyiniz!</p>
    </div>
  );
};

export default ErrorMessage;