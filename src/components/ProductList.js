import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return (
    <div>
      {props.productList.map((product, index) => (
        <Product product={product} key={index} 
        incrementQuantity ={props.incrementQuantity}
        decrementQuantity={props.decrementQuantity}
        removeItem={props.removeItem}
        index = {index} />
      ))}
    </div>
  );
}
