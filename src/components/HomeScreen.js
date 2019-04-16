import React, { Component } from 'react';
import ContactList from './ContactList';
import Axios from 'axios';
//link AddScreen to Homescreen
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingContacts: false,
      loadingContactsError: false,
      contacts: [],
      counter: 0,
    };
  }
  
  handleAddCount = () => {
    const currentCount = this.state.counter;
    this.setState({
      counter: currentCount + 1,
    });
  };

  /* //not WORKING becaus eof passing the function
  handleAddCount2() {
    const currentCount = this.state.counter;
    this.setState({
      counter: currentCount + 1,
    });
  } */


  render() {
    return(
      <div>
        <p>Clicked: {this.state.counter}</p> 
        <p>
          <button id="add_count" onClick={this.handleAddCount}> Click!</button>
        </p>
        
        <p>
            <Link to="/add">Add Contact</Link>
        </p>
        {this.state.loadingContacts && <p>Loading</p>}
        {this.state.loadingContactsError && (
          <p>
            Loading error.{''}
            <a href="#" onClick={this.loadData}>
              Reload
            </a>
          </p>
        )}
        <ContactList  contacts={this.props.contacts}/>

      </div>
     
    );
}

loadData = () => {
  this.setState({
    loadingContacts:true,
    loadingContactsError:false,
  })
  Axios.get('/items').
  then(response => {
    this.setState({
        loadingContacts:false,
        loadingContactsError:false,
      })
    this.props.dispatch({
    // contacts: response.data.items,
      type: 'LOAD_DATA',
      items: response.data.items
    });
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

const ConnectedHomeScreen = connect(state => {
    return {
        contacts: state.items,
    };
})(HomeScreen);


export default ConnectedHomeScreen;
