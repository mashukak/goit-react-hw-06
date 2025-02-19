import ContactsForm from "/src/components/ContactsForm/ContactsForm";
import ContactList from "/src/components/ContactList/ContactList";
import SearchBox from "/src/components/SearchBox/SearchBox";
import styles from "./App.module.css";

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
