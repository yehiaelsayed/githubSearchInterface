import * as actionTypes from './actionsTypes'
import { ResultItem } from '../../types/index'
import { action } from 'typesafe-actions';

export function searchFinished(result: ResultItem[]) {
  return action(actionTypes.SEARCH_FINISHED, result);
}

export function ResetResult() {
  return action(actionTypes.RESET_RESULT);
}

export function error(error: string) {
  return action(actionTypes.ERROR, error);
}

export function Typing(query: string) {
  return action(actionTypes.TYPING, query);
}


export function loading(loading: boolean) {
  return action(actionTypes.LOADING, loading);
}






