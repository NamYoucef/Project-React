import { useParams } from "react-router-dom";
import Header from "../component/Header";
import ProductItem from "../component/ProductItem";
import {product} from '../datas/data';
import useFetch from "../api/useFetch";
function ShowProd(){
    const { _id } = useParams();
    return(
        <div>
            <Header/>
            <h2>SHOW PRODUIT {_id}</h2>
            {/* <ProductItem items={product}/> */}

        </div>
    )
}
export default ShowProd;