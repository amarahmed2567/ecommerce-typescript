import { Container} from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "@components/common/Header/Header";
import Footer from "@components/common/Footer/Footer";


import styles from './style.module.css'
const {container} = styles

function MainLayout () {
    return ( 
        <Container className={container}>
           <Header/>
                <div>
                    <Outlet/>
                </div>
            <Footer/>
        </Container>
        );
}

export default MainLayout ;