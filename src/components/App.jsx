import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList ';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';
import { getContacts, getError, getIsLoading } from 'redux/selector';
import { fetchContacts } from 'redux/operations';

export default function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const items = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {items.length > 0 ? <ContactList /> : <p>Your phonebook is empty. Please add contact.</p>}
    </Container>
  );
}
