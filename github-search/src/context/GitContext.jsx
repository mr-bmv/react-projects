import React, { useContext } from 'react'
import { useReducer } from 'react'
import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from '../reducer/actionTypes'
import { GitReducer } from '../reducer/GitReducer'

// remove to service 
const _apiGitHub = 'https://api.github.com/'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const credentials = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`

const getResponse = async value => {
    const response = await fetch(`${_apiGitHub}${value}${credentials}`)
        .then((res) => res.json())
        .then((data) => data)
    return response
}

const getData = async (value) => {
    // const response = await fetch(`${_apiGitHub}search/users?q=${value}&${credentials}`)
    //     .then((res) => res.json())
    //     .then((data) => data)
    const response = await getResponse(`search/users?q=${value}&`)

    return response
}

const getDataUser = async (name) => {
    // const response = await fetch(`${_apiGitHub}users/${name}?${credentials}`)
    //     .then((res) => res.json())
    //     .then((data) => data)
    const response = await getResponse(`users/${name}?`)
    return response
}

const getDataRepos = async (name) => {
    // const response = await fetch(`${_apiGitHub}users/${name}/repos?per_page=5&${credentials}`)
    //     .then((res) => res.json())
    //     .then((data) => data)
    const response = await getResponse(`users/${name}/repos?per_page=5&`)
    return response
}

// ////////////////////////////////////////////////

const GitContext = React.createContext()

export const useGitContext = () => {
    return useContext(GitContext)
}

const GitProvider = ({ children }) => {

    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }

    const [state, dispatch] = useReducer(GitReducer, initialState)

    const search = async value => {
        setLoading()

        const response = await getData(value)

        // const response = await fetch(`${_apiGitHub}search/users?q=${value}&${credentials}`)
        //     .then((res) => res.json())
        //     .then((data) => data)
        console.log('response.items - ', response.items)

        dispatch({ type: SEARCH_USERS, payload: response.items })
    }

    const getUser = async name => {
        setLoading()

        const response = await getDataUser(name)

        dispatch({ type: GET_USER, payload: response.data })
    }

    const getRepos = async name => {
        setLoading()

        const response = await getDataRepos(name)

        dispatch({ type: GET_REPOS, payload: response.data })
    }

    const clearUsers = () => {
        dispatch({ type: CLEAR_USERS })
    }

    const setLoading = () => {
        dispatch({ type: SET_LOADING })
    }

    const { user, users, repos, loading } = state

    return (
        <GitContext.Provider value={{ search, getUser, getRepos, clearUsers, setLoading, user, users, repos, loading }}>
            { children}
        </GitContext.Provider>
    )
}

export default GitProvider;