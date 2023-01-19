import React from "react";
// import { button } from 'bootstrap';
import "./product.css";
//import Count from "./Count";
const Product = ({title,price,onAddToCart,Count}) => {
   // let title = props.title;
    let priceClass= price > 500 ? "green" : "orange";
    
    return (  
        <div>
            <h1> Product</h1>
           
            <h2 style={{backgroundColor: "red" }}>{title}</h2>
            {Count}
            <div className="green">
            <b>price: </b> {price}
            <button onClick={()=>{
                onAddToCart(title);
            }}>Add to Cart</button>
            </div>
            <hr/>
        </div>
    
    
    );
}
 
export default Product;