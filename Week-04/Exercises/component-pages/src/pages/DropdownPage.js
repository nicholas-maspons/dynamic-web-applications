import React from 'react'
import {useState} from 'react'
import Dropdown from '../components/Dropdown'

const OPTIONS = [
  {label: 'Red', value: 'red'},
  {label: 'Green', value: 'green'},
  {label: 'Blue', value: 'blue'},
]

const COLOR_MAP = {
  // Will be used when a user's 'team' value is 'red', set the background to red
  red: 'bg-red-500',
  green: 'bg-green-400',
  blue: 'bg-blue-500'
}

const DATA_TO_FILTER = [
  {id:1, name: 'Katie', team: 'red'},
  {id:2, name: 'Tony', team: 'green'},
  {id:3, name: 'Amy', team: 'blue'},
  {id:4, name: 'Andy', team: 'red'},
  {id:5, name: 'Pete', team: 'green'}
]

const DropdownPage = () => {

  // This is where we will receive the value selected from the dropdown menu. It is being tracked in the parent component (App.js)
  // This only supports the selection of one value from the dropdown options
  const [value, setValue] = useState(null)

  // 'option' will come from Dropdown.js, since this function is being passed there
  const handleChange = (option) => {
    setValue(option)
  }

  // It has all of the people initially, but will be updated once filtered, which is why I use 'let'
  let filteredData = DATA_TO_FILTER;
  // console.log(filteredData)

  // Executes when the user has selected an option from the dropdown
  if (value?.value) {
    // Filter our array by the selected value
    filteredData = DATA_TO_FILTER.filter(
      // Note that filteredData is a shallow copy
      // In order for this student to be in my new array (filteredData), the following must be true
      (student) => {return student.team === value.value}
    )
  }
  // console.log(filteredData)
  
  // value will be null when it is first passed in
  return (
    <div>
      <Dropdown options={OPTIONS} onChange={handleChange} value={value}/>
      
      <h2 className={COLOR_MAP[value?.value]}>{value ? `Students from ${value?.label} team:` : "Students from all teams:"}</h2>
      {filteredData.map((student) => {
        return <p key={student.id}>{student.name}</p>})
      }
    </div>
  )
}

export default DropdownPage
