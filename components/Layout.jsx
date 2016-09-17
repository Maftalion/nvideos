import React from 'react';


const Layout = (props) => (
  <div className='app-container'>
    {props.children}
  </div>
)

Layout.propTypes = {
  children: React.Proptypes.element.isRequired
}

module.exports = Layout
