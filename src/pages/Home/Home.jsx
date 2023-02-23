import s from './Home.module.css';
import { NavLink } from 'react-router-dom';
import plus from '../../images/plus.png';
import search from '../../images/search.png';
import book from '../../images/book.png';

export default function Home() {
  return (
    <>
      <section title={'Welcom!'} className={s.hero}>
      <img src={book} alt="desktop"></img>
      <p style={{ textAlign: 'center', marginBottom: '25px' }}>
        This is a contact storage application.
      </p>
        <button className={s.heroButton}>
          <img src={plus} alt="icon" width={42} className={s.icon} />
          <NavLink to="/addcontact" className={s.heroLink}>
            Add Contact
          </NavLink>
        </button>
        <button className={s.heroButton}>
          <img src={search} alt="icon" width={42} className={s.icon} />
          <NavLink to="/filtercontact" className={s.heroLink}>
            Filter Contact
          </NavLink>
        </button>
      </section>
    </>
  );
}
        
