// import cx from 'classnames'
// Always import libraries or named expots from that library from node modules first
import {Routes, Route} from 'react-router-dom'
// Then import your components
import Navbar from './components/Navbar'
import ButtonPage from './pages/ButtonPage'


import CounterImmerPage from './pages/CounterImmerPage'
// then your CSS and or DATA files
// import './index.css'
// data example
// import dropdownData from './data/dropdown-data'

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <div>
        <Navbar />
      </div>
      <div className="col-span-5 relative">
        <Routes>
          <Route path="/" element={<ButtonPage />} />
          
          
          
          <Route path="/counterImmer" element={<CounterImmerPage initialCount={23}/>} />
          
        </Routes>
      </div>
    </div>
  )
}

export default App
