import { createStore, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk"
import searchReducer from '../reducers/searchReducer'
import { SearchState } from '../../types/index'
import * as Actions from '../actions/searchActions';
import { ActionType } from 'typesafe-actions';

const store: Store<SearchState, ActionType<typeof Actions>> = createStore(searchReducer, applyMiddleware(thunk))

export default store;