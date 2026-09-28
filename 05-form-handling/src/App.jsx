import { useState } from "react"

export default function App() {

  const [userName, setUserName] = useState("");
  const [color, setColor] = useState("");
  const [country, setCountry] = useState("");
  const [fruits, setFruits] = useState([]);

  const updateColor = e => setColor(e.target.value);

  const updateFruits = (e) => {

    if (e.target.checked) {
      //  // 1. clone the original array
      //  const cloned = fruits.slice();
      //  // 2. modify the clone
      //  cloned.push(e.target.value);
      //  // 3. replace the original array with the modified clone
      //  setFruits(cloned);

      // see spread operator: https://onecompiler.com/javascript/454kjs85q
      const modified = [...fruits, e.target.value];
      setFruits(modified);
    } else {
      const itemToRemove = e.target.value;
      const indexToRemove = fruits.findIndex(f => f === itemToRemove);

      setFruits(fruits.toSpliced(indexToRemove, 1));
    }



  }


  return (<>
    <div>
      <label>User Name:</label>
      <input type="text" value={userName} onChange={e => {
        // e is an event object 
        // e.target is the DOM element that the change occurs on
        // in this case, e.target is the username textbox
        // so e.target.value will be the value in the textbox
        setUserName(e.target.value);
      }} />

      <div>
        <label>Favorite Color</label>
        <input type="radio" value="red" name="color" onChange={updateColor} checked={color === "red"} /><label>Red</label>
        <input type="radio" value="green" name="color" onChange={updateColor} checked={color === "green"} /><label>Green</label>
        <input type="radio" value="blue" name="color" onChange={updateColor} checked={color === "blue"} /><label>Blue</label>
      </div>
    </div>

    <div>
      <label>Country</label>
      <select onChange={e => setCountry(e.target.value)} value={country}>
        <option value="sg">Singapore</option>
        <option value="my">Malaysia</option>
        <option value="id">Indonesia</option>
      </select>
    </div>

    <div>
      <label>Fruits</label>
      <input type="checkbox" value="apples" onChange={updateFruits} checked={fruits.includes("apples")}/><label>Apples</label>
      <input type="checkbox" value="oranges" onChange={updateFruits} chcecked={fruits.includes("oranges")} /><label>Oranges</label>
      <input type="checkbox" value="durians" onChange={updateFruits} checked={fruits.includes("durians")}/><label>Durians</label>
    </div>

  </>)
}