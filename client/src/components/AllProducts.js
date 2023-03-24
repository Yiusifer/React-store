import { useState } from "react";
import "./AllProducts.css";
import "./Nav.css";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function AllProducts() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <h1>All Products</h1>
      </main>
    </div>
  );
}

export default AllProducts;
