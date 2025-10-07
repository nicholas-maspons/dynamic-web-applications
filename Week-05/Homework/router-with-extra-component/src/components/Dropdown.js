import {useState, useEffect, useRef} from 'react'
import {GoChevronDown} from 'react-icons/go'
import Panel from './Panel'

const Dropdown = (props) => {

  const {options, onChange, value} = props

  const [isOpen, setIsOpen] = useState(false)

  // I want to close the dropdown menu just by clicking off of it, instead of only being able to by clicking it again. So that's what this useEffect is for
  // Runs once on mount to add event listener
  const divEl = useRef()

  useEffect(() => {
    const handler = (event) => {
      // check that divEl.current exists before AND that it does not contain the event target (mouse click location)
      if (divEl.current && !divEl.current.contains(event.target)) {
        setIsOpen(false)
        console.log('clicked outside dropdown')
      }
    }

    // This is for clicks OUTSIDE our dropdown component because of the conditional check above
    document.addEventListener('click', handler)

    return () => {document.removeEventListener('click', handler)} // cleanup function
  }, [])

const handleClick = () => {setIsOpen(!isOpen)}

const handleOptionClick = (option) => {
  setIsOpen(false) // When a value is selected, close menu. This is typical of dropdowns
  onChange(option) // Using a function defined by the parent component that was then passed in as a prop
}

  // Using index as the key is not ideal. But it works here since there is no insertions, deletions, etc going on.
    const renderedOptions = options.map((option, index) => {
      return (
        // If I want to pass a function that takes an argument, () is needed, but that calls it immediately instead of passing a reference. To avoid this and have the function execute onClick only, wrap it in an arrow function.
        <div onClick={() => {handleOptionClick(option)}} key={index} className="hover:bg-sky-100 rounded cursor-pointer p-1">
          {option.label}
        </div>
      )})
  
    return (
      // React doesnt render objects, but data from objects instead. If I type value instead of value.label, an error happens
      // Also, .label is used instead of .value because it is uppercase and would look nicer
      // I don't do value?.label because it is already confirmed that value is not null since value evaluated to true
      <div className="w-48 relative" ref={divEl}>
        <Panel onClick={handleClick} className="flex justify-between items-center cursor-pointer">
          <span>{value ? value.label : "Select"}</span>
          <GoChevronDown/>
        </Panel>
        {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
      </div>
    )
  }

export default Dropdown
  