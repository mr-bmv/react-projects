import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getFunName } from '../helpers'

import '../css/style.css'

export default class StorePicker extends Component {
    static propTypes = {
        history: PropTypes.object
    }

    myInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault();
        const storeName = this.myInput.current.value
        // change the page to store/<name of shop>
        this.props.history.push(`/store/${storeName}`)
    }

    render() {
        return (
            <form className="store-selector"
                onSubmit={this.goToStore}>
                <h2>Please Enter Store</h2>
                <input
                    type="text"
                    ref={this.myInput}
                    required placeholder="Store name"
                    defaultValue={getFunName()}
                // onChange={(word) => this.onChange(word)}
                />
                <button type="submit">Visit Store </button>
            </form>
        )
    }
}

