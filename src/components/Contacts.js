import React, { Component } from 'react';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//we will use a class component because Contacts will be stateful
export class Contacts extends Component {
    
    render() { //Contacts will need to loop through the state and output on the page
        //destructure this.state
        const { contacts } = this.props; //this.state before I moved state

        return (
            // contacts will need to call a method on the prop that will then be available for the app
            <React.Fragment>

                {/* clicking the addContact button  should take you a new route (/contacts/new) with a form for adding a new contact */}
                <div>
                    <Link to="/contacts/new"><img className="add-contact-icon" src="https://static.thenounproject.com/png/783652-200.png" alt="add user icon">
                    </img></Link>
                </div>

                {contacts.map(contact =>
                    <Contact key={contact.id} contact={contact}
                    />
                ).sort()}
            
            </React.Fragment>
        )
    }
}
//should use proptypes to validate the information that is coming in
Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
}

export default Contacts;
