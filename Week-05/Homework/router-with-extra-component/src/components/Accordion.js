import {useState} from 'react'
import {GoChevronDown, GoChevronRight} from 'react-icons/go'

const Accordion = (props) => {
  
  const {items} = props
  
  const [expandedIndex, setExpandedIndex] = useState(-1)

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      // Check if the item clicked is the one that's already open. If so, just close it by returning -1 (an index that will never match an existing one in our array)
      if (currentExpandedIndex === nextIndex) {
        return -1
      } else {
        return nextIndex
      }
    })
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    // Updating the direction that the chevron points since it depends on our state
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
      </span>
    )

    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)} className="flex justify-between items-center p-3 bg-gray-100 border-b cursor-pointer">
          <span>{item.label}</span>
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    )})

  // JSX returned and rendered to the user
  return <div>{renderedItems}</div>
}

export default Accordion
