import PropTypes from "prop-types";

export default function Actions({ moveRight, moveLeft }) {
  return (
    <div className="actions">
      <button onClick={() => moveRight("RIGHT")} className="action-button">
        Right
      </button>
      <button onClick={() => moveLeft("LEFT")} className="action-button">
        Left
      </button>
    </div>
  );
}

Actions.propTypes = {
  moveRight: PropTypes.func,
  moveLeft: PropTypes.func,
};
