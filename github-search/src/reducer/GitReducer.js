import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from "./actionTypes";

const handlers = {
    [SEARCH_USERS]: (state, { payload }) => ({ ...state, users: payload, loading: false }),
    [GET_REPOS]: (state, action) => ({ ...state, repos: action.payload }),
    [GET_USER]: (state, action) => ({ ...state, user: action.payload, loading: false }),
    [SET_LOADING]: state => ({ ...state, loading: true }),
    [CLEAR_USERS]: state => ({ ...state, users: [] }),
    DEFAULT: (state) => state
}

export const GitReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}