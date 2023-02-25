import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';
import { Filter } from 'components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { contactsOperations, contactsSelectors } from 'redux/contacts/index';
import { NavLink } from 'react-router-dom';
import s from './FilterContact.module.css';

export default function FilterContact() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(contactsSelectors.getContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const isError = useSelector(contactsSelectors.getError);

  return (
    <div className={s.formPage}>
      <div>
        <button className={s.button}>
          <NavLink to="/addcontact">Add Contact</NavLink>
        </button>
        <h1 className={s.title}>Filter Contact</h1>
        <div className={s.massage}>
          {contacts.length === 0 && <p>No contacts saved yet</p>}
          {isError && <p>{isError.message}</p>}
        </div>
      </div>
      <div>
        <Filter />
        <div className={s.wrapper}>
          {contacts.length !== 0 ? <ContactList /> : ''}
        </div>
        {isLoading && <Loader />}
      </div>
    </div>
  );
}
