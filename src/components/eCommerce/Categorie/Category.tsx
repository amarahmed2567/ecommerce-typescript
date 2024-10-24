import { Link } from "react-router-dom";
import {TCategory} from "@customTypes/category"
import styles from "./styles.module.css"

const {category,categoryImg,categoryTitle} = styles


function Categorie({prefix ,img,title}:TCategory) {
  

  return (
    <div className={category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={categoryImg}>
            <img src={img} alt={title} />
        </div>
        <h2 className={categoryTitle}>{title}</h2>
    </Link>
    </div>
  )
}

export default Categorie