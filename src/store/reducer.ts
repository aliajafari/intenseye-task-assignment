import * as actionTypes from "./actionTypes"

const initialState: any = {
  loading: false,
  languages: ['Javascript','Scala','Phyton'],
  selectedLanguage: 'Javascript',
  keyword: '',
  data: [],
}

const reducer = (state:any = initialState, action: any):any => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {...state, loading: action.payload }
    case actionTypes.SET_KEYWORD:
      return {...state,keyword: action.payload }
    case actionTypes.SET_LANGUAGE:
      return {...state,selectedLanguage: action.payload }
    case actionTypes.SET_REPOS:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}

export default reducer

// const initialState: ArticleState = {
//   articles: [
//     {
//       id: 1,
//       title: "post 1",
//       body:
//         "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
//     },
//     {
//       id: 2,
//       title: "post 2",
//       body:
//         "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
//     },
//   ],
// }

// const reducer = (
//     state: ArticleState = initialState,
//     action: ArticleAction
//   ): ArticleState => {
//     switch (action.type) {
//       case actionTypes.ADD_ARTICLE:
//         const newArticle: IArticle = {
//           id: Math.random(), // not really unique
//           title: action.article.title,
//           body: action.article.body,
//         }
//         return {
//           ...state,
//           articles: state.articles.concat(newArticle),
//         }
//       case actionTypes.REMOVE_ARTICLE:
//         const updatedArticles: IArticle[] = state.articles.filter(
//           article => article.id !== action.article.id
//         )
//         return {
//           ...state,
//           articles: updatedArticles,
//         }
//     }
//     return state
//   }
  
  
// export default reducer