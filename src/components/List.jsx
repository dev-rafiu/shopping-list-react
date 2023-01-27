import React from "react";

function List({ items, onDelete }) {
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx} className="list-item">
          <p>{item}</p>
          <button onClick={() => onDelete(item)} type="button">
            remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;
