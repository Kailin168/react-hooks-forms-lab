import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
// import Search from "./Search";

function ShoppingList({ items, newItemFromFormAdded, handleAddToCartClick }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedName, setSearchedName] = useState("")


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchName(event) {
    setSearchedName(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && item.name.toLowerCase().includes(searchedName.toLowerCase())) {
      return true;
    } else {
      return item.category === selectedCategory && item.name.toLowerCase().includes(searchedName.toLowerCase());
    }
});

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={newItemFromFormAdded}/>
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchName} 
        search={searchedName} 
        />
      <ul className="Items">
        {itemsToDisplay.map((item, index) => (
          <Item key={item.id} 
          name={item.name} 
          category={item.category} 
          planToClickedItemIndex={index} 
          isInCart={item.isInCart} 
          handleAddToCartClick={handleAddToCartClick}/>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
