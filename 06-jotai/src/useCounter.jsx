import { useAtom } from "jotai";
import { countAtom } from "./countStore";

export default function useCounter() {
    const [count, setCount] = useAtom(countAtom);

    const updateCount = (newCount) => {
        if (newCount === "") {
            return;
        }

        const numberValue = Number(newCount);

        if (isNaN(numberValue)) {
            return;
        }

        if (numberValue < 0) {
            return;
        }

        setCount(numberValue);
    }

    return {
        count, updateCount
    }
}