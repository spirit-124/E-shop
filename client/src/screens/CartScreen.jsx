import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Form,
  Card,
  Button,
  ListGroup,
  Image,
} from "react-bootstrap";
import { addToCart } from "../actions/cartAction";
import { useParams, useNavigate } from "react-router-dom";

const CartScreen = ({ location }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  console.log(qty);

  return <div>CartScreen</div>;
};

export default CartScreen;
