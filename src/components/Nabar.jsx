import React from "react";
import { Component } from "react";
import { MenuItem } from "./MenuItem";
import "./Navbar.css"
import { Link } from "react-router-dom";

class Navbar extends Component {

    state = { clicked: false };
    handelClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }


    render() {
        return (
            <nav className="navbar">
                <a href="" className="navbar_logo">
                    Arif
                </a>
                <div className="menu_icons" onClick={this.handelClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "menu active" : "menu"}>
                    {MenuItem.map((item, index) => {
                        const { title, url, cName, icon } = item;
                        console.log(item);
                        return (

                            <li key={index}>
                                <Link to={url} className={cName}>
                                    <i className={icon}></i>
                                    {title}
                                </Link>
                            </li>
                        );
                    })}
                    <button className="btn btn-primary ">Sign Up</button>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
