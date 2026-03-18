import {Link} from "react-router";
import styles from "../style/NavBar.module.css"
import logo from "../assets/PXL_20260316_170332841.MP.jpg"
import {numCart} from "../fetcher/cart.jsx";

function NavBar(){
    return(
        <div className={styles.main}>
            <Link to={"/"}> <img src={logo} alt={"logo"}/> </Link>
            <div className={styles.links}>
                <Link to={"/"}>Home</Link>
                <Link to={"/Shop"}>Shop</Link>
                {numCart() === 0 ?  (<Link to={"/ShoppingCart"}>Shopping cart</Link>) :
                         (<Link to={"/ShoppingCart"}>Shopping cart {numCart()}</Link>)
                }
            </div>
        </div>
    )
}


export default NavBar







