import PropTypes from "prop-types";
import ListItem from "./ListItem";

export default function List({ items, setCheckedItems, checkedItems }) {
  function onToggleItem(item) {
    setCheckedItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (prevItem) => prevItem === item.value
      );
      if (itemIndex === -1) {
        return [...prevItems, item.value];
      }
      return prevItems.filter((prevItem) => prevItem !== item.value);
    });
  }

  return <ul>{createItemsList(items, onToggleItem, checkedItems)}</ul>;
}

function createItemsList(items, onToggleItem, checkedItems) {
  return items.map((item) => (
    <ListItem
      key={item.value}
      item={item}
      onToggleItem={onToggleItem}
      checkedItems={checkedItems}
    />
  ));
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCheckedItems: PropTypes.func,
  checkedItems: PropTypes.arrayOf(PropTypes.number),
};
