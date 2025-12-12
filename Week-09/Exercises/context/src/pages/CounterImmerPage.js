// call this CounterImmerPage
// also i proob wont be allowed to use this at work. the right way is the redcucer page. in the final push, connect the reducer page, and rename this

import { useReducer } from "react";
// we are still using useReducer. we are going to import a piece of the immer lib

// immer is dexeternal library that lets us be lazy idk
import {produce} from 'immer'
// we can use useReducer for the same thing once we learn it

import Panel from "../components/Panel";
import Button from "../components/Button";


// ANOTHER RECAT COMMNUITY CONVENTION | IF I WANT TO SCROLL BACK I FORTH WHEN I CHANGE A VAR NAME WHICH I WULD HAVE OT CHANGE IN MULTIPLE PLACES. dont have to do this. meant for another dev looking at my code
const INCREMENT_COUNT = 'increment'
const DECREMENT_COUNT = 'decrement'
const SET_VALUE_TO_ADD = 'set-value-to-add'
const ADD_VALUE_TO_COUNT = 'set-value-to-count'
// so now i am less liekly to make a typo since we will get the squiggly line and will even get an error if i do make a typo
// if someone is using redux, there might ba an actions type folder

// 'this useReducer stuff when we use Redux will be in. acompletely different file'?

// a;ways receives two args in this order. state is an object that keeps track of key val pairs. the second one, action..
const reducer = (state, action) => {
    // state is now an object with key value pairs as state variables
    switch(action.type) {
        // immer take care of copying all existing state first and returning that + updated values for us. it also allows us to directly mutate our state
        case INCREMENT_COUNT:
            // reeturn to exit the case, no need to return a new state object direct mutattions

            // only allowed bc of immer produce(), otherwise do nNOT moutate state
            state.count = state.count+1
            return 
        case DECREMENT_COUNT:
            state.count = state.count-1
            return 
        case SET_VALUE_TO_ADD :
            state.valueToAdd = action.payload
            return

        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueToAdd
            state.valueToAdd = 0
            return
        
        default:
            // if none of the cases are met, unknown action type
            // return existing copy of state so that we dont wipe out our state object completrely

            // not necesary bc immer.produce()
            return 
    }


    /* PREFECTLY VALID CODE BUT IT GETS LONG QUICKLY. All these lines bc its two of our cases. so we will use a switch stament above
    if (action.type === INCREMENT_COUNT) {
        // nenver say something like
        // state.count = state.count + 1

        // if there were 20 inputs, this is good
        return {
            // always copy entire state object as is first
            ...state,
            // then override/update individual key/values
            count: state.count + 1
        }
    } 
    if (action.type === SET_VALUE_TO_ADD) {
        return {
            // to save us if somehting goes wrong?
            ...state,
            valueToAdd: action.payload
        }
    }
    
    // always make sure you at least return the existing state as a default/fallback option
    // if you dont return something, you just cleared out your state object
    return state;
    */
}

// we used 2 setters in the same function. and future state has to account for current state. we checkoff all the bullets under the UseReducer section in the readme
function CounterPage({initialCount}) {
    // if we have a component that. has one or two props we need to. fill out, you might want to inline desttruct them, like how I do above
    // const {initialCount} = props;

    // create a piece of state var called count and its setter function
    // this time we are receivin a prop from the parent and setting it as the initial count
    // we only have 2 states , but if there were way more, then we use useReducer
    // const [count, setCount] = useState(initialCount)
    // const [valueToAdd, setValueToAdd] = useState(0)

    // we can name things wtvr we want, but this is the react community convention

    // by wrapping the reducer argument in useReducer with produce() from immer, we get a lot of steps for free
    // plus theONLY time im allowed direectly mutate state, since immer does the cleanup in the background 
    const [state, dispatch] = useReducer(produce(reducer), {
        // pass in our intial state as the second arg
        count: initialCount,
        valueToAdd: 0
    })

    function handleDecrement() {
        // setCount((currentCount) => currentCount - 1)
        dispatch({type: DECREMENT_COUNT})
        
    }
    function handleIncrement() {
        // arrow function, then pull out current count (the super correct way)
        // setCount((currentCount) => currentCount + 1)


        // dispatch is how we update out state object, it only ever takes one arg, an action object
        // an action object always needs a type key
        dispatch({type: INCREMENT_COUNT})
        // dispatch a type of icnrement and then look for it in te conditional and return the approiate state
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        // setCount(count + valueToAdd)
        // // reset on submit
        // setValueToAdd(0)
        dispatch({type: ADD_VALUE_TO_COUNT})
    }
    const handleChange = (event) => {
        // if the user deletes or passes nothing, turn the NaN or wtvr else it is into a 0
        const value = parseInt(event.target.value) || 0
        // console.log(value, typeof value)
        // setValueToAdd(value)

        // payload is optinal second key, which is out value var. Does it HAVE to be 'payload'?
        dispatch({type: SET_VALUE_TO_ADD , payload: value})
    }

    return (
        <Panel>
            <h1>Count is currently {state.count}</h1>
            <div className="flex flex-row">
            <Button success rounded onClick={handleIncrement} className='mr-4'>Increment</Button>
            <Button danger rounded onClick={handleDecrement}>Decrement</Button>
            </div>

            {/* forms always get an onSubmit and usually a handleSubmit */}
            <form onSubmit={handleSubmit}>
                {/* number but we will have to account for it being a string when js pulls it out */}
                {/* if valueToAdd is 0, it is false */}
                <input className="p-1 m-4 bg-slate-50 border border-slare-300" type="number" onChange={handleChange} value={state.valueToAdd || ''}/>
                 {/* we already have handleSubmit and button will  */}
                <Button primary rounded>Add to Count</Button>

            </form>

        </Panel>
    )
}

export default CounterPage;
