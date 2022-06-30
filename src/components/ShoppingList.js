import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
// import Search from "./Search";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedName, setSearchedName] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchName(event) {
    setSearchedName(event.target.value);
  }
  // const searchResults = items.filter((item) => {
  //   return item.name.toLowerCase().includes(searchedName.toLowerCase());
  // })

  // const ShoppingList = searchResults.map((item) => (
  //   <ShoppingList key={item.id} {...item} />
  // ))

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory && item.name.toLowerCase().includes(searchedName.toLowerCase());
});

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchName} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
