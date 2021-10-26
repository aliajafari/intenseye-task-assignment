import { getRepositoriesRequest } from "../requests/repositories"
import * as actionTypes from "./actionTypes"

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

export const getRepositories = () => {
  return async (dispatch: (args: LoadingAction | DataAction) => LoadingAction | DataAction, state: () => RepositoryState) => {
    const query = state().selectedLanguage + (state().keyword !== '' ? `+${state().keyword}` : '')
    dispatch(setLoading(true))
    await getRepositoriesRequest(query).then((res): void => {
      dispatch(setData(res.data.items))
      dispatch(setLoading(false))
    })
  }
}


// /////////////////////////////////////////
// export function addArticle(article: IArticle) {
//   const action: ArticleAction = {
//     type: actionTypes.ADD_ARTICLE,
//     article,
//   }
//   return simulateHttpRequest(action)
// }

// export function removeArticle(article: IArticle) {
//   const action: ArticleAction = {
//     type: actionTypes.REMOVE_ARTICLE,
//     article,
//   }
//   return simulateHttpRequest(action)
// }
// export function simulateHttpRequest(action: ArticleAction) {
//   return (dispatch: DispatchType) => {
//     setTimeout(() => {
//       dispatch(action)
//     }, 500)
//   }
// }
