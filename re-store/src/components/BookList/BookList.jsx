import React, { Component } from 'react'
import { connect } from 'react-redux';
import BookListItem from '../BookListItem/BookListItem';
import withBookstoreService from '../HOC/withBookstoreService'

class BookList extends Component {

  componentDidMount() {
    // receive data using withBookstoreService
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
    console.log(data);

    // dispatch action to store
    this.props.booksLoaded(data)
  }

  render() {
    const { books } = this.props;
    return (
      <ul>
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
    books: state.books
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    booksLoaded: (newBooks) => {
      dispatch({ type: 'BOOKS_LOADED', payload: newBooks })
    }
  }
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);