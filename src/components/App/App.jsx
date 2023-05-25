import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { GlobalStyle } from 'components/GlobalStyle';
import * as S from './App.styled';

export const App = () => (
  <S.Container>
    <GlobalStyle />

    <S.PrimaryTitle>Phonebook</S.PrimaryTitle>
    <ContactForm />

    <S.SecondaryTitle>Contacts</S.SecondaryTitle>
    <Filter />
    <ContactList />
  </S.Container>
);
