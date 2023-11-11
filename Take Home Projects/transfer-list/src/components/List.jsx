import PropTypes from "prop-types";

export default function List({ items, setCheckedItems }) {
  function onToggleItem(item) {
    setCheckedItems((prevItems) => {
      const itemIndex = prevItems.findIndex((prevItem) => prevItem === item.item);
      console.log(itemIndex)
      if (itemIndex === -1) {
        return [...prevItems, item.item];
      }
      return prevItems.filter((prevItem) => prevItem !== item.item);
    });
  }

  function ListItem(item) {
    return (
      <li key={item.item} className="list-item">
        <input onClick={() => onToggleItem(item)} type="checkbox" />
        <span>{item.item}</span>
      </li>
    );
  }

  return <ul>{items.map(ListItem)}</ul>;
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCheckedItems: PropTypes.func,
};
