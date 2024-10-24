import { FaShoppingCart } from "react-icons/fa";
import styles from './styles.module.css'
const { basketContainer, basketQuantity,cartIcon } = styles;
function HeaderBasket() {
  return (
    <div className={basketContainer}>
        <FaShoppingCart className={cartIcon} />
        <div className={basketQuantity}>0</div>
    </div>
  )
}

export default HeaderBasket