import React from 'react';
import {Link} from 'react-router';


const Landing = () => (
  <div className='home-info'>
    <h1 className='title'>nvideo</h1>
    <input className='search' type='text' placeholder='Search' />
    <Link to='/search' className='browse-all'>Browse All</Link>
  </div>
)


export default Landing;
