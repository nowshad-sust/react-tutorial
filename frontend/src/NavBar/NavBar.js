import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import ThemeContext from "../ThemeContext";
import { setKeyword } from "../store/actions";

const NavBar = () => {
	const { dark, toggle } = useContext(ThemeContext);
	const dispatch = useDispatch();

	const handleChange = e => {
		dispatch(setKeyword(e.target.value));
	};

	return (
		<div className="nav-bar">
			<span>My Shop {dark ? "dark" : "light"}</span>
			<input placeholder="search" onChange={handleChange} />
			<button onClick={toggle}>Change Theme</button>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/checkout">Checkout</Link>
			</div>
		</div>
	);
};

export default NavBar;
