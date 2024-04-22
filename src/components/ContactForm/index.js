import { useState } from "react";
import styles from "./styles.module.css";

function ContactForm({ toggleForm, addContact, isOpen }) {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name.trim() || !username.trim() || !phone.trim()) {
            alert("All fields are required.");
            return;
        }
        addContact({ name, username, phone });
        toggleForm();
    };

    return (
        <form
            className={styles.contactForm}
            onSubmit={handleSubmit}
            style={{ display: isOpen ? 'block' : 'none' }}>

            <input
                type="text"
                placeholder="Ім'я"
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Нік"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />

            <input
                type="text"
                placeholder="Телефон"
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />

            <button
                className={styles.submit}
                type="submit"
            >Зберегти</button>

            <button
                className={styles.cancel}
                type="button"
                onClick={toggleForm}
            >Скасувати</button>
        </form>
    );
}

export default ContactForm;
