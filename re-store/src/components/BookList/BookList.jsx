import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';

// components
import BookListItem from '../BookListItem/BookListItem';
import withBookstoreService from '../HOC/withBookstoreService'
import { booksLoaded, booksRequested, booksError } from '../../actions'
import Spinner from '../Spinner/Spinner'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'

//  styles
import './BookList.css'

class BookList extends Component {

  componentDidMount() {
    // receive data using withBookstoreService
    const { bookstoreService, booksRequested, booksError } = this.props;
    booksRequested()

    //  for promise
    bookstoreService.getBooks()
      .then((data) => {
        // dispatch action to store
        this.props.booksLoaded(data)
      })
      .catch((error) => {
        booksError(error)
      })
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />
    }

    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book} /></li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    loading: state.loading,
    error: state.error
  }
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError
};

export default compose(
  // get data from service
  withBookstoreService(),
  // need to  get/set data/actions/ to redux store
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);