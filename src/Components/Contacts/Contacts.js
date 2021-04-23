import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-action';
import { visibleContacts } from '../../redux/contacts/contacts-selector';
import { List, ListItem } from './ContactsStyledComponent';

function Contacts() {
  const contacts = useSelector(visibleContacts);
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button
              type="button"
              onClick={() => dispatch(actions.deleteContact(id))}
            >
              Delete
            </button>
          </ListItem>
        );
      })}
    </List>
  );
}

export default Contacts;
