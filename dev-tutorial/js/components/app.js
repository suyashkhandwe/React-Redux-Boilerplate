import React from 'react';
import UserList from '../containers/user-list'
import UserDetails from '../containers/user-details'
require('../../scss/style.scss');
//As in case of natice React, component only returns the HTML to be rendered

const App = () => (
  <div>
    <h2>User Name List</h2>
    <UserList />
    <hr/>
    <h3>User Details</h3>
    <UserDetails />
  </div>
);

export default App;
