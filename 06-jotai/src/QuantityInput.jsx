
import useCounter from "./useCounter";

export default function QuantityInput() {
  const {count, updateCount} = useCounter();

  return (
    <div>
      <label htmlFor="quantity">Enter quantity: </label>
      <input
        id="quantity"
        type="text"
        value={count}
        onChange={(event) => updateCount(event.target.value)}
      />
    </div>
  );
}