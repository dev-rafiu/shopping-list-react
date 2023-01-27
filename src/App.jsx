import { useState, useRef } from "react";

import List from "./components/List";

function App() {
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = inputRef.current;
    if (!value) return;
    setItems((prevItems) => {
      return [...prevItems, value];
    });
    inputRef.current.value = "";
  };

  const handleDelete = (itemToDelete) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item != itemToDelete);
    });
  };

  return (
    <main>
      <div className="container">
        <h2>Shopping List</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              ref={inputRef}
              type="text"
              name=""
              id=""
              placeholder="eg... buy vegetables"
            />
          </div>
          <button type="submit">Add</button>
        </form>
        <List items={items} onDelete={handleDelete} />
      </div>
    </main>
  );
}

export default App;
