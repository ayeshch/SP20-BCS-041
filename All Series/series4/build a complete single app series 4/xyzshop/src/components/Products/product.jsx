import axios from 'axios';
import React from 'react'
import SingleProduct from './SingleProduct';
const Product = () => {
    const [products, setProducts] = React.useState([{name:"abc",price:500}]);
    const getdata= ()=>{
        axios.get("http://localhost:4000/products")
        .then((response)=>{
            setProducts(response.data);
    })
    .catch(err=>console.log(err));
    }; 
    getdata();
    console.log("Inside Product Component");
    return ( 
        <div className="product">
            <h1>Product</h1>
            {products.length===0?(
                <p>No Product</p>
                ):(
                <div>
                {products.map((product,index)=>
                <SingleProduct product={product}/>
            )}     
                </div>)}
           
         </div>   
     );
}
 
export default Product;