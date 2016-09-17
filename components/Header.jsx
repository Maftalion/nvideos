
import React from 'react';
import {Link} from 'react-router';



export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSearchTermEvent (event) {
    this.props.handleSearchTermChange(event.target.value)
  }

  render () {
    let utilSpace;
    if (this.props.showSearch) {
      utilSpace = <input
        type='text'
        className='search-input'
        placeholder='search'
        value={this.props.searchTerm}
        onChange={this.handleSearchTermEvent} />
    } else {
      utilSpace = (
        <h2 className='header-back'>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>
            nvideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

const Header.propTypes = {
  handleSearchTermChange: React.Proptypes.func,
  showSearch: React.Proptypes.bool,
  searchTerm: React.Proptypes.string
}
