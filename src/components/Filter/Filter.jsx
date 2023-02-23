import { nanoid } from 'nanoid';
import { changeFilter } from '../../redux/contacts/actions';
import { useDispatch } from 'react-redux';
import style from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const loginInputId = nanoid();
  const filter = e => {
    const value = e.target.value.toLowerCase();
    dispatch(changeFilter(value));
  };
  return (
    <label className={style.label}  htmlFor={loginInputId}>
      Find contacts by name
      <input
        className={style.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Enter name"
        onChange={filter}
      />
    </label>
  );
};
