/*  Spippet:  class based compnent  rcc */
import React, { Component } from 'react'
/*  Spippet:  import prop types  impt */
import PropTypes from 'prop-types';
import {Consumer} from '../context'
import axios from 'axios';
import {Link} from 'react-router-dom';
class Contact extends Component {
    
    state = {
        showContactInfo: false
    };

    // *? custom method not a life cicle method and you can not use this  so we use bind
    onShowClick = (e) => {
        this.setState({showContactInfo: !this.state.showContactInfo})
    }
    
    onDeleteClick =  async (id, dispatch) => {
        await axios
            .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            
            dispatch({type: 'DELETE_CONTACT', payload: id})
        
            console.log('id:', id)
        
           
    }

    
    render() {
        const {id, name, email, tel} = this.props;
        const {showContactInfo} = this.state;
        return (
            <Consumer> 
                {value => {
                    const { dispatch } = value;
                    return(
                        <div className="card card-body mb-3">
                            <h4>{name} <span onClick={this.onShowClick}>(v)</span>
                            <span onClick={this.onDeleteClick.bind(this, id, dispatch)}>
                                (x)
                            </span> <Link to={`contact/edit/${id}`}>Edit</Link></h4>
                            {showContactInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item">{email}</li>
                                    <li className="list-group-item">{tel}</li>
                                </ul>
                            ) :null}
                        </div>
                    )
                }}
            </Consumer>

        )
    }
}

/* validate props */
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default Contact;