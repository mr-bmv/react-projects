import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Repo from '../components/Repo';
import Spinner from '../components/Spinner/Spinner';
import { useGitContext } from '../context/GitContext';

function Profile({ match }) {

    const urlName = match.params.name;
    const { getUser, getRepos, user, repos, loading } = useGitContext()

    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <Spinner />
    }

    const {
        name, company, avatar_url,
        location, bio, blog,
        login, html_url, followers,
        following, public_repos,
        public_gists
    } = user

    return (
        <Fragment>
            <Link to="/" className="btn btn-link">Back</Link>

            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img
                                src={avatar_url}
                                alt={name}
                                style={{ width: '150px' }}
                            />
                            <h1>{name}</h1>
                            {location && <p>Location: {location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </Fragment>
                            }
                            <a
                                href={html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-dark"
                            >Open Profile</a>
                            <ul>
                                {login && <li>
                                    <strong>Username: </strong> {login}
                                </li>}

                                {company && <li>
                                    <strong>Company: </strong> {company}
                                </li>}

                                {blog && <li>
                                    <strong>Website: </strong> {blog}
                                </li>}
                            </ul>

                            <div className="badge badge-primary">Followers: {followers}</div>
                            <div className="badge badge-success">Following: {following}</div>
                            <div className="badge badge-info">Repositories: {public_repos}</div>
                            <div className="badge badge-dark">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>

            <Repo repos={repos} />
        </Fragment>
    )
}

export default Profile
