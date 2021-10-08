import { Button } from "./style";

export function ButtonSend({ Name }) {
    return (
        <Button >
            <button id={Name} type="submit">
                {Name}
            </button>
        </Button>
    )
}