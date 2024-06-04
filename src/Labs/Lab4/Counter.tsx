import React, { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(7);
    console.log(count);

    return (
        <div id="wd-counter-use-state" className="justify-content-start container mt-4">
            <h2>Counter: {count}</h2>
            <div className="justify-content-start">
                <button
                    className="btn btn-success me-4"
                    onClick={() => setCount(count + 1)}
                    id="wd-counter-up-click"
                >
                    Up
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => setCount(count - 1)}
                    id="wd-counter-down-click"
                >
                    Down
                </button>
                <hr/>
            </div>
        </div>
    );
}