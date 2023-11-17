import Contacts from '../Contacts/Contacts.jsx';
import css from './ContactList.module.css'

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <Contacts
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};
export default ContactList;
