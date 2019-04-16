import React from 'react';
import './Contact.scss';
import {Link} from 'react-router-dom';


function Contact(props) {

    if (props.name == null) {
        return null;
    }


const phoneEl = props.phone ==null ? null : <p> Phone: {props.phone}</p>


    return (
        <div className="contact">
        <h2>
            <Link to={'/detail/'+ props.id}>{props.name}</Link>
        </h2> 
        {phoneEl}
        {props.email != null && <p>Email: {props.email}</p>}
      </div>
    );
}

export default Contact;