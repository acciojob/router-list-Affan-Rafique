import React from "react";

function ItemList({ onSelect }) {
  const items = [
    { id: 1, name: "Item 1", description: "Description for Item 1" },
    { id: 2, name: "Item 2", description: "Description for Item 2" },
    { id: 3, name: "Item 3", description: "Description for Item 3" },
  ];

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
    
            <a href="#" onClick={(e) => { e.preventDefault(); onSelect(item.id); }}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
