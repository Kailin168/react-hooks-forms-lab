import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function newItemFromFormAdded(newItem){
    setItems([...items, newItem])
    }

  function handleAddToCartClick(planToClickedItemIndex) {
    items[planToClickedItemIndex].isInCart = !items[planToClickedItemIndex].isInCart;
    setItems([...items])
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items}  newItemFromFormAdded={newItemFromFormAdded} handleAddToCartClick={handleAddToCartClick}/>
    </div>
  );
}

export default App;
