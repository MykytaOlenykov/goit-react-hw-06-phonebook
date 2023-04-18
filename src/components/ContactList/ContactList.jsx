import PropTypes from 'prop-types';
import * as S from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <S.List>
    {contacts.map(({ id, name, number }) => (
      <S.Item key={id}>
        <p>
          {name}: {number}
        </p>
        <S.Button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </S.Button>
      </S.Item>
    ))}
  </S.List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
