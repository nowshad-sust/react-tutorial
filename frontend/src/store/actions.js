import { SET_CART_ITEMS, SET_PRODUCTS, SET_KEYWORD } from "./actionsTypes";

export const setCartItems = cartItems => {
	return {
		type: SET_CART_ITEMS,
		payload: cartItems
	};
};

export const setProducts = products => {
	return {
		type: SET_PRODUCTS,
		payload: products
	};
};

export const setKeyword = keyword => {
	return {
		type: SET_KEYWORD,
		payload: keyword
	};
};
