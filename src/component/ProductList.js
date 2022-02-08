import '../style/ProductList.css';
import {product} from '../datas/data';
import { Link } from 'react-router-dom';
function ProductList(){
    return(
        <div className='container1'>
            <table className="listprod">
                <tr className='titre'>
                    <th>N°</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Mail</th>
                    <th>Action</th>
                </tr>
                {product.map((prod)=>(
                    <tr className="elements" key={prod.id}>
                            <td>
                                {prod.id}
                            </td>
                            <td>
                                {prod.nom}
                            </td>
                            <td>
                                {prod.prenom}
                            </td>
                            <td>
                                {prod.mail}
                            </td>
                            <td><Link to='/show-product'>Voir</Link></td>
                    </tr>

                ))}

                
            </table>
        </div>
    )
}
export default ProductList;