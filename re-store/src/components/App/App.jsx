import React, { Component } from 'react'
import BookstoreService from '../../services/bookstore-service'
import { BookServiceProvider } from '../bookstore-service-context/bookstore-service-context'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import Spinner from '../Spinner/Spinner'

export default class App extends Component {

    state = {
        bookstoreService: new BookstoreService()
    }


    render() {
        return (
            <ErrorBoundary>
                <BookServiceProvider value={this.state.bookstoreService} >
                    <Spinner />
                </BookServiceProvider>
            </ErrorBoundary>
        )
    }
};
