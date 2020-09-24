import React from 'react'
import { useState } from 'react'
import { useAlertContext } from '../context/AlertContext'
import { useGitContext } from '../context/GitContext'

function Search() {

    const [value, setValue] = useState('')

    const { showAlert, hideAlert } = useAlertContext()
    const github = useGitContext()

    const onKeyPress = (e) => {

        if (e.key !== 'Enter') {
            return hideAlert()
        }

        if (value.trim()) {
            github.search(value.trim())
        } else {
            showAlert('You have to put username for searching', 'danger')
            github.clearUsers()
        }
    }

    return (
        <div className='form-group'>
            <input
                type='text'
                className="form-control"
                placeholder='Put username for searching ...'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={onKeyPress}
            />
        </div>
    )
}

export default Search;