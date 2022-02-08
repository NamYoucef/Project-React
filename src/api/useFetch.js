import { useEffect, useState } from 'react';

const useFetch = (url)=>{
    const [donnee,setDonnee] = useState([]);
    const [isPending,setIsPeding] = useState(true);
    const title='yanis';
    const description='yanis';
    const userId = 'yanis';
    const price = 10;
    // http://localhost:4000/api/stuff
     useEffect(()=>{
      fetch(url)  
      .then(res=>res.json())
      .then((data)=>{
        setDonnee(data);
        setIsPeding(false);
      })
    },[url]);
    return {donnee,isPending}
}
export default useFetch;