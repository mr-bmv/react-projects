const { BOOK_ADDED_TO_CART, BOOK_DECREASE_IN_CART, BOOK_DELETE_FROM_CART } = require("../actions/actionTypes")
// update item or add new item
const updateCartItems = (cartItems, item, index) => {
    // remove element
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, index),
            ...cartItems.slice(index + 1),
        ]
    }

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

const updateCartItem = (item, book, qty) => {
    // if cartItems contain item with bookId we add one more
    if (item) {
        return {
            ...item,
            count: item.count + qty,
            total: item.total + qty * book.price
        };
    } else {
        return {
            id: book.id,
            title: book.title,
            count: 1,
            total: book.price
        };
    }
};

const updateOrder = (state, bookId, qty) => {

    const { bookList: { books }, shoppingCart: { cartItems } } = state;
    const book = books.find((book) => book.id === bookId);

    // looking for index of element which the same like these which we choose
    //  if there are no element with this the same index we will get `-1`
    const itemIndex = cartItems.findIndex((item) => item.id === bookId)
    // take element with this index or `undefine`
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(item, book, qty);

    return {
        totalPrice: 0,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    };
};

const updateShoppingCart = (state, action) => {

    if (state === undefined) {
        return {
            // it is like initial state for beginning
            cartItems: [],
            totalPrice: 0
        }
    }
    switch (action.type) {
        // to change loading in true, when we jump from page to page

        case BOOK_ADDED_TO_CART:
            return updateOrder(state, action.payload, 1)

        case BOOK_DECREASE_IN_CART:
            return updateOrder(state, action.payload, -1)

        case BOOK_DELETE_FROM_CART:
            const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload)
            return updateOrder(state, action.payload, -item.count)

        default:
            return state.shoppingCart;
    }
}

export default updateShoppingCart;