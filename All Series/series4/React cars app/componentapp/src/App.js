
import React from 'react';
import './App.css';
import Count from "./components/Count";
import Product  from './components/product';
const handelAddtoCart=(title)=>{
  alert("Add to cart Clicked for"+title);
}
function App() {
  const[count,setCount]=React.useState(5);
    //var count= 5;
    const handelIncrement=()=>{
        setCount(count+1);
    }
    const handelDecrement=()=>{
        setCount(count-1);

    }
  return (
    <div className="App">
      <h1>Components Example</h1>
      <Count count={count} handelIncrement={handelIncrement} handelDecrement={handelDecrement} />
      <Product title=" Audi" price="$600"  onAddToCart={handelAddtoCart} count={count} />
      <Product title=" civic" price="$680"/>
      <Product title= " corolla" price="$700"/>
     
    </div>
  );
}

export default App;
