import React from 'react'
import { useAlertContext } from '../context/AlertContext'

function Search() {

    const { showAlert } = useAlertContext()

    // It is temporary code just for test this solution
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            showAlert("this is text from Search", 'danger')
        }
    }

    return (
        <div className='form-group'>
            <input
                type='text'
                className="form-control"
                placeholder='Put username for searching ...'
                onKeyPress={onKeyPress}
            />
        </div>
    )
}

export default Search;