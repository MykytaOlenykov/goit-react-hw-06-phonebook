import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from 'components/GlobalStyle';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    const { value } = e.target;

    this.setState({ name: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name } = this.state;
    const newContact = { id: nanoid(), name };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { name, contacts } = this.state;

    return (
      <Container>
        <GlobalStyle />
        <h1>Phonebook App</h1>
        <h2>Phonebook</h2>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              onChange={this.handleChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}
