import { useEffect } from "react";
import { useAppDispatch,useAppSelector } from "@store/hooks"
import { Container,Row,Col } from "react-bootstrap"
import Product from "@components/eCommerce/Product/Product"
import actGetProducts from "@store/products/act/actGetProductPrivex";
import { useParams } from "react-router-dom";
function Products() {
   const Params = useParams();
   const dispatch = useAppDispatch();
   const {records,loading,error} = useAppSelector((state)=>state.products)

   useEffect(()=>{
      dispatch(actGetProducts(Params.prefix as string))
   },[dispatch])

   const products = records.length > 0 ? records.map((record)=>{
         return(
            <Col key={record.id} className="d-flex justify-content-center mb-5 mt-3">
               <Product {...record}/>
            </Col>
         )
   }):"no products"

  return (
    <Container >
    <Row sm={3}>
      {products}
    </Row>
  </Container>
  )
}

export default Products