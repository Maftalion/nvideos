import {createStore} from 'redux';
import {connect} from 'react-redux';
import {shows} from '../public/data';

const SET_SEARCH_TERM = 'setSearchTerm';
const initialState = {
  searchTerm: '',
  shows
};

const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_SEARCH_TERM:
      return reduceSearchTerm(state, action);
    default:
      return state;
  }
};

const reduceSearchTerm = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {searchTerm: action.value});
  return newState;
};

export const store = createStore(rootReducer);

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
  shows: state.shows
});
const mapDispatchToProps = (dispatch) => {
  return{
    setSearchTerm(searchTerm) {
      dispatch({type: SET_SEARCH_TERM, value: searchTerm})
    }
  }
}

export const connector = connect(mapStateToProps, mapDispatchToProps);
