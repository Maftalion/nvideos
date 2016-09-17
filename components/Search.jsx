import React from 'react';
import Header from './Header';

export default class Search extends React.Component {
  render() {
    return (
      <div className='shows'>
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
    )
  }
}
