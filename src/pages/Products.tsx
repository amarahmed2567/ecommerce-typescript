import { Container,Row,Col } from "react-bootstrap"
import Product from "@components/eCommerce/Product/Product"
function Products() {
  return (
    <Container >
    <Row sm={3}>
      <Col className="d-flex justify-content-center mb-5 mt-3">
        <Product/>
     </Col>
     <Col className="d-flex justify-content-center mb-5 mt-3">
        <Product/>
     </Col>
     <Col className="d-flex justify-content-center mb-5 mt-3">
        <Product/>
     </Col>    
     <Col className="d-flex justify-content-center mb-5 mt-3">
        <Product/>
     </Col>
    </Row>
  </Container>
  )
}

export default Products