import React from 'react';
import AppBar from '../AppBar';
import './Layout.css';

const Layout = ({ children }) => (
  <div className="Layout">
    <AppBar />
    <hr />
    {children}
  </div>
);

export default Layout;
