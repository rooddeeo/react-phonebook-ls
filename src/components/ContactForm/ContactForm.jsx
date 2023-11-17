import { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={css.contactBlock}>
          <label className={css.contactFormLable}>Name</label>
          <input
            className={css.contactInputForm}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>

        <div className={css.contactBlock}>
          <label className={css.contactFormLable}>Number</label>
          <input
            className={css.contactInputForm}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>

        <button className={css.contactBtn} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
