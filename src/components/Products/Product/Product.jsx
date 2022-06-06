import React from "react";
import {axios} from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Product = () => {
  // Note: this id should come from api

  const [data, setData] = useState([]);

  useEffect(()=>{
    const set =async ()=>{
      let r = await axios.get("http://localhost:8080/products")

      // console.log(result);
      setData(r);
    }

    set();
  }, [])

  const product = { id: 1 };

  return (

    data.map((data)=>(
    <div data-cy={`product-${data.id}`}>
      <h3 data-cy="product-name">{data.name}</h3>
      <h6 data-cy="product-description">{data.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add to Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
    ))
  );
};

export default Product;
