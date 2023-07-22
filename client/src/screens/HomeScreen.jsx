import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/ProductListAction";
import { Row, Col } from "react-bootstrap";
import Loader from "../components/shared/Loader";

import ProductScreen from "./ProductScreen";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, products, loading } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <h1 className=" text-success ">HOme Screen</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} md={3}>
                <ProductScreen product={product} />
              </Col>
            ))}
          </Row>
          {/* <ProductScreen /> */}
        </>
      )}
    </>
  );
};

export default HomeScreen;
