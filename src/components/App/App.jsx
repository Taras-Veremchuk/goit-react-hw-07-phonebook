import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import { PhonTitle, ContTitle, Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <PhonTitle>Phonebook</PhonTitle>
      <ContactForm />
      <ContTitle>Contacts</ContTitle>
      <Filter />
      <ContactList />
    </Container>
  );
}
