import React, { Component } from 'react';
import Contact from './Contact';
import Axios from 'axios';
//link AddScreen to Homescreen
import {Link} from 'react-router-dom';


class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: null,
    };
  }

  render() {
    return(
      <div>
        
        <p>
            <Link to="/">Back</Link>
        </p>
       

        {this.state.contact && <Contact
        name={this.state.contact.name}
        phone={this.state.contact.phone}
        email={this.state.contact.email}    
        />}
      </div>
     
    );
}

loadData = () => {
  const id = this.props.match.params.id;
  Axios.get('/items/' + id)
  .then(response => {
    this.setState({
      contact: response.data.item,
      
    })
  })

  .catch(()=> {
    this.setState({
      loadingContacts:false,
      loadingContactsError:true,
    })
  })
  }
    
componentDidMount() {
  this.loadData();
  }

}
export default DetailScreen;
