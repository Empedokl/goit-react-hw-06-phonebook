import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/add', (name, number) => ({
  type: 'contact/add',
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction('contact/delete');
const changeFilter = createAction('contact/changeFilter');

const actions = { addContact, deleteContact, changeFilter };

export default actions;
