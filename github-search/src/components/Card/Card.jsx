import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './Card.css'

const Card = ({ login, avatar_url }) => {

  return (
    <div className="card main-card">
      <img src={avatar_url} alt={login} className='card-img-top' />
      <div className='card-body'>
        <h5 className="card-title"> {login}</h5>
        <Link to={'/profile/' + login}
          className='btn btn-primary'>Open</Link>
      </div>
    </div>
  )
}

Card.propTypes = {
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
}

export default Card;