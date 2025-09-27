import Dropdown from './components/Dropdown'
import { useState } from 'react'

const OPTIONS = [
  {label: 'Red', value: 'red'},
  {label: 'Green', value: 'green'},
  {label: 'Blue', value: 'blue'},
]

const App = () => {
  
  // This is where we will receive the value selected from the dropdown menu. It is being tracked in the parent component (App.js)
  // This only supports the selection of one value from the dropdown options
  const [value, setValue] = useState(null)

  // 'option' will come from Dropdown.js, since this function is being passed there
  const handleChange = (option) => {
    setValue(option)
  }

  // console.log(value)

  // value will be null when it is first passed in
  return (
    <Dropdown options={OPTIONS} onChange={handleChange} value={value}/>
  )
}

export default App
