import { List, ListItem, Btn, Contact } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            <Contact>
              {contact.name}: <span>{contact.number}</span>
            </Contact>
            <Btn type="button" onClick={() => onDelete(contact.id)}>
              Delete
            </Btn>
          </ListItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
