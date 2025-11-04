import React, { useState } from "react";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  return (
    <div>
      {selectedId === null ? (
        <ItemList onSelect={handleSelect} />
      ) : (
        <ItemDetail id={selectedId} onBack={() => setSelectedId(null)} />
      )}
    </div>
  );
}

export default App;

