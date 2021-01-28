import React, { Fragment, useMemo, useState } from 'react'
import { useEffect } from 'react';

// components
import Repositories from '../../components/Repositories/Repositories';
import Arrows from '../../components/Arrows/Arrows';
import Spinner from '../../components/Spinner/Spinner';

// context
import { useGitContext } from '../../context/GitContext';

// style
import './Profile.css'

const Profile = ({ match }) => {
  const [page, setPage] = useState(1);
  const { user, repos, loading, getUser, getRepos } = useGitContext();

  const urlName = match.params.name;
  const { name, company, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists } = user

  const onLeft = () => {
    setPage((page) => --page)
  }

  const onRight = () => {
    setPage((page) => ++page)
  }

  const pageQTY = useMemo(() => {
    return Math.ceil(public_repos / 5)
  }, [public_repos]);

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    getRepos(urlName, page)
    // eslint-disable-next-line
  }, [page])

  if (loading) {
    return <Spinner />
  }

  const showLeft = page > 1 ? true : false;
  const showRight = pageQTY > page ? true : false;

  return (
    <Fragment>

      {/* user card */}
      <h2 className=" text-primary text-center">User Card</h2>

      <div className="row main-row bg-dark " >
        {/* image side */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="blog-img">
            <img
              src={avatar_url}
              alt={name}
              className="img-fluid"
            />
          </div>
          <div className="row mb-3">
            <div className="col-sm-12">
              <ul className="list-group list-group-horizontal ul-cls">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <i className="fa fa-github-square fa-3x"
                    aria-hidden="true"
                    style={{ color: "black" }}
                  />
                </a>
              </ul>
            </div>
          </div>
        </div>
        {/* info side */}
        <div className="col-lg-8 col-md-6 col-sm-12 mt-2">
          <div className="blog-title mb-3">
            <h3 className="text-primary">{name}</h3>
          </div>
          <div className="blog-date mb-2">
            {location && <span className='text-primary' >Location: <span className='text-muted'>{location}</span></span>}
          </div>
          <div className="blog-desc mb-2">
            {bio && <Fragment><p>{bio}</p></Fragment>}
            <div>
              {login && <div><strong className="text-primary">Username: </strong> {login}</div>}
              {company && <div><strong className="text-primary">Company: </strong> {company}</div>}
              {blog && <div><strong className="text-primary">Website: </strong>
                <a href={blog}
                  rel="noopener noreferrer"
                  target="_blank"
                >{blog}
                </a>
              </div>}

              <div>
                <strong className="text-primary">Followers:</strong> {followers}
              </div>
              <div>
                <strong className="text-primary">Following:</strong> {following}
              </div>
              <div>
                <strong className="text-primary">Repositories:</strong> {public_repos}
              </div>
              <div>
                <strong className="text-primary">Gists:</strong> {public_gists}
              </div>
            </div>

          </div>
        </div>
      </div>
      <h2 className=" text-primary text-center">List of Repositories</h2>

      {/* List of Repository */}
      <Repositories repos={repos} />

      <Arrows
        left={showLeft}
        right={showRight}
        onLeft={onLeft}
        onRight={onRight}
      />

    </Fragment>
  )
}

export default Profile;