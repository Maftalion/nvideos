import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Layout from './Layout';
import Landing from './Landing';
import Search from './Search';
import {shows} from '../public/data';



class App extends React.Component {
  render() {
    return (
      <Router history={hashistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} shows={shows} />
        </Route>
      </Router>
    )
  }
}

ReactDom.render(<App />,
  document.getElementById('app'));
