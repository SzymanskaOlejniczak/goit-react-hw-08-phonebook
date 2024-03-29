import s from './AddContact.module.css';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { contactsOperations } from 'redux/contacts';
import { NavLink } from 'react-router-dom';
import { ContactList } from 'components/ContactList/ContactList';

export default function AddContact() {
  const [message, setMessage] = useState(false);
  const dispatch = useDispatch();

  const showAlert = name => {
    setMessage(`${name} is already in contacts`);
    setTimeout(() => setMessage(false), 3000);
  };
  const saveContact = (name, number) => {
    dispatch(contactsOperations.saveContact({ name, number })).then(
      response => {
        const newName = response.payload.name;

        setMessage(`${newName} has been added to your contacts`);
        setTimeout(() => setMessage(false), 3000);
      }
    );
  };

  return (
    <>
      <div className={s.formPage}>
        <div className={s.container}>
          <button className={s.button}>
            <NavLink to="/filtercontact">Filter Contact</NavLink>
          </button>
          <h1 className={s.title}>Add Contact</h1>
          <div className={s.massage}>{message && <p>{message}</p>}</div>
        </div>
        <div>
          <ContactForm
            showAlert={showAlert}
            dispatchSaveContact={saveContact}
          />
          <ContactList/>
        </div>
      </div>
    </>
  );
}
