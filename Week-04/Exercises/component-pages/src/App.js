import {useState} from 'react'
import {GoChevronLeft, GoChevronRight} from 'react-icons/go' // From Github Octicons icons

import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'
import DropdownPage from './pages/DropdownPage'

/*
The Accordion in this project is more complex than the Accordion seen in Week 03
The Dropdown in this project is more complex than the one seen in this week's dropdown-component
*/

const App = () => {

  // 0 = AccordionPage, 1 = ButtonPage, 2 = DropdownPage
  const [page, setPage] = useState(0);
  const pages = ['Accordion', 'Button', 'Dropdown']

  const handleLeft = () => {
    if (page > 0) {setPage(page - 1)}
  }

  const handleRight = () => {
    if (page < pages.length - 1) {setPage(page + 1)}
  }

  return (
    <>
    <div className='flex justify-between items-center p-3'>
      <GoChevronLeft onClick={handleLeft} className={`text-2xl cursor-pointer ${page > 0 ? '' : 'invisible'}`}/>
      <h1>{pages[page]} Page</h1>
      <GoChevronRight onClick={handleRight} className={`text-2xl cursor-pointer ${page < pages.length - 1 ? '' : 'invisible'}`}/>
    </div>

    {page === 0 && <AccordionPage/>}
    {page === 1 && <ButtonPage/>}
    {page === 2 && <DropdownPage/>}
    </>
  )
}

export default App
