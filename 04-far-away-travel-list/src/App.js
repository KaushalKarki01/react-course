import { useState } from "react";
import Form from "./components/form";
import Logo from "./components/logo";
import PackingList from "./components/packing-list";
import Stats from "./components/stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete items permanently?"
    );
    if (confirmed) return setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdd={handleAddItems} />
      <PackingList
        items={items}
        onDelete={handleDeleteItems}
        onToggleItem={handleUpdateItems}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
