import { BOOK_ADDED_TO_CART, BOOK_DECREASE_IN_CART, BOOK_DELETE_FROM_CART, FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from "./actionTypes";

const booksRequested = () => {
    return {
        type: FETCH_BOOKS_REQUEST,
    }
};

const booksLoaded = (newBooks) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: newBooks
    }
};

const booksError = (error) => {
    return {
        type: FETCH_BOOKS_FAILURE,
        payload: error
    }
};

const bookAddedToCart = (bookId) => {
    return {
        type: BOOK_ADDED_TO_CART,
        payload: bookId
    }
};

const fetchBooks = (dispatch, ownProps) => () => {
    dispatch(booksRequested())

    //  for promise
    ownProps.bookstoreService.getBooks()
        .then((data) => {
            // dispatch action to store
            dispatch(booksLoaded(data))
        })
        .catch((error) => {
            dispatch(booksError(error))
        })
};

const bookDeleteFromCart = (bookId) => {
    return {
        type: BOOK_DELETE_FROM_CART,
        payload: bookId
    }
};

const bookDecreaseInCart = (bookId) => {
    return {
        type: BOOK_DECREASE_IN_CART,
        payload: bookId
    }
}

export {
    booksLoaded,
    booksRequested,
    booksError,
    fetchBooks,
    bookAddedToCart,
    bookDeleteFromCart,
    bookDecreaseInCart
};