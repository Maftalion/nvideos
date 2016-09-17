import React from 'react';


export default const Layout = (props) => (
  <div className='app-container'>
    {props.children}
  </div>
)

Layout.propTypes = {
  children: React.Proptypes.element.isRequired
}
