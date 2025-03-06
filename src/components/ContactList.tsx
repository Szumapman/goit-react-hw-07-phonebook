import { Contact } from "../types/Contact";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "../redux/selectors";
import { deleteContact } from "../redux/contactsSlice";
import css from "./ContactList.module.css";



export const ContactList = () => {
  const dispach = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter((contact: Contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact: Contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => dispach(deleteContact(contact.id)) }>Delete</button>
        </li>
      ))}
    </ul>
  );
};