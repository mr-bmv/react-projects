import React from 'react'

const _apiGitHub = 'https://api.github.com/search/'
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const getPlanet = async (value) => {

    const response = await fetch(`${_apiGitHub}users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
        .then((res) => res.json())
        .then((data) => data.items)

    return response
}

const Delete = () => {

    return (
        <div>
            delete
        </div>
    )
}

export default Delete
