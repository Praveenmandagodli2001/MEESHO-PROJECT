import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QTY, DECREMENT_QTY } from '../actions/CartActions';

const loadCartFromLocalStorage = () => {
  const cartItems = localStorage.getItem('cartItems');
  return cartItems ? JSON.parse(cartItems) : [];
};

const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

const initialState = {
  cartItems: loadCartFromLocalStorage(),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedCartAdd = [...state.cartItems, action.payload];
      saveCartToLocalStorage(updatedCartAdd);
      return {
        ...state,
        cartItems: updatedCartAdd,
      };
    case REMOVE_FROM_CART:
      const updatedCartRemove = state.cartItems.filter(item => item.id !== action.payload);
      saveCartToLocalStorage(updatedCartRemove);
      return {
        ...state,
        cartItems: updatedCartRemove,
      };
    case INCREMENT_QTY:
      const updatedCartInc = state.cartItems.map(item =>
        item.id === action.payload ? { ...item, qty: (item.qty || 1) + 1 } : item
      );
      saveCartToLocalStorage(updatedCartInc);
      return {
        ...state,
        cartItems: updatedCartInc,
      };
    case DECREMENT_QTY:
      const updatedCartDec = state.cartItems.map(item =>
        item.id === action.payload && (item.qty || 1) > 1 ? { ...item, qty: (item.qty || 1) - 1 } : item
      );
      saveCartToLocalStorage(updatedCartDec);
      return {
        ...state,
        cartItems: updatedCartDec,
      };
    default:
      return state;
  }
};

export default cartReducer;
