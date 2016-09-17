import React from 'react';
import Link from 'react-router';


export default const Landing = () => (
  <div className='home-info'>
    <h1 className='title'>nvideo</h1>
    <input className='search' type='text' placeholder='Search' />
    <Link to='/search' className='browse-all'>Browse All</Link>
  </div>
)
