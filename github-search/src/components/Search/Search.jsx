import React from 'react'
import { useState } from 'react'
import { useGitContext } from '../../context/GitContext'

const Search = () => {

  const [value, setValue] = useState('')

  const github = useGitContext()

  const onSubmit = (event) => {
    event.preventDefault();
    if (value.trim()) {
      github.search(value)
      setValue('')
    }
  }

  return (
    <form className="new-task d-flex mb-4" onSubmit={onSubmit}>
      <input
        type='text'
        className="form-control"
        placeholder='Put username for searching ...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  )
}

export default Search;