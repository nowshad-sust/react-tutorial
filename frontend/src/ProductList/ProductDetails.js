import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListProduct from "../ProductList/ListProduct";
import useCart from "../useCart";

const ProductDetails = () => {
	const [product, setProduct] = useState({});
	const { productId } = useParams();
	const { addCartItem } = useCart();

	const fetchProduct = id =>
		fetch("http://localhost:4000/products/" + id).then(res => res.json());

	useEffect(() => {
		(async () => {
			const results = await fetchProduct(productId);
			setProduct(results);
		})();
	}, [productId]);

	return (
		<div className="product-details">
			<ListProduct {...product} addCartItem={addCartItem} />
		</div>
	);
};

export default ProductDetails;
