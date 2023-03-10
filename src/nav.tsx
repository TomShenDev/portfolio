import React,  { useState } from 'react';
import {Router, Link} from 'react-router-dom';
import './nav.css';

function Nav() {
  const [showMobileViewMenu, setShowMobileViewMenu] = useState(false);
  const showMenu = () => setShowMobileViewMenu(true);

  return (
    <div className="page-top">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className='left-bar'>
          <Link className="label" to="/">Tom Shen</Link>
        </div>
        <div className='right-bar'>
          <div className="page-list">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blogs">Blogs</Link>
          </div>
          <i className="fa fa-bars"/>
        </div>
    </div>
  );
}

export default Nav;
