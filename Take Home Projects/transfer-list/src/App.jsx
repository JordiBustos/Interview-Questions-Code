import "./App.css";
import List from "./components/List";
import Actions from "./components/Actions";
import { items } from "./data";
import { useState } from "react";

function App() {
  const [itemsFlagged, setItemsFlagged] = useState(
    items.map((item) => ({ value: item, position: "LEFT" }))
  );
  const [checkedItems, setCheckedItems] = useState([]);
  const leftItems = itemsFlagged.filter((item) => item.position === "LEFT");
  const rightItems = itemsFlagged.filter((item) => item.position === "RIGHT");

  function move(pos) {
    setItemsFlagged((prevItems) => {
      return prevItems.map((item) => {
        if (checkedItems.includes(item.value)) {
          return { ...item, position: pos };
        }
        return item;
      });
    });
    setCheckedItems([]);
  }

  return (
    <div className="container">
      <List
        items={leftItems}
        setCheckedItems={setCheckedItems}
        checkedItems={checkedItems}
      />
      <Actions moveRight={() => move('RIGHT')} moveLeft={() => move("LEFT")} />
      <List
        items={rightItems}
        setCheckedItems={setCheckedItems}
        checkedItems={checkedItems}
      />
    </div>
  );
}

export default App;
