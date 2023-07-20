import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import ProductScreen from "./ProductScreen";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("https://dummyjson.com/products");
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1 className=" text-success ">HOme Screen</h1>
      <Row>
        {/* console.log(produc) */}
        {products.map((product) => (
          <Col key={product.id} md={3}>
            <ProductScreen product={product} />
          </Col>
        ))}
      </Row>
      {/* <ProductScreen /> */}
    </>
  );
};

export default HomeScreen;
