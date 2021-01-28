import { PAGINATION } from "../config/config"

export default class GithubService {
  _apiGitHub = 'https://api.github.com/'

  // hide in `.env.local`
  CLIENT_ID = process.env.REACT_APP_CLIENT_ID
  CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

  credentials = `client_id=${this.CLIENT_ID}&client_secret=${this.CLIENT_SECRET}`

  getResponse = async value => {
    const response = await fetch(`${this._apiGitHub}${value}${this.credentials}`)
      .then((res) => res.json())
      .then((data) => data)
    return response
  }

  getData = async (value) => {
    const response = await this.getResponse(`search/users?q=${value}&`)

    return response
  }

  getDataUser = async (name) => {
    const response = await this.getResponse(`users/${name}?`)
    return response
  }

  getDataRepos = async (name, page) => {
    const response = await this.getResponse(`users/${name}/repos?per_page=${PAGINATION}&page=${page}&`)
    return response
  }
}