import { getRepositoriesRequest } from "../requests/repositories"
import * as actionTypes from "./actionTypes"
import queryString from 'querystring';

// GET REPOSITORIES
export const setLoading = (payload: boolean): LoadingAction => {
  return {
    type: actionTypes.SET_LOADING,
    payload
  }
}

export const setKeyword = (payload: string): KeywordAction => {
  return {
    type: actionTypes.SET_KEYWORD,
    payload
  }
}

export const setLanguage = (payload: string): LanguageAction => {
  return {
    type: actionTypes.SET_LANGUAGE,
    payload
  }
}

export const setData = (payload: Array<any>): DataAction => {
  return {
    type: actionTypes.SET_REPOS,
    payload
  }
}

export const setQueryString = (payload: any): any => {
  return {
    type: actionTypes.SET_QUERYSTRING,
    payload
  }
}

export const getRepositories = () => {
  return async (dispatch: (args: LoadingAction | DataAction) => LoadingAction | DataAction, state: () => RepositoryState) => {
    const query = state().selectedLanguage + (state().keyword !== '' ? `+${state().keyword}` : '')
    state().queryString.q = query
    const q = queryString.stringify(state().queryString)
    dispatch(setLoading(true))
    await getRepositoriesRequest(q).then((res): void => {
      dispatch(setData(res.data))
      dispatch(setLoading(false))
    })
  }
}