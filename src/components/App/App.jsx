import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useLocalStorage } from 'hooks';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { GlobalStyle } from 'components/GlobalStyle';
import * as S from './App.styled';
import { ContactList } from 'components/ContactList';
import { storageKeys } from 'constants';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(
    storageKeys.DATA_CONTACTS_LS_KEY,
    []
  );
  const [filter, setFliter] = useState('');

  const changeFilter = e => {
    const { value } = e.target;

    setFliter(value);
  };

  const addContact = ({ name, number }) => {
    if (contactValidationByName(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = { id: nanoid(), name, number };

    setContacts(prevState => [newContact, ...prevState]);
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  };

  const contactValidationByName = newName => {
    return contacts.some(({ name }) => name === newName);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <S.Container>
      <GlobalStyle />

      <S.PrimaryTitle>Phonebook</S.PrimaryTitle>
      <ContactForm onSubmit={addContact} />

      <S.SecondaryTitle>Contacts</S.SecondaryTitle>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </S.Container>
  );
};
