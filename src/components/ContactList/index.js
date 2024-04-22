import ContactItem from '../ContactItem';
import styles from "./styles.module.css"

function ContactList({ contacts, deleteContact }) {
    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th>Ім'я</th>
                <th>Нік</th>
                <th>Телефон</th>
                <th></th>
            </tr>
            </thead>
            <tbody>

            {contacts.map(contact => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    deleteContact={deleteContact}
                />
            ))}

            </tbody>
        </table>
    );
}

export default ContactList;
