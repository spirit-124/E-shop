import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import ProductScreen from "./ProductScreen";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:8080/api/v1/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1 className=" text-success ">HOme Screen</h1>
      <Row>
        {/* console.log(produc) */}
        {products.map((product) => (
          <Col key={product._id} md={3}>
            <ProductScreen product={product} />
          </Col>
        ))}
      </Row>
      {/* <ProductScreen /> */}
    </>
  );
};

export default HomeScreen;
