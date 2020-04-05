import { SET_CART_ITEMS, SET_PRODUCTS, SET_KEYWORD } from "./actionsTypes";

const init = {
	products: [],
	cartItems: [],
	keyword: ""
};

const reducer = (state = init, action) => {
	switch (action.type) {
		case SET_CART_ITEMS:
			return {
				...state,
				cartItems: action.payload
			};
		case SET_PRODUCTS:
			return {
				...state,
				products: action.payload
			};
		case SET_KEYWORD:
			return {
				...state,
				keyword: action.payload
			};

		default:
			return state;
	}
};

export default reducer;
