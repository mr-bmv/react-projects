import React, { Fragment } from 'react'
import Card from '../components/Card';
import Search from '../components/Search'

function Home() {

    const cards = new Array(15).fill('').map((_, i) => i)

    const elements = cards.map(card => {
        return (
            <div className="col-sm-4 mb-4">
                <Card />
            </div>
        )
    })

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