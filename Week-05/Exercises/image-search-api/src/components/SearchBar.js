import {useState} from 'react'

// We are gonna do input binding here, which is when the component state is tied to user input
const SearchBar = (props) => {

    const {onSubmit} = props;
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault() // block page refresh when user clicks enter
        onSubmit(term)
    }

    // This prints every time I type a single character, meaning the component is rerendering each time
    // console.log('hi')

    /*
    Update state value here
    We are targeting an input, which is from the event in which the user types in the input field
    */
    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    return (
        /*
        For each input to be properly bound, it needs an onChange and value property.
        onChange is called every time the user changes the input, so for a text input, that's every key press.
        The value needs to be tied to a piece of local state.
        In a form with multiple inputs, each input needs its own state and handler to track its value.
        In the multiple input case, event.target.value is enough to know where the value came from, but which state variable it's tied to is still unknown,
        so one approach is having them share the same function (handleChange in this example), but have conditionals inside it.
        */
        <div>
            {/* Wrapping input fields in a <form> gives us some free default browser behaviors such as submitting when clicking enter */}
            <form onSubmit={handleFormSubmit}>
                <input type='text' onChange={handleChange} value={term}/>
            </form>
        </div>
    )
}

export default SearchBar