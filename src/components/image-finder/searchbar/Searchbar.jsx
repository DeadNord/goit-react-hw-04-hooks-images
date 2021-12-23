import s from './Searchbar.module.css';
import { useState } from 'react';

function Searchbar({ onSubmit }) {
  const [name, setName] = useState('');

  const handleNameChange = e => {
    setName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    // if (name.trim() === '') {
    //   return;
    // }
    onSubmit(name);
    setName('');
  };

  return (
    <header className={s.searchbar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <button type="submit" className={s.formButton}>
          <span className={s.formButtonLabel}>Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={name}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}

export default Searchbar;
