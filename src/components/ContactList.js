import React from 'react';
import Contact from './Contact'

function ContactList({contacts}) {
    return(
        <div> 
          { contacts.map(contact => {
            return (
              <Contact 
              key = {contact.id}
              id = {contact.id}
              name = {contact.name}
              phone = {contact.phone}
              email = {contact.email}
              />
            )
          }) }
        </div>
    );
}

export default ContactList;
