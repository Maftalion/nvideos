import React from 'react';
import Header from './Header';
import {connector} from '../redux/Store';


class Details extends React.Component {
  assignShow(id) {
    const showArray = props.shows.filter((show) => show.imdbID === id);
    return showArray[0];
  }
  render () {
    const params = this.props.params || {};
    const { title, description, year, poster, trailer } = assignShow(props.params.id);
    return (
      <div className='container'>
        <Header />
        <div className='video-info'>
          <h1 className='video-title'>{title}</h1>
          <h2 className='video-year'>({year})</h2>
          <img className='video-poster' src={`public/img/posters/${poster}`} />
          <p className='video-description'>{description}</p>
        </div>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder='0'
            allowFullScreen>
          </iframe>
        </div>
      </div>
    )
  }
}


Details.propTypes = {
  shows: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  params: React.PropTypes.object
}

export default connector(Details);
