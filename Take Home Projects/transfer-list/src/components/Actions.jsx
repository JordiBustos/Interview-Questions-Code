import PropTypes from "prop-types";

export default function Actions({ moveRight, moveLeft }) {
  return (
    <div className="actions">
      <button onClick={moveRight} className="action-button">
        Right
      </button>
      <button onClick={moveLeft} className="action-button">
        Left
      </button>
    </div>
  );
}

Actions.propTypes = {
  moveRight: PropTypes.func,
  moveLeft: PropTypes.func,
};
