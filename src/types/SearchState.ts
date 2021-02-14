import ResultItem from "./ResultItem";

export enum SearchType {
  user = 1,
  repository = 2,
  empty = 3
}

export interface SearchState {
  searchType?: SearchType
  data: ResultItem[]
  error?: string,
  query?: string,
  loading?: boolean
}