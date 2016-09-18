import React from 'react';
import Header from './Header';
import ShowCard from './ShowCard';
import {connector} from '../redux/Store'

const Search = (props) => (
  <div className='container'>
    <Header showSearch />
    <div className='shows'>
      {props.route.shows
        .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
        .map((show) => (
          <ShowCard {...show} key={show.imdbID} />
      ))}
    </div>
  </div>
)

Search.propTypes = {
  route: React.PropTypes.object,
  searchTerm: React.PropTypes.string
};

export default connector(Search);
