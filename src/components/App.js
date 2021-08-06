import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [darkMode, setDarkMode] = useState(false);
  
  function appClass(){
    setDarkMode(()=> setDarkMode( (darkMode)=> !darkMode))
  }
  function HeandleClick(){
    setOn(!isOn)
  }

  // this data will be passed down to the ShoppingList as a prop
  function newItems(items){ setItems(items)};

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
 
  return (
    <div className={"App"+ (darkMode ? "Dark Mode": "Light Mode")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={appClass}></button>
      </header>
      <ShoppingList items={newItems} />
    </div>
  );
}

export default App;
