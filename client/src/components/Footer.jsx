import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <span>copyright &copy; VOIDCODES</span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
