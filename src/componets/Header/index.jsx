import classes from "./index.module.css"
import React from "react"
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <header className={classes.header}>
            <a href="#" className={classes.logo}><img src="logo.png" alt="logo" width="100%" /></a>
            <nav className={classes.nav}>
                <a id="a" href="#">Product</a>
                <a id="a" href="#">Shop</a>
                <a href="#">Contact Us</a>
                <a href="#">About Us</a>
            </nav>
            <div>
                <FaUser className={classes.icon} />
                <FaShoppingCart className={classes.icon} />
                <FaSearch className={classes.icon} />
            </div>
        </header>
    )
}

export default Header