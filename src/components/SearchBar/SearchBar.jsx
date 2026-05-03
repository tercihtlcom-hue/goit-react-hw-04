import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      toast.error('Lütfen bir arama terimi giriniz!');
      return;
    }
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={css.input}
        />
        <button type="submit" className={css.button}>Search</button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;