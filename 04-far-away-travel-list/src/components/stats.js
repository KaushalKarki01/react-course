export default function Stats({ items }) {
  if (!items.length)
    return <p className="stats">Let's start adding items 🚀</p>;

  const itemsCount = items.length;
  const alreadyPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((alreadyPacked / itemsCount) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "Congrats you're all set to go. ✈️"
          : ` 💼 You have ${itemsCount} items on your list, and you already packed ${" "}
          ${alreadyPacked} items. (${packedPercentage} %)`}
      </em>
    </footer>
  );
}
