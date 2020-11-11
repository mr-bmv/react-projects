import {
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  BOOK_ADDED_TO_CART,
  BOOK_DELETE_FROM_CART
} from "../actions/actionTypes";

const initialState = {
  books: [],
  loading: true,
  error: false,
  cartItems: [],
  totalPrice: 65
};

// update item or add new item
const updateCartItems = (cartItems, item, index) => {
  if (index === -1) {
    // Add new element
    return [
      ...cartItems,
      item
    ]
  } else {
    // update element
    return [
      ...cartItems.slice(0, index),
      item,
      ...cartItems.slice(index + 1),
    ]
  }
};

const updateCartItem = (item, book) => {
  // if cartItems contain item with bookId we add one more
  if (item) {
    return {
      ...item,
      count: item.count + 1,
      total: item.total + book.price
    };
  } else {
    return {
      id: book.id,
      title: book.title,
      count: 1,
      total: book.price
    };
  }
}

const deleteCartItems = (cartItems, index) => {
  return [
    ...cartItems.slice(0, index),
    ...cartItems.slice(index + 1),
  ]
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    // to change loading in true, when we jump from page to page
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        books: [],
        loading: true,
        error: false
      }
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: false
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };
    case BOOK_ADDED_TO_CART:
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);

      // looking for index of element which the same like these which we choose
      //  if there are no element with this the same index we will get `-1`
      const itemIndex = state.cartItems.findIndex((item) => item.id === bookId)
      // take element with this index or `undefine`
      const item = state.cartItems[itemIndex];

      const newItem = updateCartItem(item, book);

      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
      };

    case BOOK_DELETE_FROM_CART:
      const bookIdDelete = action.payload;

      const itemIndexDelete = state.cartItems.findIndex((item) => item.id === bookIdDelete)

      return {
        ...state,
        cartItems: deleteCartItems(state.cartItems, itemIndexDelete)
      };

    default:
      return state;
  }
};

export default reducer;