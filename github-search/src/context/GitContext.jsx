import React, { useContext, useReducer } from 'react'
import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING, SET_REPOS_LOADING } from '../reducer/actionTypes'

import { GitReducer } from '../reducer/GitReducer'

import GithubService from '../services/GithubService'

const GitContext = React.createContext();

const githubService = new GithubService();

export const useGitContext = () => {
  return useContext(GitContext)
};

const GitProvider = ({ children }) => {

  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: [],
    reposLoading: false,
    page: 1,
  };

  const [state, dispatch] = useReducer(GitReducer, initialState);

  const search = async value => {
    setLoading()

    const response = await githubService.getData(value)

    dispatch({ type: SEARCH_USERS, payload: response.items })
  };

  const getUser = async name => {
    setLoading()

    const response = await githubService.getDataUser(name)

    dispatch({ type: GET_USER, payload: response })
  }

  const getRepos = async (name, page) => {
    // setLoading()
    setReposLoading()

    const response = await githubService.getDataRepos(name, page)

    dispatch({ type: GET_REPOS, payload: response })
  }

  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS })
  }

  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }

  const setReposLoading = () => {
    dispatch({ type: SET_REPOS_LOADING })
  }

  const { user, users, repos, loading, reposLoading } = state

  return (
    <GitContext.Provider value={{ search, getUser, getRepos, clearUsers, setLoading, user, users, repos, loading, reposLoading }}>
      { children}
    </GitContext.Provider>
  )
}

export default GitProvider;