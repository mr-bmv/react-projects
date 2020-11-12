import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from "../actions/actionTypes";

const updateBookList = (state, action) => {

    if (state === undefined) {
        // it is like initial state for beginning
        return {
            books: [],
            loading: true,
            error: false,
        }
    }

    switch (action.type) {
        case FETCH_BOOKS_REQUEST:
            return {
                books: [],
                loading: true,
                error: false
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                books: action.payload,
                loading: false,
                error: false
            }
        case FETCH_BOOKS_FAILURE:
            return {
                books: [],
                loading: false,
                error: action.payload
            }

        default:
            return state.bookList;
    }
};

export default updateBookList;