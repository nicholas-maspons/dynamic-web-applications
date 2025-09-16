import { useState } from "react";  // named export of a function called useState

import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0);

    function handleMinus() {
        if (count > 0) {setCount(count - 1);}
    }

    function handlePlus() {
        setCount(count + 1);
    }

    return (
        <div className="counter">
            <h2>{count}</h2>
            <div className="button_container">
                <button onClick={handleMinus}>-</button>
                <button onClick={handlePlus}>+</button>

                {/* 
                Does same exact thing as the + button above. Less lines of code needed but messy if I add more logic
                <button onClick={() => setCount(count+1)}>+</button>
                */}
            </div>
        </div>
    )

}

export default Counter;
