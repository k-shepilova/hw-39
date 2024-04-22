function ContactItem({contact, deleteContact}){
    return(
        <tr>
            <td>{contact.name}</td>
            <td>{contact.username}</td>
            <td>{contact.phone}</td>
            <td><button onClick={() => deleteContact(contact.id)}>X</button></td>
        </tr>
    )
}

export default ContactItem;
