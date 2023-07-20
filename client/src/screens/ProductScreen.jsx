import { Card } from "react-bootstrap";
// import Rating from "../components/Rating";
import { Link } from "react-router-dom";

const ProductScreen = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product.id}`}>
          <Card.Img
            src="https://media.croma.com/image/upload/v1674045768/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_4_cq8ois.png"
            variant="top"
          />
        </Link>
        <Card.Body>
          <Link to={`product/${product.id}`}>
            <Card.Title as="div">
              <strong>{product.tittle}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            {/* <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            /> */}
          </Card.Text>
          <Card.Text as="div">$ {product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductScreen;
