import React, { Component } from 'react';

import Contacts from './Contacts';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts)
      this.setState({
        contacts: parseContacts,
      });
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
  
  addContact = contact => {
    this.setState(prevState => {
      if (prevState.contacts.some(el => el.name === contact.name)) {
        alert(`${contact.name} is already in contacts!`);
        return;
      }
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  handleButtonDelete = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId,
        ),
      };
    });
  };

  handleFilter = filter => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <section className="section">
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        {contacts.length > 0 && (
          <Filter name={filter} onChangeFilter={this.handleFilter} />
        )}
        <Contacts
          contacts={visibleContacts}
          onDeleteContact={this.handleButtonDelete}
        />
      </section>
    );
  }
}
