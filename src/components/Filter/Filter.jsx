import s from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = props => {
  const { value, onChange } = props;
  const filterValue = e => {
    onChange(e.currentTarget.value);
  };

  return (
    <label htmlFor="filter" className={s.filterLabel}>
      {' '}
      Find contacts by name
      <input
        className={s.filterInput}
        onChange={filterValue}
        type="text"
        name="filter"
        id="filter"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      ></input>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};