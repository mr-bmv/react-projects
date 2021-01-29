import { CLEAR_USERS, SEARCH_USERS, SET_LOADING } from "./actionTypes";
import { GitReducer } from "./GitReducer";

const initialState = {
  user: {},
  users: [1, 2, 3],
  loading: false,
  repos: [],
  page: 1,
};

describe("GitReducer", () => {
  describe("setLoading", () => {
    it("set loading in true", () => {
      const action = { type: SET_LOADING }
      expect(GitReducer(initialState, action)).toEqual({
        user: {},
        users: [1, 2, 3],
        loading: true,
        repos: [],
        page: 1,
      })
    })
  })

  describe("clear users", () => {
    it("clear array of users", () => {
      const action = { type: CLEAR_USERS }
      expect(GitReducer(initialState, action)).toEqual({
        user: {},
        users: [],
        loading: false,
        repos: [],
        page: 1,
      })
    })
  })

  describe("search users", () => {
    it("searching of users", () => {
      const action = {
        type: SEARCH_USERS,
        payload: [{
          avatar_url: "https://avatars.githubusercontent.com/u/27474473?v=4",
          html_url: "https://github.com/mr-bmv",
          login: "mr-bmv"
        }]

      }
      expect(GitReducer({
        user: {},
        users: [],
        loading: false,
        repos: [],
        page: 1,
      }, action))
        .toEqual(
          {
            user: {},
            users: [{
              avatar_url: "https://avatars.githubusercontent.com/u/27474473?v=4",
              html_url: "https://github.com/mr-bmv",
              login: "mr-bmv",
            }],
            loading: false,
            repos: [],
            page: 1,
          }
        )
    })
  })

});