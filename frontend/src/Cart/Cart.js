import React, { useState, useContext } from "react";
import ThemeContext from "../ThemeContext";
import useCart from "../useCart";

const CartItem = ({ id, title, price, quantity, removeCartItem }) => {
	return (
		<div className="cart-item">
			<button onClick={() => removeCartItem(id)}>X</button>
			<div className="info">
				<span>
					{title} x {quantity}
				</span>
				<span>{price}</span>
			</div>
		</div>
	);
};

const Cart = () => {
	const { cartItems, total, removeCartItem, clearCart } = useCart();
	const [checkoutOpen, setCheckoutOpen] = useState(false);
	const [address, setAddress] = useState("");
	const { dark } = useContext(ThemeContext);

	const toggleCheckout = () => {
		setCheckoutOpen(status => !status);
	};

	const handleChange = e => {
		setAddress(e.target.value);
	};

	return (
		<div className={`cart ${dark ? "dark" : "light"}`}>
			<h4>Cart Items</h4>
			<div className="cart-items">
				{cartItems.length === 0 && (
					<div className="cart-item">
						<div className="info">
							<span>Cart is empty</span>
						</div>
					</div>
				)}
				{cartItems.length !== 0 &&
					cartItems.map((item, index) => (
						<CartItem
							{...item}
							key={index}
							price={item.price * item.quantity}
							removeCartItem={removeCartItem}
						/>
					))}
				{cartItems.length !== 0 && (
					<>
						<div className="cart-item">
							<div className="info">
								<span>Total</span>
								<span>$ {total}</span>
							</div>
						</div>
						<div className="cart-item">
							<div className="info">
								<button
									style={{ color: "white", backgroundColor: "red" }}
									onClick={clearCart}
								>
									Cancel
								</button>
								<button
									style={{ color: "white", backgroundColor: "green" }}
									onClick={toggleCheckout}
								>
									{checkoutOpen ? "Hide" : "Checkout"}
								</button>
							</div>
						</div>
					</>
				)}
				{cartItems.length !== 0 && checkoutOpen && (
					<div className="cart-item">
						<div className="info">
							<span>
								<input placeholder="Address" onChange={handleChange} />
							</span>
							<button
								style={{
									color: "white",
									backgroundColor: !address ? "grey" : "green"
								}}
								disable={!address}
								onClick={clearCart}
							>
								Checkout
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
