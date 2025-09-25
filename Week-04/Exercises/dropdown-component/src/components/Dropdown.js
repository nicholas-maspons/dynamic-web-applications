import {useState} from 'react'
import cx from 'classnames'
import {GoChevronDown} from 'react-icons/go'

const Dropdown = (props) => {

  // The handleChange function from the parent is now available as onChange
  const {options, onChange, value} = props
  
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {setIsOpen(!isOpen);}

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
    <div className="w-48 relative">
      <Panel onClick={handleClick} className="flex justify-between items-center cursor-pointer">
        <span>{value ? value.label : "Select"}</span>
        <GoChevronDown/>
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  )
}

const Panel = (props) => {

  const {className, children, ...rest} = props

  const finalClassNames = cx(className,'border rounded p-3 shadow bg-white w-full')

  return <div {...rest} className={finalClassNames}>{children}</div>
}

export {Panel}
export default Dropdown


