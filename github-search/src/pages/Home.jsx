import React, { Fragment } from 'react'
import Card from '../components/Card';
import Search from '../components/Search'
import { useGitContext } from '../context/GitContext';

function Home() {
  const { users, loading } = useGitContext()

  console.log(users)

  if (loading) {
    return (
      <div className="text-center">Loading ...</div>
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