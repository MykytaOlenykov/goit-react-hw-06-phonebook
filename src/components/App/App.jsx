import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { GlobalStyle } from 'components/GlobalStyle';
import { Container, PrimaryTitle, SecondaryTitle } from './App.styled';
import { ContactList } from 'components/ContactList';
import { storageKeys } from 'constants';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem(
      storageKeys.DATA_CONTACTS_L_STORAGE_KEY
    );

    if (contacts) {
      const parsedContacts = JSON.parse(contacts);
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const prevContacts = prevState.contacts;
    const nextContacts = this.state.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem(
        storageKeys.DATA_CONTACTS_L_STORAGE_KEY,
        JSON.stringify(nextContacts)
      );
    }
  }

  changeFilter = e => {
    const { value } = e.target;

    this.setState({ filter: value });
  };

  addContact = ({ name, number }) => {
    if (this.contactValidationByName(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = { id: nanoid(), name, number };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  contactValidationByName = newName => {
    const { contacts } = this.state;
    return contacts.some(({ name }) => name === newName);
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilterContacts();

    return (
      <Container>
        <GlobalStyle />

        <PrimaryTitle>Phonebook</PrimaryTitle>
        <ContactForm onSubmit={this.addContact} />

        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
