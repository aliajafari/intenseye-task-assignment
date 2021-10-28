import api from './index';

export const getRepositoriesRequest = (q: string) => {
    // ?q=tetris+language:assembly&sort=stars&order=desc
    return api.get<any>(`/search/repositories?${q}`)
}