import PropTypes from 'prop-types';
import { List, Item } from './ContactList.styled';

export const ContactList = ({ contacts }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <p>
          {name}: {number}
        </p>
      </Item>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
