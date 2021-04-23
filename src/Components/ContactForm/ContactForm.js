import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-action';
import { getContacts } from '../../redux/contacts/contacts-selector';
import {
  Form,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactFormStyledComponent';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const isContactAlready = () =>
    contacts.some(contact => contact.name === name);

  const handleSubmit = e => {
    e.preventDefault();
    if (isContactAlready()) {
      alert(`${name} is already in contacts!`);
      return;
    }
    dispatch(actions.addContact(name, number));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          value={name}
          name="name"
          onChange={handleInput}
          placeholder="Name*"
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="number"
          value={number}
          name="number"
          onChange={handleInput}
          placeholder="111-11-11*"
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
}

export default ContactForm;
