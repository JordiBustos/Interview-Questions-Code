import PropTypes from "prop-types";

export default function ListItem({ item, onToggleItem, checkedItems }) {
  return (
    <li className="list-item">
      <input
        checked={checkedItems.includes(item.value)}
        onChange={() => onToggleItem(item)}
        type="checkbox"
      />
      <span>{item.value}</span>
    </li>
  );
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onToggleItem: PropTypes.func,
  checkedItems: PropTypes.arrayOf(PropTypes.number),
};
