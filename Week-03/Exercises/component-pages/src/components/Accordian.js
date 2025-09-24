import {useState} from 'react'
import {GoChevronDown, GoChevronRight} from 'react-icons/go' // From Github Octicons icons

const DUMMYDATA = {
    id: '1',
    label: 'When was Nicholas born?',
    content:
      'December 16, 2004',
}

const Accordion = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded)
    }

    const icon = isExpanded ? <GoChevronDown/> : <GoChevronRight/>

    // && returns the first falsy value or the last value if everything is truthy
    return (
        <div key={DUMMYDATA.id}>
            <div onClick={handleClick} className='flex justify-between items-center p-3 bg-gray-100 border-b'>
                <span>{DUMMYDATA.label}</span>
                <span className='text-2xl cursor-pointer'>{icon}</span>
            </div>
            {isExpanded && <div className='border-b p-5'>{DUMMYDATA.content}</div>}
        </div>
    )
}

export default Accordion
