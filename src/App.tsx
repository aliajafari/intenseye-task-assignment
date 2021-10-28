
import React, { useCallback, useEffect } from 'react'
import Header from './components/Header'
import Table from './components/Table'
import { useSelector, useDispatch } from "react-redux"
import { getRepositories, setKeyword, setLanguage, setQueryString } from "./store/actionCreators"
import { Dispatch } from "redux"
import * as _ from "lodash";
import Pagination from "react-js-pagination";

import LoadingGif from './styles/images/loading.gif'
import './styles/styles.scss'

function App() {

  const repositories = useSelector((state: RepositoryState) => state)
  const { loading, data, keyword, languages, selectedLanguage, queryString, total } = repositories

  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    getRepos()
  }, [])

  const getRepos = () => {
    dispatch(getRepositories())
  }

  const inputHandler = useCallback(_.debounce(() => {
    getRepos()
  }, 2000), []);

  const handleOnChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setKeyword(e.target.value))
    if (e.target.value.length >= 3) {
      inputHandler();
    }
  }

  const handleOnChangeLanguage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setLanguage(e.target.value))
    getRepos()
  }

  const handleOnChangePagination = (page: number): void => {
    dispatch(setQueryString({ property: 'page', value: page }))
    getRepos()
  }

  const handlerOnClickColumns = (column: any): void => {
    dispatch(setQueryString({ property: 'page', value: 1 }))
    dispatch(setQueryString({ property: 'sort', value: column }))
    dispatch(setQueryString({ property: 'order', value: queryString.order === 'desc' ? 'asc' : 'desc' }))
    getRepos()
  }

  return (
    <div className='container'>
      <Header
        onChangeKeyword={handleOnChangeKeyword}
        onChangeLanguage={handleOnChangeLanguage}
        keyword={keyword}
        languages={languages}
        selectedLanguage={selectedLanguage}
      />
      <div className='table-container'>
        {loading && <div className={`loading`}>
          <div><img alt='loading' src={LoadingGif} /></div>
        </div>}
        <Table rows={data} onClickColumn={handlerOnClickColumns} order={queryString.order} selectedColumnOrder={queryString.sort} />

      </div>
      <Pagination
        activePage={queryString.page}
        itemsCountPerPage={queryString.per_page}
        totalItemsCount={total}
        pageRangeDisplayed={10}
        onChange={handleOnChangePagination}
        nextPageText='next'
        prevPageText='prev'
      />
    </div>
  )
}

export default App