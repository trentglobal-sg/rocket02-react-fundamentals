// useState is a react "hook"
// for normal JavaScript, how we do share functions across different JS files
// - import/export - ES6 modules (React)
// - require/module.exports - CommonJS (Express)
// to share across function React components, we use hooks
// - by convention, a hook usually begins with the word `use`
import { useState } from "react";

export default function Light() {
    // useState will create a state variable for a component
    // 1. useState() returns an array with two elements
    // - index 0: the current value of the state variable
    // - index 1: a function to change the state variable
    // 2. useState() takes in one parameter which is the default value
    // of the state variable. the default value is only for the FIRST render
    // subsequent renders (caused by changing the state variable) will not
    // apply the default value anymore
    const [lightOn, setLightOn] = useState(false);

    // to add event handlers, always use arrow functons
    const turnOn = () => {
        // we cannot directly mutate or change the state variable
        // we must the mutator function, returned as the second element, from useState
        setLightOn(true);
    }

    const turnOff = () => {
        setLightOn(false);
    }

    return (
        <>
            <div style={{
                width: "50px",
                height: "50px",
                backgroundColor: lightOn ? "yellow" : "black"
            }}>
            </div>
            <button onClick={turnOn}>On</button>
            <button onClick={turnOff}>Off</button>
        </>)

}