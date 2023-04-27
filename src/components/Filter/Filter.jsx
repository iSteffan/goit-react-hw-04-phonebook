import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ handleInputChange, filter }) => {
  return (
    <Input
      value={filter}
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={handleInputChange}
    />
  );
};

Filter.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
