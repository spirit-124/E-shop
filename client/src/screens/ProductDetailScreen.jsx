import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductDetailScreen = ({ match }) => {
  const { product, setProduct } = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = axios.get(
        `http://localhost:8080/api/v1/products/:${match.params.id}`
      );
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <Link to={"/"}>
        <button className="btn btn-success">Go Back</button>
      </Link>
      <h1>{product.image}</h1>
    </>
  );
};

export default ProductDetailScreen;
