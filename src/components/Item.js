import React, { useState } from "react";

function Item({ name, category, planToClickedItemIndex, isInCart, handleAddToCartClick }) {
  // const [isInCart, setIsInCart] = useState(false);

  // function handleAddToCartClick() {
  //   setIsInCart((isInCart) => !isInCart);
  // }

  function handleSelectingAddCart () {
    handleAddToCartClick(planToClickedItemIndex)
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleSelectingAddCart}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
