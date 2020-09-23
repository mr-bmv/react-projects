import React from 'react'
import { Link } from 'react-router-dom'

function Card() {

    const name = 'name'
    return (
        <div className="card">
            <img src={''} alt={''} className='card-img-top' />
            <div className='card-body'>
                <h5 className="card-title"> React JS</h5>
                <Link to={'/profile/' + name}
                    className='btn btn-primary'>Open</Link>
            </div>
        </div>
    )
}

export default Card
