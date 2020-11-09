import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';

// components
import BookListItem from '../BookListItem/BookListItem';
import withBookstoreService from '../HOC/withBookstoreService'
import { booksLoaded } from '../../actions'

//  styles
import './BookList.css'

class BookList extends Component {

  componentDidMount() {
    // receive data using withBookstoreService
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    // dispatch action to store
    this.props.booksLoaded(data)
  }

  render() {
    const { books } = this.props;
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
    books: state.books
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