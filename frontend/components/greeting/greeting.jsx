import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign up!</Link>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            &nbsp;
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
