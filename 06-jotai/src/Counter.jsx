import useCounter from './useCounter'

export default function Counter() {
    // count is the current value of the atom
    // setCount is a function that lets us change the value of the atom
    // when a component calls useAtom, it is "subscribed" to the atom
    // when the atom changes it value, the component will re-render
    // const [count, setCount] = useAtom(countAtom);

    const {count, updateCount} = useCounter();

    return (
        <div>
            <div
                style={{
                    width: "50px",
                    height: "50px",
                    border: "1px solid black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                }}
            >
                {count}
            </div>

            <button onClick={() => updateCount(count + 1)}>+</button>
            <button onClick={() => updateCount(count - 1)}>-</button>
        </div>
    );
}