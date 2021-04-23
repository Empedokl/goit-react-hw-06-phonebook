export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const visibleContacts = state => {
  const allContacts = getContacts(state);
  const filter = getFilter(state);
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
