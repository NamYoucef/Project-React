import { useEffect,useState } from "react";
import Header from "../component/Header";
import '../style/AddProd.css'
function AddProduct(){
    const [title,setTitle] = useState('');
    const [description,setDesription] = useState('');
    const [price,setPrice] = useState('');
    const [userId,setUserID] = useState('yanis');
    const handleSubmit = (e)=>{
        e.preventDefault();
        const thing = {title,description,userId,price};
        console.log(thing);
        fetch('http://localhost:4000/',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(thing)
        })
        .then(console.log('added object ! '))
        .catch(console.log('added object non ! '))
    }
    return(
        <div>
            <Header/>
            <form  className="formulaire" onSubmit={handleSubmit}>
                <h2>Add produit</h2>
                <label htmlFor="nom">Title: </label>
                <input type="text" id="nom" name="user-prenom" autoFocus required value={title}
                onChange={(e)=>setTitle(e.target.value)}/>

                <label htmlFor="prenom">Description: </label>
                <input type="text" id="prenom" name="user-prenom" required value={description}
                onChange={(e)=>setDesription(e.target.value)}/>
                
                <label htmlFor="age">Price :</label>
                <input type="number" id="age" required value={price}
                onChange={(e)=>setPrice(e.target.value)}/>
                <input className="boutton" type="submit" value="Envoyer"/>
            </form>
        </div>
    )
}
export default AddProduct;