/*  Spippet:  function based compnent  rfce */
import React from 'react'
/*  Spippet:  import prop types  impt */
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


const Header = (props) => {
    const {branding} = props
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">{branding}</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li>
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                            <Link to="/contact/add" className="nav-link">
                                Add
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
/* set a default prop */
Header.defaultProps = {
    branding: 'My App'
};

/* validate props */
Header.propTypes = {
    branding: PropTypes.string.isRequired
};

/* styles */


export default Header
