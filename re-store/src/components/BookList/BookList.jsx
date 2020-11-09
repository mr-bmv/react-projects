import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';

// components
import BookListItem from '../BookListItem/BookListItem';
import withBookstoreService from '../HOC/withBookstoreService'
import { booksLoaded } from '../../actions'
import Spinner from '../Spinner/Spinner'

//  styles
import './BookList.css'

class BookList extends Component {

  componentDidMount() {
    // receive data using withBookstoreService
    const { bookstoreService } = this.props;

    //  for promise
    bookstoreService.getBooks()
      .then((data) => {
        // dispatch action to store
        this.props.booksLoaded(data)
      })

  }

  render() {
    const { books, loading } = this.props;

    if (loading) {
      return <Spinner />;
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
    loading: state.loading
  }
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  // get data from service
  withBookstoreService(),
  // need to  get/set data/actions/ to redux store
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);