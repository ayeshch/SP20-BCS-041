import React from 'react'
const SingleProduct = ({product}) => {
    return ( <div>
        <h1>{product.name}</h1>
        <h2>{product.price} </h2>
        <hr/>     
    </div> );
}
 
export default SingleProduct;