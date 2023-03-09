import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { filteredContacts } from 'redux/selector';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(filteredContacts);

  return (
    <List>
      {contacts.map(({ name, phone, id }) => {
        return <ContactListItem key={id} id={id} name={name} phone={phone}></ContactListItem>;
      })}
    </List>
  );
};
