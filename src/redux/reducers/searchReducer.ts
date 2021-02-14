import { SearchState } from '../../types/index'
import * as Actions from '../actions/searchActions';
import { ActionType } from 'typesafe-actions';


import {
  SEARCH_FINISHED,
  RESET_RESULT,
  ERROR,
  LOADING,
  TYPING
} from '../actions/actionsTypes';



const initialState: SearchState = {
  data: [],
  searchType: 3
};

function searchReducer(state: SearchState = initialState,
  action: ActionType<typeof Actions>): SearchState {
  switch (action.type) {
    case SEARCH_FINISHED:
      return { ...state, data: action.payload, error: undefined };
    case ERROR:
      return { ...state, data: [], searchType: 3, error: action.payload };
    case RESET_RESULT:
      return { ...state, data: [], searchType: 3, error: undefined };
    case TYPING:
      return { ...state, query: action.payload, error: undefined };
    case LOADING:
      return { ...state, loading: action.payload, error: undefined };
    default:
      return state;
  }
}





export default searchReducer;