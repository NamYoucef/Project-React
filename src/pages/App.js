import '../style/App.css';
import Header from '../component/Header';
import ProductList from '../component/ProductList';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import useFetch from '../api/useFetch';

 function App() {
  // const [donnee,setDonnee]=useState([]);
  // const [isPending,setIsPeding]=useState(true);
  // const title='yanis';
  // const description='yanis';
  // const userId = 'yanis';
  // const price = 10;

  //  useEffect(()=>{
  //   fetch('http://localhost:4000/api/stuff')
  //   .then(res=>res.json())
  //   .then((data)=>{
  //     setDonnee(data);
  //     setIsPeding(false);
  //   })
  // },[]);

  const {donnee,isPending} = useFetch('http://localhost:4000/api/stuff');

  return (
    <div>
      <Header/>
      {isPending && <div>Loading ...</div>}
      <ul className='app-container'>
        {donnee.map((items)=>(
          <li key={items._id}>
            <Link to={`/show-product/${items._id}`}>
              <h2>Object :{items.title}</h2>
              <h2>Prix : {items.price}</h2>
              <h2>Descritpion :{items.description}</h2>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
