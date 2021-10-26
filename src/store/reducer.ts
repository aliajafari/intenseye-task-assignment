import * as actionTypes from "./actionTypes"

const initialState: RepositoryState = {
  loading: false,
  languages: ['Javascript', 'Scala', 'Python'],
  selectedLanguage: 'Javascript',
  keyword: '',
  data: [],
}

const reducer = (state: RepositoryState = initialState, action: any): RepositoryState => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload }
    case actionTypes.SET_KEYWORD:
      return { ...state, keyword: action.payload }
    case actionTypes.SET_LANGUAGE:
      return { ...state, selectedLanguage: action.payload }
    case actionTypes.SET_REPOS:
      return { ...state, data: action.payload, }
    default:
      return state
  }
}

export default reducer