import {useState, useEffect} from "react";
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
    const [contacts, setContacts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setContacts(data));
    }, []);

    const toggleForm = () => {
        setIsOpen(!isOpen);
    };

    const addContact = (newContact) => {
        setContacts([...contacts, {...newContact, id: contacts.length + 1}]);
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    return (
        <div className="App">
            <ContactList contacts={contacts} deleteContact={deleteContact}/>
            <button className="btn" onClick={toggleForm}>Додати контакт</button>
            {isOpen && <ContactForm addContact={addContact} toggleForm={toggleForm} isOpen={isOpen}/>}
        </div>
    );
}

export default App;
