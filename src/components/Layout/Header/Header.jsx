import React from 'react';
import NavAside from './Navbar';

class Header extends React.Component {

  render() {
    const { location } = this.props;
    return (
      <header className='header'>
        <NavAside location={location}/>
        <label id="contentOverlay" htmlFor='nav-trigger' className='content-overlay'/>
      </header>
    );
  }

}

export default Header;
