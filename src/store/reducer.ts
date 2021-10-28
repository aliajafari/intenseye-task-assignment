import * as actionTypes from "./actionTypes"

const initialState: RepositoryState = {
  loading: false,
  languages: ['Javascript', 'Scala', 'Python'],
  selectedLanguage: 'Javascript',
  keyword: '',
  queryString: {
    q: undefined,
    page: 1,
    per_page: 30,
    order: 'desc',
    sort: 'updated'
  },
  total: 0,
  data: [],
}

const reducer = (state: RepositoryState = initialState, action: any): RepositoryState => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload }
    case actionTypes.SET_KEYWORD:
      return { ...state, keyword: action.payload === '' ? undefined : action.payload }
    case actionTypes.SET_LANGUAGE:
      return { ...state, selectedLanguage: action.payload }
    case actionTypes.SET_REPOS:
      return { ...state, data: action.payload.items, total: action.payload.total_count }
    case actionTypes.SET_QUERYSTRING:
      const { property, value } = action.payload
      let sortValue = value

      if (property === 'sort' && value === 'stargazers_count') {
        sortValue = 'stars'
      } else if (property === 'sort' && value === 'forks_count') {
        sortValue = 'forks'
      } else if (property === 'sort' && value === 'updated_at') {
        sortValue = 'updated'
      }
      return {
        ...state,
        queryString: {
          ...state.queryString,
          [property]: sortValue,
        }
      }
    default:
      return state
  }
}

export default reducer