import React from 'react';
import firebase from 'firebase';

const handleSignOutButton = () => {
  firebase.auth().signOut();
};

const Header = () => (
  <div className="Footer">
    <div className="container">
      <div className="row" style={{ marginBottom: '10px' }}>
        <button type="button" onClick={handleSignOutButton} className="btn btn-warning">
          Sign Out
        </button>
      </div>
    </div>
  </div>
);

export default Header;
