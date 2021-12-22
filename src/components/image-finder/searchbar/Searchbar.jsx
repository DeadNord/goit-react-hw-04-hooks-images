import s from './Searchbar.module.css';
import { PureComponent } from 'react';


class Searchbar extends PureComponent {
    state = {
        name: '',
      };

      handleNameChange = e => {
        this.setState({ name: e.currentTarget.value.toLowerCase() });
      };

      handleSubmit = e => {
        e.preventDefault();
   
        this.props.onSubmit(this.state.name);
        this.setState({ name: '' });
      };

      render() {
  return (
    <header className={s.searchbar}>
  <form className={s.form} onSubmit={this.handleSubmit}>
    <button type="submit" className={s.formButton}>
      <span className={s.formButtonLabel}>Search</span>
    </button>

    <input
      className={s.input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.name}
      onChange={this.handleNameChange}
    />
  </form>
</header>
  );
      }
};

export default Searchbar;
