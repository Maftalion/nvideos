import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Layout from './Layout';
import Landing from './Landing';
import Search from './Search';
import Details from './Details'
import {store} from '../redux/Store';
import {Provider} from 'react-redux';

const myRoutes = () => (
  <Route path='/' component={Layout}>
    <IndexRoute component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/details/:id' component={Details} />
  </Route>
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
};

App.Routes = myRoutes;

export default App;
