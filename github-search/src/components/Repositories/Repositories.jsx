import React from 'react'
import PropTypes from 'prop-types'

const Repositories = ({ repos }) => {

  const repositories = repos.map(repo => (
    <div className="card mb-3 bg-dark" key={repo.id}>
      <div className="card-body">
        <h5>
          <a
            href={repo.html_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {repo.name}
          </a>
        </h5>
      </div>
    </div>
  ))

  return (
    <React.Fragment>
      {repositories}
    </React.Fragment>
  )
}

Repositories.propTypes = {
  repos: PropTypes.array.isRequired
}

export default Repositories;
