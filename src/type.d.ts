import { string } from "yargs"

declare module "lodash";

enum Languages {
  'Javascript',
  'Scala',
  'Python',
}

type LoadingAction = {
  type: string
  payload: boolean
}

type KeywordAction = {
  type: string
  payload: string
}

type LanguageAction = {
  type: string
  payload: string
}

type DataAction = {
  type: string
  payload: Array<any>
}

type RepositoryState = {
  data: any[]
  keyword: string
  languages: Array<string>
  selectedLanguage: String<Languages>
  loading: boolean
}

type HeaderType = {
  languages: Array<string>
  selectedLanguage: String<Languages>
  keyword: string
  onChangeKeyword: Function<HTMLInputElement>
  onChangeLanguage: Function<HTMLInputElement>
}

type TableType = {
  rows: Array<any>
}