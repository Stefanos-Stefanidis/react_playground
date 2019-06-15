/*  Spippet:  class based compnent  rcc */
import React, { Component } from 'react'
/*  Spippet:  import prop types  impt */
import PropTypes from 'prop-types';

class Contact extends Component {
    
    state = {
        showContactInfo: false
    };

    // *? custom method not a life cicle method and you can not use this  so we use bind
    onShowClick = (e) => {
        this.setState({showContactInfo: !this.state.showContactInfo})
    }
    
    // *? create a function that it's propagating up to the parrent component 
    // *? We click (X) that calls onDeleteClick and that calls deleteClickHandler
    onDeleteClick = (e) => {
        this.props.deleteClickHandler();
    }
    
    render() {
        const {name, email, tel} = this.props;
        const {showContactInfo} = this.state;
        return (
            <div className="card card-body mb-3">
                <h4>{name} <span onClick={this.onShowClick}>(v)</span><span onClick={this.onDeleteClick}>(x)</span></h4>
                {showContactInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item">{email}</li>
                        <li className="list-group-item">{tel}</li>
                    </ul>
                ) :null}

            </div>
        )
    }
}

/* validate props */
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;