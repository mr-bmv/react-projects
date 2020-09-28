import React from 'react'

const Repo = ({ repos }) => {

    const repositories = repos.map(repo => (
        <div className="card mb-3" key={repo.id}>
            <div className="card-body">
                <h5>
                    <a
                        href={repo.html_url}
                        rel="noopener noreferrer"
                        target="_blank"
                    >{repo.name}</a>
                </h5>
            </div>
        </div>
    ))

    return (<React.Fragment>{repositories}</React.Fragment>
    )
}

export default Repo;
