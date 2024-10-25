import Categorie from "@components/eCommerce/Categorie/Category"
import { Container,Row,Col } from "react-bootstrap"
import { useEffect } from "react";
import { useAppDispatch,useAppSelector } from "@store/hooks";
import actGetcatecories from "@store/categories/act/actGetcategories";

function Categories() {
const dispatch =useAppDispatch();
const {loading,records,error} = useAppSelector(state=>state.categories)

  useEffect(()=>{
    if(!records.length){
      dispatch(actGetcatecories());
    }
  },[dispatch])

  const catgorieData = records.length > 0  ? records.map((record=>{
        
    return(
          <Col key={record.id} className="d-flex justify-content-center mb-5 mt-3">
             <Categorie {...record}/>
         </Col>
    )
  })):"No Data"

  return (
    <Container >
      <Row >
        {catgorieData}
      </Row>
    </Container>
  )
}

export default Categories