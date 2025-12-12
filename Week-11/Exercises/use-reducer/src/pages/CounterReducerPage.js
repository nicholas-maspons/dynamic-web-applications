import {useReducer} from 'react'
import Panel from '../components/Panel'
import Button from '../components/Button'

// helps avoid typos 
const INCREMENT_COUNT = 'increment'
const DECREMENT_COUNT = 'decrement'
const SET_VALUE_TO_ADD = 'set-value-to-add'
const ADD_VALUE_TO_COUNT = 'add-value-to-count'

// will look at the current state of state
// can convention is to name the first thing is state, and the second is an action object
const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
            // bad until we use immer
            // state.count = state.count + 1
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count-1
            }
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            }
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }
        default:
            // this must always be returned as a back up plan
            return state
    }
    

    
    
}

const CounterReducerPage = () => {
  
  // we dispatch and action, that action tells us what to do inside the reducer.
  //   first arg: name of reducer function
  //  second arg: my initial state
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    valueToAdd: 0
  })
  //   same as doing useState twice
//   const [count, setCount] = useState(0)
//   const [valueToAdd, setValueToAdd] = useState(0)
  
  const handleIncrement = () => {
    // type is required
    // payload is any params or values i need to pass on. i dont always need thos
    dispatch({type: INCREMENT_COUNT})
    
  }

  const handleDecrement = () => {
    dispatch({type: DECREMENT_COUNT})
    
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // dont need a payload to pass count & valueToAdd bc both values can be accessed through state variables
    dispatch({type: ADD_VALUE_TO_COUNT})
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0
    
    // payload could be an object as well, but we only need one value so wont be used here
    // i think these are both part of payload
    dispatch({type: SET_VALUE_TO_ADD, payload: value})
}
  
  return (
    <Panel>
      <h1>Count is currently {state.count}</h1>
      <div className="flex flex-row">
        <Button success rounded onClick={handleIncrement} className="mr-4">
          Increment
        </Button>
        <Button danger rounded onClick={handleDecrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="p-1 m-4 bg-slate-50 border border-slate-300"
          type="number"
          onChange={handleChange}
          value={state.valueToAdd || ''}
        />
        <Button primary rounded>
          Add Custom Amount!
        </Button>
      </form> 
     
    </Panel>
  )
}

export default CounterReducerPage
