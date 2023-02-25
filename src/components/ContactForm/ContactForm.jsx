import { contactsSelectors } from 'redux/contacts';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FcContacts } from 'react-icons/fc';
import style from './ContactForm.module.css';

export const ContactForm = ({ showAlert, dispatchSaveContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts);

  const saveContact = () => {
    if (
      contacts.find(
        contact => contact.name === name || contact.number === number
      )
    ) {
      showAlert(name);
      return;
    }

    dispatchSaveContact(name, number);
  };
  
  const handelInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    saveContact({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={style.submit} onSubmit={handleSubmit}>
      <label className={style.label}>
        Name
        <input
          className={style.input}
          type="text"
          name="name"
          value={name}
          onChange={handelInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="name"
          required
        />
      </label>
      <label className={style.label}>
        Number
        <input
          className={style.input}
          autoComplete="on"
          type="tel"
          name="phone"
          value={number}
          onChange={handelInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="number"
          required
        />
      </label>
      <button className={style.btn} type="submit">
        <span>Add contact</span> <FcContacts />
      </button>
    </form>
  );
};
