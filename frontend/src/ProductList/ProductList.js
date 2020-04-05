import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ThemeContext from "../ThemeContext";
import ListProduct from "./ListProduct";
import useCart from "../useCart";
import { setProducts } from "../store/actions";

const ProductList = () => {
	const { addCartItem } = useCart();
	const { dark } = useContext(ThemeContext);
	const { keyword, products } = useSelector(state => state);
	const dispatch = useDispatch();

	const fetchProducts = keyword =>
		fetch("http://localhost:4000/products?keyword=" + keyword).then(res =>
			res.json()
		);

	useEffect(() => {
		(async () => {
			const results = await fetchProducts(keyword);
			dispatch(setProducts(results));
		})();
	}, [dispatch, keyword]);

	return (
		<div className={`product-list ${dark ? "dark" : "light"}`}>
			{products.map(product => (
				<ListProduct {...product} key={product.id} addCartItem={addCartItem} />
			))}
		</div>
	);
};

export default ProductList;
