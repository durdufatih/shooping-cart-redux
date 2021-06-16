import { items } from "../data";

const INITIAL_STATE = {
  items: items,
  cart: [],
};

export const reducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case "ADD_TO_CART":
      let existed_item = state.cart.find(
        (item) => actions.payload.id === item.id
      );
      if (existed_item) {
        state.cart.map((item) =>
          item.id === actions.payload.id ? (item.count += 1) : item
        );
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...actions.payload, count: 1 }],
        };
      }
      
    default:
      return state;
  }
};
