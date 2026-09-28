import { useAtom } from 'jotai';
import { countAtom } from './countStore';

export default function PriceDisplay() {
    const [count] = useAtom(countAtom)

    return <p>Total price: ${count * 10}</p>;
}