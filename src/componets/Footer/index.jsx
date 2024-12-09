import classes from "./index.module.css"
import React from "react"
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube} from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className={classes.company}>
                <h3>COMPANY</h3>
                <ul>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>
            <div className={classes.account}>
                <h3>ACCOUNT</h3>
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Order</a></li>
                    <li><a href="#">Favorit</a></li>
                    <li><a href="#">Basket</a></li>
                </ul>
            </div>
            <div className={classes.follow}>
                <h3>FOLLOW US</h3>
                <ul>
                    <li><a href="#"><FaGithub className={classes.icon} /></a></li>
                    <li><a href="#"><FaLinkedin className={classes.icon} /></a></li>
                    <li><a href="#"><FaYoutube className={classes.icon} /></a></li>
                    <li><a href="#"><FaInstagram className={classes.icon} /></a></li>
                </ul>
            </div>
            <div className={classes.logo}>
                <img src="logo.png" alt="" width="300px" />
            </div>
        </footer>
    )
}

export default Footer