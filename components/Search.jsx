import React from 'react';
import Header from './Header';
import ShowCard from './ShowCard';

export default class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }
  handleSearchTermChange (searchTerm) {
    this.setState({ searchTerm })
  }

  render() {
    return (
      <div className='container'>
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
          showSearch
        />
        <div className='shows'>
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  route: React.PropTypes.object
};
