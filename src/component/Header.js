import '../style/Header.css'
import { Link } from "react-router-dom";
function Header(){
    return(
        <div className="container">
            <h2>Product management</h2>
            <ul className="list">
                <li> <Link className='nav_link' to="/list-product">List produit</Link> </li>
                <li> <Link className='nav_link' to="/add-product">Ajout produit</Link></li>
            </ul>
        </div>
    )
}
export default Header;