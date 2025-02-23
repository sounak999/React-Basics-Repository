import { useState } from "react";

const EventHandling = () => {
    const [count, setCount] = useState(0)

    function updateCount() {
        setCount(count + 1)
    }

    function resetCount() {
        setCount(0)
    }

    return (
        <div>
            <h1>Event Handling example</h1>
            <h2>Count: {count}</h2>
            <button onClick={updateCount()}>Increment</button>
            <button onClick={resetCount()}>Reset</button>
        </div>
    )
}

export default EventHandling