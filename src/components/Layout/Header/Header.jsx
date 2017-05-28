import React from 'react';
import NavAside from './Navbar';

class Header extends React.Component {

  render() {
    const { location } = this.props;
    return (
      <header>
        <NavAside location={location}/>
      </header>
    );
  }

}

export default Header;
