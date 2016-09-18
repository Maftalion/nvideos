import redux from 'redux';
import reactReduc from 'react-redux';


const SET_SEARCH_TERM = 'setSearchTerm';

const reducer = (state, action) => {
  switch(action.type) {
    case SET_SEARCH_TERM:
    const newState = {};
    Object.assign(newState, state, {searchTerm: action.value});
    return newState;
  }
}
