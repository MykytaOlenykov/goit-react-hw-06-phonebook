import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import * as S from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getFilteredContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <S.List>
      {filteredContacts.map(({ id, name, number }) => (
        <S.Item key={id}>
          <p>
            {name}: {number}
          </p>
          <S.Button type="button" onClick={() => handleDelete(id)}>
            Delete
          </S.Button>
        </S.Item>
      ))}
    </S.List>
  );
};
