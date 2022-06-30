import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [selectedCatergoryName, setSelectedCatergoryName] = useState("Produce")

  function handleSelectedCatergoryName(event) {
    setSelectedCatergoryName(event.target.value);
  }

  const [newItemName, setNewItemName] = useState("")

  function handleInputField(event) {
    setNewItemName(event.target.value);
  }

  function createNewItem() {
    const newItem = {
      id: uuid(),
      name: newItemName,
      category: selectedCatergoryName,
    };
    onItemFormSubmit(newItem)
    setSelectedCatergoryName("Produce")
    setNewItemName("")
  }

  return (
    <form className="NewItem" onSubmit={(e) => { e.preventDefault() }} >
      <label>
        Name:
        <input type="text" name="name" value={newItemName} onChange={handleInputField} />
      </label>

      <label>
        Category:
        <select name="category" value={selectedCatergoryName} onChange={handleSelectedCatergoryName}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button onClick={createNewItem} type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
