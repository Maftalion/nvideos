
import React from 'react';
import {Link} from 'react-router';
import {connector} from '../redux/Store'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this);
  }

  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  }

  render () {
    let utilSpace;
    if (this.props.showSearch) {
      utilSpace = <input type='text'
        className='search-input'
        placeholder='search'
        value={this.props.searchTerm}
        onChange={this.handleSearchTermEvent} />
    } else {
      utilSpace = (
        <h2 className='header-back'>
          <Link to='/search'>
            ← Back
          </Link>
        </h2>
      )
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>
            nvideos
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

Header.propTypes = {
  setSearchTerm: React.PropTypes.func,
  showSearch: React.PropTypes.bool,
  searchTerm: React.PropTypes.string
}

export default connector(Header);
