import s from './ContactListItem.module.css';
import { FcPhone } from 'react-icons/fc';
import PropTypes from 'prop-types';

export const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li key={id} id={id} className={s.listItem}>
      <div className={s.container}>
        <FcPhone />
        <p>{name + ': ' + number}</p>
      </div>
      <button
        className={s.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
