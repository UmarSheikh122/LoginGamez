import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
        <span className="logo">
          Lama App
        </span>
     
        <ul className="list">
          <li className="listItem">
            <img
              src="https://picsum.photos/200/300"
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">John Doe</li>
          <li className="listItem">
            Logout
          </li>
        </ul>
    </div>
    )
}

export default Navbar
