import "./App.css";
import List from "./components/List";
import Actions from "./components/Actions";
import { items } from "./data";
import { useState } from "react";

function App() {
  const [itemsFlagged, setItemsFlagged] = useState(
    items.map((item) => ({ item, position: "LEFT" }))
  );
  const [checkedItems, setCheckedItems] = useState([]); // array of checked items
  const leftItems = itemsFlagged.filter((item) => item.position === "LEFT");
  const rightItems = itemsFlagged.filter((item) => item.position === "RIGHT");

  console.log(checkedItems)

  function move(pos) {
    setItemsFlagged((prevItems) => {
      return prevItems.map((item) => {
        if (checkedItems.includes(item.item)) {
          return { ...item, position: pos };
        }
        return item;
      });
    });
    setCheckedItems([]);
  }


  return (
    <div className="container">
      <List items={leftItems} setCheckedItems={setCheckedItems} />
      <Actions moveRight={move} moveLeft={move} />
      <List items={rightItems} setCheckedItems={setCheckedItems} />
    </div>
  );
}

export default App;
