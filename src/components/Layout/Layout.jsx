import React, { PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
  render() {
    const { location, ...rest} = this.props;

    return (
      <div className='w-full h-full relative overflow-hidden'>
        <Header location={location}/>

        {/*Page content will be injected into this div*/}
        <section id='content' className='content' {...rest} />

        <Footer/>
      </div>
    );
  }
}

export default Layout;
