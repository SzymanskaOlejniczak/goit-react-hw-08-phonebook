import { deleteContact } from '../../redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts, getError } from 'redux/contacts/selectors';
import { FcEmptyTrash } from 'react-icons/fc';
import style from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const error = useSelector(getError);

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.replace(/-|\s/g, '').includes(filter.replace(/-|\s/g, ''))
  );
  const deleteContacts = data => {
    dispatch(deleteContact(data));
  };

  return filteredContacts.length > 0 ? (
    <ul className={style.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={style.contact} key={id}>
            <p>{name}:</p>
            <p>{number}</p>
            <button
              className={style.btn}
              type="button"
              onClick={() => deleteContacts(id)}
            >
              <span>Delete</span> <FcEmptyTrash />
            </button>
          </li>
        );
      })}
    </ul>
  ) : (
    (error && <p>Error: {error}</p>) || <p>No contacts</p>
  );
};
