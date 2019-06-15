import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {

    constructor(){
        super();
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: 'Steve Steve',
                    email: 's.stevenidis+4@gmail.com',
                    phone: '44444',
                },
                {
                    id: 2,
                    name: 'Stef Stef',
                    email: 's.stevenidis+5@gmail.com',
                    phone: '55555',
                },
                {
                    id: 3,
                    name: 'Stefan Stefan',
                    email: 's.stevenidis+6@gmail.com',
                    phone: '6666',
                },
            ]
        }
    }

    deleteContact = (id) => {
        const {contacts} = this.state;
        const newContacts = contacts.filter(contact => 
            contact.id !== id);
        this.setState({
            contacts: newContacts
        })
    }
    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {
                    contacts.map(contact => (
                        <Contact key={contact.id} name={contact.name} email={contact.email} tel={contact.phone} deleteClickHandler={this.deleteContact.bind(this,contact.id)} />
                    ))
                }
            </React.Fragment>
        )
    }
}

export default Contacts