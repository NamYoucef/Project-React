import '../style/ProductItem.css'

function ProductItem(props){
    const items=props.items;
    return(
        <div className="listcontainer">
                {items.map((item)=>(
                    <div className='itemcontainer' key={item.id}>
                        {item.nom}
                        {item.prenom}
                        {item.mail}
                        {item.salaire}
                        {item.age}
                    </div>
                ))}
        </div>
    )


}
export default ProductItem;