import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

function Nav() {

    return (
        
        <nav className="nav">
          <Link to="/"className="nav-item">Home</Link>
          <Link to="/all_products"className="nav-item">Our Products</Link>
          <Link to="/about"className="nav-item">About Us</Link>
          <Link to="/leave_review"className="nav-item">Leave a Review</Link>
        </nav>

    );
  }

  export default Nav;