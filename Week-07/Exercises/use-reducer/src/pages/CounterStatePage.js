import { useState } from "react";
// we can use useReducer for the same thing once we learn it

import Panel from "../components/Panel";
import Button from "../components/Button";


function CounterPage({initialCount}) {
    // if we have a component that. has one or two props we need to. fill out, you might want to inline desttruct them, like how I do above
    // const {initialCount} = props;

    // create a piece of state var called count and its setter function
    // this time we are receivin a prop from the parent and setting it as the initial count
    // we only have 2 states , but if there were way more, then we use useReducer
    const [count, setCount] = useState(initialCount)
    const [valueToAdd, setValueToAdd] = useState(0)


    function handleDecrement() {
        setCount((currentCount) => currentCount - 1)
        
    }
    function handleIncrement() {
        // arrow function, then pull out current count (the super correct way)
        setCount((currentCount) => currentCount + 1)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setCount(count + valueToAdd)
        // reset on submit
        setValueToAdd(0)
    }
    const handleChange = (event) => {
        // if the user deletes or passes nothing, turn the NaN or wtvr else it is into a 0
        const value = parseInt(event.target.value) || 0
        console.log(value, typeof value)
        setValueToAdd(value)
    }

    return (
        <Panel>
            <h1>Count is currently {count}</h1>
            <div className="flex flex-row">
            <Button success rounded onClick={handleIncrement} className='mr-4'>Increment</Button>
            <Button danger rounded onClick={handleDecrement}>Decrement</Button>
            </div>

            {/* forms always get an onSubmit and usually a handleSubmit */}
            <form onSubmit={handleSubmit}>
                {/* number but we will have to account for it being a string when js pulls it out */}
                {/* if valueToAdd is 0, it is false */}
                <input className="p-1 m-4 bg-slate-50 border border-slare-300" type="number" onChange={handleChange} value={valueToAdd || ''}/>
                 {/* we already have handleSubmit and button will  */}
                <Button primary rounded>Add to Count</Button>

            </form>

        </Panel>
    )
}

export default CounterPage;
