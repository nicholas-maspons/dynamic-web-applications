import {useState} from 'react'
import {GoChevronLeft, GoChevronRight} from 'react-icons/go' // From Github Octicons icons

import AccordianPage from './pages/AccordianPage'
import ButtonPage from './pages/ButtonPage'

/*
The Accordion.js in this project is the exact same as the one in accordion-component
The Button.js is different from the one in button-component, as it now includes the use of the spread (...) operator
*/
const App = () => {

  // 0 = AccordionPage, 1 = ButtonPage
  const [page, setPage] = useState(0);
  const pages = ['Accordion', 'Button']

  const handleLeft = () => {
    if (page > 0) {setPage(page - 1)}
  }

  const handleRight = () => {
    if (page < 1) {setPage(page + 1)}
  }

  return (
    <>
    <div className='flex justify-between items-center p-3'>
      <GoChevronLeft onClick={handleLeft} className={`text-2xl cursor-pointer ${page > 0 ? '' : 'invisible'}`}/>
      <h1>{pages[page]} Page</h1>
      <GoChevronRight onClick={handleRight} className={`text-2xl cursor-pointer ${page < pages.length - 1 ? '' : 'invisible'}`}/>
    </div>

    {page === 0 && <AccordianPage/>}
    {page === 1 && <ButtonPage/>}
    </>
  )
}

export default App
