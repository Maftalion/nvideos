import React from 'react';
import {Link} from 'react-router';
import {connector} from '../redux/Store';
import {hashHistory} from 'react-router';


class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this);
    this.gotoSearch = this.gotoSearch.bind(this);
  }

  handleSearchTermEvent(event) {
    this.props.setSearchTerm(event.target.value);
  }
  gotoSearch(event) {
    hashHistory.push('search');
    event.preventDefault();
  }

  render() {
    return(
      <div className='home-info'>
        <h1 className='title'>nvideos</h1>
        <form onSubmit={this.gotoSearch}>
          <input
            value={this.props.searchTerm}
            onChange={this.handleSearchTermEvent}
            className='search'
            type='text'
            placeholder='Search' />
        </form>
        <Link to='/search' className='browse-all'>Browse</Link>
      </div>
    )
  }
}

Landing.propTypes = {
  searchTerm: React.PropTypes.string,
  setSearchTerm: React.PropTypes.func
}

export default connector(Landing);
