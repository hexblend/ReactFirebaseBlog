import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = (props) => {
    const auth = props.auth;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper blue darken-2" style={{ 'background': '#202124'}}>
            <div className="container">
                <Link to='/' className="brand-logo">ReactBlog</Link>
                { links }
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);
