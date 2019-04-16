import React, { Component } from 'react';
import AddForm from './AddForm';
import Axios from 'axios';
import {Link} from 'react-router-dom';



class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingContacts: false,
    };
  }

addContact = (contact, {setSubmitting}) => {
  console.log('from app', contact);

  setSubmitting(true);
  this.setState({
    addingContactError: false,

  })

  Axios
  .post('/items', contact)
  .then(()=> {
    setSubmitting(false);

    //push the history when going to homescreen and going to homescreen
    this.props.history.push({
        pathname:'/'
    });
  })
  .catch(() => {
    setSubmitting(false);
    this.setState({
      addingContactError: true,
    });
  });

  
};

  render() {
    return(
      <div>
          <h2> Add Contact </h2>
          <p></p>
          {this.state.addingContactError && <p>Error send again</p>}


        <AddForm  onAddContact={this.addContact} />


     <p>
            <Link to="/">Back</Link>
    </p>
    </div>

    );

}



}
export default AddScreen;
