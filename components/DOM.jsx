const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./App')
const { match } = require('react-router')

match({ history: App.History, routes: App.Routes }, (error, redirectLocation, renderProps) => {
  if (error) {
    return console.error('DOM error', error)
  }
  ReactDOM.render(<App {...renderProps} />, document.getElementById('app'))
})
