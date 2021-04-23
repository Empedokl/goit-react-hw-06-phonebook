import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selector';
import Contacts from '../Contacts';
import ContactForm from '../ContactForm';
import Filter from '../Filter';

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <section className="section">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 && <Filter />}
      {contacts.length > 0 && <Contacts />}
    </section>
  );
}
