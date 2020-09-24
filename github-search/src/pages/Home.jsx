import React, { Fragment } from 'react'
import Spinner from '../components/Spinner/Spinner';
import Card from '../components/Card';
import Search from '../components/Search'
import { useGitContext } from '../context/GitContext';

function Home() {
  const { users, loading } = useGitContext()

  if (loading) {
    return (
      <Spinner />
    )
  }

  const elements = users.map(user =>
    (
      < div className="col-sm-4 mb-4" key={user.id} >
        <Card
          login={user.login}
          avatar_url={user.avatar_url}
        />
      </ div>
    )
  )

  return (
    <Fragment>
      <Search />
      <div className='row'>
        {elements}
      </div>
    </Fragment>
  )
}

export default Home;