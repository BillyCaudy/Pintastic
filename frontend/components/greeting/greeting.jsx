import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      &nbsp;📌
      <button onClick={() => openModal('signup')}>Enter</button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="personal-greeting">
      &nbsp;📌&nbsp;&nbsp;Welcome {currentUser.username}!&nbsp;&nbsp;
      <button className="logout-button" onClick={logout}>Log out</button>
    </hgroup>
  );

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );
};

export default Greeting;
