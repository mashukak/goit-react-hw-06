import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "/src/redux/contactsSlice.js";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  if (!Array.isArray(contacts)) {
    console.error("contacts.items не є масивом!", contacts);
    return <p className={styles.error}>Помилка: некоректні дані контактів.</p>;
  }

  const filteredContacts = contacts.filter(
    (contact) =>
      typeof contact.name === "string" &&
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={styles.item}>
            <span className={styles.contactInfo}>
              {name}: {number}
            </span>
            <button
              className={styles.deleteButton}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <p className={styles.noContacts}>Контактів не знайдено</p>
      )}
    </ul>
  );
};

export default ContactList;
