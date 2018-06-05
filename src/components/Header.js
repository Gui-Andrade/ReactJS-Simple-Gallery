import React from 'react';

import { Link } from 'react-router';

const Header = (props) => {
  return (
    <header className="mainHeader clearfix">
      <h1>
        <Link to="/">
          <img src="/images/logo-retina-blue.png" className="galogo" alt="" />
          <span className="pad-copy">
            A Simple ReactJS Gallery
          </span>
        </Link>
      </h1>

    </header>
  )
}

Header.propTypes = {
  
}

export default Header;
