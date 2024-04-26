import React, { useEffect, useState } from "react"

const ViewProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products',{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`

            }
        });
        result = await result.json();
        setProducts(result);

    }
    

    const searchHandle=async(e)=>{
        let key=e.target.value;
        if(key){
            let result= await fetch(`http://localhost:5000/search/${key}`,{
                headers:{
                    authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
    
                }
            })
            result= await result.json();
            if(result){
                setProducts(result)
            }
        }else{
            getProducts();
        }
       
    }
   
    return (
        <div className="product-list">
            <h1>Product List </h1>
            <input className="search-product-box" type="text" placeholder="Search Product"
            onChange={searchHandle} />
            <ul className="show-heading">
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                
            </ul>

            {
               products.length>0 ? products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}  <button>add tocary</button></li>
                       {/* <li className="product-logo"><img alt='' src={shop}/></li> */}
                        
                        
                    </ul>   
                ) 
                : <h1>No Result Found</h1>
            }
        </div>
    )
}
export default ViewProduct;