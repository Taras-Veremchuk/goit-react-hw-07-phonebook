import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { PhonTitle, ContTitle, Container } from './App.styled';

export default function App() {
  const contacts = useSelector(getContacts);
  return (
    <Container>
      <PhonTitle>Phonebook</PhonTitle>
      <ContactForm />
      {contacts.length > 0 ? (
        <>
          <ContTitle>Contacts</ContTitle>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p message="No feedback given">No contacts added</p>
      )}
    </Container>
  );
}
