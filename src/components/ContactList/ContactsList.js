import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { contactsOperation, contactsSelectors } from '../../redux/contacts/index';


const ContactListItem = ({ id, name, phone, onRemove }) => {
    return <li >
        {name} : {phone} <button type="button" onClick={()=>onRemove(id)}>Delete</button>
    </li>
}

const ContactList = ({ contacts, onRemove }) => {
    if(contacts.length ===0) return null
    return (
        <ul>
            {contacts.map(contact => <ContactListItem key={uuidv4()} {...contact} onRemove={onRemove} /> )} 
        </ul>
    )
}



const mapStateToProps = state => ({
    contacts:contactsSelectors.getVisibleContacts(state)
})

const mapDispatchToProps = dispatch => ({
    onRemove:(id)=>dispatch(contactsOperation.removeContacts(id))
})

export default connect(mapStateToProps, mapDispatchToProps )(ContactList);
