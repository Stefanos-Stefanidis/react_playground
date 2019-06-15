/*  Spippet:  function based compnent  rfce */
import React from 'react'
/*  Spippet:  import prop types  impt */
import PropTypes from 'prop-types';

const Header = (props) => {
    const {branding} = props
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">{branding}</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li>
                            <a href="/" className="nav-link">
                                Home
                            </a>
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
const headingStyle = {
    color:'red',
    fontSize:'60px'
}

export default Header
