import React, { useCallback, useEffect } from 'react'
import Header from './components/Header'
import Table from './components/Table'
import { useSelector, useDispatch } from "react-redux"
import { getRepositories, setKeyword, setLanguage } from "./store/actionCreators"
import { Dispatch } from "redux"
const _: any = require('lodash');

import LoadingGif from './styles/images/loading.gif'
import './styles/styles.scss'

function App() {

  const repositories: any = useSelector((state: any) => state)
  const { loading, data, keyword, languages, selectedLanguage } = repositories

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

  console.log(loading)
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
          <div><img src={LoadingGif} /></div>
        </div>}
        <Table rows={data} />
      </div>
    </div>
  )
}

export default App