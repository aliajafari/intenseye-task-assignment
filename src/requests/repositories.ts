import api from './index';

export const getRepositoriesRequest = (q: string) => {
    return api.get<any>(`/search/repositories?q=${q}`)
}