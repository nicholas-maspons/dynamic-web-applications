import {useState, useEffect} from 'react'
import {GoChevronDown} from 'react-icons/go'
import Panel from './Panel'

const Dropdown = (props) => {
  const {options, onChange, value} = props
  const [isOpen, setIsOpen] = useState(false)

  // like useState. its also a named export. Takes 2 arguments
  // 1. the function you want to call (always a function)
  // 2. an array od props, state, any js variables available to this component to watch
  // useEffect fires when the component mounts (the first time it renders on the creen. aka initial render)
  // if anything is in the second array, these are js vars, aka state, variables, props
  // these are items we are watching. if one of thosee variables changes, useEffect will fire the function from the first argument again

  // this is great for api calls or adding event listeners the old fashioned way
  // the one we are using, seen below
  // const useEffect(() => {}, [])

  // fire on mount, and everytime the calue of stateVar changes
  // const useEffect((myFunction) => {}, [stateVar])

  // if no second argument, it will fire everytime the cmponent rerenders for any reason
  // const useEffect(() => {})

  // fire once on mount to add event listener, 
  // if the funcrion in the first arg returns another function
  // that gets fred when the component is destroyed
  // this is a cleanup function
  // const useEffect(() => {
  //   // we get this 'event' for free,?
  //   // define our handler
  //   // here, we are calling setIsOpen a better way
  //   const handler = (event) => {
  //     // scroll down for div el and useRef example
  //     if (!divEl.current.contains(event.target)) {
  //       setIsOpen(false)
  //     }
  //   }
  //   // define our listener. Note: 3rd arg
  //   document.addEventListener('click', handler, true)
  //   // when we return a fcuntin, called a cleanup callback on destroy
  //   return () => {
  //     // removing the event lsitener above
  //     document.removeEventListener('click', handler)
  //   }
  // }, [])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    // need some other function defined by the
    // parent component passed in as a prop to call here
    onChange(option)
  }

  const renderedOptions = options.map((opt, index) => {
    return (
      <div
        onClick={() => handleOptionClick(opt)}
        key={index}
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
      >
        {opt.label}
      </div>
    )
  })

  return (
    <div className="w-48 relative">
      <Panel
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer"
      >
        {/* if value exists (aka not null or undefined) find the value key within{{value?.value} */
        /* great use of a ternary */}
        {value ? value.label : 'Select...'} <GoChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  )
}
/* moved to own file
const Panel = (props) => {
  const {className, children, ...rest} = props
  const finalClassNames = cx(
    className,
    'border rounded p-3 shadow bg-white w-full'
  )
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  )
}

// named export
export {Panel}
*/
// default export (usually the file name should give you a hint about what to be the default export)
export default Dropdown
