import React, { useState } from "react";


function Item({ name, category }) {
  const [item, setItem]= useState(false);
  function handleItem (){
    setItem((item)=>!item)
  }

  
  return (
    <li className={item ? "in-chart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={item ? "remove" : "add"} 
      onClick={handleItem}
      >Add to Cart</button>
    </li>
  );
}

export default Item;
